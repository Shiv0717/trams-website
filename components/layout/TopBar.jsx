 'use client';
import { useState, useEffect, useRef } from "react";
import { Globe, Bookmark, X, MapPin, ChevronDown, ChevronUp } from "lucide-react";

export default function TopBar() {
  const [active, setActive] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActive(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div ref={dropdownRef} className="hidden md:block border-b border-gray-200 text-[11px] tracking-wide relative z-50 bg-white">
        <div className="max-w-7xl mx-auto py-3 flex justify-between items-center text-md font-medium">
          {/* LEFT */}
          <div className="flex gap-6">
            <button
              onClick={() => setActive(active === "offices" ? null : "offices")}
              className={`flex items-center gap-1.5 transition-colors ${
                active === "offices" ? "text-[#8fd299]" : "hover:text-[#8fd299]"
              }`}
            >
              OFFICES
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${
                  active === "offices" ? "rotate-180" : ""
                }`}
              />
            </button>

            {["ALUMNI", "MEDIA CENTER", "SUBSCRIBE", "CONTACT"].map((i) => (
              <span
                key={i}
                className="cursor-pointer hover:text-[#8fd299] transition-colors"
              >
                {i}
              </span>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex gap-6 items-center">
            <button
              onClick={() => setActive(active === "lang" ? null : "lang")}
              className="flex items-center gap-1.5 hover:text-[#8fd299] transition-colors"
            >
              <Globe size={14} className="text-gray-600" />
              GLOBAL | ENGLISH
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${
                  active === "lang" ? "rotate-180" : ""
                }`}
              />
            </button>

            <button
              onClick={() => setActive(active === "saved" ? null : "saved")}
              className="flex items-center gap-1.5 hover:text-[#8fd299] transition-colors"
            >
              <Bookmark size={14} className="text-gray-600" />
              SAVED ITEMS
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${
                  active === "saved" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* ================= MEGA DROPDOWNS ================= */}
        {/* Animated dropdown container */}
        <div className="absolute top-full left-0 right-0">
          {/* OFFICES */}
          {active === "offices" && (
            <MegaWrapper onClose={() => setActive(null)} title="Our Offices">
              <MegaGrid
                columns={[
                  {
                    title: "North & Latin America",
                    items: [
                      { name: "Atlanta", region: "United States" },
                      { name: "Austin", region: "United States" },
                      { name: "Boston", region: "United States" },
                      { name: "Chicago", region: "United States" },
                      { name: "Dallas", region: "United States" },
                      { name: "Denver", region: "United States" },
                      { name: "Los Angeles", region: "United States" },
                      { name: "New York", region: "United States" },
                      { name: "San Francisco", region: "United States" },
                      { name: "Toronto", region: "Canada" },
                    ],
                  },
                  {
                    title: "Europe & Africa",
                    items: [
                      { name: "Amsterdam", region: "Netherlands" },
                      { name: "Berlin", region: "Germany" },
                      { name: "Brussels", region: "Belgium" },
                      { name: "Frankfurt", region: "Germany" },
                      { name: "London", region: "United Kingdom" },
                      { name: "Madrid", region: "Spain" },
                      { name: "Paris", region: "France" },
                      { name: "Rome", region: "Italy" },
                      { name: "Zurich", region: "Switzerland" },
                    ],
                    highlight: "London",
                  },
                  {
                    title: "Asia & Australia",
                    items: [
                      { name: "Bangkok", region: "Thailand" },
                      { name: "Beijing", region: "China" },
                      { name: "Bengaluru", region: "India" },
                      { name: "Hong Kong", region: "China" },
                      { name: "Mumbai", region: "India" },
                      { name: "New Delhi", region: "India" },
                      { name: "Singapore", region: "Singapore" },
                      { name: "Sydney", region: "Australia" },
                      { name: "Tokyo", region: "Japan" },
                    ],
                  },
                ]}
              />
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="flex items-center gap-2 text-[#8fd299] hover:text-[#7bc088] text-sm font-medium">
                  <MapPin size={14} />
                  View all office locations
                  <ChevronRight size={14} />
                </button>
              </div>
            </MegaWrapper>
          )}

          {/* LANGUAGE */}
          {active === "lang" && (
            <MegaWrapper onClose={() => setActive(null)} title="Select Language">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                {[
                  { code: "en", name: "English", native: "English" },
                  { code: "de", name: "Deutsch", native: "Deutsch" },
                  { code: "fr", name: "Français", native: "Français" },
                  { code: "ja", name: "日本語", native: "日本語" },
                  { code: "ko", name: "한국어", native: "한국어" },
                  { code: "es", name: "Español", native: "Español" },
                  { code: "zh", name: "中文", native: "简体中文" },
                  { code: "pt", name: "Português", native: "Português" },
                ].map((lang) => (
                  <div
                    key={lang.code}
                    className={`flex flex-col p-3 rounded-lg cursor-pointer transition-all ${
                      lang.code === "en"
                        ? "bg-[#8fd299]/10 text-[#8fd299] border border-[#8fd299]/20"
                        : "hover:bg-gray-50 hover:text-[#8fd299]"
                    }`}
                  >
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-xs text-gray-500 mt-1">{lang.native}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  Using automatic translation? <a href="#" className="text-[#8fd299] hover:underline">Learn more</a>
                </p>
              </div>
            </MegaWrapper>
          )}

          {/* SAVED */}
          {active === "saved" && (
            <MegaWrapper onClose={() => setActive(null)} title="Saved Items">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#8fd299]"></div>
                    <div>
                      <span className="font-medium group-hover:text-[#8fd299]">Global Market Trends 2024</span>
                      <p className="text-xs text-gray-500 mt-1">Latest insights on market movements</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">2 days ago</span>
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div>
                      <span className="font-medium group-hover:text-[#8fd299]">Annual Sustainability Report</span>
                      <p className="text-xs text-gray-500 mt-1">Corporate sustainability initiatives</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">1 week ago</span>
                </div>
                
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div>
                      <span className="font-medium group-hover:text-[#8fd299]">Leadership Articles</span>
                      <p className="text-xs text-gray-500 mt-1">Collection of leadership insights</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">3 weeks ago</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                <button className="text-[#8fd299] hover:text-[#7bc088] text-sm font-medium">
                  View all saved items
                </button>
                <button className="text-gray-500 hover:text-[#8fd299] text-sm">
                  Clear all
                </button>
              </div>
            </MegaWrapper>
          )}
        </div>
      </div>
    </>
  );
}

/* =================== COMPONENTS =================== */

function MegaWrapper({ title, children, onClose }) {
  return (
    <div className="animate-in slide-in-from-top-2 duration-200 border-b border-gray-200 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={20} className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function MegaGrid({ columns }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-sm">
      {columns.map((col) => (
        <div key={col.title} className="space-y-4">
          <h3 className="font-semibold text-gray-900 text-base mb-4 pb-2 border-b border-gray-100">
            {col.title}
          </h3>
          <div className="space-y-3">
            {col.items.map((item) => (
              <div
                key={item.name}
                className={`flex flex-col p-2.5 rounded-md cursor-pointer transition-all ${
                  col.highlight === item.name
                    ? "bg-[#8fd299]/10 text-[#8fd299] border border-[#8fd299]/20"
                    : "hover:bg-gray-50 hover:text-[#8fd299]"
                }`}
              >
                <span className="font-medium">{item.name}</span>
                <span className="text-xs text-gray-500 mt-0.5">{item.region}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Helper component
function ChevronRight({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}