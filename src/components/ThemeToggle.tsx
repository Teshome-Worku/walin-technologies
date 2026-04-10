"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function readIsDark(): boolean {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
}

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        setIsDark(readIsDark());
    }, []);

    const toggle = useCallback(() => {
        const next = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", next);
        try {
            localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
        } catch {
            /* ignore */
        }
        setIsDark(next);
    }, []);

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl   bg-white/80 text-dark transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:border-white/15 dark:bg-[#0F1425]/55 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-[#6EE7B7]/60 md:h-10 md:w-10"
        >
            {!mounted ? (
                <span className="h-5 w-5" aria-hidden />
            ) : isDark ? (
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path
                        d="M12 3v1m0 16v1M5.6 5.6l.7.7m12.1 12.1.7.7M3 12h1m16 0h1M5.6 18.4l.7-.7M18.3 5.6l-.7.7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                    />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path
                        d="M21 14.5A8.5 8.5 0 0 1 9.5 3a8.5 8.5 0 1 0 11.5 11.5Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </button>
    );
}
