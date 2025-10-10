import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm flex justify-between items-center">
        <div>© {new Date().getFullYear()} cutiepao. All rights reserved.</div>
        <div className="hidden sm:flex gap-4">
          <span className="hover:text-white cursor-pointer">Terms</span>
          <span className="hover:text-white cursor-pointer">Privacy</span>
        </div>
      </div>
    </footer>
  );
}
