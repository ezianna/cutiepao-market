import React from "react";
import { useAuth } from "../components/context/AuthContext";

export default function AdminDashboard() {
  const { user } = useAuth();

  if (!user || user.role !== "admin") {
    return <div className="p-6">Access Denied 🚫</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>Manage products, users, and orders here.</p>
    </div>
  );
}
