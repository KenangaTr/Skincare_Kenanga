import { NextResponse } from 'next/server';

const products = [
    {
        id: 1,
        name: "Pure Glow Radiance Serum",
        price: 89,
        description: "A powerful serum that brightens and evens out skin tone.",
        image: "/RadiantSerum.jpg",
        category: "star",
        rating: 4.9,
        reviews: 120,
    },
    {
        id: 2,
        name: "HydroBlast Moisture Lock",
        price: 65,
        description: "Intense hydration for dry and tired skin.",
        image: "/moisturazer.jpg",
        category: "star",
        rating: 4.8,
        reviews: 95,
    },
    {
        id: 3,
        name: "Vitamin C Glow Cream",
        price: 75,
        description: "Boosts collagen and protects against UV damage.",
        image: "/vitC_cream.jpg",
        category: "star",
        rating: 4.7,
        reviews: 80,
    },
    {
        id: 7,
        name: "Gentle Facial Wash",
        price: 70,
        description: "Deeply cleanses while maintaining skin moisture balance.",
        image: "/fw.jpg",
        category: "star",
        rating: 4.9,
        reviews: 100,
    },
    {
        id: 8,
        name: "Clear Rose Body Soap",
        price: 47,
        description: "Gentle cleansing with a refreshing rose scent.",
        image: "/bodysoap.jpg",
        category: "star",
        rating: 4.8,
        reviews: 180,
    },
    {
        id: 9,
        name: "Hydrating Moisturazer",
        price: 58,
        description: "Intense moisture for a soft and supple feel.",
        image: "/mois2.jpg",
        category: "star",
        rating: 4.9,
        reviews: 232,
    },
    {
        id: 10,
        name: "Anti Aging Retinol Serum",
        price: 50,
        description: "Reduces fine lines and improves skin texture.",
        image: "/serumRetinol.jpg",
        category: "star",
        rating: 4.7,
        reviews: 98,
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
