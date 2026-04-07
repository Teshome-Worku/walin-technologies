"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { type ReactNode, useRef } from "react";

type WhyUsPoint = {
    title: string;
    description: string;
    icon: ReactNode;
};

const whyUsPoints: WhyUsPoint[] = [
    {
        title: "We Understand Real Business Bottlenecks",
        description:
            "We study how your team works today, identify what slows growth, and focus on solving the highest-impact problem first.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="m16 16 4.25 4.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Practical Solutions Your Team Can Use",
        description:
            "We build simple, reliable systems that your team can adopt quickly without unnecessary complexity.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                <path d="M4 7.5h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Direct Communication and Fast Decisions",
        description:
            "You work directly with us, so updates stay clear, feedback loops are fast, and progress never gets stuck.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6A2.5 2.5 0 0 1 16.5 15H11l-4 4v-4H7.5A2.5 2.5 0 0 1 5 12.5v-6Z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 9.5h6M9 12.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
];

export default function WhyUs() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const prefersReducedMotion = useReducedMotion();

    const startState = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
    const endState = { opacity: 1, y: 0 };

    return (
        <section ref={sectionRef} className="w-full bg-light py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <motion.div
                    className="text-center max-w-2xl mx-auto"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">Why Choose Walin Technologies?</h2>
                    <p className="mt-4 text-gray-600">
                        We solve real business problems with practical digital solutions that help you grow with confidence.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {whyUsPoints.map((point, index) => (
                        <motion.article
                            key={point.title}
                            className="bg-white p-6 rounded-xl border border-gray-200 transition duration-300 hover:shadow-lg hover:border-primary/30"
                            initial={startState}
                            animate={isInView ? endState : startState}
                            transition={{
                                duration: prefersReducedMotion ? 0 : 0.5,
                                ease: "easeOut",
                                delay: prefersReducedMotion ? 0 : 0.1 + index * 0.1,
                            }}
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                {point.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-dark mt-4">{point.title}</h3>
                            <p className="text-gray-600 mt-3 text-sm leading-6">{point.description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}