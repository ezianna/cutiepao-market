import React from "react";

export function Button({
  children,
  className = "",
  variant = "solid",
  ...props
}) {
  const base =
    "px-4 py-2 rounded-xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500";
  const variants = {
    solid: "bg-cyan-500 text-white hover:bg-cyan-600",
    outline:
      "border border-cyan-500 text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700",
    ghost: "text-cyan-600 hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
