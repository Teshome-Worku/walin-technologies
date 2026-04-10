"use client";

const TEL_HREF = process.env.NEXT_PUBLIC_PHONE_TEL ?? "tel:+251955800626";

export default function CallButton() {
    return (
        <button
            type="button"
            aria-label="Call us"
            onClick={() => {
                window.location.href = TEL_HREF;
            }}
            className="fixed bottom-4 right-4 z-40 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#036249] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 sm:bottom-6 sm:right-6"
        >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" aria-hidden="true">
                <path
                    d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
            </svg>
            Call us
        </button>
    );
}
