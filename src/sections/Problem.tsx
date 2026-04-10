"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const problems = [
    {
        title: "Paper Records",
        description: "Writing customer or sales data on paper makes it hard to manage and easy to lose.",
    },
    {
        title: "No Tracking System",
        description: "Without digital systems, tracking performance and progress becomes difficult.",
    },
    {
        title: "Time Wasting",
        description: "Manual work takes more time and reduces efficiency in your business operations.",
    },
];

export default function Problem() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const prefersReducedMotion = useReducedMotion();
    const startState = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
    const endState = { opacity: 1, y: 0 };

    return (
        <section
            ref={sectionRef}
            className="w-full bg-linear-to-b from-slate-900 to-slate-800 py-20 dark:from-slate-950 dark:to-[#0f172a]"
        >
            <div className="max-w-5xl mx-auto px-5 md:px-6 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                >
                    Still Managing Your Business Manually?
                </motion.h2>

                <motion.p
                    className="mt-4 text-slate-300"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.08 }}
                >
                    Many businesses still rely on outdated methods that slow growth and create avoidable mistakes.
                </motion.p>

                <div className="mt-10 grid md:grid-cols-3 gap-5 md:gap-6">
                    {problems.map((problem, index) => (
                        <motion.article
                            key={problem.title}
                            className="rounded-xl border border-white/10 bg-white/5 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                            initial={startState}
                            animate={isInView ? endState : startState}
                            transition={{
                                duration: prefersReducedMotion ? 0 : 0.45,
                                ease: "easeOut",
                                delay: prefersReducedMotion ? 0 : 0.12 + index * 0.1,
                            }}
                        >
                            <h3 className="font-semibold text-lg text-white">{problem.title}</h3>
                            <p className="text-slate-300 mt-2 text-sm leading-6">{problem.description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}