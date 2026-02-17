import { NextResponse } from 'next/server';

const products = [
    {
        id: 1,
        name: "Pure Glow Radiance Serum",
        price: 89,
        description: "A powerful serum that brightens and evens out skin tone.",
        image: "/products/serum.svg",
        category: "star",
        rating: 4.9,
        reviews: 120,
    },
    {
        id: 2,
        name: "HydroBlast Moisture Lock",
        price: 65,
        description: "Intense hydration for dry and tired skin.",
        image: "/products/cream.svg",
        category: "star",
        rating: 4.8,
        reviews: 95,
    },
    {
        id: 3,
        name: "Vitamin C Glow Cream",
        price: 75,
        description: "Boosts collagen and protects against UV damage.",
        image: "/products/vitc.svg",
        category: "star",
        rating: 4.7,
        reviews: 80,
    },
    {
        id: 4,
        name: "Soothing Gentle Cleanser",
        price: 45,
        description: "Removes impurities without stripping natural oils.",
        image: "/products/cleanser.svg",
        category: "bestseller",
        rating: 4.9,
        reviews: 150,
    },
    {
        id: 5,
        name: "Night Repair Oil",
        price: 95,
        description: "Restores skin barrier while you sleep.",
        image: "/products/oil.svg",
        category: "bestseller",
        rating: 5.0,
        reviews: 200,
    },
    {
        id: 6,
        name: "Exfoliating Toner",
        price: 35,
        description: "Gently exfoliates dead skin cells for a smooth texture.",
        image: "/products/toner.svg",
        category: "bestseller",
        rating: 4.6,
        reviews: 70,
    },
];

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    let filteredProducts = products;
    if (category) {
        filteredProducts = products.filter(p => p.category === category);
    }

    return NextResponse.json(filteredProducts);
}
