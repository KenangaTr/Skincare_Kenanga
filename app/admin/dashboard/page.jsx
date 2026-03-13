"use client";

import { useState, useEffect } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Package, Star, TrendingUp } from "lucide-react";

export default function AdminDashboardPage() {
    const [stats, setStats] = useState({ total: 0, star: 0, bestseller: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/products');
                const products = await res.json();

                setStats({
                    total: products.length || 0,
                    star: products.filter(p => p.category === 'star').length || 0,
                    bestseller: products.filter(p => p.category === 'bestseller').length || 0
                });
            } catch (error) {
                console.error("Failed to fetch products for stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <AdminSidebar activePage="dashboard" />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto w-full">
                {/* Header Profile */}
                <header className="bg-white border-b border-gray-100 flex items-center justify-between px-8 py-4 sticky top-0 z-10">
                    <div>
                        <h1 className="text-xl font-bold font-serif text-fabish-text">Dashboard</h1>
                        <p className="text-sm text-gray-500 mt-1">Welcome back to KennyLabs Admin</p>
                    </div>
                </header>

                <div className="p-8 pb-20">
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="w-8 h-8 border-4 border-fabish-pink/20 border-t-fabish-pink rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <>
                            {/* Decorative Hero/Welcome Banner with Pink */}
                            <div className="bg-gradient-to-r from-fabish-pink/20 to-fabish-pink/5 rounded-3xl p-8 mb-8 border border-fabish-pink/30 relative overflow-hidden">
                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-fabish-pink/20 rounded-full blur-3xl"></div>
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold font-serif text-fabish-text mb-2">Hello, Admin! 🌸</h2>
                                    <p className="text-gray-600 max-w-md">
                                        Here is what's happening with your store today. Manage your skincare products and keep that natural glow going!
                                    </p>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-fabish-text font-serif mb-4">Quick Stats</h3>
                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Total Products */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-fabish-pink/30 transition-all group">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 mb-1">Total Products</p>
                                            <p className="text-3xl font-bold text-gray-800">{stats.total}</p>
                                        </div>
                                        <div className="w-12 h-12 bg-fabish-pink/10 group-hover:bg-fabish-pink/20 rounded-xl flex items-center justify-center transition-colors">
                                            <Package className="w-6 h-6 text-fabish-pink group-hover:scale-110 transition-transform" />
                                        </div>
                                    </div>
                                </div>

                                {/* Star Products */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-fabish-pink/30 transition-all group">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 mb-1">Star Products</p>
                                            <p className="text-3xl font-bold text-gray-800">{stats.star}</p>
                                        </div>
                                        <div className="w-12 h-12 bg-fabish-pink/10 group-hover:bg-fabish-pink/20 rounded-xl flex items-center justify-center transition-colors">
                                            <Star className="w-6 h-6 text-fabish-pink group-hover:scale-110 transition-transform" />
                                        </div>
                                    </div>
                                </div>

                                {/* Bestsellers */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-fabish-pink/30 transition-all group">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 mb-1">Bestsellers</p>
                                            <p className="text-3xl font-bold text-gray-800">{stats.bestseller}</p>
                                        </div>
                                        <div className="w-12 h-12 bg-fabish-pink/10 group-hover:bg-fabish-pink/20 rounded-xl flex items-center justify-center transition-colors">
                                            <TrendingUp className="w-6 h-6 text-fabish-pink group-hover:scale-110 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}
