import React, { useState } from "react";

const userData = {
  admin: { name: "admin", role: "admin", email: "admin@email.com" },
  user: { name: "fauzi", role: "user", email: "fauzi@email.com" },
};

export default function Account() {
  const [selectedRole, setSelectedRole] = useState("user");
  const user = userData[selectedRole];
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-slate-800 p-6 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Akun Saya</h2>
        <div className="mb-4 flex gap-2">
          <button
            className={`px-4 py-2 rounded font-semibold border ${selectedRole === "user" ? "bg-sky-600 text-white" : "bg-slate-700 text-slate-200"}`}
            onClick={() => setSelectedRole("user")}
          >
            User
          </button>
          <button
            className={`px-4 py-2 rounded font-semibold border ${selectedRole === "admin" ? "bg-sky-600 text-white" : "bg-slate-700 text-slate-200"}`}
            onClick={() => setSelectedRole("admin")}
          >
            Admin
          </button>
        </div>

        <div className="bg-slate-700 p-4 rounded-lg mb-4">
          <p><span className="font-semibold text-slate-200">Nama:</span> <span className="text-slate-100">{user.name}</span></p>
          <p><span className="font-semibold text-slate-200">Email:</span> <span className="text-slate-100">{user.email}</span></p>
          <p><span className="font-semibold text-slate-200">Role:</span> <span className="text-slate-100">{user.role}</span></p>
        </div>

        {user.role === "admin" && (
          <div className="bg-slate-700 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-slate-100">Menu Admin</h3>
            <ul className="list-disc ml-5 text-slate-300">
              <li>Kelola Produk</li>
              <li>Kelola User</li>
              <li>Lihat Statistik</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
