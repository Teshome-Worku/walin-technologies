"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import walinLogo from "../images/logo.png";

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
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
                <div className="flex items-center gap-3">
                    <Image src={walinLogo} alt="Walin Technologies" width={40} height={40} />
                    <span className={`text-xl font-bold tracking-tight ${navTextClass}`}>
                        Walin Technologies
                    </span>
                </div>

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

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/#contact"
                        className="inline-flex items-center bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#036249] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    >
                        Book a Call
                    </Link>
                </div>

            </div>
        </header>
    );
}