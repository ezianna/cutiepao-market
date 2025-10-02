import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-10">
      {/* Title Section */}
      <h1 className="text-3xl font-bold mb-2 text-center">All Products</h1>
      <p className="mb-8 text-gray-600 text-center">
        Total: {products.length} produk
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
