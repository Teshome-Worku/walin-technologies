"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import heroImage from "../images/hero.jpg"; // you can change later

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();

    const textStart = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 };
    const textEnd = { opacity: 1, y: 0 };
    const imageStart = prefersReducedMotion ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 24, scale: 0.96 };
    const imageEnd = { opacity: 1, x: 0, scale: 1 };

    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="max-w-xl">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-dark leading-tight"
                        initial={textStart}
                        animate={textEnd}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" }}
                    >
                        We Help Businesses Go Digital & Grow Faster
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-gray-600 text-lg"
                        initial={textStart}
                        animate={textEnd}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.12 }}
                    >
                        <span className="font-semibold bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            Walin Technologies
                        </span>{" "}
                        helps businesses move from manual work to modern digital solutions — websites, systems, and mobile apps that save time and increase growth.
                    </motion.p>

                    {/* CTA BUTTONS */}
                    <motion.div
                        className="mt-8 flex gap-4"
                        initial={textStart}
                        animate={textEnd}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.22 }}
                    >
                        <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                            Get Started
                        </button>

                        <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition duration-400 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
                            View Projects
                        </button>
                    </motion.div>

                    {/* SMALL TRUST TEXT */}
                    <motion.p
                        className="mt-6 text-sm text-gray-500"
                        initial={textStart}
                        animate={textEnd}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.3 }}
                    >
                        Helping businesses move from manual work to digital systems <span className="text-green-500">•</span>  Fast delivery • Reliable solutions
                    </motion.p>
                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    className="flex justify-center"
                    initial={imageStart}
                    animate={imageEnd}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.16 }}
                >
                    <Image
                        src={heroImage}
                        alt="Team working"
                        className="w-full max-w-md rounded-xl shadow-md"
                    />
                </motion.div>

            </div>
        </section>
    );
}