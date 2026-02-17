import Image from "next/image";
import RenderingBadge from "./RenderingBadge";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-fabish-pink text-fabish-text min-h-screen flex items-center rounded-b-[4rem]">
            <RenderingBadge mode="SSG" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center relative flex flex-col items-center">
                    {/* Main Title - Layered behind image significantly */}
                    <div className="relative z-0 mb-[-60px] lg:mb-[-140px] select-none pointer-events-none">
                        <h1 className="text-6xl lg:text-[11rem] font-serif font-medium leading-[0.8] tracking-tighter text-white">
                            Unlock Your <br />
                        </h1>
                        <h1 className="text-6xl lg:text-[11rem] font-serif font-medium leading-[0.8] tracking-tighter text-white italic relative left-12 lg:left-36">
                            Natural Glow
                        </h1>
                    </div>

                    {/* Central Oval Image - Overlapping text */}
                    <div className="relative z-10 mb-8 mt-4 lg:mt-0">
                        <div className="w-64 h-80 lg:w-[420px] lg:h-[580px] rounded-[50%] overflow-hidden border-[6px] border-white/20 shadow-2xl relative mx-auto">
                            <div className="absolute inset-0 bg-[#E5E5E5] flex items-center justify-center">
                                <Image
                                    src="/model1.jpg"
                                    alt="Woman applying face cream"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Left Text Content - Absolute positioned on desktop */}
                    <div className="relative z-20 lg:absolute lg:bottom-32 lg:left-0 text-left max-w-sm">
                        <p className="text-lg font-sans font-light text-white/90 mb-8 leading-relaxed drop-shadow-sm">
                            Discover skincare products crafted with pure, natural ingredients. Elevate your beauty routine with solutions designed to nourish, protect, and renew your skin.
                        </p>
                        <button className="bg-brand-pink text-fabish-text px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-lime-500/20 text-sm tracking-wide uppercase">
                            Shop Now
                        </button>
                    </div>

                    {/* Right Side Image Arc - Absolute positioned on desktop */}
                    <div className="relative z-20 lg:absolute lg:bottom-0 lg:right-0 mt-12 lg:mt-0">
                        <div className="w-64 h-80 lg:w-72 lg:h-[450px] rounded-t-[10rem] overflow-hidden border-4 border-white/20 relative mx-auto bg-fabish-cream/10 backdrop-blur-sm shadow-xl">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src="/produk.jpg"
                                    alt="Skincare Products"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full text-center">
                                <span className="bg-white/30 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold border border-white/40 shadow-sm text-fabish-text">
                                    Beauty Product
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
