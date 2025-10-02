import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useCart } from "../components/context/CartContext";

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
    <Card className="group overflow-hidden border border-border/40 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
          {discount && (
            <div className="absolute top-2 left-2 z-10">
              <span className="inline-flex items-center rounded-md bg-red-500 px-2 py-0.5 text-xs font-semibold text-white shadow">
                -{discount}%
              </span>
            </div>
          )}
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="font-semibold text-sm line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Price */}
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold text-foreground">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="text-xs text-gray-500 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>

          {/* Rating & Seller */}
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
              <span>({reviews})</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 truncate">
            {seller} • {location}
          </p>

          {/* CTA Button */}
          <Button
            className="w-full h-9 text-sm gap-2 bg-primary text-white hover:bg-primary/90 transition"
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
