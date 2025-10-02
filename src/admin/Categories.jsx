import React, { useState } from "react";

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
    <div className="w-full min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Manajemen Kategori</h1>

      {/* Form Tambah/Edit */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Nama Kategori"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="p-2 rounded text-black"
        />
        {editingId ? (
          <button
            onClick={handleUpdate}
            className="ml-2 bg-yellow-500 px-4 py-2 rounded"
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="ml-2 bg-blue-600 px-4 py-2 rounded"
          >
            Tambah
          </button>
        )}
      </div>

      {/* Tabel */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-800 bg-gray-800 rounded-lg">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="p-3">Nama Kategori</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.id} className="border-t border-gray-700">
                <td className="p-3">{c.name}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleEdit(c.id, c.name)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
