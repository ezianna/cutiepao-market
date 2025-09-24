import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const featuredProducts = [
  { id: 1, name: "Smartphone", price: "$299" },
  { id: 2, name: "Headphones", price: "$99" },
  { id: 3, name: "Shoes", price: "$79" },
];

export default function FeaturedSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition">
            <CardContent>
              <div className="h-32 bg-gray-100 rounded-lg mb-4" />
              <h3 className="font-medium text-gray-800">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{product.price}</p>
              <Button className="w-full">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
