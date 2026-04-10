"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type Testimonial = {
    name: string;
    company: string;
    role: string;
    quote: string;
    rating: number;
    avatar: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Lemi S.",
        company: "Lemi Fashion",
        role: "Store Owner",
        quote:
            "Walin Technologies helped us take our clothing business online. The ordering flow is now simple, and our team saves hours every week.",
        rating: 5,
        avatar: "LS",
    },
    {
        name: "Mami T.",
        company: "Mami Food",
        role: "Restaurant Manager",
        quote:
            "Their food ordering system improved how we serve customers. Orders are clearer, faster to process, and we make fewer delivery mistakes.",
        rating: 5,
        avatar: "MT",
    },
    {
        name: "Urji B.",
        company: "Urji Photography",
        role: "Founder",
        quote:
            "The website made our brand look professional and helped more clients discover our work. We started getting better quality inquiries.",
        rating: 5,
        avatar: "UB",
    },
];

function StarIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d="M12 3.6 14.62 8.9l5.84.85-4.23 4.12 1 5.82L12 16.95 6.77 19.7l1-5.82L3.54 9.75l5.84-.85L12 3.6Z" />
        </svg>
    );
}

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const prefersReducedMotion = useReducedMotion();

    const startState = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
    const endState = { opacity: 1, y: 0 };

    return (
        <section ref={sectionRef} className="w-full bg-light py-20 dark:bg-[#0f172a]">
            <div className="max-w-7xl mx-auto px-5 md:px-6">
                {/* Title */}
                <motion.div
                    className="text-center max-w-2xl mx-auto"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-bold text-dark md:text-4xl dark:text-gray-100">What Our Clients Say</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">Real feedback from people we have worked with.</p>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Trusted by growing local businesses.</p>
                </motion.div>

                {/* Testimonials */}
                <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={testimonial.name}
                            className="flex flex-col rounded-xl border border-gray-200 bg-light p-6 transition duration-300 hover:border-[#047857]/30 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-primary/40"
                            initial={startState}
                            animate={isInView ? endState : startState}
                            transition={{
                                duration: prefersReducedMotion ? 0 : 0.5,
                                ease: "easeOut",
                                delay: prefersReducedMotion ? 0 : 0.1 + index * 0.1,
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-full bg-[#047857]/10 text-[#047857] font-semibold text-sm flex items-center justify-center">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold leading-tight text-dark dark:text-gray-100">{testimonial.name}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {testimonial.role} at {testimonial.company}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-1 text-amber-500" aria-label={`${testimonial.rating} out of 5 stars`}>
                                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                                    <StarIcon key={`${testimonial.name}-star-${starIndex}`} />
                                ))}
                            </div>

                            <p className="mt-4 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-300">{testimonial.quote}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}