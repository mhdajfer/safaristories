'use client';
import { Compass } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Compass className="h-8 w-8 text-amber-600" />
          <span className="text-xl font-semibold">Safari Stories</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#destinations" className="hover:text-amber-600 transition-colors">
            Destinations
          </Link>
          <Link href="#experiences" className="hover:text-amber-600 transition-colors">
            Experiences
          </Link>
          <Link href="#about" className="hover:text-amber-600 transition-colors">
            About
          </Link>
          <Link href="#contact" className="hover:text-amber-600 transition-colors">
            Contact
          </Link>
        </div>
        <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
          Book Now
        </button>
      </div>
    </nav>
  );
}