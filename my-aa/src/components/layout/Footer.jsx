import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-amber-900 text-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">GrainTowers</h3>
          <p className="text-amber-100 text-sm leading-relaxed">
            Nourishing every morning with the natural goodness of Kenyan grains.
            Healthy, local, and full of energy — that’s the GrainTowers promise.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-amber-200">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Products</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-amber-200">Get in Touch</h4>
          <p className="text-sm text-amber-100">
            📍 Nairobi, Kenya <br />
            📞 +254 712 345 678 <br />
            ✉️ info@graintowers.co.ke
          </p>

          <div className="flex items-center gap-4 mt-3">
            <a href="#" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-amber-200 mt-10 border-t border-amber-800 pt-6">
        © {new Date().getFullYear()} GrainTowers. All rights reserved.
      </div>
    </footer>
  );
}
