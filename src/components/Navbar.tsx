/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { createMotionPresets } from "@/lib/motion";
import walinLogo from "../images/logo.png";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const prefersReducedMotion = useReducedMotion();
    const presets = createMotionPresets(prefersReducedMotion ?? false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<"home" | "services" | "projects" | "contact" | "about">("home");

    useEffect(() => {
        if (!isHomePage) {
            setActiveSection("about");
            return;
        }

        const resolveActiveSection = () => {
            const services = document.getElementById("services");
            const projects = document.getElementById("projects");
            const contact = document.getElementById("contact");

            if (!services || !projects || !contact) {
                setActiveSection("home");
                return;
            }

            const navOffset = 120;
            const y = window.scrollY + navOffset;

            const servicesTop = services.offsetTop;
            const projectsTop = projects.offsetTop;
            const contactTop = contact.offsetTop;
            const pageBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 60;

            if (pageBottom || y >= contactTop) {
                setActiveSection("contact");
                return;
            }

            if (y >= projectsTop) {
                setActiveSection("projects");
                return;
            }

            if (y >= servicesTop) {
                setActiveSection("services");
                return;
            }

            setActiveSection("home");
        };

        resolveActiveSection();
        window.addEventListener("scroll", resolveActiveSection, { passive: true });
        window.addEventListener("resize", resolveActiveSection);

        return () => {
            window.removeEventListener("scroll", resolveActiveSection);
            window.removeEventListener("resize", resolveActiveSection);
        };
    }, [isHomePage]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!isMobileMenuOpen) {
            document.body.style.overflow = "";
            return;
        }

        const onEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMobileMenuOpen(false);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onEscape);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onEscape);
        };
    }, [isMobileMenuOpen]);

    const navTextClass = "text-dark dark:text-white";
    const navHoverClass = "hover:text-primary dark:hover:text-white/80";
    const activeAccentClass = "text-primary dark:text-[#6EE7B7]";
    const activeUnderlineClass = "bg-primary dark:bg-[#6EE7B7]";

    const links = useMemo(
        () =>
            [
                { id: "home", href: "/", label: "Home" },
                { id: "services", href: "/#services", label: "Services" },
                { id: "projects", href: "/#projects", label: "Projects" },
                { id: "about", href: "/about", label: "About" },
                { id: "contact", href: "/#contact", label: "Contact" },
            ] as const,
        [],
    );

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-slate-50/75 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-[#1A1F33]/78 dark:shadow-none">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
                {/* Logo */}
                <motion.div {...presets.fadeRight} transition={presets.transition}>
                    <Link
                        href={links[0].href}
                        className="group flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:focus-visible:ring-[#6EE7B7]/60"
                    >
                        <div className="rounded-md border border-slate-900/10 bg-[#1A1F33] p-1.5 shadow-sm transition group-hover:border-primary/40 dark:border-white/15 dark:bg-[#0F1425]/55 dark:shadow-none dark:group-hover:border-[#6EE7B7]/40">
                            <Image src={walinLogo} alt="Walin Technologies" width={30} height={30} />
                        </div>
                        <div className="leading-tight">
                            <p className={`text-xl font-bold tracking-tight ${navTextClass}`}>Walin Technologies</p>
                            <p className="mt-0.5 text-[11px] tracking-wide text-slate-600 dark:text-white/70">
                                Build • Grow • Digitize
                            </p>
                        </div>
                    </Link>
                </motion.div>

                {/* Navigation */}
                <nav className={`hidden items-center gap-8 text-sm font-medium md:flex ${navTextClass}`}>
                    {links.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <Link
                                key={link.id}
                                href={link.href}
                                className={`relative transition-colors ${isActive ? activeAccentClass : navHoverClass}`}
                            >
                                {link.label}
                                {isActive && (
                                    <span className={`absolute -bottom-1 left-0 h-0.5 w-full rounded-full ${activeUnderlineClass}`} />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-2 md:gap-3">
                    <ThemeToggle />

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        aria-label="Open menu"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-md text-dark transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-[#6EE7B7]/60 md:hidden"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
                            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                    </button>

                    {/* CTA Button */}
                    <motion.div className="hidden md:block" {...presets.fadeLeft} transition={presets.transition}>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#036249] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                        >
                            Book a Call
                        </Link>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-60 md:hidden"
                        role="dialog"
                        aria-modal="true"
                        initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
                        transition={presets.transition}
                    >
                        <button
                            type="button"
                            aria-label="Close menu backdrop"
                            className="absolute inset-0 bg-slate-900/40 dark:bg-[#0A0D18]/60"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.aside
                            className="fixed right-0 top-0 h-dvh w-full border-l border-slate-200 bg-white/95 p-6 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-[#11162a]/95 sm:max-w-sm"
                            initial={prefersReducedMotion ? { x: 0, opacity: 1 } : { x: 36, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={prefersReducedMotion ? { x: 0, opacity: 1 } : { x: 36, opacity: 0 }}
                            transition={presets.transition}
                        >
                            <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/10">
                                <p className="font-semibold text-dark dark:text-white">Menu</p>
                                <button
                                    type="button"
                                    aria-label="Close menu"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-dark transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-[#6EE7B7]/60"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                                        <path d="M6 6 18 18M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>

                            <nav className="mt-8 flex flex-col gap-4">
                                {links.map((link) => {
                                    const isActive = activeSection === link.id;
                                    return (
                                        <Link
                                            key={`mobile-${link.id}`}
                                            href={link.href}
                                            className={`rounded-lg px-4 py-3 text-base font-semibold transition ${isActive
                                                ? "bg-primary/10 text-primary dark:bg-white/10 dark:text-[#6EE7B7]"
                                                : "bg-slate-100/80 text-slate-800 hover:bg-slate-200/80 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                                                }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </nav>

                            <Link
                                href="/#contact"
                                className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#036249] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Book a Call
                            </Link>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
