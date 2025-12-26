"use client";
import { useState, useEffect, useRef } from "react";
import {
  Search,
  Bookmark,
  ChevronDown,
  X,
  Menu,
  ChevronRight,
  Globe,
} from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navLinks = [
    {
      name: "Industries",
      columns: [
        {
          title: "Consumer & Retail",
          items: [
            { name: "Consumer Products", highlight: false },
            { name: "Retail", highlight: false },
            { name: "E-commerce", highlight: true },
            { name: "Luxury Goods", highlight: false },
            { name: "Food & Beverage", highlight: false },
          ],
        },
        {
          title: "Financial Services",
          items: [
            { name: "Banking", highlight: false },
            { name: "Insurance", highlight: false },
            { name: "Wealth Management", highlight: false },
            { name: "FinTech", highlight: true },
            { name: "Payments", highlight: false },
          ],
        },
        {
          title: "Technology & Digital",
          items: [
            { name: "Software & Platforms", highlight: false },
            { name: "Hardware & Devices", highlight: false },
            { name: "Telecommunications", highlight: false },
            { name: "Media & Entertainment", highlight: true },
            { name: "Digital Services", highlight: false },
          ],
        },
        {
          title: "Industrial & Energy",
          items: [
            { name: "Industrial Goods", highlight: false },
            { name: "Automotive & Mobility", highlight: true },
            { name: "Aerospace & Defense", highlight: false },
            { name: "Energy & Natural Resources", highlight: false },
            { name: "Chemicals", highlight: false },
          ],
        },
        {
          title: "Healthcare & Life Sciences",
          items: [
            { name: "Pharmaceuticals", highlight: false },
            { name: "Biotechnology", highlight: true },
            { name: "Medical Devices", highlight: false },
            { name: "Healthcare Services", highlight: false },
            { name: "Digital Health", highlight: false },
          ],
        },
        {
          title: "Private Equity",
          items: [
            { name: "Due Diligence", highlight: false },
            { name: "Portfolio Strategy", highlight: false },
            { name: "Value Creation", highlight: true },
            { name: "Exit Planning", highlight: false },
            { name: "Fund Strategy", highlight: false },
          ],
        },
      ],
    },
    {
      name: "Consulting Services",
      columns: [
        {
          title: "Strategy",
          items: [
            { name: "Corporate Strategy", highlight: true },
            { name: "Growth Strategy", highlight: false },
            { name: "Digital Strategy", highlight: false },
            { name: "Market Entry", highlight: false },
            { name: "Competitive Advantage", highlight: false },
          ],
        },
        {
          title: "Operations",
          items: [
            { name: "Performance Improvement", highlight: false },
            { name: "Supply Chain", highlight: true },
            { name: "Manufacturing", highlight: false },
            { name: "Procurement", highlight: false },
            { name: "Service Operations", highlight: false },
          ],
        },
        {
          title: "Organization",
          items: [
            { name: "Operating Model", highlight: false },
            { name: "Culture & Change", highlight: false },
            { name: "Talent Strategy", highlight: true },
            { name: "Leadership Development", highlight: false },
            { name: "Merger Integration", highlight: false },
          ],
        },
        {
          title: "Digital & Technology",
          items: [
            { name: "Digital Transformation", highlight: true },
            { name: "Advanced Analytics", highlight: false },
            { name: "AI & Machine Learning", highlight: false },
            { name: "Technology Strategy", highlight: false },
            { name: "Cybersecurity", highlight: false },
          ],
        },
      ],
    },
    {
      name: "Digital",
      columns: [
        {
          title: "Digital Solutions",
          items: [
            { name: "Vector℠ Digital", highlight: true },
            { name: "Bain Digital Lab", highlight: false },
            { name: "Digital Partnerships", highlight: false },
            { name: "AI Solutions", highlight: false },
            { name: "Cloud Transformation", highlight: false },
          ],
        },
        {
          title: "Innovation",
          items: [
            { name: "Bain Ventures", highlight: false },
            { name: "Startup Partnerships", highlight: true },
            { name: "Digital Incubation", highlight: false },
            { name: "Innovation Labs", highlight: false },
            { name: "R&D Strategy", highlight: false },
          ],
        },
        {
          title: "Tools & Platforms",
          items: [
            { name: "Digital Tools", highlight: false },
            { name: "Analytics Platforms", highlight: true },
            { name: "Performance Dashboards", highlight: false },
            { name: "Customer Insights", highlight: false },
            { name: "Market Intelligence", highlight: false },
          ],
        },
      ],
    },
    {
      name: "Insights",
      columns: [
        {
          title: "Latest Research",
          items: [
            { name: "Trend Reports", highlight: true },
            { name: "Industry Analysis", highlight: false },
            { name: "Market Outlook", highlight: false },
            { name: "Executive Surveys", highlight: false },
            { name: "Case Studies", highlight: false },
          ],
        },
        {
          title: "Featured Topics",
          items: [
            { name: "AI & Technology", highlight: true },
            { name: "Sustainability", highlight: false },
            { name: "Consumer Trends", highlight: false },
            { name: "Economic Outlook", highlight: false },
            { name: "Leadership Insights", highlight: false },
          ],
        },
        {
          title: "Media Formats",
          items: [
            { name: "Articles & Papers", highlight: false },
            { name: "Podcasts", highlight: true },
            { name: "Videos & Webinars", highlight: false },
            { name: "Infographics", highlight: false },
            { name: "Interactive Tools", highlight: false },
          ],
        },
      ],
    },
    {
      name: "About",
      columns: [
        {
          title: "Our Firm",
          items: [
            { name: "Our History", highlight: false },
            { name: "Our Leadership", highlight: true },
            { name: "Our Values", highlight: false },
            { name: "Global Reach", highlight: false },
            { name: "Awards & Recognition", highlight: false },
          ],
        },
        {
          title: "Social Impact",
          items: [
            { name: "Pro Bono Work", highlight: true },
            { name: "Community Engagement", highlight: false },
            { name: "Diversity, Equity & Inclusion", highlight: false },
            { name: "Environmental Stewardship", highlight: false },
            { name: "Social Justice", highlight: false },
          ],
        },
      ],
    },
    {
      name: "Careers",
      columns: [
        {
          title: "Join Our Team",
          items: [
            { name: "Why Bain", highlight: true },
            { name: "Experienced Hires", highlight: false },
            { name: "MBA & Advanced Degree", highlight: false },
            { name: "Undergraduate", highlight: false },
            { name: "Internships", highlight: false },
          ],
        },
        {
          title: "Life at Bain",
          items: [
            { name: "Culture & Values", highlight: false },
            { name: "Learning & Development", highlight: true },
            { name: "Mentorship", highlight: false },
            { name: "Global Opportunities", highlight: false },
            { name: "Work-Life Balance", highlight: false },
          ],
        },
      ],
    },
  ];

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

  // Close sidebar when clicking outside (only when sidebar is open)
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* NAVBAR */}
      <header
        ref={dropdownRef}
        className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 md:px-0"
      >
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-8">
            {/* MENU + LOGO */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="  rounded-md transition-colors"
              >
                <Menu size={24} strokeWidth={2} />
              </button>

              {/* Logo Image */}
              <div className="w-30 h-10 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center rounded">
                  <img
                    src="https://withtrams.com/wp-content/uploads/2025/12/trams.svg"
                    alt="Logo"
                  />
                </div>
              </div>
            </div>

            {/* NAV LINKS */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-900">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() =>
                    setActive(active === link.name ? null : link.name)
                  }
                  className={`flex items-center gap-1 transition-colors ${
                    active === link.name
                      ? "text-[#8fd299]"
                      : "hover:text-[#8fd299]"
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      active === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6 text-gray-700">
            <button className="flex items-center gap-1 hover:text-[#8fd299] transition-colors">
              <Search size={18} />
              <span className="text-sm hidden sm:inline">Explore</span>
            </button>

            <span className="h-5 w-px bg-gray-300" />

            <button className="flex items-center gap-1 hover:text-[#8fd299] transition-colors">
              <Bookmark size={18} />
            </button>
          </div>
        </div>

        {/* MEGA MENU DROPDOWNS */}
        {active && (
          <MegaWrapper onClose={() => setActive(null)} title={active}>
            {navLinks
              .filter((link) => link.name === active)
              .map((link) => (
                <MegaGrid key={link.name} columns={link.columns} />
              ))}
          </MegaWrapper>
        )}
      </header>

      {/* SIDEBAR OVERLAY */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* COMPACT SIDEBAR */}
      <div
        className={`fixed top-0 left-0 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "380px" }}
      >
        <div className="flex flex-col h-full">
          {/* HEADER - Compact */}
          <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
            <img
              src="https://withtrams.com/wp-content/uploads/2025/12/trams.svg"
              alt="Logo"
              className="h-6"
            />

            <button
              onClick={() => setIsSidebarOpen(false)}
              className="flex h-8 w-8 items-center justify-center bg-[#8fd299] hover:bg-[#7bc088] text-white rounded transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* NAVIGATION - Compact */}
          <div className="px-4 py-4 space-y-1">
            {/* Main Navigation */}
            {[
              "Industries",
              "Consulting Services",
              "Digital",
              "Insights",
              "About",
              "Careers",
            ].map((item) => (
              <button
                key={item}
                className="flex w-full items-center  py-2.5 px-3 text-sm font-medium text-gray-900 hover:text-[#8fd299] hover:bg-gray-50 rounded transition-colors"
              >
                <span>{item}</span>
                <ChevronRight size={14} className="text-[#8fd299]" />
              </button>
            ))}

            {/* Divider */}
            <div className="border-t border-gray-200 my-3"></div>

            {/* Secondary Links - Compact */}
            <div className="space-y-1">
              {[
                "OFFICES",
                "ALUMNI",
                "MEDIA CENTER",
                "SUBSCRIBE",
                "CONTACT",
              ].map((item) => (
                <button
                  key={item}
                  className="block w-full text-left py-2 px-3 text-xs text-gray-700 hover:text-[#8fd299] hover:bg-gray-50 rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Footer Links - Compact */}
            <div className="space-y-1">
              <button className="flex items-center gap-2 py-2 px-3 text-xs text-gray-700 hover:text-[#8fd299] hover:bg-gray-50 rounded transition-colors w-full">
                <Globe size={14} />
                <span>GLOBAL | ENGLISH</span>
              </button>

              <button className="flex items-center gap-2 py-2 px-3 text-xs text-gray-700 hover:text-[#8fd299] hover:bg-gray-50 rounded transition-colors w-full">
                <Bookmark size={14} />
                <span>SAVED ITEMS</span>
              </button>
            </div>
          </div>

          {/* BOTTOM GREEN BAR - Thin */}
          <div className="h-1.5 w-full bg-[#8fd299] mt-auto" />
        </div>
      </div>
    </>
  );
}

/* =================== COMPONENTS =================== */

function MegaWrapper({ title, children, onClose }) {
  return (
    <div className="absolute top-full left-0 right-0 border-b border-gray-200 bg-white shadow-lg z-30">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-sm">
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
                  item.highlight
                    ? "bg-[#8fd299]/10 text-[#8fd299] border border-[#8fd299]/20"
                    : "hover:bg-gray-50 hover:text-[#8fd299]"
                }`}
              >
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
