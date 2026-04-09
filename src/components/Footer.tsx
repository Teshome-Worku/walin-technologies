"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createMotionPresets } from "@/lib/motion";
import Image from "next/image";
import facebook from '@/icons/facebook.png';
import telegram from '@/icons/telegram.png'
import linkedin from '@/icons/linkedin.png';
import email from '@/icons/email.png'
import Link from "next/link";

export default function Footer() {
    const prefersReducedMotion = useReducedMotion();
    const presets = createMotionPresets(prefersReducedMotion ?? false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    };

    return (
        <motion.footer
            className="w-full bg-gray-900 text-gray-300 py-16"
            initial={presets.fadeUp.initial}
            whileInView={presets.fadeUp.animate}
            viewport={{ once: true, amount: 0.2 }}
            transition={presets.transition}
        >
            <div className="max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-4 gap-8 md:gap-10">

                {/* Brand */}
                <div>
                    <h3 className="text-white text-lg font-semibold">
                        Walin Technologies
                    </h3>
                    <p className="mt-3 text-sm text-gray-400">
                        Helping businesses move from manual work to smart digital solutions.
                    </p>
                    <div className="mt-5 flex items-center gap-5 ">
                        <Link href="https://www.linkedin.com/in/teshome-worku-017834392" target="_blank" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-primary/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                            <Image src={linkedin} alt="Linkedin icon" title="Linkedin" />

                        </ Link>
                        <Link href="mailto:walintech22@gmail.com" aria-label="Email" target="_blank" className="inline-flex h-8 w-8 items-center justify-center rounded-full  text-gray-300 transition hover:border-primary/40 hover:text-white focus:outline-none  focus-visible:ring-primary/60">
                            <Image src={email} alt="Email icon" title="Email" />
                        </ Link>
                        <Link href="https://t.me/walintech22" aria-label="Telegram" target="_blank" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-primary/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ">
                            <Image src={telegram} alt="Telegram icon" title="Telegram" />

                        </Link>
                        <Link href="https://web.facebook.com/walintech" aria-label="Facebook" target="_blank" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-primary/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                            <Image src={facebook} alt="facebook icon" title="Facebook" />

                        </Link>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-semibold text-sm">Company</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><Link href="#home" className="hover:text-white">Home</Link></li>
                        <li><Link href="#services" className="hover:text-white">Services</Link></li>
                        <li><Link href="#projects" className="hover:text-white">Projects</Link></li>
                        <li><Link href="/about" className="hover:text-white">About</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-semibold text-sm">Services</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li>Website Development</li>
                        <li>Business Systems</li>
                        <li>Mobile Apps</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold text-sm">Contact</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li >Email:<Link className=" hover:text-green-600 underline" href="mailto:walintech22@gmail.com"> walintech22@gmail.com</Link></li>
                        <li>Phone:<Link href="tel:+251955800626"> +251 955 800 626</Link></li>
                        <li>Location: Adama ,Ethiopia</li>
                    </ul>
                </div>

            </div>
            <div className="mx-auto mt-10 flex max-w-7xl justify-end px-5 md:px-6">
                <button
                    type="button"
                    aria-label="Back to top"
                    onClick={scrollToTop}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/85 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                        <path
                            d="M12 5v14M12 5l-5 5M12 5l5 5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Walin Technologies. All rights reserved.
            </div>
        </motion.footer>
    );
}