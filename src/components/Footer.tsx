import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a2e1f] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#f5f5dc]">NashikOnion B2B</h3>
          <p className="text-sm text-gray-300">
            Premium Nashik Onions for Domestic & International B2B Buyers. Quality-focused onion sourcing and bulk supply.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/quality-grading" className="hover:text-white">Quality & Grading</Link></li>
            <li><Link href="/packaging" className="hover:text-white">Packaging Solutions</Link></li>
            <li><Link href="/contact" className="hover:text-white">Request a Quote</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/onion-varieties/red-onion" className="hover:text-white">Nashik Red Onion</Link></li>
            <li><Link href="/onion-varieties/white-onion" className="hover:text-white">White Onion</Link></li>
            <li><Link href="/onion-varieties/pink-onion" className="hover:text-white">Pink Onion</Link></li>
            <li><Link href="/onion-varieties/small-onion" className="hover:text-white">Small Onion</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <address className="not-italic text-sm text-gray-300 space-y-2">
            <p>📍 Nashik Agricultural Market, Maharashtra, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ sales@nashikonionb2b.example</p>
            <p>🕒 Mon - Sat: 9:00 AM - 6:00 PM</p>
          </address>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-600 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} NashikOnion B2B. All rights reserved.</p>
      </div>
    </footer>
  );
}
