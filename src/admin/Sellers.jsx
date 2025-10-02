import React, { useState } from "react";

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
    <div className="w-full min-h-screen bg-gray-900 text-white p-0">
      <div className="w-full px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Manajemen Seller</h1>
        {/* Form Tambah/Edit Seller */}
        <div className="mb-6 flex gap-2 items-center">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nama Seller" className="p-2 rounded text-black" />
          {editingId ? (
            <button onClick={handleUpdate} className="bg-yellow-500 px-4 py-2 rounded">Update</button>
          ) : (
            <button onClick={handleAdd} className="bg-blue-600 px-4 py-2 rounded">Tambah Seller</button>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-800 bg-gray-800 rounded-lg">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-3">Nama Seller</th>
                <th className="p-3">Status</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((s) => (
                <tr key={s.id} className="border-t border-gray-700">
                  <td className="p-3">{s.name}</td>
                  <td className="p-3">{s.status}</td>
                  <td className="p-3">
                    <button onClick={() => handleEdit(s)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                    <button onClick={() => handleDeactivate(s.id)} className="bg-red-500 text-white px-2 py-1 rounded">Nonaktifkan</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
