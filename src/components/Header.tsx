import Link from 'next/link';
import { Phone, MessageCircle, Mail, Menu, ChevronDown } from 'lucide-react';

export default function Header() {
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
      <div className="container mx-auto px-4 py-4 max-w-7xl flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#5c1a1b] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-gray-900">
            Nashik<span className="text-[#5c1a1b]">Onion</span><span className="text-sm font-semibold text-gray-500 ml-1">B2B</span>
          </span>
        </Link>
        
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
                <Link href="/onion-varieties/white-onion" className="block px-4 py-2.5 hover:bg-gray-50 rounded-lg transition-colors">White Onion</Link>
                <Link href="/onion-varieties/pink-onion" className="block px-4 py-2.5 hover:bg-gray-50 rounded-lg transition-colors">Pink Onion</Link>
                <Link href="/onion-varieties/small-onion" className="block px-4 py-2.5 hover:bg-gray-50 rounded-lg transition-colors">Small / Sambar Onion</Link>
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
        <button className="lg:hidden text-gray-900 p-2">
          <Menu className="w-6 h-6" />
        </button>
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
