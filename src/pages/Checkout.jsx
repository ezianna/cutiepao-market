import React from "react";
import { useCart } from "../components/context/CartContext";
import { Button } from "../components/ui/button";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const items = cart.items || [];
  const total = items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handlePlaceOrder = () => {
    alert("Order placed successfully! ✅");
    clearCart();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-slate-800 p-6 rounded-2xl shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>

        {items.length === 0 ? (
          <p className="text-slate-300">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between text-slate-100">
                  <span>{item.name} × {item.quantity || 1}</span>
                  <span>Rp {item.price.toLocaleString("id-ID")}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold mt-4 text-slate-100">Total: Rp {total.toLocaleString("id-ID")}</h2>

            <Button onClick={handlePlaceOrder} className="bg-sky-600 hover:bg-sky-700 mt-4">Place Order</Button>
          </>
        )}
      </div>
    </div>
  );
}
