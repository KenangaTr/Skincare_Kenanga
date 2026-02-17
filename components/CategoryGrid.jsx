import RenderingBadge from "./RenderingBadge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CategoryGrid() {
    return (
        <section className="py-24 bg-white relative">
            <RenderingBadge mode="SSG" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-fabish-text mb-2">Shop by Category</h2>
                    <p className="text-gray-500 max-w-md mx-auto">Explore our full range of skincare products, each formulated to address different skin concerns.</p>
                    <Link href="/shop" className="mt-6 bg-[#FFC0CB] text-fabish-text px-6 py-2 rounded-full font-bold text-sm hover:bg-pink-300 transition-colors inline-block border border-fabish-text/10 shadow-lg shadow-fabish-green/10">
                        Explore Now
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Item 1: Tall Left - Serums */}
                    <div className="md:col-span-1 md:row-span-2 relative group h-[500px] md:h-auto rounded-3xl overflow-hidden border border-gray-100">
                        <Image
                            src="/serum.jpg"
                            alt="Serums"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                            <span className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full font-bold text-fabish-text shadow-sm text-sm uppercase tracking-wide">
                                Serums
                            </span>
                        </div>
                    </div>

                    {/* Item 2: Top Middle - Face Cream */}
                    <div className="relative group h-64 rounded-3xl overflow-hidden border border-gray-100">
                        <Image
                            src="/FaceCream.jpg"
                            alt="Face Cream"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                            <span className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full font-bold text-fabish-text shadow-sm text-sm uppercase tracking-wide">
                                Face Cream
                            </span>
                        </div>
                    </div>

                    {/* Item 3: Top Right - Lotion */}
                    <div className="relative group h-64 rounded-3xl overflow-hidden border border-gray-100">
                        <Image
                            src="/lotion.jpg"
                            alt="Lotion"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                            <span className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full font-bold text-fabish-text shadow-sm text-sm uppercase tracking-wide">
                                Lotion
                            </span>
                        </div>
                    </div>

                    {/* Item 4: Bottom Wide - Cleanse */}
                    <div className="md:col-span-2 relative group h-64 rounded-3xl overflow-hidden border border-gray-100">
                        <Image
                            src="/cleans.jpg"
                            alt="Cleanse"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                            <span className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full font-bold text-fabish-text shadow-sm text-sm uppercase tracking-wide">
                                Cleanse
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
