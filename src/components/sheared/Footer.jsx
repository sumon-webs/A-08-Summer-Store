import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h2 className="text-2xl font-bold text-white">Summer Store</h2>
                    <p className="mt-3 text-sm text-gray-400">
                        Your go-to place for trendy summer products. Stay cool, stay stylish ☀️
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                    <p className="text-sm">Email: sumon01333581557@gmail.com</p>
                    <p className="text-sm">Phone: +8801333581557</p>
                    <p className="text-sm">Location: Dhaka, Bangladesh</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:text-white">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-white">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-white">
                                Products
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Social + Bottom */}
            <div className="border-t border-gray-700">
                <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Social Icons */}
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="hover:text-white">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-white">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-white">
                            <FaTwitter />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Summer Store. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;