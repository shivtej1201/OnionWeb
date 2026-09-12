import { onionProducts } from '@/lib/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return onionProducts.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = onionProducts.find((p) => p.slug === params.slug);
  if (!product) return { title: 'Product Not Found' };
  
  return {
    title: `${product.name} Supplier in Nashik, Maharashtra | B2B Bulk`,
    description: `Buy bulk ${product.name} from Nashik. Available in grades: ${product.grades.join(', ')}. Packaging: ${product.packaging[0]} and more.`,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = onionProducts.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(`Hello, I am interested in ${product.name} bulk supply. Please share the available grades, quantity and quotation.`);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#5c1a1b]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          {/* Image Placeholder */}
          <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-lg font-medium border-2 border-dashed border-gray-300">
            [Product Image: {product.name}]
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#5c1a1b] mb-4">
              Premium {product.name} Supplier
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Available Varieties</h3>
                <div className="flex flex-wrap gap-2">
                  {product.varieties.map(v => (
                    <span key={v} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{v}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Sizes Available</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {product.sizes.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Grades</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {product.grades.map(g => <li key={g}>{g}</li>)}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Packaging Options</h3>
                <p className="text-gray-700">{product.packaging.join(' • ')}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Minimum Order Quantity (MOQ)</h3>
                <p className="text-gray-700 font-medium">{product.moq}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                href={`/contact?product=${product.slug}`} 
                className="flex-1 text-center bg-[#5c1a1b] text-white px-6 py-3 rounded font-bold hover:bg-[#4a1516] transition-colors shadow-md"
              >
                Request a Quote
              </Link>
              <a 
                href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center bg-green-600 text-white px-6 py-3 rounded font-bold hover:bg-green-700 transition-colors shadow-md"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
