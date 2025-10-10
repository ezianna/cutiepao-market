import React, { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";

export default function Categories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Elektronik" },
    { id: 2, name: "Fashion" },
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    if (!newCategory) return alert("Nama kategori wajib diisi");
    setCategories([...categories, { id: Date.now(), name: newCategory }]);
    setNewCategory("");
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((c) => c.id !== id));
  };

  const handleEdit = (id, name) => {
    setEditingId(id);
    setNewCategory(name);
  };

  const handleUpdate = () => {
    setCategories(
      categories.map((c) =>
        c.id === editingId ? { ...c, name: newCategory } : c
      )
    );
    setEditingId(null);
    setNewCategory("");
  };

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Manajemen Kategori</h1>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        {/* Form */}
        <div className="flex flex-wrap gap-3 items-center mb-6">
          <input
            type="text"
            placeholder="Nama Kategori"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="flex-1 min-w-[200px] px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          {editingId ? (
            <button
              onClick={handleUpdate}
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
            >
              <Edit2 size={16} /> Update
            </button>
          ) : (
            <button
              onClick={handleAdd}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
            >
              <Plus size={16} /> Tambah
            </button>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="text-left p-3 font-medium">Nama Kategori</th>
                <th className="text-left p-3 font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c, idx) => (
                <tr
                  key={c.id}
                  className={`border-b last:border-b-0 transition-colors hover:bg-gray-50`}
                >
                  <td className="p-3">{c.name}</td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(c.id, c.name)}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg transition"
                      >
                        <Edit2 size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(c.id)}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                      >
                        <Trash2 size={14} /> Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {categories.length === 0 && (
                <tr>
                  <td colSpan={2} className="p-4 text-center text-gray-500">
                    Belum ada kategori.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
