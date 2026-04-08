"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function CTA() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const prefersReducedMotion = useReducedMotion();
    const startState = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
    const endState = { opacity: 1, y: 0 };

    return (
        <section ref={sectionRef} className="w-full bg-linear-to-r from-slate-900 to-slate-800 py-20">
            <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                >
                    Ready to Take Your Business Digital?
                </motion.h2>

                <motion.p
                    className="mt-4 text-slate-300"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.1 }}
                >
                    Let&apos;s build a solution that saves your time, removes manual work, and helps your business grow.
                </motion.p>

                <motion.div
                    className="mt-8"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.2 }}
                >
                    <Link
                        href="/#contact"
                        className="inline-flex bg-[#047857] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#036249] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]/60"
                    >
                        Book a Free Consultation
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}