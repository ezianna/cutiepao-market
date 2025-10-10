import React, { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, email: "fauzi@gmail.com", status: "Aktif" },
  ]);

  const handleBan = (id) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, status: "Banned" } : u)));
  };

  return (
    <div className="min-h-screen">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Manajemen User</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3">{u.email}</td>
                  <td className="p-3">
                    <span className={u.status === "Aktif" ? "text-green-700 bg-green-100 px-2 py-1 rounded-full text-sm" : "text-red-700 bg-red-100 px-2 py-1 rounded-full text-sm"}>
                      {u.status}
                    </span>
                  </td>
                  <td className="p-3">
                    {u.status !== "Banned" ? (
                      <button onClick={() => handleBan(u.id)} className="inline-flex items-center gap-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg transition">Ban User</button>
                    ) : (
                      <span className="text-red-500 font-medium">Banned</span>
                    )}
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={3} className="p-4 text-center text-gray-500">Belum ada user.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
