import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col py-8 px-4 border-r border-gray-800">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/admin/products" className="hover:bg-gray-800 rounded px-3 py-2">Produk</Link>
          <Link to="/admin/orders" className="hover:bg-gray-800 rounded px-3 py-2">Order</Link>
          <Link to="/admin/sellers" className="hover:bg-gray-800 rounded px-3 py-2">Seller</Link>
          <Link to="/admin/users" className="hover:bg-gray-800 rounded px-3 py-2">User</Link>
          <Link to="/admin/categories" className="hover:bg-gray-800 rounded px-3 py-2">Kategori</Link>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-0 w-full min-h-screen bg-gray-900">
        <Outlet />
      </main>
    </div>
  );
}
