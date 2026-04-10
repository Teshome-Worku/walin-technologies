"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { type FormEvent, useRef, useState } from "react";

const contactHighlights = [
    "Response within 24 hours",
    "Free consultation call",
    "Clear scope and timeline",
];

const contactMethods = [
    { label: "Email", value: "walintech22@gmail.com", href: "mailto:walintech22@gmail.com" },
    { label: "Phone", value: "+251 955 800 626", href: "tel:+251955800626" },
    { label: "WhatsApp", value: "+251 95 580 0626", href: "https://wa.me/251955800626" },
];

type ToastState = {
    kind: "success" | "error";
    message: string;
} | null;

export default function Contact() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const prefersReducedMotion = useReducedMotion();

    const startState = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
    const endState = { opacity: 1, y: 0 };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<ToastState>(null);
    const toastTimeoutRef = useRef<number | null>(null);

    const showToast = (kind: "success" | "error", toastMessage: string) => {
        setToast({ kind, message: toastMessage });
        if (toastTimeoutRef.current) {
            window.clearTimeout(toastTimeoutRef.current);
        }
        toastTimeoutRef.current = window.setTimeout(() => setToast(null), 3800);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isSubmitting) return;

        const payload = {
            name: name.trim(),
            email: email.trim(),
            company: company.trim() || undefined,
            service: service || undefined,
            message: message.trim(),
        };

        if (!payload.name || !payload.email || !payload.message) {
            showToast("error", "Please fill in your name, email, and project details.");
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = (await res.json()) as { success?: boolean; error?: string };

            if (res.ok && data.success) {
                showToast("success", "Message sent. We’ll get back to you soon.");
                setName("");
                setEmail("");
                setCompany("");
                setService("");
                setMessage("");
                return;
            }

            showToast("error", data.error || "We could not send your message right now. Please try again.");
        } catch {
            showToast("error", "We could not send your message right now. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" ref={sectionRef} className="w-full bg-light py-20 dark:bg-[#0f172a]">
            {toast && (
                <div className="pointer-events-none fixed left-1/2 top-4 z-70 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 sm:left-auto sm:right-6 sm:top-6 sm:w-auto sm:max-w-sm sm:translate-x-0">
                    <div
                        className={`pointer-events-auto rounded-xl border px-4 py-3 text-sm shadow-lg backdrop-blur ${toast.kind === "success"
                                ? "border-emerald-200 bg-emerald-50/95 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-100"
                                : "border-rose-200 bg-rose-50/95 text-rose-900 dark:border-rose-500/30 dark:bg-rose-500/15 dark:text-rose-100"
                            }`}
                        role="status"
                        aria-live="polite"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <p className="leading-6">{toast.message}</p>
                            <button
                                type="button"
                                onClick={() => setToast(null)}
                                className="inline-flex h-7 w-7 items-center justify-center rounded-md text-current/70 transition hover:text-current focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                                aria-label="Close notification"
                            >
                                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                                    <path d="M6 6 18 18M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
                <motion.div
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-bold text-dark md:text-4xl dark:text-gray-100">Let&apos;s Build Your Next Project</h2>
                    <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                        Share your business goal and we will recommend the fastest practical way to build it.
                        Whether you need a website, system, or mobile app, we help you move from idea to launch.
                    </p>

                    <ul className="mt-6 space-y-3">
                        {contactHighlights.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                                <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                                        <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 rounded-xl border border-gray-200 bg-light p-5 dark:border-slate-700 dark:bg-slate-800/40">
                        <p className="text-sm font-semibold text-dark dark:text-gray-100">Prefer quick contact?</p>
                        <div className="mt-3 space-y-2">
                            {contactMethods.map((method) => (
                                <p key={method.label} className="text-sm text-gray-600 dark:text-gray-300">
                                    <span className="font-medium text-dark dark:text-gray-100">{method.label}:</span>{" "}
                                    <a
                                        href={method.href}
                                        target={method.href.startsWith("http") ? "_blank" : undefined}
                                        rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                                        className="underline decoration-primary/40 underline-offset-4 transition hover:text-primary hover:decoration-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                                    >
                                        {method.value}
                                    </a>
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="rounded-2xl border border-gray-200 bg-light p-6 shadow-sm md:p-8 dark:border-slate-700 dark:bg-slate-800/50"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{
                        duration: prefersReducedMotion ? 0 : 0.55,
                        ease: "easeOut",
                        delay: prefersReducedMotion ? 0 : 0.12,
                    }}
                >
                    <h3 className="text-xl font-semibold text-dark dark:text-gray-100">Book a Free Consultation</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Tell us a few details and we will get back with the next steps.</p>

                    <form className="mt-6 space-y-4 md:space-y-5 text-left" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="contact-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={isSubmitting}
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-slate-600 dark:bg-slate-900 dark:text-gray-100"
                                placeholder="Your full name"
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Work Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isSubmitting}
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-slate-600 dark:bg-slate-900 dark:text-gray-100"
                                placeholder="you@company.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-company" className="text-sm font-medium text-gray-700 dark:text-gray-300">Company (Optional)</label>
                            <input
                                id="contact-company"
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                disabled={isSubmitting}
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-slate-600 dark:bg-slate-900 dark:text-gray-100"
                                placeholder="Your company name"
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-service" className="text-sm font-medium text-gray-700 dark:text-gray-300">Service Needed</label>
                            <select
                                id="contact-service"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                disabled={isSubmitting}
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-slate-600 dark:bg-slate-900 dark:text-gray-100"
                            >
                                <option value="" disabled>Select a service</option>
                                <option>Website Development</option>
                                <option>Business Management System</option>
                                <option>Mobile App Development</option>
                                <option>Not Sure Yet</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="contact-message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Details</label>
                            <textarea
                                id="contact-message"
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                disabled={isSubmitting}
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-slate-600 dark:bg-slate-900 dark:text-gray-100"
                                placeholder="What are you trying to build, and what timeline do you have in mind?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:bg-[#036249] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {isSubmitting ? "Sending..." : "Send Project Details"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}