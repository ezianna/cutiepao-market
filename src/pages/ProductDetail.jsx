import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400 text-lg">
        Produk tidak ditemukan 😢
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gambar produk */}
          <div className="bg-gray-100 p-6 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl w-full h-auto object-cover max-h-[400px]"
            />
          </div>

          {/* Detail produk */}
          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-2xl text-green-600 font-bold mb-2">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
            {product.discount && (
              <p className="text-gray-400 line-through mb-4">
                Rp{" "}
                {(product.price / (1 - product.discount / 100)).toLocaleString(
                  "id-ID"
                )}
              </p>
            )}

            <p className="text-gray-600 mb-2">
              Seller: <span className="font-medium">{product.seller}</span>
            </p>
            <p className="text-gray-600 mb-6">
              Lokasi: <span className="font-medium">{product.location}</span>
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow transition-all">
                Tambah ke Keranjang
              </button>
              <Link
                to="/"
                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-all"
              >
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
