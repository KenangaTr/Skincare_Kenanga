import RenderingBadge from "./RenderingBadge";
import { ArrowUpRight } from "lucide-react";

export default function CategoryGrid() {
    const categories = [
        { name: "Serums", image: "🌿", style: "col-span-1 row-span-2 h-full" },
        { name: "Face Cream", image: "🧴", style: "col-span-1 h-64" },
        { name: "Lotion", image: "✨", style: "col-span-1 h-64" },
        { name: "Cleanse", image: "🧼", style: "col-span-2 h-64" },
    ];

    return (
        <section className="py-24 bg-white relative">
            <RenderingBadge mode="SSG" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-fabish-text mb-2">Shop by Category</h2>
                    <p className="text-gray-500 max-w-md mx-auto">Explore our full range of skincare products, each formulated to address different skin concerns.</p>
                    <button className="mt-6 bg-fabish-lime text-fabish-text px-6 py-2 rounded-full font-bold text-sm hover:bg-lime-400 transition-colors">
                        Explore Now
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Item 1: Tall Left */}
                    <div className="md:col-span-1 md:row-span-2 relative group h-[500px] md:h-auto rounded-3xl overflow-hidden bg-fabish-cream border border-gray-100">
                        <div className="absolute inset-0 flex items-center justify-center text-8xl text-fabish-green/20 group-hover:scale-110 transition-transform duration-500">
                            🌿
                        </div>
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                            <span className="bg-white px-6 py-2 rounded-full font-bold text-fabish-text shadow-sm text-sm uppercase tracking-wide">
                                Serums
                            </span>
                        </div>
                    </div>

                    {/* Item 2: Top Middle */}
                    <div className="relative group h-64 rounded-3xl overflow-hidden bg-fabish-green/10 border border-gray-100">
                        <div className="absolute inset-0 flex items-center justify-center text-6xl text-fabish-green/20 group-hover:scale-110 transition-transform duration-500">
                            🧴
                        </div>
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                            <span className="bg-white px-6 py-2 rounded-full font-bold text-fabish-text shadow-sm text-sm uppercase tracking-wide">
                                Face Cream
                            </span>
                        </div>
                    </div>

                    {/* Item 3: Top Right */}
                    <div className="relative group h-64 rounded-3xl overflow-hidden bg-fabish-cream border border-gray-100">
                        <div className="absolute inset-0 flex items-center justify-center text-6xl text-fabish-green/20 group-hover:scale-110 transition-transform duration-500">
                            ✨
                        </div>
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                            <span className="bg-white px-6 py-2 rounded-full font-bold text-fabish-text shadow-sm text-sm uppercase tracking-wide">
                                Lotion
                            </span>
                        </div>
                    </div>

                    {/* Item 4: Bottom Wide */}
                    <div className="md:col-span-2 relative group h-64 rounded-3xl overflow-hidden bg-fabish-green/20 border border-gray-100">
                        <div className="absolute inset-0 flex items-center justify-center text-6xl text-fabish-green/20 group-hover:scale-110 transition-transform duration-500">
                            🧼
                        </div>
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                            <span className="bg-white px-6 py-2 rounded-full font-bold text-fabish-text shadow-sm text-sm uppercase tracking-wide">
                                Cleanse
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
