export default function Stats() {
  const stats = [
    { number: "10+", label: "Years of Excellence" },
    { number: "500+", label: "Farmers Partnered" },
    { number: "1M+", label: "Happy Customers" },
    { number: "50+", label: "Products Nationwide" },
  ];

  return (
    <section className="w-full bg-amber-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-4xl md:text-5xl font-bold text-amber-800">
              {item.number}
            </h3>
            <p className="text-gray-700 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
