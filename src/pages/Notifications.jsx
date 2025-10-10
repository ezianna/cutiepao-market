import React from "react";

export default function Notifications() {
  const notifications = [
    { id: 1, message: "Pesanan Anda telah dikirim." },
    { id: 2, message: "Promo diskon 20% untuk produk elektronik!" },
    { id: 3, message: "Akun Anda berhasil diperbarui." },
  ];
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-slate-800 p-6 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Notifikasi</h2>
        <ul className="space-y-3">
          {notifications.length === 0 ? (
            <li className="bg-slate-700 p-4 rounded text-center text-slate-400">Belum ada notifikasi.</li>
          ) : (
            notifications.map((notif) => (
              <li key={notif.id} className="bg-slate-700 p-4 rounded border-l-4 border-sky-600 text-slate-100">
                {notif.message}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
