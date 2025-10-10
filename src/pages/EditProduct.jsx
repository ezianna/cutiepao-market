import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Produk berhasil diupdate!");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-slate-800 p-6 rounded-2xl shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Edit Produk</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nama Produk"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-700 border border-slate-700 rounded px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-600"
            required
          />
          <input
            type="number"
            placeholder="Harga"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full bg-slate-700 border border-slate-700 rounded px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-600"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full bg-slate-700 border border-slate-700 rounded px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
          <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded">Update</button>
        </form>
      </div>
    </div>
  );
}
