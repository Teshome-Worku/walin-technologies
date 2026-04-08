"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { type ReactNode, useRef } from "react";

type Service = {
    title: string;
    description: string;
    href: string;
    icon: ReactNode;
};

const services: Service[] = [
    {
        title: "Website Development",
        description:
            "We build modern websites that represent your business online and attract more customers.",
        href: "/#contact",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                <path d="M3 6.75h18v10.5H3V6.75Z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M3 10.5h18" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8.5 19.5h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Business Management Systems",
        description:
            "Replace manual work with digital systems to manage your customers, sales, and operations efficiently.",
        href: "/#contact",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="13" y="4" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="13" y="11" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        ),
    },
    {
        title: "Mobile App Development",
        description:
            "We create mobile apps that help you connect with customers and manage your business anytime.",
        href: "/#contact",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                <rect x="7" y="2.75" width="10" height="18.5" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M10 5.75h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="12" cy="18" r="1.1" fill="currentColor" />
            </svg>
        ),
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const prefersReducedMotion = useReducedMotion();

    const startState = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 };
    const endState = { opacity: 1, y: 0 };

    return (
        <section id="services" ref={sectionRef} className="w-full bg-light py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <motion.div
                    className="text-center max-w-2xl mx-auto"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">Our Services</h2>
                    <p className="mt-4 text-gray-600">
                        We provide digital solutions that help your business run smoother and grow faster.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            className="bg-[#F5F7FA] p-6 rounded-xl border border-gray-200 transition duration-300 hover:shadow-lg hover:border-[#047857]/30 flex flex-col"
                            initial={startState}
                            animate={isInView ? endState : startState}
                            transition={{
                                duration: prefersReducedMotion ? 0 : 0.5,
                                ease: "easeOut",
                                delay: prefersReducedMotion ? 0 : 0.1 + index * 0.1,
                            }}
                        >
                            <div className="w-12 h-12 rounded-lg bg-[#047857]/10 text-[#047857] flex items-center justify-center">
                                {service.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-dark mt-4">{service.title}</h3>

                            <p className="text-gray-600 mt-3 text-sm leading-6 flex-1">{service.description}</p>

                            <Link
                                href={service.href}
                                className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#047857] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#036249] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]/60"
                            >
                                Learn More
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}