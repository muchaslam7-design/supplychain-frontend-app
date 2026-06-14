import React from "react";
import { Link } from "react-router-dom"; // Modern routing ke liye Link import kiya

import { Button } from "./Button";
import { NAVIGATION_LINKS } from "../until/constants";

export const Navbar: React.FC = () => {
  return (
    /* Humne 'bg-white/80' aur 'border-b border-gray-100' hata diya hai.
       Ab yeh completely transparent hai ('bg-transparent') taake background mesh upar tak clean dikhe.
    */
    <nav className="w-full bg-transparent absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* ─── SUPPLY CHAIN CUSTOM LOGO & NAME ─── */}
          {/* Is poore block ko <Link to="/"> mein wrap kiya taake click par home open ho */}
          <Link
            to="/"
            className="flex items-center space-x-3 cursor-pointer group"
          >
            {/* Box / Supply Chain Node Dynamic Icon */}
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                {/* Modern Cube/Package representing logistics & node */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-5.25v9"
                />
              </svg>
            </div>

            {/* Brand Name with modern weight distribution */}
            <span className="text-2xl font-black tracking-tight text-slate-950 font-sans">
              Logix<span className="text-blue-600 font-medium">Chain</span>
            </span>
          </Link>

          {/* ─── NAVIGATION LINKS ─── */}
          <div className="hidden md:flex space-x-8 text-[15px] font-semibold text-slate-700">
            {NAVIGATION_LINKS.map((link, idx) => {
              // Agar link "Homepage" hai to modern <Link to="/"> use hoga, baqi links normal rahenge
              if (link.label === "Homepage") {
                return (
                  <Link
                    key={idx}
                    to="/"
                    className="flex items-center gap-1 transition-all hover:text-blue-600 hover:-translate-y-0.5 text-blue-600"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <svg
                        className="w-4 h-4 opacity-80"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>
                );
              }

              // Baqi links ke liye aapka purana logic bina kisi change ke waisa hi chalega
              return (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-1 transition-all hover:text-blue-600 hover:-translate-y-0.5 text-slate-700"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg
                      className="w-4 h-4 opacity-80"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
              );
            })}
          </div>

          {/* ─── AUTH BUTTONS ─── */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              className="bg-transparent hover:bg-slate-50 border-slate-200/60"
            >
              Sign In
            </Button>
            <Button variant="primary">Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
