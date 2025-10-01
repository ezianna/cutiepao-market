import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <p className="mb-4 text-gray-600">Total: {products.length} produk</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
