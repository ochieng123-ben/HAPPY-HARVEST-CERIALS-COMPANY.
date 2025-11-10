export default function Products() {
    const products = [
        {
            name: "Golden Cornflakes",
            desc: "Crispy, golden flakes made from sun‑ripened Kenyan maize.",
            price: "KSh 450",
            img: "https://images.unsplash.com/photo-1610627145212-0c553d45405a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNvcm5mbGFrZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Classic Granola Mix",
            desc: "A crunchy blend of oats, almonds, and natural honey.",
            price: "KSh 550",
            img: "https://images.unsplash.com/photo-1724441980123-aca7911329d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3Jhbm9sYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Organic Oats",
            desc: "Pure rolled oats rich in fiber and perfect for your mornings.",
            price: "KSh 400",
            img: "https://images.unsplash.com/photo-1542990253-a781e04c0082?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG9hdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Fruit & Nut Muesli",
            desc: "A nutritious mix of grains, fruits, and crunchy nuts.",
            price: "KSh 600",
            img: "https://images.unsplash.com/photo-1619854232004-82cb7160cd65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXQlMjZudXRzJTIwbXVlc2xpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        },
    ];

    return (
        <section className="w-full bg-amber-50 dark:bg-dark/80 py-20 lg:py-28 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-400 mb-12">
                    Our Bestselling Cereals
                </h2>

                {/* Product Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-dark/70 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-5 space-y-2 text-left">
                                <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-400">
                                    {item.name}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    {item.desc}
                                </p>
                                <p className="text-amber-700 dark:text-amber-500 font-semibold text-lg mt-2">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
