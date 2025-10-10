import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useCart } from "./context/CartContext";

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  image,
  seller,
  location,
}) {
  const { addToCart } = useCart();
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
          {discount && (
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 text-xs font-bold text-black shadow-md">
                -{discount}%
              </span>
            </div>
          )}

          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="font-semibold text-sm md:text-base line-clamp-2 min-h-[44px] text-gray-800 transition-colors">
            {name}
          </h3>

          {/* Price */}
          <div className="flex flex-col gap-0">
            <span className="text-lg md:text-xl font-extrabold text-emerald-600">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>

          {/* Rating & Seller */}
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{rating}</span>
              <span className="text-gray-400">({reviews})</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 truncate">
            {seller} \u2022 {location}
          </p>

          {/* CTA Button */}
          <Button
            className="w-full h-10 text-sm gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:brightness-105 transition-transform duration-200 shadow-md flex items-center justify-center"
            onClick={() => addToCart({ id, name, price, image })}
          >
            <ShoppingCart className="h-4 w-4" />
            Keranjang
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
