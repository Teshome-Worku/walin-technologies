"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createMotionPresets } from "@/lib/motion";
import Image from "next/image";
import facebook from '@/icons/facebook.png';
import telegram from '@/icons/telegram.png'
import linkedin from '@/icons/linkedin.png';
import email from '@/icons/email.png';
import upArrow from '@/icons/up-arrow.png';
import whatsapp from '@/icons/whastapp.png';
import Link from "next/link";

export default function Footer() {
    const prefersReducedMotion = useReducedMotion();
    const presets = createMotionPresets(prefersReducedMotion ?? false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    };

    return (
        <motion.footer
            className="w-full bg-gray-900 py-16 text-gray-300 dark:bg-slate-950"
            initial={presets.fadeUp.initial}
            whileInView={presets.fadeUp.animate}
            viewport={{ once: true, amount: 0.2 }}
            transition={presets.transition}
        >
            <div className="max-w-7xl mx-auto grid gap-8 px-5 text-center md:grid-cols-4 md:gap-10 md:px-6 md:text-left">

                {/* Brand */}
                <div>
                    <h3 className="text-white text-lg font-semibold">
                        Walin Technologies
                    </h3>
                    <p className="mt-3 text-sm text-gray-400 dark:text-gray-400">
                        Helping businesses move from manual work to smart digital solutions.
                    </p>
                    <div className="mt-5 flex items-center justify-center gap-5 md:justify-start ">
                        <Link href="https://wa.me/251955800626" target="_blank" aria-label="WhatsApp" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-primary/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ">
                            <Image src={whatsapp} alt="Linkedin icon" title="WhatsApp" className="hover:scale-105 transition duration-400" />

                        </ Link>
                        <Link href="https://www.linkedin.com/in/teshome-worku-017834392" target="_blank" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-primary/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                            <Image src={linkedin} alt="Linkedin icon" title="LinkedIn" className="hover:scale-105 transition duration-400" />

                        </ Link>
                        <Link href="mailto:walintech22@gmail.com" aria-label="Email" target="_blank" className="inline-flex h-8 w-8 items-center justify-center rounded-full  text-gray-300 transition hover:border-primary/40 hover:text-white focus:outline-none  focus-visible:ring-primary/60">
                            <Image src={email} alt="Email icon" title="Email" className="hover:scale-105 transition duration-400" />
                        </ Link>
                        <Link href="https://t.me/walintech22" aria-label="Telegram" target="_blank" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-primary/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ">
                            <Image src={telegram} alt="Telegram icon" title="Telegram" className="hover:scale-105 transition duration-400" />

                        </Link>
                        <Link href="https://web.facebook.com/walintech" aria-label="Facebook" target="_blank" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-primary/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                            <Image src={facebook} alt="facebook icon" title="Facebook" className="hover:scale-105 transition duration-400" />

                        </Link>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-semibold text-sm">Company</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li>
                            <Link href="#home" className="transition hover:text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#services" className="transition hover:text-white">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects" className="transition hover:text-white">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="transition hover:text-white">
                                About
                            </Link>
                        </li>
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
                        <li>
                            Email:
                            <Link className="hover:underline transition hover:text-primary" href="mailto:walintech22@gmail.com">
                                {" "}
                                walintech22@gmail.com
                            </Link>
                        </li>
                        <li>
                            Phone:
                            <Link className=" hover:underline transition hover:text-primary" href="tel:+251955800626">
                                {" "}
                                +251 955 800 626
                            </Link>
                        </li>
                        <li>Location: Adama ,Ethiopia</li>
                    </ul>
                </div>

            </div>
            <div className="mt-10 flex w-full justify-center px-5 md:px-6 md:justify-end">
                <button
                    type="button"
                    aria-label="Back to top"
                    onClick={scrollToTop}
                    className="inline-flex  cursor-pointer items-center justify-center rounded-full bg-primary/25 text-white transition hover:scale-105 hover:bg-primary/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                    <Image
                        src={upArrow}
                        alt="Back to top"
                        title="Back to Top"
                        className="h-10 w-10 opacity-90"
                    />
                </button>
            </div>

            {/* Bottom */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 dark:border-slate-800 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Walin Technologies. All rights reserved.
            </div>
        </motion.footer>
    );
}