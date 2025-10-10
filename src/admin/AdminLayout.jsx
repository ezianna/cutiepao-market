import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Store,
  Tags,
} from "lucide-react";

export default function AdminLayout() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Produk", path: "/admin/products", icon: <Package size={18} /> },
    { name: "Order", path: "/admin/orders", icon: <ShoppingCart size={18} /> },
    { name: "Seller", path: "/admin/sellers", icon: <Store size={18} /> },
    { name: "User", path: "/admin/users", icon: <Users size={18} /> },
    { name: "Kategori", path: "/admin/categories", icon: <Tags size={18} /> },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0d1117] text-gray-200 flex flex-col py-6 px-4 shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center text-white">cutiepao admin</h2>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md"
                    : "hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen p-8 bg-gray-100 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
