import React, { useState } from "react";
import { Plus, Edit2 } from "lucide-react";

export default function Sellers() {
  const [sellers, setSellers] = useState([
    { id: 1, name: "Apple Store", status: "Aktif" },
  ]);
  const [form, setForm] = useState({ name: "" });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.name) return alert("Nama seller wajib diisi");
    setSellers([...sellers, { id: Date.now(), name: form.name, status: "Aktif" }]);
    setForm({ name: "" });
  };

  const handleEdit = (seller) => {
    setEditingId(seller.id);
    setForm({ name: seller.name });
  };

  const handleUpdate = () => {
    setSellers(sellers.map((s) => (s.id === editingId ? { ...s, name: form.name } : s)));
    setEditingId(null);
    setForm({ name: "" });
  };

  const handleDeactivate = (id) => {
    setSellers(sellers.map((s) => (s.id === id ? { ...s, status: "Nonaktif" } : s)));
  };

  return (
    <div className="min-h-screen">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Manajemen Seller</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        {/* Form */}
        <div className="mb-4 flex gap-3 items-center">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nama Seller" className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none" />
          {editingId ? (
            <button onClick={handleUpdate} className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition">
              <Edit2 size={16} /> Update
            </button>
          ) : (
            <button onClick={handleAdd} className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
              <Plus size={16} /> Tambah Seller
            </button>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="p-3 text-left">Nama Seller</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((s) => (
                <tr key={s.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3">{s.name}</td>
                  <td className="p-3">
                    <span className={s.status === "Aktif" ? "text-green-700 bg-green-100 px-2 py-1 rounded-full text-sm" : "text-red-700 bg-red-100 px-2 py-1 rounded-full text-sm"}>
                      {s.status}
                    </span>
                  </td>
                  <td className="p-3 flex gap-2">
                    <button onClick={() => handleEdit(s)} className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg transition">
                      <Edit2 size={14} /> Edit
                    </button>
                    <button onClick={() => handleDeactivate(s.id)} className="inline-flex items-center gap-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg transition">
                      Nonaktifkan
                    </button>
                  </td>
                </tr>
              ))}
              {sellers.length === 0 && (
                <tr>
                  <td colSpan={3} className="p-4 text-center text-gray-500">Belum ada seller.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
