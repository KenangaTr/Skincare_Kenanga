import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-fabish-cream/80 backdrop-blur-md border-b border-gray-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-serif text-3xl font-bold tracking-wide text-fabish-text flex items-center gap-2">
                            <span>✿</span> Fabish
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-10 font-sans font-medium text-sm tracking-wide">
                        <Link href="#" className="text-fabish-text hover:text-fabish-green transition-colors">Home</Link>
                        <Link href="#" className="text-fabish-text hover:text-fabish-green transition-colors">Shop</Link>
                        <Link href="#" className="text-fabish-text hover:text-fabish-green transition-colors">Products</Link>
                        <Link href="#" className="text-fabish-text hover:text-fabish-green transition-colors">About Us</Link>
                        <Link href="#" className="text-fabish-text hover:text-fabish-green transition-colors">Contact</Link>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-6 text-fabish-text">
                        <button className="hover:text-fabish-green transition-colors">
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
                </div>
            </div>
        </nav>
    );
}
