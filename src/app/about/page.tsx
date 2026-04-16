"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import founder from "../../images/founder.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const journey = [
    {
        year: "2024",
        title: "The Foundation Stage",
        description:
            "Started by solving local business pain points and learning exactly where manual operations break growth.",
    },
    {
        year: "2025",
        title: "Real-World Delivery",
        description:
            "Built practical client projects and refined a delivery process focused on clarity, speed, and measurable value.",
    },
    {
        year: "2026",
        title: "Walin Technologies Launch",
        description:
            "Formally established Walin Technologies as a startup helping businesses transition to modern digital systems.",
    },
];

const values = [
    {
        title: "Clarity",
        description: "We keep communication simple so every client always knows what is being built and why.",
    },
    {
        title: "Speed",
        description: "We move fast with discipline to deliver results without sacrificing quality and reliability.",
    },
    {
        title: "Reliability",
        description: "We build systems that clients can trust every day in real operations, not only demos.",
    },
];

export default function AboutPage() {
    const pageRef = useRef<HTMLElement | null>(null);
    const isInView = useInView(pageRef, { once: true, amount: 0.1 });
    const prefersReducedMotion = useReducedMotion();
    const startState = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 };
    const endState = { opacity: 1, y: 0 };

    return (
        <main ref={pageRef} className="min-h-screen">
            <Navbar />

            {/* SECTION 1: HERO */}
            <section className="w-full bg-linear-to-b from-slate-900 to-slate-800 py-20 md:py-24 dark:from-slate-950 dark:to-[#0f172a]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="md:order-2"
                        initial={startState}
                        animate={isInView ? endState : startState}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" }}
                    >
                        <p className="text-sm font-medium text-[#6EE7B7]">About Walin Technologies</p>
                        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                            Building Digital Systems That Help Businesses Move Faster
                        </h1>
                        <p className="mt-6 text-slate-300 leading-7">
                            Walin Technologies was founded to solve practical business challenges with simple,
                            reliable software. We help teams move from manual operations to digital workflows that
                            save time, reduce errors, and support growth.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-white font-semibold transition hover:bg-[#036249] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                            >
                                Start a Project
                            </Link>
                            <Link
                                href="/#services"
                                className="inline-flex items-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 dark:border-primary dark:text-primary"
                            >
                                View Services
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-slate-400">
                            Founder-led delivery • Clear communication • Practical results
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative flex flex-col items-center md:order-1"
                        initial={startState}
                        animate={isInView ? endState : startState}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.12 }}
                    >
                        <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-2xl" aria-hidden="true" />
                        <Image
                            src={founder}
                            alt="Teshome Worku, Founder of Walin Technologies"
                            priority
                            className="relative w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl"
                        />
                        <div className="relative mt-4 text-center">
                            <p className="text-base font-semibold text-white">Teshome Worku</p>
                            <p className="text-sm text-slate-300">Founder & CEO</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: STORY */}
            <section className="w-full bg-light py-20 dark:bg-[#0f172a]">
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div
                        className="max-w-3xl"
                        initial={startState}
                        animate={isInView ? endState : startState}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl font-bold text-dark md:text-4xl dark:text-gray-100">The Story Behind Walin</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            We started Walin Technologies with one goal: help businesses use technology in a way
                            that actually improves day-to-day operations, not just looks good in presentations.
                        </p>
                    </motion.div>

                    <div className="mt-10 grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Why We Started",
                                text: "We saw many local businesses losing time and opportunities due to manual workflows.",
                            },
                            {
                                title: "What We Believe",
                                text: "Good software should be simple to use, aligned with real operations, and built for long-term value.",
                            },
                            {
                                title: "How We Work",
                                text: "We collaborate directly with clients, define clear scope, and deliver practical milestones quickly.",
                            },
                        ].map((item, index) => (
                            <motion.article
                                key={item.title}
                                className="rounded-xl border border-gray-200 bg-light p-6 transition duration-300 hover:border-primary/30 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50"
                                initial={startState}
                                animate={isInView ? endState : startState}
                                transition={{
                                    duration: prefersReducedMotion ? 0 : 0.45,
                                    ease: "easeOut",
                                    delay: prefersReducedMotion ? 0 : 0.1 + index * 0.1,
                                }}
                            >
                                <h3 className="text-lg font-semibold text-dark dark:text-gray-100">{item.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{item.text}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: JOURNEY */}
            <section className="w-full bg-light py-20 dark:bg-[#0f172a]">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.div
                        className="mx-auto max-w-2xl text-center"
                        initial={startState}
                        animate={isInView ? endState : startState}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl font-bold text-dark md:text-4xl dark:text-gray-100">Our Journey</h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            A short timeline of how Walin Technologies evolved into a startup solving real business problems.
                        </p>
                    </motion.div>

                    <div className="mt-12 space-y-4">
                        {journey.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={startState}
                                animate={isInView ? endState : startState}
                                transition={{
                                    duration: prefersReducedMotion ? 0 : 0.45,
                                    ease: "easeOut",
                                    delay: prefersReducedMotion ? 0 : 0.1 + index * 0.1,
                                }}
                            >
                                <article className="rounded-xl border border-gray-200 bg-light p-6 transition duration-300 hover:border-primary/30 hover:shadow-lg md:p-7 dark:border-slate-700 dark:bg-slate-800/50">
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">{item.year}</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-dark dark:text-gray-100">{item.title}</h3>
                                            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{item.description}</p>
                                        </div>
                                    </div>
                                </article>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: MISSION, VISION, VALUES */}
            <section className="w-full bg-light py-20 dark:bg-[#0f172a]">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: "Our Mission",
                                text: "Help businesses transition from manual systems to efficient digital solutions that improve productivity and support growth.",
                            },
                            {
                                title: "Our Vision",
                                text: "Become a trusted technology partner for businesses seeking simple, modern, and practical digital transformation.",
                            },
                        ].map((item, index) => (
                            <motion.article
                                key={item.title}
                                className="rounded-xl border border-gray-200 bg-light p-6 transition duration-300 hover:border-primary/30 hover:shadow-lg md:p-7 dark:border-slate-700 dark:bg-slate-800/50"
                                initial={startState}
                                animate={isInView ? endState : startState}
                                transition={{
                                    duration: prefersReducedMotion ? 0 : 0.45,
                                    ease: "easeOut",
                                    delay: prefersReducedMotion ? 0 : 0.1 + index * 0.08,
                                }}
                            >
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                                        <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-dark dark:text-gray-100">{item.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{item.text}</p>
                            </motion.article>
                        ))}
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {values.map((item, index) => (
                            <motion.article
                                key={item.title}
                                className="rounded-xl border border-gray-200 bg-light p-6 transition duration-300 hover:border-primary/30 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50"
                                initial={startState}
                                animate={isInView ? endState : startState}
                                transition={{
                                    duration: prefersReducedMotion ? 0 : 0.45,
                                    ease: "easeOut",
                                    delay: prefersReducedMotion ? 0 : 0.2 + index * 0.1,
                                }}
                            >
                                <h4 className="text-base font-semibold text-dark dark:text-gray-100">{item.title}</h4>
                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{item.description}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: CLOSING CTA */}
            <section className="w-full bg-linear-to-r from-slate-900 to-slate-800 py-20 text-center dark:from-slate-950 dark:to-[#0f172a]">
                <motion.div
                    className="max-w-3xl mx-auto px-6"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Have a project in mind?</h2>
                    <p className="mt-4 text-slate-300">
                        Let's build something practical, scalable, and valuable for your business.
                    </p>
                    <div className="mt-8 flex justify-center gap-4 flex-wrap">
                        <Link
                            href="/#contact"
                            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-white font-semibold transition hover:bg-[#036249] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            href="/#projects"
                            className="inline-flex items-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 dark:border-primary dark:text-primary"
                        >
                            See Our Work
                        </Link>
                    </div>
                </motion.div>
            </section>
            <Footer />
        </main>
    );
}