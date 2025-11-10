import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check saved preference or system default
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Apply theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // 🔄 Listen for theme changes in other tabs
  useEffect(() => {
    const syncTheme = (event) => {
      if (event.key === "theme") {
        setDarkMode(event.newValue === "dark");
      }
    };

    window.addEventListener("storage", syncTheme);
    return () => window.removeEventListener("storage", syncTheme);
  }, []);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-amber-200 dark:bg-amber-800 transition-colors duration-300 ease-in-out"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun className="text-yellow-300" size={20} />
      ) : (
        <Moon className="text-amber-900" size={20} />
      )}
    </button>
  );
}
