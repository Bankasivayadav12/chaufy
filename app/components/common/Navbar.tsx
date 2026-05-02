"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-bgGrey border-b border-brand-grey shadow-nav">
      
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-4">
        
        {/* LOGO */}
        <Link
          href="/"
          className="font-pondar text-3xl tracking-[0.2em] text-brand-primary"
        >
          CHAUFY
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 font-poppins text-brand-black">
  {navLinks.map((link) => (
    <Link
  key={link.name}
  href={link.href}
  className="group"
>
  <span className="text-brand-black transition-colors duration-300 hover:text-[#CCFF66]">
    {link.name}
  </span>

  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF66] transition-all duration-300 group-hover:w-full"></span>
</Link>
  ))}
</nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-brand-black"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-brand-grey shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-brand-black text-lg font-medium hover:text-brand-primary transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}