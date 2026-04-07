"use client";

import Image from "next/image";
import heroImage from "../images/hero.jpg"; // you can change later

export default function Hero() {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
                        We Help Businesses Go Digital & Grow Faster
                    </h1>

                    <p className="mt-6 text-gray-600 text-lg">
                        Walin Technologies helps businesses move from manual work to modern digital solutions — websites, systems, and mobile apps that save time and increase growth.
                    </p>

                    {/* CTA BUTTONS */}
                    <div className="mt-8 flex gap-4">
                        <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer">
                            Get Started
                        </button>

                        <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition duration-400 cursor-pointer">
                            View Projects
                        </button>
                    </div>

                    {/* SMALL TRUST TEXT */}
                    <p className="mt-6 text-sm text-gray-500">
                        Helping businesses move from manual work to digital systems <span className="text-green-500">•</span>  Fast delivery • Reliable solutions
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center">
                    <Image
                        src={heroImage}
                        alt="Team working"
                        className="w-full max-w-md rounded-xl shadow-md"
                    />
                </div>

            </div>
        </section>
    );
}