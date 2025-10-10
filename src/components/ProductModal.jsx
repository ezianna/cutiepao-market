import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function ProductModal({ product, onClose, onAddToCart }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!product) return null;

  const { name, price, image } = product;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="relative">
          <img src={image} alt={name} className="w-full h-64 object-cover md:h-80" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 bg-white/80 hover:bg-white p-1 rounded-full shadow"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">{name}</h2>
            <div className="text-lg font-extrabold text-emerald-600">{formatPrice(price)}</div>
          </div>

          <p className="text-sm text-gray-600">
            Ini adalah deskripsi singkat produk. Gunakan teks ini sebagai contoh agar tampilan modal
            terlihat lengkap. Spesifikasi lengkap ada di bawah.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-800 mb-2">Spesifikasi</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Warna: Random</li>
                <li>• Bahan: Contoh Material</li>
                <li>• Dimensi: 10 x 5 x 2 cm</li>
                <li>• Berat: 150g</li>
                <li>• Garansi: 1 tahun (dummy)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-800 mb-2">Ulasan Pelanggan</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Alya</div>
                    <div className="text-yellow-400">★★★★☆</div>
                  </div>
                  <div className="text-gray-600">Produk bagus, sesuai deskripsi. Packing rapi.</div>
                </div>

                <div className="text-sm">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Budi</div>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                  <div className="text-gray-600">Cepat sampai dan kualitas memuaskan.</div>
                </div>

                <div className="text-sm">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Citra</div>
                    <div className="text-yellow-400">★★★☆☆</div>
                  </div>
                  <div className="text-gray-600">Lumayan, tapi packaging bisa ditingkatkan.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => onAddToCart(product)}
              className="flex-1 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white py-2 font-semibold shadow hover:brightness-105 transition"
            >
              Tambah ke Keranjang
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm hover:bg-gray-50 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
