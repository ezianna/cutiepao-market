import React, { useState } from "react";

const userData = {
  admin: { name: "Fauzi", role: "admin", email: "fauzi@email.com" },
  user: { name: "Fauzi", role: "user", email: "fauzi@email.com" },
};

export default function Account() {
  const [selectedRole, setSelectedRole] = useState("user");
  const user = userData[selectedRole];
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Akun Saya</h2>
      <div className="mb-4 flex gap-2">
        <button
          className={`px-4 py-2 rounded font-semibold border ${selectedRole === "user" ? "bg-cyan-600 text-white" : "bg-white text-cyan-600"}`}
          onClick={() => setSelectedRole("user")}
        >
          User
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold border ${selectedRole === "admin" ? "bg-cyan-600 text-white" : "bg-white text-cyan-600"}`}
          onClick={() => setSelectedRole("admin")}
        >
          Admin
        </button>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <p><span className="font-semibold">Nama:</span> {user.name}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <p><span className="font-semibold">Role:</span> {user.role}</p>
      </div>
      {user.role === "admin" && (
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="font-bold mb-2">Menu Admin</h3>
          <ul className="list-disc ml-5">
            <li>Kelola Produk</li>
            <li>Kelola User</li>
            <li>Lihat Statistik</li>
          </ul>
        </div>
      )}
    </div>
  );
}
