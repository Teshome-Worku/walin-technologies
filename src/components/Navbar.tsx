/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { createMotionPresets } from "@/lib/motion";
import walinLogo from "../images/logo.png";

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const prefersReducedMotion = useReducedMotion();
    const presets = createMotionPresets(prefersReducedMotion);
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

    const navTextClass = "text-white";
    const navHoverClass = "hover:text-white/80";
    const activeAccentClass = "text-[#6EE7B7]";

    const links = useMemo(
        () => [
            { id: "home", href: "/", label: "Home" },
            { id: "services", href: "/#services", label: "Services" },
            { id: "projects", href: "/#projects", label: "Projects" },
            { id: "about", href: "/about", label: "About" },
            { id: "contact", href: "/#contact", label: "Contact" },
        ] as const,
        [],
    );

    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1A1F33]/78 backdrop-blur-md transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <motion.div {...presets.fadeRight} transition={presets.transition}>
                    <Link
                        href={links[0].href}
                        className="group flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6EE7B7]/60"
                    >
                        <div className="rounded-md border border-white/15 bg-[#0F1425]/55 p-1.5 transition group-hover:border-[#6EE7B7]/40">
                            <Image src={walinLogo} alt="Walin Technologies" width={34} height={34} />
                        </div>
                        <div className="leading-tight">
                            <p className={`text-xl font-bold tracking-tight ${navTextClass}`}>
                                Walin Technologies
                            </p>
                            <p className="mt-0.5 text-[11px] tracking-wide text-white/70">
                                Build • Grow • Digitize
                            </p>
                        </div>
                    </Link>
                </motion.div>

                {/* Navigation */}
                <nav className={`hidden md:flex items-center gap-8 text-sm font-medium ${navTextClass}`}>
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
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-[#6EE7B7]" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile menu button */}
                <button
                    type="button"
                    aria-label="Open menu"
                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6EE7B7]/60"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </button>

                {/* CTA Button */}
                <motion.div className="hidden md:block" {...presets.fadeLeft} transition={presets.transition}>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#036249] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    >
                        Book a Call
                    </Link>
                </motion.div>

            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-[60]" role="dialog" aria-modal="true">
                    <button
                        type="button"
                        aria-label="Close menu backdrop"
                        className="absolute inset-0 bg-[#0A0D18]/55"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <motion.aside
                        className="absolute right-0 top-0 h-full w-[84%] max-w-sm bg-[#1A1F33] border-l border-white/10 p-6 shadow-2xl"
                        initial={prefersReducedMotion ? { x: 0, opacity: 1 } : { x: 36, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={presets.transition}
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-white font-semibold">Menu</p>
                            <button
                                type="button"
                                aria-label="Close menu"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6EE7B7]/60"
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
                                        className={`rounded-lg px-3 py-2 text-base font-medium transition ${isActive
                                            ? "bg-white/10 text-[#6EE7B7]"
                                            : "text-white hover:bg-white/10 hover:text-white/85"}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        <Link
                            href="/#contact"
                            className="mt-8 inline-flex w-full items-center justify-center bg-[#047857] text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#036249] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]/60"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Book a Call
                        </Link>
                    </motion.aside>
                </div>
            )}
        </header>
    );
}