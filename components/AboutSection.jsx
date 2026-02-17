import RenderingBadge from "./RenderingBadge";
import { Play } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-24 bg-fabish-cream relative">
            <RenderingBadge mode="SSG" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="space-y-8">
                        {/* Top Image Cluster */}
                        <div className="h-64 rounded-[4rem] bg-fabish-green/10 w-full overflow-hidden relative border border-white">
                            {/* Placeholder product group */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">Products Group</div>
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
                            Fabish Skincare For Your <br /> <span className="italic text-fabish-green">Beautiful Skin</span>
                        </h2>

                        <p className="text-gray-600 mb-8 leading-relaxed font-sans">
                            At Fabish Skincare, we provide personalized treatments to nourish and achieve your natural beauty. Our expert team is dedicated to helping you achieve healthy, radiant skin every day.
                        </p>

                        <ul className="space-y-4 mb-8 text-sm font-medium text-gray-700">
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-fabish-green rounded-full"></span>
                                <span>Customized skincare solutions for all skin types</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-fabish-green rounded-full"></span>
                                <span>Expert consultations and advice</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-fabish-green rounded-full"></span>
                                <span>Safe and proven skincare techniques</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-fabish-green rounded-full"></span>
                                <span>Achieve glowing, youthful skin</span>
                            </li>
                        </ul>

                        <button className="bg-fabish-lime text-fabish-text px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-lime-500/20">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
