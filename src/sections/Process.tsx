export default function Process() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-dark">
                    How We Work
                </h2>

                <p className="mt-4 text-gray-600">
                    Our simple process ensures your project is delivered smoothly and efficiently.
                </p>

                {/* Steps */}
                <div className="mt-12 space-y-10">

                    {/* Step 1 */}
                    <div>
                        <h3 className="text-lg font-semibold text-dark">
                            1. Understand Your Business
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            We listen to your needs and analyze your current process to identify the best solution.
                        </p>
                    </div>

                    {/* Line */}
                    <div className="w-1 h-10 bg-gray-300 mx-auto"></div>

                    {/* Step 2 */}
                    <div>
                        <h3 className="text-lg font-semibold text-dark">
                            2. Design the Solution
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            We create a clear plan and design that matches your business goals.
                        </p>
                    </div>

                    {/* Line */}
                    <div className="w-1 h-10 bg-primary mx-auto"></div>

                    {/* Step 3 */}
                    <div>
                        <h3 className="text-lg font-semibold text-dark">
                            3. Build & Deliver
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            We develop your solution and ensure everything works perfectly before delivery.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}