import { onionProducts } from '@/lib/data/products';
import { notFound } from 'next/navigation';
import ProductClient from './ProductClient';

export function generateStaticParams() {
  return onionProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = onionProducts.find((p) => p.slug === resolvedParams.slug);
  if (!product) return { title: 'Product Not Found' };
  
  return {
    title: `${product.name} Supplier in Nashik, Maharashtra | B2B Bulk`,
    description: `Buy bulk ${product.name} from Nashik. Available in grades: ${product.grades.join(', ')}. Packaging: ${product.packaging[0]} and more.`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = onionProducts.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(`Hello, I am interested in ${product.name} bulk supply. Please share the available grades, quantity and quotation.`);

  return <ProductClient product={product} whatsappMessage={whatsappMessage} />;
}
