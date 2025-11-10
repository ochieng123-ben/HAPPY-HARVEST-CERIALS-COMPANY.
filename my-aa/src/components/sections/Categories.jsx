export default function Categories() {
    const categories = [
        {
            name: "Crunchy Cornflakes",
            desc: "Golden and crispy flakes made from 100% natural maize.",
            img: "https://images.unsplash.com/photo-1616662707741-9f32deea4863?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvcm5mbGFrZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Nutty Granola",
            desc: "A wholesome mix of oats, nuts, and honey — baked to perfection.",
            img: "https://images.unsplash.com/photo-1668723969144-1a3aee809384?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdyYW5vbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Organic Oats",
            desc: "Rich in fiber and energy — your perfect healthy breakfast start.",
            img: "https://images.unsplash.com/photo-1759646850616-8bc3e6567ea5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9yZ2FuaWMlMjBvYXRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Fruit Muesli",
            desc: "A colorful blend of grains, fruits, and seeds for vitality.",
            img: "https://images.unsplash.com/photo-1560287820-f71eda3d75c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZydWl0JTIwbXVlc2xpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        },
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-12">
                    Explore Our Cereal Categories
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 p-4 text-left text-white">
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-sm opacity-90">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
