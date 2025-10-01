import React from "react";

export default function Notifications() {
  // Dummy data
  const notifications = [
    { id: 1, message: "Pesanan Anda telah dikirim." },
    { id: 2, message: "Promo diskon 20% untuk produk elektronik!" },
    { id: 3, message: "Akun Anda berhasil diperbarui." },
  ];
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Notifikasi</h2>
      <ul className="space-y-3">
        {notifications.length === 0 ? (
          <li className="bg-white p-4 rounded shadow text-center text-gray-400">Belum ada notifikasi.</li>
        ) : (
          notifications.map((notif) => (
            <li key={notif.id} className="bg-white p-4 rounded shadow border-l-4 border-cyan-600">
              {notif.message}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
