// components/layout/TopBar.jsx
"use client";

export default function TopBar() {
  return (
    <div className="hidden md:block border-b text-xs">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
        <div className="flex gap-6">
          <span className="cursor-pointer">OFFICES</span>
          <span>ALUMNI</span>
          <span>MEDIA CENTER</span>
          <span>SUBSCRIBE</span>
          <span>CONTACT</span>
        </div>
        <div className="flex gap-4">
          <span>🌍 GLOBAL | ENGLISH</span>
          <span>🔖 SAVED ITEMS</span>
        </div>
      </div>
    </div>
  );
}
