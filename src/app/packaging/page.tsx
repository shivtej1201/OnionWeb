import Link from 'next/link';
import { packagingOptions } from '@/lib/data/products';

export const metadata = {
  title: 'Bulk Onion Packaging Solutions | NashikOnion B2B',
  description: 'Flexible bulk packaging options for onions including mesh bags and jute bags (5kg to 50kg) for domestic wholesale and international export.',
};

export default function PackagingPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#5c1a1b] mb-6">Bulk Packaging Solutions</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Proper packaging is critical for onion shelf-life during transit. We offer standardized and customizable packaging formats to suit different transport durations and market preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {packagingOptions.map(option => (
            <div key={option.name} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1a2e1f] mb-4">{option.name}</h2>
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Available Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {option.sizes.map(size => (
                    <span key={size} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{size}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Best For</h3>
                <p className="text-gray-700">{option.bestFor}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#1a2e1f] text-white p-8 md:p-12 rounded-xl text-center mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#f5f5dc]">Custom Branding</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            For retail chains, supermarkets, and large importers, we can facilitate custom-printed mesh bags or labels bearing your brand name and barcode. 
            (Minimum order quantities apply).
          </p>
          <Link href="/contact?message=I am interested in custom branded packaging." className="bg-[#f5f5dc] text-[#1a2e1f] px-8 py-3 rounded font-bold hover:bg-white transition-colors shadow-lg">
            Inquire About Custom Packaging
          </Link>
        </div>

      </div>
    </main>
  );
}
