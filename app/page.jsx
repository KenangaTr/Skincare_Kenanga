import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StarProducts from "@/components/StarProducts";
import CategoryGrid from "@/components/CategoryGrid";
import Features from "@/components/Features";
import SkinFirst from "@/components/SkinFirst";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Fabish | Unlock Your Natural Glow",
    description: "Premium skincare solutions for a natural glow.",
};

export default function Home() {
    return (
        <main className="min-h-screen ">
            <Navbar />
            <Hero />
            <CategoryGrid />
            <Features />
            <StarProducts />
            <Testimonials />
            <SkinFirst />
            <FAQ />
            <Newsletter />
            <Footer />
        </main>
    );
}
