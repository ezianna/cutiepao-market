import React, { useState } from "react";

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
    <div className="w-full min-h-screen bg-gray-900 text-white p-0">
      <div className="w-full px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Manajemen Order / Transaksi</h1>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-800 bg-gray-800 rounded-lg">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-3">ID Order</th>
                <th className="p-3">User</th>
                <th className="p-3">Produk</th>
                <th className="p-3">Status</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t border-gray-700">
                  <td className="p-3">{o.orderId}</td>
                  <td className="p-3">{o.user}</td>
                  <td className="p-3">{o.product}</td>
                  <td className="p-3">{o.status}</td>
                  <td className="p-3">
                    <button onClick={() => handleStatus(o.id)} className="bg-green-600 text-white px-2 py-1 rounded">
                      Ubah Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
