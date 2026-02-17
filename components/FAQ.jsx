"use client";

import { useState } from "react";
import RenderingBadge from "./RenderingBadge";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes! All Fabish products are dermatologically tested and formulated with gentle, natural ingredients suitable for sensitive skin types.",
    },
    {
        question: "Are your products cruelty-free and vegan?",
        answer: "Absolutely. We are proud to be 100% cruelty-free and vegan. We never test on animals.",
    },
    {
        question: "How long will it take to see results?",
        answer: "While individual results vary, most customers notice a difference in skin texture and hydration within 2 weeks of consistent use.",
    },
    {
        question: "How should I store your skincare products?",
        answer: "Store in a cool, dry place away from direct sunlight to maintain the potency of natural ingredients.",
    },
    {
        question: "How do I choose the right products for my skin?",
        answer: "Check our product descriptions for skin type recommendations, or contact our support team for a personalized consultation.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-fabish-cream relative">
            <RenderingBadge mode="CSR" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-serif font-medium text-fabish-text mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 font-sans max-w-xl mx-auto">
                        We understand that skincare can be complex, so we&apos;ve gathered the most common questions to help guide you on your journey to healthy, beautiful skin. Find answers to your skincare concerns.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-fabish-text/10 rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openIndex === idx ? 'bg-brand-pink text-white' : 'hover:bg-gray-50'}`}
                            >
                                <span className="font-serif font-medium text-lg">{faq.question}</span>
                                {openIndex === idx ? (
                                    <Minus className="w-5 h-5 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 flex-shrink-0 text-fabish-pink" />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 text-gray-600 leading-relaxed font-sans bg-white">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
