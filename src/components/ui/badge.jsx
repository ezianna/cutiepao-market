import React from "react";

export function Badge({ children, className = "", variant = "info" }) {
  const variants = {
    info: "bg-cyan-100 text-cyan-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-block text-xs font-medium px-2.5 py-1 rounded-lg ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
