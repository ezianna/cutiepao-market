import React, { useState } from "react";
import { RefreshCw } from "lucide-react";

export default function Orders() {
  const [orders, setOrders] = useState([
    { id: 1, orderId: "ORD001", user: "fauzi@gmail.com", product: "iPhone 15 Pro", status: "Pending" },
  ]);

  const handleStatus = (id) => {
    setOrders(
      orders.map((o) =>
        o.id === id
          ? { ...o, status: o.status === "Pending" ? "Selesai" : "Pending" }
          : o
      )
    );
  };

  return (
    <div className="min-h-screen">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Manajemen Order / Transaksi</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="p-3 text-left">ID Order</th>
                <th className="p-3 text-left">User</th>
                <th className="p-3 text-left">Produk</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3">{o.orderId}</td>
                  <td className="p-3">{o.user}</td>
                  <td className="p-3">{o.product}</td>
                  <td className="p-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-sm ${
                      o.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                    }`}>
                      {o.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleStatus(o.id)}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
                    >
                      <RefreshCw size={14} /> Ubah Status
                    </button>
                  </td>
                </tr>
              ))}

              {orders.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-gray-500">Belum ada order.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
