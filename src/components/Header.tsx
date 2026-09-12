import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar for quick contact */}
      <div className="bg-[#5c1a1b] text-white text-sm py-2 px-4 flex justify-between md:justify-end items-center space-x-4">
        <a href="tel:+919876543210" className="hover:underline flex items-center gap-1">
          📞 Call
        </a>
        <a href="https://wa.me/919876543210" className="hover:underline flex items-center gap-1" target="_blank" rel="noopener noreferrer">
          💬 WhatsApp
        </a>
        <Link href="/contact" className="hover:underline flex items-center gap-1 font-semibold text-[#f5f5dc]">
          ✉️ Get Quote
        </Link>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#5c1a1b]">
          NashikOnion B2B
        </Link>
        
        <nav className="hidden md:flex space-x-6 text-[#4a3f35] font-medium items-center">
          <Link href="/" className="hover:text-[#5c1a1b]">Home</Link>
          <Link href="/about" className="hover:text-[#5c1a1b]">About Us</Link>
          <div className="relative group">
            <span className="cursor-pointer hover:text-[#5c1a1b]">Our Onions ▾</span>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link href="/onion-varieties/red-onion" className="block px-4 py-2 hover:bg-gray-100">Red Onion</Link>
              <Link href="/onion-varieties/white-onion" className="block px-4 py-2 hover:bg-gray-100">White Onion</Link>
              <Link href="/onion-varieties/pink-onion" className="block px-4 py-2 hover:bg-gray-100">Pink Onion</Link>
              <Link href="/onion-varieties/small-onion" className="block px-4 py-2 hover:bg-gray-100">Small Onion</Link>
            </div>
          </div>
          <Link href="/quality-grading" className="hover:text-[#5c1a1b]">Quality</Link>
          <Link href="/packaging" className="hover:text-[#5c1a1b]">Packaging</Link>
          <Link href="/contact" className="bg-[#5c1a1b] text-white px-4 py-2 rounded font-bold hover:bg-[#4a1516] transition-colors">
            Contact Us
          </Link>
        </nav>
        
        {/* Mobile menu button (Simplified for MVP) */}
        <button className="md:hidden text-[#5c1a1b] font-bold">
          Menu
        </button>
      </div>
    </header>
  );
}
