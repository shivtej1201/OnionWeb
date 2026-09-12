'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      {/* Top Bar for quick contact */}
      <div className="bg-[#1a2e1f] text-gray-200 text-xs py-2 px-4 hidden md:block">
        <div className="container mx-auto max-w-7xl flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><MapPinIcon className="w-3 h-3"/> Nashik, Maharashtra, India</span>
          </div>
          <div className="flex gap-6">
            <a href="tel:+919876543210" className="hover:text-white flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3" /> +91 98765 43210
            </a>
            <a href="https://wa.me/919876543210" className="hover:text-white flex items-center gap-1 transition-colors" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-3 h-3" /> WhatsApp Us
            </a>
            <Link href="/contact" className="hover:text-white flex items-center gap-1 transition-colors font-semibold text-[#f5f5dc]">
              <Mail className="w-3 h-3" /> sales@nashikonion.com
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 max-w-7xl flex justify-between items-center relative">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-[#5c1a1b] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-gray-900">
            Nashik<span className="text-[#5c1a1b]">Onion</span><span className="text-sm font-semibold text-gray-500 ml-1 hidden sm:inline">B2B</span>
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 text-gray-700 font-semibold items-center text-sm">
          <Link href="/" className="hover:text-[#5c1a1b] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#5c1a1b] transition-colors">About Us</Link>
          <div className="relative group py-2">
            <span className="cursor-pointer hover:text-[#5c1a1b] transition-colors flex items-center gap-1">
              Our Products <ChevronDown className="w-4 h-4" />
            </span>
            <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left group-hover:translate-y-0 translate-y-2 overflow-hidden">
              <div className="p-2 flex flex-col gap-1">
                <Link href="/onion-varieties/red-onion" className="block px-4 py-2.5 hover:bg-gray-50 rounded-lg transition-colors">Nashik Red Onion</Link>
              </div>
            </div>
          </div>
          <Link href="/quality-grading" className="hover:text-[#5c1a1b] transition-colors">Quality & Grading</Link>
          <Link href="/packaging" className="hover:text-[#5c1a1b] transition-colors">Packaging</Link>
        </nav>
        
        <div className="hidden lg:block">
          <Link href="/contact" className="bg-[#5c1a1b] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#4a1516] transition-all shadow-md hover:shadow-lg">
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-gray-900 p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl lg:hidden flex flex-col px-4 py-6 gap-4 z-40 max-h-[calc(100vh-80px)] overflow-y-auto">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-bold text-lg border-b border-gray-100 pb-2">Home</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-bold text-lg border-b border-gray-100 pb-2">About Us</Link>
            
            <div className="border-b border-gray-100 pb-2">
              <button 
                onClick={() => setIsProductsOpen(!isProductsOpen)} 
                className="flex items-center justify-between w-full text-gray-800 font-bold text-lg"
              >
                Our Products <ChevronDown className={`w-5 h-5 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div className="flex flex-col gap-2 pt-3 pl-4">
                  <Link href="/onion-varieties/red-onion" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-semibold py-1">Nashik Red Onion</Link>
                </div>
              )}
            </div>

            <Link href="/quality-grading" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-bold text-lg border-b border-gray-100 pb-2">Quality & Grading</Link>
            <Link href="/packaging" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-bold text-lg border-b border-gray-100 pb-2">Packaging</Link>
            
            <div className="flex flex-col gap-3 mt-4">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#5c1a1b] text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-[#4a1516]">
                Get a Quote
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-green-700 flex justify-center items-center gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
