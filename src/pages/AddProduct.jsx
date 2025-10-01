import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Simpan produk baru ke state/global (implementasi lanjut)
    alert("Produk berhasil ditambahkan!");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tambah Produk</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama Produk"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="number"
          placeholder="Harga"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Simpan
        </button>
      </form>
    </div>
  );
}
