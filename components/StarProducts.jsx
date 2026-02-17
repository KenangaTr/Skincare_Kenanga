import Image from "next/image";
import RenderingBadge from "./RenderingBadge";
import { ArrowRight, Star } from "lucide-react";

async function getProducts() {
    try {
        const res = await fetch("http://localhost:3000/api/products?category=star", {
            next: { revalidate: 3600 }, // ISR: Revalidate every hour
        });
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}

export default async function StarProducts() {
    const products = await getProducts();

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <RenderingBadge mode="ISR" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl font-serif text-fabish-text mb-4">Shop by product</h2>

                        {/* Tabs */}
                        <div className="flex space-x-6 text-sm font-medium text-gray-400">
                            <button className="text-fabish-green border-b-2 border-fabish-green pb-1">New Arrival</button>
                            <button className="hover:text-fabish-green transition-colors">Most Popular</button>
                            <button className="hover:text-fabish-green transition-colors">Best Selling</button>
                        </div>
                    </div>

                    {/* Arrow Buttons */}
                    <div className="flex space-x-4">
                        <button className="w-12 h-12 rounded-full border border-fabish-text/10 flex items-center justify-center text-fabish-text hover:bg-fabish-pink hover:text-white transition-all group ">
                            <ArrowRight className="w-5 h-5 rotate-180 group-hover:scale-110 transition-transform" />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-brand-pink flex items-center justify-center text-white hover:bg-fabish-pink hover:text-fabish-text transition-all shadow-lg shadow-fabish-green/30 group">
                            <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div className="flex overflow-x-auto space-x-6 pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                    {products.map((product) => (
                        <div key={product.id} className="min-w-[85vw] md:min-w-[350px] snap-center group">
                            <div className="relative h-[450px] bg-fabish-cream rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-fabish-green/10 border border-transparent hover:border-fabish-green/20">
                                {/* Image Placeholder or Real Image */}
                                <div className="absolute inset-0 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700">
                                    <Image src={product.image} alt={product.name} fill className="object-contain p-8" />
                                </div>

                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-fabish-text shadow-sm border border-gray-100">
                                    ${product.price}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent pt-12">
                                    <h3 className="text-2xl font-serif text-fabish-text mb-1">{product.name}</h3>
                                    <div className="flex items-center space-x-1 text-fabish-lime mb-3">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="text-fabish-text/60 text-xs ml-1">{product.rating} ({product.reviews} reviews)</span>
                                    </div>
                                    <button className="w-full bg-fabish-text text-white py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-fabish-green transition-colors font-medium">
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* View All Card */}
                    <div className="min-w-[200px] snap-center flex items-center justify-center">
                        <a href="#" className="w-32 h-32 rounded-full border border-fabish-text/20 flex items-center justify-center hover:bg-fabish-text hover:text-white transition-all group">
                            <span className="font-serif italic text-lg group-hover:scale-110 transition-transform">View All</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
