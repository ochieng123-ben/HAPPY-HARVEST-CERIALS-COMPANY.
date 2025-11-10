// src/components/sections/About.jsx
export default function About() {
  return (
    <section className="w-full bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-dark/80 dark:to-dark/90 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-8">
        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1636785348848-2ee5782485db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNlcmVhbCUyMHNob3AlMjBhZnJpY2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
            alt="Bowl of cereal on a table"
            className="rounded-2xl shadow-lg w-full max-h-80 object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-400">
            Our Story — From the Fields to Your Table
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            At <span className="font-semibold text-amber-800 dark:text-amber-400">GrainTowers</span>,
            we believe every great day begins with a healthy breakfast. Our cereals are sourced directly from trusted Kenyan farmers and crafted to deliver nutrition, taste, and freshness.
          </p>
          <button className="px-6 py-2 bg-amber-700 dark:bg-amber-600 text-white rounded-full hover:bg-amber-800 dark:hover:bg-amber-500 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
