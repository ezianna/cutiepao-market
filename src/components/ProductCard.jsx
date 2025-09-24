import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

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
  return (
    <Link to={`/product/${id}`}>
      <Card className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 cursor-pointer">
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
            <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-cyan-700 transition-colors">
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
            <p className="text-xs text-gray-400">
              {seller} • {location}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
