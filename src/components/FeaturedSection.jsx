import React from "react";
import ProductCard from "./ProductCard";

export default function FeaturedSection({ title, subtitle, products }) {
  // Jika tidak ada produk, tampilkan pesan
  if (!products || products.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-6">{subtitle}</p>
        <p className="text-gray-500">No products available</p>
      </section>
    );
  }

  return (
    <section className="w-full px-2 sm:px-4 py-10">
      {/* Judul & Subjudul */}
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-6">{subtitle}</p>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
