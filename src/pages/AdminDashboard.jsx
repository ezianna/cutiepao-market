import React from "react";
import { useAuth } from "../components/context/AuthContext";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  return (
    <div className="max-w-4xl mx-auto p-8 mt-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-4">Login sebagai: <span className="font-semibold">{user?.email}</span></div>
      <button onClick={logout} className="mb-8 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-bold mb-2">Manajemen Produk</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Tambah produk</li>
            <li>Edit produk</li>
            <li>Hapus produk</li>
            <li>Ubah harga produk</li>
          </ul>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-bold mb-2">Statistik & Grafik</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Lihat statistik checkout</li>
            <li>Grafik pembelian per kategori</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-gray-500 text-sm">*UI dan fitur detail bisa disesuaikan nanti</div>
    </div>
  );
}
