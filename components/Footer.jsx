export default function Footer() {
    return (
        <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4" id="about-us">
                        <h3 className="font-serif text-3xl font-bold text-fabish-text flex items-center gap-2">
                            <span>✿</span> KennyLabs
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            As a dermatology-first brand, our skincare solutions provide stunning and fashionable apparel... wait, skincare results. Sustainable, effective, and clean.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {/* Social Icons */}
                            <div className="w-8 h-8 text-gray-400 hover:text-fabish-green cursor-pointer">f</div>
                            <div className="w-8 h-8 text-gray-400 hover:text-fabish-green cursor-pointer">t</div>
                            <div className="w-8 h-8 text-gray-400 hover:text-fabish-green cursor-pointer">in</div>
                        </div>
                    </div>

                    <div id="contact">
                        <h4 className="font-bold mb-6 text-fabish-text uppercase tracking-wider text-xs">Menu</h4>
                        <ul className="space-y-3 text-sm text-gray-600 font-medium">
                            <li><a href="#" className="hover:text-fabish-green transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-fabish-green transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-fabish-green transition-colors">Shop</a></li>
                            <li><a href="#" className="hover:text-fabish-green transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-fabish-text uppercase tracking-wider text-xs">Information</h4>
                        <ul className="space-y-3 text-sm text-gray-600 font-medium">
                            <li><a href="#" className="hover:text-fabish-green transition-colors">Products</a></li>
                            <li><a href="#" className="hover:text-fabish-green transition-colors">Order Tracking</a></li>
                            <li><a href="#" className="hover:text-fabish-green transition-colors">Returns</a></li>
                            <li><a href="#" className="hover:text-fabish-green transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-fabish-text uppercase tracking-wider text-xs">Shop</h4>
                        <ul className="space-y-3 text-sm text-gray-600 font-medium">
                            <li><a href="#" className="hover:text-fabish-green transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-fabish-green transition-colors">Track Order</a></li>
                            <li><a href="#" className="hover:text-fabish-green transition-colors">Policy</a></li>
                            <li><a href="#" className="hover:text-fabish-green transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
                    <p>© {new Date().getFullYear()} KennyLabs Skincare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
