// src/components/sections/Hero.jsx
export default function Hero() {
  return (
    <section
      className="w-full h-[80vh] bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1709236550338-e2bcc3beee70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VyZWFsJTIwc2hvcCUyMGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1200')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 to-yellow-100/80"></div>

      {/* Text Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-900 leading-tight mb-6">
          Fresh & Organic <br /> Cereals for Every Morning
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-6">
          Welcome to <span className="font-semibold text-amber-800">GrainTowers</span>, your home for farm-fresh cereals — from golden cornflakes to crunchy granola, grown and packaged with love in Kenya.
        </p>
        <button className="px-6 py-3 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all">
          Shop Now
        </button>
      </div>
    </section>
  );
}
