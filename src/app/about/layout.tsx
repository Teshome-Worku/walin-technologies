import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Walin Technologies, our mission, values, and the story behind building digital solutions for businesses.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
