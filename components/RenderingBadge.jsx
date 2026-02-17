export default function RenderingBadge({ mode }) {
    const colors = {
        SSG: "bg-green-100 text-green-800 border-green-200",
        ISR: "bg-blue-100 text-blue-800 border-blue-200",
        SSR: "bg-purple-100 text-purple-800 border-purple-200",
        CSR: "bg-orange-100 text-orange-800 border-orange-200",
        Static: "bg-gray-100 text-gray-800 border-gray-200",
    };

    const selectedColor = colors[mode] || colors.Static;

    return (
        <div className="absolute top-4 left-4 z-50 animate-fade-in">
            <span
                className={`px-3 py-1 rounded-full text-xs font-bold border shadow-sm backdrop-blur-sm ${selectedColor}`}
            >
                Mode: {mode}
            </span>
        </div>
    );
}
