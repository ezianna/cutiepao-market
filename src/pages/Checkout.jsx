import React from "react";
import { useCart } from "../components/context/CartContext.jsx";
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
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.name} × {item.quantity || 1}
                </span>
                <span>Rp {item.price.toLocaleString("id-ID")}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mt-4">
            Total: Rp {total.toLocaleString("id-ID")}
          </h2>

          <Button
            onClick={handlePlaceOrder}
            className="bg-blue-600 hover:bg-blue-700 mt-4"
          >
            Place Order
          </Button>
        </>
      )}
    </div>
  );
}
