import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function UserHome() {
  return (
    <section className="bg-gray-50 py-12 w-full">
      <div className="max-w-screen-2xl mx-auto w-full px-2 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-2">All Products</h1>
        <p className="text-center text-gray-600 mb-10">
          Total: {products.length} produk
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-10 gap-y-12 w-full">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
