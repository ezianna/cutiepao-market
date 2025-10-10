import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

export default function UserHome() {
  return (
    <section className="bg-gray-50 dark:bg-slate-900 py-12 w-full min-h-screen transition-colors duration-300">
      <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
          All Products
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Total: {products.length} produk
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 w-full">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 dark:text-white group-hover:text-indigo-500 line-clamp-2 mb-2">
                  {product.name}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-bold text-lg">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {product.seller || "Unknown seller"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
