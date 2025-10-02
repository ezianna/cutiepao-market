import React, { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, email: "fauzi@gmail.com", status: "Aktif" },
  ]);

  const handleBan = (id) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, status: "Banned" } : u)));
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-0">
      <div className="w-full px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Manajemen User</h1>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-800 bg-gray-800 rounded-lg">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-3">Email</th>
                <th className="p-3">Status</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-t border-gray-700">
                  <td className="p-3">{u.email}</td>
                  <td className="p-3">{u.status}</td>
                  <td className="p-3">
                    {u.status !== "Banned" ? (
                      <button onClick={() => handleBan(u.id)} className="bg-red-500 text-white px-2 py-1 rounded">Ban User</button>
                    ) : (
                      <span className="text-red-400">Banned</span>
                    )}
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
