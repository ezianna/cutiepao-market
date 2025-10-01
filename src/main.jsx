// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CartProvider } from "./components/context/CartContext";
import { NotificationProvider } from "./components/context/NotificationContent";
import { AuthProvider } from "./components/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
