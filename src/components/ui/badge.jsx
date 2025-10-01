import React from "react";

export function Badge({ children, className = "", variant = "default", ...props }) {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    default: "border-transparent bg-blue-500 text-white",
    secondary: "border-transparent bg-gray-100 text-gray-900",
    outline: "text-gray-950"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}