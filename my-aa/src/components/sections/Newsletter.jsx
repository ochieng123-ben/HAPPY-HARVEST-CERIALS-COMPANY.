export default function Newsletter() {
  return (
    <section className="w-full bg-amber-100 py-20 relative overflow-hidden">
      {/* Background Overlay (optional soft texture or gradient) */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625121329659-0adad23b4ef4?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900">
          Join the <span className="text-amber-700">GrainTowers</span> Family
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Get <span className="font-semibold text-amber-800">10% off</span> your first
          order and stay updated on new cereals, offers, and healthy recipes.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-full border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
