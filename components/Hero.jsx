import Image from "next/image";
import RenderingBadge from "./RenderingBadge";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-fabish-green text-white min-h-screen flex items-center rounded-b-[4rem]">
            <RenderingBadge mode="SSG" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center mb-12 relative">
                    <h1 className="text-5xl lg:text-9xl font-serif font-medium leading-tight tracking-tight mb-6 animate-fade-in-up relative z-20 mix-blend-overlay">
                        Unlock Your <br />
                        <span className="italic">Natural Glow</span>
                    </h1>

                    {/* Central Oval Image */}
                    <div className="relative mx-auto w-64 h-80 lg:w-[400px] lg:h-[500px] mt-[-50px] lg:mt-[-100px] z-10">
                        <div className="w-full h-full rounded-[50%] overflow-hidden border-4 border-white/20 shadow-2xl relative">
                            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                                {/* Placeholder for Model Face */}
                                <span className="text-6xl">👩</span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 hidden lg:block max-w-xs text-left">
                        <p className="text-lg font-sans font-light text-white/90 mb-8 animate-fade-in-up delay-100 leading-relaxed">
                            Discover skincare products crafted with pure, natural ingredients. Elevate your beauty routine with solutions designed to nourish, protect, and renew your skin.
                        </p>
                        <button className="bg-fabish-lime text-fabish-text px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-lime-500/20">
                            Shop Now
                        </button>
                    </div>

                    {/* Right Side Image Arc */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden lg:block w-64 h-96">
                        <div className="w-full h-full rounded-t-[100px] overflow-hidden border-4 border-white/20 relative">
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                                <span className="text-4xl">🧴</span>
                                <div className="absolute bottom-4 left-0 right-0 text-center">
                                    <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs">Beauty Product</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile specific layout adjustments */}
                <div className="lg:hidden text-center mt-8">
                    <p className="text-base font-sans font-light text-white/90 mb-6 px-4">
                        Discover skincare products crafted with pure, natural ingredients.
                    </p>
                    <button className="bg-fabish-lime text-fabish-text px-8 py-3 rounded-full font-bold shadow-lg">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
}
