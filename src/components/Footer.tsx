export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h3 className="text-white text-lg font-semibold">
                        Walin Technologies
                    </h3>
                    <p className="mt-3 text-sm text-gray-400">
                        Helping businesses move from manual work to smart digital solutions.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-semibold text-sm">Company</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#services" className="hover:text-white">Services</a></li>
                        <li><a href="#projects" className="hover:text-white">Projects</a></li>
                        <li><a href="/about" className="hover:text-white">About</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-semibold text-sm">Services</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li>Website Development</li>
                        <li>Business Systems</li>
                        <li>Mobile Apps</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold text-sm">Contact</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li>Email: walintech22@gmail.com</li>
                        <li>Phone: +251 955 800 626</li>
                        <li>Location: Adama ,Ethiopia</li>
                    </ul>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Walin Technologies. All rights reserved.
            </div>
        </footer>
    );
}