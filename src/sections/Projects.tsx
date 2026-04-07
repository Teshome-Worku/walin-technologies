import Image from "next/image";
import lemi from "../images/lemi.png";
import mamiFood from "../images/mami-food.png";
import urjiPhoto from "../images/urji-photo.png";

export default function Projects() {
    return (
        <section id="projects" className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">
                        Our Work
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Here are some solutions we’ve built to help businesses grow and manage their operations.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="mt-12 grid md:grid-cols-3 gap-8">

                    {/* Project 1 */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover: duration-200 cursor-pointer transition">
                        <Image src={lemi} alt="Project 1" className="w-full h-48 object-cover hover:scale-105 duration-300" />
                        <div className="p-5">
                            <h3 className="font-semibold text-dark">
                                Lemi Fashion — Online Store System
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Helped a clothing business sell products online and receive orders instantly via Telegram.
                            </p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md  cursor-pointer    transition duration-200">
                        <Image src={mamiFood} alt="Project 2" className="w-full h-48 object-cover hover:scale-105 duration-300" />
                        <div className="p-5">
                            <h3 className="font-semibold text-dark">
                                Mami Food — Food Ordering Platform
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Built a modern website to help a local business showcase services and attract customers.Developed a system for customers to order food online and track their orders in real-time.
                            </p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md cursor-pointer transition">
                        <Image src={urjiPhoto} alt="Project 3" className="w-full h-48 object-cover hover:scale-105 duration-300" />
                        <div className="p-5">
                            <h3 className="font-semibold text-dark">
                                Urji Photography — Business Website
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Built a clean website to showcase photography services and attract more clients.
                            </p>
                        </div>
                    </div>

                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                        View All Projects
                    </button>
                </div>

            </div>
        </section>
    );
}