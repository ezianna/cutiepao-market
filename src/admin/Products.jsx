import React, { useState } from "react";

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
    <div className="w-full min-h-screen bg-gray-900 text-white p-0">
      <div className="w-full px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Manajemen Produk</h1>
        {/* Form Tambah/Edit Produk */}
        <div className="mb-6 flex flex-wrap gap-2 items-center">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nama Produk" className="p-2 rounded text-black" />
          <input name="category" value={form.category} onChange={handleChange} placeholder="Kategori" className="p-2 rounded text-black" />
          <input name="price" value={form.price} onChange={handleChange} placeholder="Harga" className="p-2 rounded text-black" />
          <input name="stock" value={form.stock} onChange={handleChange} placeholder="Stok" className="p-2 rounded text-black" />
          <input name="seller" value={form.seller} onChange={handleChange} placeholder="Seller" className="p-2 rounded text-black" />
          {editingId ? (
            <button onClick={handleUpdate} className="bg-yellow-500 px-4 py-2 rounded">Update</button>
          ) : (
            <button onClick={handleAdd} className="bg-blue-600 px-4 py-2 rounded">Tambah Produk</button>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-800 bg-gray-800 rounded-lg">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-3">Nama</th>
                <th className="p-3">Kategori</th>
                <th className="p-3">Harga</th>
                <th className="p-3">Stok</th>
                <th className="p-3">Seller</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t border-gray-700">
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.category}</td>
                  <td className="p-3">{p.price}</td>
                  <td className="p-3">{p.stock}</td>
                  <td className="p-3">{p.seller}</td>
                  <td className="p-3">
                    <button onClick={() => handleEdit(p)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                    <button onClick={() => handleDelete(p.id)} className="bg-red-500 text-white px-2 py-1 rounded">Hapus</button>
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
