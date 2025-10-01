import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg font-semibold text-blue-600 mb-2">
        Rp {product.price.toLocaleString("id-ID")}
      </p>
      <p className="text-gray-600">Seller: {product.seller}</p>
      <p className="text-gray-600">Location: {product.location}</p>
    </div>
  );
}
