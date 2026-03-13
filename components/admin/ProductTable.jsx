"use client";

import Image from "next/image";
import { Pencil, Trash2, Star } from "lucide-react";

export default function ProductTable({ products, onEdit, onDelete }) {
    if (!products || products.length === 0) {
        return (
            <div className="bg-white rounded-2xl border border-fabish-pink/20 p-12 text-center">
                <div className="w-16 h-16 bg-fabish-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📦</span>
                </div>
                <p className="text-fabish-text font-medium mb-1">No products yet</p>
                <p className="text-sm text-gray-400">Add your first product using the button above.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-fabish-pink/20 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-fabish-pink/5 border-b border-fabish-pink/10">
                            <th className="text-left px-5 py-3.5 text-xs font-semibold text-fabish-text uppercase tracking-wider">Product</th>
                            <th className="text-left px-5 py-3.5 text-xs font-semibold text-fabish-text uppercase tracking-wider">Category</th>
                            <th className="text-left px-5 py-3.5 text-xs font-semibold text-fabish-text uppercase tracking-wider">Price</th>
                            <th className="text-left px-5 py-3.5 text-xs font-semibold text-fabish-text uppercase tracking-wider">Rating</th>
                            <th className="text-left px-5 py-3.5 text-xs font-semibold text-fabish-text uppercase tracking-wider">Reviews</th>
                            <th className="text-right px-5 py-3.5 text-xs font-semibold text-fabish-text uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-fabish-pink/5 transition-colors">
                                {/* Product Info */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-11 h-11 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0 relative">
                                            <Image
                                                src={product.image || "/produk.jpg"}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                                onError={() => { }}
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 leading-tight">{product.name}</p>
                                            <p className="text-xs text-gray-400 mt-0.5 truncate max-w-[180px]">{product.description}</p>
                                        </div>
                                    </div>
                                </td>

                                {/* Category */}
                                <td className="px-5 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.category === 'star'
                                        ? 'bg-fabish-pink/20 text-pink-700 border border-fabish-pink/30'
                                        : 'bg-fabish-lime/20 text-fabish-green border border-fabish-lime/30'
                                        }`}>
                                        {product.category === 'star' ? '⭐ Star' : '🔥 Bestseller'}
                                    </span>
                                </td>

                                {/* Price */}
                                <td className="px-5 py-4">
                                    <span className="font-semibold text-gray-800">${product.price}</span>
                                </td>

                                {/* Rating */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                                        <span className="font-medium text-gray-700">{product.rating}</span>
                                    </div>
                                </td>

                                {/* Reviews */}
                                <td className="px-5 py-4 text-gray-500">{product.reviews}</td>

                                {/* Actions */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => onEdit(product)}
                                            className="p-2 rounded-lg text-fabish-text hover:bg-fabish-pink/20 hover:text-pink-600 transition-all"
                                            title="Edit product"
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => onDelete(product)}
                                            className="p-2 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-600 transition-all"
                                            title="Delete product"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
