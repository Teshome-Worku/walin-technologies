"use client";

// import Image from "next/image";
import Link from "next/link";
// import logo from "../images/logo.png";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex flex-col">
                    <span className="text-xl font-bold text-dark">
                        Walin Technologies
                    </span>
                    {/* <Image className='w-10 h-10 flex justify-center align-center' src={logo} alt="Walin Technologies" /> */}
                    <span className="text-xs text-gray-500">
                        Build • Grow • Digitize
                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                    <Link href="#" className="text-primary">Home</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="/about">About</Link>
                    <Link href="#contact">Contact</Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="bg-primary text-light px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition cursor-pointer">
                        Book a Call
                    </button>
                </div>

            </div>
        </header>
    );
}