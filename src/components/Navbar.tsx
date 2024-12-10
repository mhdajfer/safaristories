"use client";
import { useState } from "react";
import { Compass, Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#destinations", label: "Destinations" },
    { href: "#experiences", label: "Experiences" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Compass className="h-8 w-8 text-amber-600" />
            <span className="text-xl font-semibold">Safari Stories</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-amber-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-amber-600 transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors w-full">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
