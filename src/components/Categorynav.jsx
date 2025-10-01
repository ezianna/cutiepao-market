import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const categories = [
  "Electronics",
  "Fashion",
  "Home",
  "Sports",
  "Books",
  "Toys",
];

export default function CategoryNav() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center gap-3 py-3">
          {categories.map((cat, idx) => (
            <li key={idx}>
              <Button
                variant="outline"
                className="text-sm px-4 py-1.5 rounded-lg"
                onClick={() => navigate(`/category/${cat.toLowerCase()}`)}
              >
                {cat}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
