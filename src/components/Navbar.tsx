"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/90 backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex flex-col">
                    <span className="text-xl font-bold text-dark tracking-tight">
                        <span className="bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            Walin Technologies
                        </span>
                    </span>
                    <span className="text-xs text-gray-500">
                        Build • Grow • Digitize
                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                    <Link href="/" className="text-primary">Home</Link>
                    <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
                    <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/#contact"
                        className="inline-flex items-center bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    >
                        Book a Call
                    </Link>
                </div>

            </div>
        </header>
    );
}