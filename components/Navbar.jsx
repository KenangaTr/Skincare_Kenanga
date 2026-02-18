"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-fabish-cream/80 backdrop-blur-md border-b border-gray-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-serif text-3xl font-bold tracking-wide text-fabish-text flex items-center gap-2">
                            <span>✿</span> KennyLabs
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-10 font-sans font-medium text-sm tracking-wide">
                        <Link href="/" className="text-fabish-text hover:text-fabish-green transition-colors">Home</Link>
                        <Link href="/#shop-by-product" className="text-fabish-text hover:text-fabish-green transition-colors">Shop</Link>
                        <Link href="/shop" className="text-fabish-text hover:text-fabish-green transition-colors">Products</Link>
                        <Link href="/#about-us" className="text-fabish-text hover:text-fabish-green transition-colors">About Us</Link>
                        <Link href="/#contact" className="text-fabish-text hover:text-fabish-green transition-colors">Contact</Link>
                    </div>

                    {/* Icons & Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center space-x-6 text-fabish-text">
                            <button className="hidden md:flex hover:text-fabish-green transition-colors items-center">
                                <span className="text-xs font-medium mr-1">My Account</span>
                                <User className="w-5 h-5 inline" />
                            </button>
                            <button className="hover:text-fabish-green transition-colors relative">
                                <ShoppingBag className="w-5 h-5" />
                                <span className="absolute -top-1 -right-1 bg-fabish-lime text-fabish-text text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    0
                                </span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-fabish-text hover:text-fabish-green focus:outline-none"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-fabish-cream/95 backdrop-blur-md border-b border-gray-100/50 absolute w-full left-0 z-40 shadow-lg">
                    <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col items-center">
                        <Link
                            href="/"
                            className="block px-3 py-2 text-base font-medium text-fabish-text hover:text-fabish-green hover:bg-gray-50 rounded-md w-full text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/#shop-by-product"
                            className="block px-3 py-2 text-base font-medium text-fabish-text hover:text-fabish-green hover:bg-gray-50 rounded-md w-full text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Shop
                        </Link>
                        <Link
                            href="/shop"
                            className="block px-3 py-2 text-base font-medium text-fabish-text hover:text-fabish-green hover:bg-gray-50 rounded-md w-full text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Products
                        </Link>
                        <Link
                            href="/#about-us"
                            className="block px-3 py-2 text-base font-medium text-fabish-text hover:text-fabish-green hover:bg-gray-50 rounded-md w-full text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/#contact"
                            className="block px-3 py-2 text-base font-medium text-fabish-text hover:text-fabish-green hover:bg-gray-50 rounded-md w-full text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <div className="pt-4 border-t border-gray-200 w-full flex justify-center">
                            <button className="flex items-center text-fabish-text hover:text-fabish-green px-3 py-2">
                                <span className="text-sm font-medium mr-2">My Account</span>
                                <User className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
