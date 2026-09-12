import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | NashikOnion B2B Supplier',
  description: 'Learn about our Nashik-based onion sourcing, our farmer network, sorting infrastructure, and our domestic and export supply capabilities.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5c1a1b] mb-6">About NashikOnion B2B</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a premier B2B sourcing and supply platform located in the heart of India's onion capital: Nashik, Maharashtra. 
            We bridge the gap between quality-focused farmers and commercial buyers globally.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#1a2e1f] mb-4">Our Sourcing Network</h2>
            <p className="text-gray-600 mb-4">
              Our strength lies in our direct relationships with farmers across the Nashik agricultural belt. 
              By working directly with growers, we ensure consistent supply, traceability, and fair pricing.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Direct farmer procurement</li>
              <li>Stringent quality checks at source</li>
              <li>Support for sustainable farming practices</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#1a2e1f] mb-4">Our Infrastructure</h2>
            <p className="text-gray-600 mb-4">
              We operate modern sorting and grading facilities equipped to handle bulk commercial orders efficiently.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Spacious, well-ventilated warehousing</li>
              <li>Advanced sorting and grading lines</li>
              <li>Customized packing capabilities (5kg to 50kg)</li>
              <li>Efficient loading docks for domestic trucks and export containers</li>
            </ul>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-[#1a2e1f] text-white rounded-xl p-8 md:p-12 max-w-6xl mx-auto mb-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f5f5dc]">Our Mission</h3>
              <p className="text-gray-300">
                To provide reliable, quality-assured bulk onion supply to domestic and international B2B buyers while ensuring fair value for our farming community.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f5f5dc]">Our Vision</h3>
              <p className="text-gray-300">
                To be recognized as India's most trusted and professional commercial onion sourcing partner, setting industry standards for grading and supply chain efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#5c1a1b] mb-6">Ready to discuss your bulk requirements?</h2>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-[#5c1a1b] text-white px-8 py-3 rounded font-bold hover:bg-[#4a1516] transition-colors text-lg shadow-lg">
              Request a Quote
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-3 rounded font-bold hover:bg-green-700 transition-colors text-lg shadow-lg flex items-center gap-2">
              WhatsApp Sales
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
