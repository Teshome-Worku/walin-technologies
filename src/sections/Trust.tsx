"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpNumberProps = {
    value: number;
    duration: number;
    suffix?: string;
    startWhenVisible: boolean;
};

function CountUpNumber({ value, duration, suffix = "", startWhenVisible }: CountUpNumberProps) {
    const prefersReducedMotion = useReducedMotion();
    const [displayValue, setDisplayValue] = useState(prefersReducedMotion ? value : 0);

    useEffect(() => {
        if (prefersReducedMotion) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setDisplayValue(value);
            return;
        }

        if (!startWhenVisible) {
            return;
        }

        const controls = animate(0, value, {
            duration,
            ease: "easeOut",
            onUpdate: (latest) => {
                setDisplayValue(Math.round(latest));
            },
        });

        return () => controls.stop();
    }, [duration, prefersReducedMotion, startWhenVisible, value]);

    return (
        <span>
            {displayValue}
            {suffix}
        </span>
    );
}

export default function Trust() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
    const prefersReducedMotion = useReducedMotion();

    const cardStart = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 };
    const cardEnd = { opacity: 1, y: 0 };

    return (
        <section ref={sectionRef} className="w-full bg-light py-20">
            <div className="max-w-7xl mx-auto px-5 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                    {/* Item 1 */}
                    <motion.div
                        initial={cardStart}
                        animate={isInView ? cardEnd : cardStart}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl font-bold text-dark">
                            <CountUpNumber value={10} suffix="+" duration={1} startWhenVisible={isInView} />
                        </h2>
                        <p className="text-gray-600 mt-2 text-sm">Projects Delivered</p>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div
                        initial={cardStart}
                        animate={isInView ? cardEnd : cardStart}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.08 }}
                    >
                        <h2 className="text-3xl font-bold text-dark">
                            <CountUpNumber value={10} suffix="+" duration={1.1} startWhenVisible={isInView} />
                        </h2>
                        <p className="text-gray-600 mt-2 text-sm">Happy Clients</p>
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div
                        initial={cardStart}
                        animate={isInView ? cardEnd : cardStart}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.16 }}
                    >
                        <h2 className="text-3xl font-bold text-dark">Fast</h2>
                        <p className="text-gray-600 mt-2 text-sm">Delivery Time</p>
                    </motion.div>

                    {/* Item 4 */}
                    <motion.div
                        initial={cardStart}
                        animate={isInView ? cardEnd : cardStart}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.22 }}
                    >
                        <h2 className="text-3xl font-bold text-dark">
                            <CountUpNumber value={2024} duration={1.35} startWhenVisible={isInView} />
                        </h2>
                        <p className="text-gray-600 mt-2 text-sm">Founded</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}