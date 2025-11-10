import { useState } from "react";
import ThemeToggle from "../ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-cream dark:bg-dark py-4 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary dark:text-accent">
          GrainTowers
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-dark dark:text-accent hover:underline">
            About
          </a>
          <a href="#products" className="text-dark dark:text-accent hover:underline">
            Products
          </a>
          <a href="#contact" className="text-dark dark:text-accent hover:underline">
            Contact
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md bg-amber-200 dark:bg-amber-800 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream dark:bg-dark px-6 py-4 space-y-4 shadow-md transition-all">
          <a href="#about" className="block text-dark dark:text-accent hover:underline">
            About
          </a>
          <a href="#products" className="block text-dark dark:text-accent hover:underline">
            Products
          </a>
          <a href="#contact" className="block text-dark dark:text-accent hover:underline">
            Contact
          </a>
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}
