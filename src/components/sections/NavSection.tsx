"use client";
import { useState } from "react";

const navLinks = [
  { label: "Introduction", href: "#introduction" },
  { label: "Why MVNO", href: "#why-mvno" },
  { label: "DSG Difference", href: "#dsg-difference" },
  { label: "VAS & Services", href: "#vas" },
  { label: "Scope", href: "#scope" },
  { label: "Commercial", href: "#commercial" },
  { label: "Terms", href: "#terms" },
  { label: "Signatures", href: "#signatures" },
];

export default function NavSection() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A] border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-4">
          <span className="text-white font-bold text-lg tracking-tight">MVNE</span>
          <span className="hidden sm:block text-white/40 text-sm">×</span>
          <span className="hidden sm:block text-white/70 text-sm font-medium">Centurion and Co</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-white/70 text-xs font-semibold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#signatures"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-bold bg-[#C8102E] hover:bg-red-700 text-white transition-colors"
          >
            Accept Proposal
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white/70 hover:text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0F172A] border-t border-white/10 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white text-sm py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#signatures"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-bold bg-[#C8102E] hover:bg-red-700 text-white transition-colors self-start"
          >
            Accept Proposal
          </a>
        </div>
      )}
    </nav>
  );
}
