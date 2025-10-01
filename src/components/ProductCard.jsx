import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  discount,
  seller,
  location,
}) {
  const { role } = useAuth();
  const { addToCart } = useCart();
  return (
    <Card className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <Link to={`/product/${id}`} className="block">
        <CardContent className="p-0">
          {/* Gambar */}
          <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {discount && (
              <span className="absolute top-2 left-2 bg-cyan-600 text-white text-xs font-medium px-2 py-1 rounded-md">
                -{discount}%
              </span>
            )}
          </div>
          {/* Info Produk */}
          <div className="p-4">
            <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-cyan-700 transition-colors">
              {name}
            </h3>
            {/* Harga */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-base font-bold text-cyan-700">
                Rp {price.toLocaleString("id-ID")}
              </span>
              {originalPrice && (
                <span className="text-xs line-through text-gray-400">
                  Rp {originalPrice.toLocaleString("id-ID")}
                </span>
              )}
            </div>
            {/* Rating & Ulasan */}
            <div className="flex items-center text-xs text-gray-500 mb-2">
              <Star className="w-3 h-3 text-yellow-400 mr-1" />
              {rating} ({reviews})
            </div>
            {/* Seller */}
            <p className="text-xs text-gray-400 mb-2">
              {seller} • {location}
            </p>
          </div>
        </CardContent>
      </Link>
      <div className="px-4 pb-4 mt-auto">
        <Button
          className="w-full bg-cyan-600 text-white hover:bg-cyan-700"
          onClick={() => {
            addToCart({ id, name, price, image });
            window.alert('Barang berhasil ditambahkan ke keranjang!');
          }}
        >
          Tambah ke Keranjang
        </Button>
      </div>
        {/* Tombol Edit dan Delete hanya untuk admin */}
        {role === "admin" && (
          <div className="flex gap-2 mt-2">
            <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</button>
            <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
          </div>
        )}
    </Card>
  );
}
