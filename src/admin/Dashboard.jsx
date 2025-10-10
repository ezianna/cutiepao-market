import React from "react";
import { useAuth } from "../components/context/AuthContext";
import { LogOut, Box, BarChart2 } from "lucide-react";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  return (
    <div className="min-h-screen">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">Login sebagai: <span className="font-medium text-gray-800">{user?.email}</span></div>
          <button
            onClick={logout}
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Manajemen Produk</h2>
              <ul className="list-disc ml-5 text-gray-600 space-y-1">
                <li>Tambah produk</li>
                <li>Edit produk</li>
                <li>Hapus produk</li>
                <li>Ubah harga produk</li>
              </ul>
            </div>
            <div className="text-indigo-600">
              <Box size={32} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Statistik & Grafik</h2>
              <ul className="list-disc ml-5 text-gray-600 space-y-1">
                <li>Lihat statistik checkout</li>
                <li>Grafik pembelian per kategori</li>
              </ul>
            </div>
            <div className="text-indigo-600">
              <BarChart2 size={32} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-500">*UI dan fitur detail bisa disesuaikan nanti</div>
    </div>
  );
}
