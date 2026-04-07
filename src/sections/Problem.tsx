export default function Problem() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-dark">
                    Still Managing Your Business Manually?
                </h2>

                {/* Subtitle */}
                <p className="mt-4 text-gray-600">
                    Many businesses still rely on outdated methods that slow growth and cause problems.
                </p>

                {/* Problems List */}
                <div className="mt-10 grid md:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer">
                        <h3 className="font-semibold text-lg text-dark">
                            Paper Records
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Writing customer or sales data on paper makes it hard to manage and easy to lose.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer">
                        <h3 className="font-semibold text-lg text-dark">
                            No Tracking System
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Without digital systems, tracking performance and progress becomes difficult.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer">
                        <h3 className="font-semibold text-lg text-dark">
                            Time Wasting
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm">
                            Manual work takes more time and reduces efficiency in your business operations.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}