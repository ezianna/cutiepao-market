import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({ items: [] }); // Ubah struktur untuk konsisten

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.items.find((item) => item.id === product.id);
      if (existing) {
        return {
          ...prev,
          items: prev.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      }
      return {
        ...prev,
        items: [...prev.items, { ...product, quantity: 1 }]
      };
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id)
    }));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    }));
  };

  const clearCart = () => setCart({ items: [] });

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}