"use client";

type VariantState = {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
};

export function createMotionPresets(prefersReducedMotion: boolean) {
    const duration = prefersReducedMotion ? 0 : 0.5;
    const ease = "easeOut" as const;

    const fadeUpStart: VariantState = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
    const fadeLeftStart: VariantState = prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 };
    const fadeRightStart: VariantState = prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 };
    const scaleSoftStart: VariantState = prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 };

    return {
        fadeUp: { initial: fadeUpStart, animate: { opacity: 1, y: 0 } },
        fadeLeft: { initial: fadeLeftStart, animate: { opacity: 1, x: 0 } },
        fadeRight: { initial: fadeRightStart, animate: { opacity: 1, x: 0 } },
        scaleInSoft: { initial: scaleSoftStart, animate: { opacity: 1, scale: 1 } },
        transition: { duration, ease },
        staggerContainer: {
            hidden: { opacity: 1 },
            show: {
                opacity: 1,
                transition: {
                    staggerChildren: prefersReducedMotion ? 0 : 0.1,
                    delayChildren: prefersReducedMotion ? 0 : 0.05,
                },
            },
        },
        staggerItem: {
            hidden: fadeUpStart,
            show: { opacity: 1, y: 0 },
        },
    };
}
