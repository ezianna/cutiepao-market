// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Notifications from "./pages/Notifications";
import Account from "./pages/Account";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Semua route dibungkus Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="account" element={<Account />} />
  <Route path="product/:id" element={<ProductDetail />} />
  <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
