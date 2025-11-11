// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { createClient } from "@supabase/supabase-js"
import { CartProvider } from "./components/context/CartContext";
import { NotificationProvider } from "./components/context/NotificationContent";
import { AuthProvider } from "./components/context/AuthContext";

const supabaseUrl = "postgresql://postgres:[YOUR_PASSWORD]@db.gvpbjrosbllmuhxnxern.supabase.co:5432/postgres";
const supabaseAnonKey = "fpn121314";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
