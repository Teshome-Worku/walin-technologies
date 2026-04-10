"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const contactHighlights = [
    "Response within 24 hours",
    "Free consultation call",
    "Clear scope and timeline",
];

const contactMethods = [
    { label: "Email", value: "walintech22@gmail.com", href: "mailto:walintech22@gmail.com" },
    { label: "Phone", value: "+251 955 800 626", href: "tel:+251955800626" },
    { label: "WhatsApp", value: "+251 95 580 0626", href: "https://wa.me/251955800626" },
];

export default function Contact() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const prefersReducedMotion = useReducedMotion();

    const startState = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
    const endState = { opacity: 1, y: 0 };

    return (
        <section id="contact" ref={sectionRef} className="w-full bg-light py-20 dark:bg-[#0f172a]">
            <div className="max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
                <motion.div
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-bold text-dark md:text-4xl dark:text-gray-100">Let&apos;s Build Your Next Project</h2>
                    <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                        Share your business goal and we will recommend the fastest practical way to build it.
                        Whether you need a website, system, or mobile app, we help you move from idea to launch.
                    </p>

                    <ul className="mt-6 space-y-3">
                        {contactHighlights.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                                <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                                        <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 rounded-xl border border-gray-200 bg-light p-5 dark:border-slate-700 dark:bg-slate-800/40">
                        <p className="text-sm font-semibold text-dark dark:text-gray-100">Prefer quick contact?</p>
                        <div className="mt-3 space-y-2">
                            {contactMethods.map((method) => (
                                <p key={method.label} className="text-sm text-gray-600 dark:text-gray-300">
                                    <span className="font-medium text-dark dark:text-gray-100">{method.label}:</span>{" "}
                                    <a
                                        href={method.href}
                                        target={method.href.startsWith("http") ? "_blank" : undefined}
                                        rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                                        className="underline decoration-primary/40 underline-offset-4 transition hover:text-primary hover:decoration-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                                    >
                                        {method.value}
                                    </a>
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="rounded-2xl border border-gray-200 bg-light p-6 shadow-sm md:p-8 dark:border-slate-700 dark:bg-slate-800/50"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{
                        duration: prefersReducedMotion ? 0 : 0.55,
                        ease: "easeOut",
                        delay: prefersReducedMotion ? 0 : 0.12,
                    }}
                >
                    <h3 className="text-xl font-semibold text-dark dark:text-gray-100">Book a Free Consultation</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Tell us a few details and we will get back with the next steps.</p>

                    <form className="mt-6 space-y-4 md:space-y-5 text-left">
                        <div>
                            <label htmlFor="contact-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-slate-600 dark:bg-slate-900 dark:text-gray-100"
                                placeholder="Your full name"
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Work Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-slate-600 dark:bg-slate-900 dark:text-gray-100"
                                placeholder="you@company.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-company" className="text-sm font-medium text-gray-700 dark:text-gray-300">Company (Optional)</label>
                            <input
                                id="contact-company"
                                type="text"
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-slate-600 dark:bg-slate-900 dark:text-gray-100"
                                placeholder="Your company name"
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-service" className="text-sm font-medium text-gray-700 dark:text-gray-300">Service Needed</label>
                            <select
                                id="contact-service"
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-slate-600 dark:bg-slate-900 dark:text-gray-100"
                                defaultValue=""
                            >
                                <option value="" disabled>Select a service</option>
                                <option>Website Development</option>
                                <option>Business Management System</option>
                                <option>Mobile App Development</option>
                                <option>Not Sure Yet</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="contact-message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Details</label>
                            <textarea
                                id="contact-message"
                                rows={4}
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-slate-600 dark:bg-slate-900 dark:text-gray-100"
                                placeholder="What are you trying to build, and what timeline do you have in mind?"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-[#036249] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                        >
                            Send Project Details
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}