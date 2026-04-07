"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { type ReactNode, useRef } from "react";

type ProcessStep = {
    step: string;
    title: string;
    description: string;
    icon: ReactNode;
};

const processSteps: ProcessStep[] = [
    {
        step: "01",
        title: "Discover the Real Problem",
        description:
            "We understand your business process, identify bottlenecks, and define the exact problem worth solving first.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="m16 16 4.25 4.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        step: "02",
        title: "Plan a Practical Solution",
        description:
            "We design a clear solution roadmap aligned with your goals, timeline, and budget before development begins.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 9h8M8 13h5M8 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        step: "03",
        title: "Build, Launch, and Support",
        description:
            "We build and test carefully, then launch with confidence and support your team to ensure long-term results.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                <path d="M12 3v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="m8.5 6.5 3.5-3.5 3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <rect x="5" y="12" width="14" height="8.5" rx="2" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        ),
    },
];

export default function Process() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const prefersReducedMotion = useReducedMotion();

    const startState = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
    const endState = { opacity: 1, y: 0 };

    return (
        <section ref={sectionRef} className="w-full bg-white py-20">
            <div className="max-w-5xl mx-auto px-6">
                {/* Title */}
                <motion.div
                    className="text-center max-w-2xl mx-auto"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">How We Work</h2>
                    <p className="mt-4 text-gray-600">
                        Our process helps you move from business challenge to working digital solution with clarity and speed.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="mt-12">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={startState}
                            animate={isInView ? endState : startState}
                            transition={{
                                duration: prefersReducedMotion ? 0 : 0.5,
                                ease: "easeOut",
                                delay: prefersReducedMotion ? 0 : 0.1 + index * 0.12,
                            }}
                        >
                            <article className="relative rounded-2xl border border-gray-200 bg-light p-6 md:p-7 shadow-sm">
                                <div className="flex items-start gap-4 md:gap-5">
                                    <div className="shrink-0 w-11 h-11 rounded-full bg-primary text-white font-semibold text-sm flex items-center justify-center">
                                        {step.step}
                                    </div>

                                    <div className="flex-1">
                                        <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary">
                                            {step.icon}
                                        </div>
                                        <h3 className="mt-3 text-lg font-semibold text-dark">{step.title}</h3>
                                        <p className="mt-2 text-sm leading-6 text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            </article>

                            {index < processSteps.length - 1 && (
                                <div className="flex justify-center py-3 md:py-4" aria-hidden="true">
                                    <div className="h-8 md:h-10 w-0.5 bg-linear-to-b from-primary/40 to-gray-300" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}