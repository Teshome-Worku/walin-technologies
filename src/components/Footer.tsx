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
                    <div className="mt-5 flex items-center gap-3">
                        <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-primary/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                                <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56A1.98 1.98 0 1 0 3.2 4.9a1.98 1.98 0 0 0 3.96.04ZM20 13.4c0-3.03-1.61-5.1-4.5-5.1-2.08 0-3 .99-3.52 1.69V8.5H8.6V20h3.38v-5.68c0-1.5.29-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.04V20H20v-6.6Z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="X (Twitter)" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-primary/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                                <path d="M18.9 3H22l-6.76 7.73L23 21h-6.06l-4.75-6.2L6.77 21H3.66l7.23-8.27L1.5 3h6.2l4.3 5.68L18.9 3Zm-1.06 16.2h1.68L6.8 4.72H5l12.84 14.48Z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-primary/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm9.1 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-primary/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                                <path d="M13.5 21v-7h2.36l.35-2.73H13.5V9.53c0-.79.22-1.33 1.36-1.33h1.45V5.75c-.25-.03-1.11-.1-2.12-.1-2.1 0-3.54 1.28-3.54 3.63v1.99H8.28V14h2.37v7h2.85Z" />
                            </svg>
                        </a>
                    </div>
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