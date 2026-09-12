import { onionProducts } from '@/lib/data/products';
import { notFound } from 'next/navigation';
import ProductClient from './ProductClient';

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

  return <ProductClient product={product} whatsappMessage={whatsappMessage} />;
}
