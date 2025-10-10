// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // <-- WAJIB ADA
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { CartProvider } from "./components/context/CartContext";
import { NotificationProvider } from "./components/context/NotificationContent";
import { AuthProvider } from "./components/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
