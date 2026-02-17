import RenderingBadge from "./RenderingBadge";
import { Play } from "lucide-react";

export default function Features() {
    return (
        <section className="py-24 bg-fabish-pink relative">
            <RenderingBadge mode="SSG" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="space-y-8">
                        {/* Top Image Cluster */}
                        <div className="h-64 rounded-[4rem] bg-fabish-green/10 w-full overflow-hidden relative border border-white">
                            {/* Placeholder product group */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-6xl">🌿</div>
                        </div>

                        {/* Bottom Video Placeholder */}
                        <div className="h-64 rounded-[4rem] bg-gray-200 w-full overflow-hidden relative group cursor-pointer border-4 border-white shadow-xl">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50">
                                    <Play className="w-6 h-6 fill-current ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-serif text-fabish-text mb-6 leading-tight">
                            Fabish Skincare Features <br /> <span className="italic text-fabish-green">For You</span>
                        </h2>

                        <p className="text-gray-600 mb-8 leading-relaxed font-sans">
                            Experience the power of nature combined with scientific innovation. Our products are designed to deliver visible results while maintaining skin health.
                        </p>

                        <ul className="space-y-4 mb-8 text-sm font-medium text-gray-700">
                            <li className="flex items-center space-x-3">
                                <span className="w-6 h-6 rounded-full bg-fabish-lime/20 flex items-center justify-center text-fabish-text text-xs">✓</span>
                                <span>100% Organic Ingredients</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-6 h-6 rounded-full bg-fabish-lime/20 flex items-center justify-center text-fabish-text text-xs">✓</span>
                                <span>Dermatologist Tested & Approved</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-6 h-6 rounded-full bg-fabish-lime/20 flex items-center justify-center text-fabish-text text-xs">✓</span>
                                <span>Cruelty-Free & Vegan Friendly</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-6 h-6 rounded-full bg-fabish-lime/20 flex items-center justify-center text-fabish-text text-xs">✓</span>
                                <span>Sustainable Packaging</span>
                            </li>
                        </ul>

                        <button className="bg-brand-pink text-fabish-text px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-lime-500/20">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
