"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import lemi from "../images/lemi.png";
import mamiFood from "../images/mami-food.png";
import urjiPhoto from "../images/urji-photo.png";
import { useRef } from "react";

const projects = [
    {
        title: "Lemi Fashion — Online Store System",
        description: "Helped a clothing business sell products online and receive orders instantly via Telegram.",
        image: lemi,
        alt: "Lemi Fashion project preview",
    },
    {
        title: "Mami Food — Food Ordering Platform",
        description: "Developed a food ordering system so customers can order online and track orders in real time.",
        image: mamiFood,
        alt: "Mami Food project preview",
    },
    {
        title: "Urji Photography — Business Website",
        description: "Built a clean website to showcase photography services and attract more clients.",
        image: urjiPhoto,
        alt: "Urji Photography project preview",
    },
];

export default function Projects() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const prefersReducedMotion = useReducedMotion();
    const startState = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
    const endState = { opacity: 1, y: 0 };

    return (
        <section id="projects" ref={sectionRef} className="w-full bg-[#F5F7FA] py-20">
            <div className="max-w-7xl mx-auto px-5 md:px-6">

                {/* Title */}
                <motion.div
                    className="text-center max-w-2xl mx-auto"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">
                        Our Work
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Here are some solutions we’ve built to help businesses grow and manage their operations.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#047857]/30 transition duration-300 cursor-pointer bg-[#F5F7FA]"
                            initial={startState}
                            animate={isInView ? endState : startState}
                            transition={{
                                duration: prefersReducedMotion ? 0 : 0.45,
                                ease: "easeOut",
                                delay: prefersReducedMotion ? 0 : 0.1 + index * 0.1,
                            }}
                        >
                            <Image src={project.image} alt={project.alt} className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
                            <div className="p-5">
                                <h3 className="font-semibold text-dark">{project.title}</h3>
                                <p className="text-gray-600 mt-2 text-sm leading-6">{project.description}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={startState}
                    animate={isInView ? endState : startState}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.25 }}
                >
                    <button className="bg-[#047857] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#036249] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]/60">
                        View All Projects
                    </button>
                </motion.div>

            </div>
        </section>
    );
}