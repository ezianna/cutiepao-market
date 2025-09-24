import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded mb-6"
      />
      <p className="text-xl font-semibold text-blue-600">Rp {product.price.toLocaleString()}</p>
      <p className="text-gray-600 mt-2">Seller: {product.seller}</p>
      <p className="text-gray-600">Location: {product.location}</p>
      {/* bisa ditambah tombol Add to Cart, dsb */}
    </div>
  );
}

export default ProductDetail;
