import Link from 'next/link';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a2e1f] text-white pt-20 pb-8 border-t-[6px] border-[#5c1a1b]">
      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-[#5c1a1b] font-bold text-lg">N</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              Nashik<span className="text-[#f5f5dc]">Onion</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            India's premier B2B onion sourcing platform. We bridge the gap between Nashik's finest farmers and global commercial buyers, ensuring quality, consistency, and scale.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider text-sm">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400 font-medium">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/quality-grading" className="hover:text-white transition-colors">Quality & Grading Process</Link></li>
            <li><Link href="/packaging" className="hover:text-white transition-colors">Packaging Solutions</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Request a Bulk Quote</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider text-sm">Products</h4>
          <ul className="space-y-3 text-sm text-gray-400 font-medium">
            <li><Link href="/onion-varieties/red-onion" className="hover:text-white transition-colors">Nashik Red Onion</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider text-sm">Contact Us</h4>
          <address className="not-italic text-sm text-gray-400 space-y-4">
            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#5c1a1b] shrink-0" />
              <span>Nashik Agricultural Market,<br/>Pimpalgaon Baswant,<br/>Maharashtra, India</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#5c1a1b]" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
            </p>
            <p className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-green-500" />
              <a href="https://wa.me/919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#5c1a1b]" />
              <a href="mailto:sales@nashikonion.com" className="hover:text-white transition-colors">sales@nashikonion.com</a>
            </p>
          </address>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
        <p>&copy; {new Date().getFullYear()} NashikOnion B2B. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/" className="hover:text-white">Privacy Policy</Link>
          <Link href="/" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
