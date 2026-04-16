"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { createMotionPresets } from "@/lib/motion";
import heroImage from "../images/hero.jpg"; // you can change later

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();
    const presets = createMotionPresets(prefersReducedMotion ?? false);

    const textStart = presets.fadeLeft.initial;
    const textEnd = presets.fadeLeft.animate;
    const imageStart = prefersReducedMotion ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 18, scale: 0.97 };
    const imageEnd = { opacity: 1, x: 0, scale: 1 };

    return (
        <section className="w-full bg-light dark:bg-[#0f172a]" id="home">
            <div className="max-w-7xl mx-auto px-5 md:px-6 pt-24 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-8 md:gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="max-w-xl order-2 md:order-1">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight dark:text-gray-100"
                        initial={textStart}
                        animate={textEnd}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" }}
                    >
                        We Help Businesses Go Digital & Grow Faster
                    </motion.h1>

                    <motion.p
                        className="mt-5 md:mt-6 text-base text-gray-600 sm:text-lg dark:text-gray-300"
                        initial={textStart}
                        animate={textEnd}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.12 }}
                    >
                        <span className="font-semibold text-primary">
                            Walin Technologies
                        </span>{" "}
                        helps businesses move from manual work to modern digital solutions — websites, systems, and mobile apps that save time and increase growth.
                    </motion.p>

                    {/* CTA BUTTONS */}
                    <motion.div
                        className="mt-7 md:mt-8 flex flex-wrap gap-3 sm:gap-4"
                        initial={textStart}
                        animate={textEnd}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.22 }}
                    >
                        <Link href="/#contact" className="bg-primary text-white px-5 sm:px-6 py-3 rounded-lg font-semibold hover:bg-[#036249] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                            Get Started
                        </Link>

                        <Link href="/#projects" className="rounded-lg border border-primary px-5 py-3 font-semibold text-primary transition duration-400 hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:px-6 dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white">
                            View Projects
                        </Link>
                    </motion.div>

                    {/* SMALL TRUST TEXT */}
                    <motion.p
                        className="mt-5 rounded text-sm text-gray-500 md:mt-6 dark:text-gray-400"
                        initial={textStart}
                        animate={textEnd}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.3 }}
                    >
                        Helping businesses move from manual work to digital systems <span className="text-primary">•</span>  Fast delivery • Reliable solutions
                    </motion.p>
                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    className="flex justify-center order-1 md:order-2"
                    initial={imageStart}
                    animate={imageEnd}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.16 }}
                >
                    <Image
                        src={heroImage}
                        alt="Team working"
                        priority
                        className="w-full max-w-sm rounded-xl shadow-md sm:max-w-md dark:shadow-slate-900/50"
                    />
                </motion.div>

            </div>
        </section>
    );
}