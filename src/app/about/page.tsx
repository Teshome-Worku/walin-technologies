import Image from "next/image";
import Link from 'next/link';
import founder from "../../images/founder.jpg"; // add your image
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="bg-white text-dark">

            {/* SECTION 1: INTRO */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT - IMAGE */}
                <div className="flex justify-center">
                    <Image
                        src={founder}
                        alt="Founder"
                        className="w-full max-w-sm rounded-xl shadow-md"
                    />
                </div>

                {/* RIGHT - TEXT */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Who is Walin Technologies?
                    </h1>

                    <p className="mt-6 text-gray-600">
                        Walin Technologies is a growing software company focused on helping businesses
                        move from manual processes to modern digital solutions. We build websites,
                        systems, and applications that simplify operations and support growth.
                    </p>

                    <p className="mt-4 text-gray-600">
                        Founded by Teshome Worku, the company started with a simple vision:
                        to solve real-world business problems using technology.
                    </p>

                    {/* Founder Info */}
                    <div className="mt-6">
                        <h3 className="font-semibold">Teshome Worku</h3>
                        <p className="text-sm text-gray-500">Founder & CEO</p>
                    </div>
                </div>

            </section>

            {/* SECTION 2: TIMELINE */}
            <section className="bg-light py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    <h2 className="text-3xl font-bold">
                        Our Journey
                    </h2>

                    <div className="mt-12 space-y-8">

                        <div>
                            <h3 className="font-semibold">2024</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Started learning and exploring ideas to solve real-world problems.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">2025</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Built practical projects and gained experience working on real use cases.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">2026</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Established Walin Technologies as a startup focused on delivering digital solutions.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* SECTION 3: MISSION & VISION */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">

                    {/* Mission */}
                    <div className="border border-gray-200 p-6 rounded-xl">
                        <h3 className="font-semibold text-lg">
                            Our Mission
                        </h3>
                        <p className="mt-3 text-gray-600 text-sm">
                            To help businesses transition from manual systems to efficient digital solutions
                            that improve productivity and support growth.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="border border-gray-200 p-6 rounded-xl">
                        <h3 className="font-semibold text-lg">
                            Our Vision
                        </h3>
                        <p className="mt-3 text-gray-600 text-sm">
                            To become a trusted technology partner for businesses seeking simple,
                            effective, and modern digital solutions.
                        </p>
                    </div>

                </div>
            </section>

            {/* SECTION 4: CTA */}
            <section className="bg-light py-20 text-center">
                <h2 className="text-3xl font-bold">
                    Have a project in mind?
                </h2>
                <p className="mt-4 text-gray-600">
                    Let’s work together to build something valuable for your business.
                </p>

                <div className="mt-6">
                    <Link
                        href="/#contact"
                        className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
            <Footer />

        </main>
    );
}