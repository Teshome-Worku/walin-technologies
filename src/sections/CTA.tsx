export default function CTA() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-dark">
                    Ready to Take Your Business Digital?
                </h2>

                {/* Subtitle */}
                <p className="mt-4 text-gray-600">
                    Let’s build a solution that saves your time and helps your business grow.
                </p>

                {/* CTA Button */}
                <div className="mt-8">
                    <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                        Book a Free Consultation
                    </button>
                </div>

            </div>
        </section>
    );
}