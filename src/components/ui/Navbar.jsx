import { Search, ShoppingCart, User, Sun, Moon } from "lucide-react";
import { useTheme } from "../components/context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-slate-900 text-slate-100 dark:bg-white dark:text-slate-900 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Kiri */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-lg font-bold">cutiepao</Link>
            <nav className="hidden md:flex gap-3 items-center">
              <Link to="/" className="px-3 py-1 rounded hover:bg-slate-800 dark:hover:bg-slate-200">Home</Link>
              <Link to="/notifications" className="px-3 py-1 rounded hover:bg-slate-800 dark:hover:bg-slate-200">Notifikasi</Link>
              <Link to="/account" className="px-3 py-1 rounded hover:bg-slate-800 dark:hover:bg-slate-200">Akun</Link>
            </nav>
          </div>

          {/* Tengah */}
          <div className="flex-1 mx-6 max-w-lg">
            <div className="relative">
              <input
                className="w-full bg-slate-800 text-slate-200 placeholder:text-slate-400 dark:bg-slate-100 dark:text-slate-800 rounded-full px-4 py-2 pl-10 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
                placeholder="Search produk, brand, dsb..."
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Search size={16} />
              </div>
            </div>
          </div>

          {/* Kanan */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded hover:bg-slate-800 dark:hover:bg-slate-200"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/cart" className="flex items-center gap-2 px-3 py-1 rounded hover:bg-slate-800 dark:hover:bg-slate-200">
              <ShoppingCart size={18} />
              <span className="hidden sm:inline text-sm">Cart</span>
            </Link>
            <Link to="/login" className="flex items-center gap-2 px-3 py-1 rounded hover:bg-slate-800 dark:hover:bg-slate-200">
              <User size={18} />
              <span className="hidden sm:inline text-sm">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
