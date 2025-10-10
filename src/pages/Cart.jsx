import React from "react";
import { useCart } from "../components/context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const items = cart.items || [];
  const total = items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  if (items.length === 0) {
    return <div className="p-6 text-center text-slate-300">Your cart is empty 🛒</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-slate-800 p-6 rounded-2xl shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b border-slate-700 pb-2">
              <div>
                <h2 className="font-semibold text-slate-100">{item.name}</h2>
                <p className="text-slate-300">Rp {item.price.toLocaleString("id-ID")} × {item.quantity || 1}</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => removeFromCart(item.id)} className="bg-red-600 hover:bg-red-700">Remove</Button>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-100">Total: Rp {total.toLocaleString("id-ID")}</h2>
          <div className="space-x-2">
            <Button onClick={clearCart} className="bg-slate-600 hover:bg-slate-700">Clear Cart</Button>
            <Link to="/checkout">
              <Button className="bg-green-600 hover:bg-green-700">Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
