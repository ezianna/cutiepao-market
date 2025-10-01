import React from "react";
import { useCart } from "../components/context/CartContext"; // ✅ path sudah benar
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const items = cart.items || [];
  const total = items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  if (items.length === 0) {
    return <div className="p-6 text-center">Your cart is empty 🛒</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>
                Rp {item.price.toLocaleString("id-ID")} × {item.quantity || 1}
              </p>
            </div>
            <Button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 hover:bg-red-600"
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">
          Total: Rp {total.toLocaleString("id-ID")}
        </h2>
        <div className="space-x-2">
          <Button onClick={clearCart} className="bg-gray-500 hover:bg-gray-600">
            Clear Cart
          </Button>
          <Link to="/checkout">
            <Button className="bg-green-600 hover:bg-green-700">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
