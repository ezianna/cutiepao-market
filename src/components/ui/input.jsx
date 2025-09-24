import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full border border-gray-300 bg-gray-50 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition ${className}`}
      {...props}
    />
  );
}
