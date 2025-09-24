import React from "react";

export function Avatar({ src, alt = "avatar", size = 48, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full object-cover ring-2 ring-white shadow ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
