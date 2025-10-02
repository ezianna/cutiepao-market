import React from "react";
import { useAuth } from "../components/context/AuthContext";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
      <div className="mb-4">Login sebagai: <span className="font-semibold">{user?.email}</span></div>
      <button onClick={logout} className="mb-8 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-gray-800 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Manajemen Produk</h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Tambah produk</li>
            <li>Edit produk</li>
            <li>Hapus produk</li>
            <li>Ubah harga produk</li>
          </ul>
        </div>
        <div className="p-6 bg-gray-800 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Statistik & Grafik</h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Lihat statistik checkout</li>
            <li>Grafik pembelian per kategori</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-gray-400 text-sm">*UI dan fitur detail bisa disesuaikan nanti</div>
    </div>
  );
}
