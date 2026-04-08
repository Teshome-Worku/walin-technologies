"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const contactHighlights = [
    "Response within 24 hours",
    "Free consultation call",
    "Clear scope and timeline",
];

const contactMethods = [
    { label: "Email", value: "walintech22@gmail.com" },
    { label: "Phone", value: "+251 955 800 626" },
    { label: "WhatsApp", value: "+251 955 800 626" },
];

export default function Contact() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const prefersReducedMotion = useReducedMotion();

    const startState = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
    const endState = { opacity: 1, y: 0 };

    return (
        <section id="contact" ref={sectionRef} className="w-full bg-light py-20">
            <div className="max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
                <motion.div
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">Let&apos;s Build Your Next Project</h2>
                    <p className="mt-4 text-gray-600 leading-7">
                        Share your business goal and we will recommend the fastest practical way to build it.
                        Whether you need a website, system, or mobile app, we help you move from idea to launch.
                    </p>

                    <ul className="mt-6 space-y-3">
                        {contactHighlights.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                                <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                                        <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 rounded-xl border border-gray-200 bg-light p-5">
                        <p className="text-sm font-semibold text-dark">Prefer quick contact?</p>
                        <div className="mt-3 space-y-2">
                            {contactMethods.map((method) => (
                                <p key={method.label} className="text-sm text-gray-600">
                                    <span className="font-medium text-dark">{method.label}:</span> {method.value}
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="rounded-2xl border border-gray-200 bg-light p-6 md:p-8 shadow-sm"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{
                        duration: prefersReducedMotion ? 0 : 0.55,
                        ease: "easeOut",
                        delay: prefersReducedMotion ? 0 : 0.12,
                    }}
                >
                    <h3 className="text-xl font-semibold text-dark">Book a Free Consultation</h3>
                    <p className="mt-2 text-sm text-gray-600">Tell us a few details and we will get back with the next steps.</p>

                    <form className="mt-6 space-y-4 md:space-y-5 text-left">
                        <div>
                            <label htmlFor="contact-name" className="text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                                placeholder="Your full name"
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-email" className="text-sm font-medium text-gray-700">Work Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                                placeholder="you@company.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-company" className="text-sm font-medium text-gray-700">Company (Optional)</label>
                            <input
                                id="contact-company"
                                type="text"
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                                placeholder="Your company name"
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-service" className="text-sm font-medium text-gray-700">Service Needed</label>
                            <select
                                id="contact-service"
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
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
                            <label htmlFor="contact-message" className="text-sm font-medium text-gray-700">Project Details</label>
                            <textarea
                                id="contact-message"
                                rows={4}
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
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