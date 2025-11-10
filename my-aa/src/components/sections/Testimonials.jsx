export default function Testimonials() {
    const testimonials = [
        {
            name: "Mary Wanjiku",
            role: "Nutritionist",
            comment:
                "GrainTowers cereals are my go-to recommendation for clients who want healthy, locally sourced breakfast options. Pure, crunchy, and full of energy!",
            img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Oscar Omondi",
            role: "Fitness Coach",
            comment:
                "I love starting my day with their oats and granola mix — tastes great and keeps me energized all morning. A truly premium Kenyan brand!",
            img: "https://images.unsplash.com/photo-1715005881129-266ccdd75e43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBpYyUyMG9mJTIwYSUyMGtlbnlhbiUyMCUyMGd1eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Grace Achieng",
            role: "Customer",
            comment:
                "I’ve switched completely to GrainTowers cereals — fresh taste, great quality, and I love supporting local farmers. 10/10!",
            img: "https://images.unsplash.com/photo-1709202967828-e1a7823ccdf6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBpYyUyMG9mJTIwYSUyMGtlbnlhbiUyMGxhZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        },
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-12">
                    What Our Customers Say
                </h2>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-amber-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <img
                                    src={t.img}
                                    alt={t.name}
                                    className="w-20 h-20 object-cover rounded-full border-4 border-amber-700"
                                />
                                <p className="text-gray-700 italic">“{t.comment}”</p>
                                <div>
                                    <h4 className="text-lg font-semibold text-amber-900">
                                        {t.name}
                                    </h4>
                                    <p className="text-sm text-amber-700">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
