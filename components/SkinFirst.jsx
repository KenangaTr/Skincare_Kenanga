import RenderingBadge from "./RenderingBadge";
import { ArrowRight, Star } from "lucide-react";

async function getFeaturedProducts() {
    // Simulate fetch
    return [
        { id: 1, name: "HydraRepair Cream", price: 80, image: "🧴", tag: "Silky Strands Tags" },
        { id: 2, name: "Clear Glow Toner", price: 70, image: "💧", tag: "Silky Strands Tags" },
        { id: 3, name: "Revitalizing Serum", price: 99, image: "✨", tag: "Silky Strands Tags" },
        { id: 4, name: "UltraCalm Mask", price: 80, image: "🍃", tag: "Silky Strands Tags" },
    ];
}

export default async function SkinFirst() {
    const gridProducts = await getFeaturedProducts();

    return (
        <section className="py-24 bg-white relative">
            <RenderingBadge mode="ISR" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-serif text-fabish-text mb-4">Skin First</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        At Skin First, we prioritize healthy, radiant skin with products designed to hydrate, protect, and rejuvenate.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Large Feature */}
                    <div className="bg-fabish-green/5 rounded-[3rem] overflow-hidden relative min-h-[500px] group border border-fabish-green/10">
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            {/* Placeholder for Large Product Image (Mild Cleanser) */}
                            <div className="w-full h-full bg-white/50 rounded-3xl flex items-center justify-center border border-white">
                                <span className="text-9xl">🌿</span>
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8">
                            <h3 className="text-2xl font-serif font-bold text-fabish-text">Mild Cleanser</h3>
                            <p className="text-fabish-text/60 text-sm mb-4">Green Tea</p>
                        </div>
                    </div>

                    {/* Right: Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {gridProducts.map((p) => (
                            <div key={p.id} className="bg-fabish-cream rounded-3xl p-6 text-center hover:shadow-lg transition-shadow border border-transparent hover:border-fabish-lime/30 group">
                                <div className="h-32 mb-4 bg-white rounded-2xl flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
                                    {p.image}
                                </div>
                                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{p.tag}</p>
                                <h4 className="font-serif font-bold text-fabish-text text-sm mb-1">{p.name}</h4>
                                <p className="font-bold text-fabish-text text-sm">${p.price}</p>

                                <button className="mt-3 w-full bg-fabish-lime/20 text-fabish-text text-xs py-2 rounded-full font-bold hover:bg-fabish-lime transition-colors opacity-0 group-hover:opacity-100">
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
