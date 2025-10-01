import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  // TODO: Ambil data produk berdasarkan id
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Update produk di state/global (implementasi lanjut)
    alert("Produk berhasil diupdate!");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Produk</h1>
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
        <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
          Update
        </button>
      </form>
    </div>
  );
}
