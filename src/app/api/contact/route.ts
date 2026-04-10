import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
    name?: string;
    email?: string;
    company?: string;
    service?: string;
    message?: string;
};

function isValidEmail(value: string) {
    // Lightweight validation (good enough for UI + server check)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as ContactPayload;

        const name = (body.name ?? "").trim();
        const email = (body.email ?? "").trim();
        const company = (body.company ?? "").trim();
        const service = (body.service ?? "").trim();
        const message = (body.message ?? "").trim();

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
        }

        const to = process.env.CONTACT_TO_EMAIL;
        const from = process.env.RESEND_FROM_EMAIL;

        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json({ success: false, error: "Server is not configured (missing RESEND_API_KEY)." }, { status: 500 });
        }

        if (!to) {
            return NextResponse.json({ success: false, error: "Server is not configured (missing CONTACT_TO_EMAIL)." }, { status: 500 });
        }

        if (!from) {
            return NextResponse.json({ success: false, error: "Server is not configured (missing RESEND_FROM_EMAIL)." }, { status: 500 });
        }

        const subject = `New Contact Form Submission — ${name}`;

        const html = `
            <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
              <h2 style="margin:0 0 12px;">New Message</h2>
              <table style="border-collapse:collapse;">
                <tr><td style="padding:6px 10px 6px 0;"><strong>Name:</strong></td><td style="padding:6px 0;">${escapeHtml(name)}</td></tr>
                <tr><td style="padding:6px 10px 6px 0;"><strong>Email:</strong></td><td style="padding:6px 0;">${escapeHtml(email)}</td></tr>
                ${company ? `<tr><td style="padding:6px 10px 6px 0;"><strong>Company:</strong></td><td style="padding:6px 0;">${escapeHtml(company)}</td></tr>` : ""}
                ${service ? `<tr><td style="padding:6px 10px 6px 0;"><strong>Service:</strong></td><td style="padding:6px 0;">${escapeHtml(service)}</td></tr>` : ""}
              </table>
              <div style="margin-top:14px;">
                <strong>Message:</strong>
                <p style="white-space:pre-wrap; line-height:1.6; margin:8px 0 0;">${escapeHtml(message)}</p>
              </div>
            </div>
        `;

        const data = await resend.emails.send({
            from,
            to: [to],
            replyTo: email,
            subject,
            html,
        });

        if (data.error) {
            return NextResponse.json({ success: false, error: data.error.message ?? "Failed to send email." }, { status: 502 });
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
    }
}

