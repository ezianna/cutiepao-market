import React, { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      category: "Elektronik",
      price: "22.000.000",
      stock: 10,
      seller: "Apple Store",
    },
  ]);
  const [form, setForm] = useState({ name: "", category: "", price: "", stock: "", seller: "" });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.name || !form.category || !form.price || !form.stock || !form.seller) return alert("Semua field wajib diisi");
    setProducts([...products, { ...form, id: Date.now() }]);
    setForm({ name: "", category: "", price: "", stock: "", seller: "" });
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setForm({ name: product.name, category: product.category, price: product.price, stock: product.stock, seller: product.seller });
  };

  const handleUpdate = () => {
    setProducts(products.map((p) => (p.id === editingId ? { ...form, id: editingId } : p)));
    setEditingId(null);
    setForm({ name: "", category: "", price: "", stock: "", seller: "" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Manajemen Produk</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 space-y-6">
        {/* Form */}
        <div className="flex flex-wrap gap-3 items-center">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nama Produk" className="px-3 py-2 border border-gray-200 rounded-lg min-w-[180px] focus:ring-2 focus:ring-indigo-400 outline-none" />
          <input name="category" value={form.category} onChange={handleChange} placeholder="Kategori" className="px-3 py-2 border border-gray-200 rounded-lg min-w-[140px] focus:ring-2 focus:ring-indigo-400 outline-none" />
          <input name="price" value={form.price} onChange={handleChange} placeholder="Harga" className="px-3 py-2 border border-gray-200 rounded-lg min-w-[140px] focus:ring-2 focus:ring-indigo-400 outline-none" />
          <input name="stock" value={form.stock} onChange={handleChange} placeholder="Stok" className="px-3 py-2 border border-gray-200 rounded-lg min-w-[80px] focus:ring-2 focus:ring-indigo-400 outline-none" />
          <input name="seller" value={form.seller} onChange={handleChange} placeholder="Seller" className="px-3 py-2 border border-gray-200 rounded-lg min-w-[140px] focus:ring-2 focus:ring-indigo-400 outline-none" />

          {editingId ? (
            <button onClick={handleUpdate} className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition">
              <Edit2 size={16} /> Update
            </button>
          ) : (
            <button onClick={handleAdd} className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
              <Plus size={16} /> Tambah Produk
            </button>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="p-3 text-left">Nama</th>
                <th className="p-3 text-left">Kategori</th>
                <th className="p-3 text-left">Harga</th>
                <th className="p-3 text-left">Stok</th>
                <th className="p-3 text-left">Seller</th>
                <th className="p-3 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.category}</td>
                  <td className="p-3">{p.price}</td>
                  <td className="p-3">{p.stock}</td>
                  <td className="p-3">{p.seller}</td>
                  <td className="p-3 flex gap-2">
                    <button onClick={() => handleEdit(p)} className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg transition">
                      <Edit2 size={14} /> Edit
                    </button>
                    <button onClick={() => handleDelete(p.id)} className="inline-flex items-center gap-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg transition">
                      <Trash2 size={14} /> Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-4 text-center text-gray-500">Belum ada produk.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
