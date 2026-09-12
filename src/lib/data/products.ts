export const onionProducts = [
  {
    id: 'red-onion',
    name: 'Red Onion',
    slug: 'red-onion',
    description: 'Premium quality Nashik Red Onions, known for their strong flavor, long shelf life, and pungent taste. Ideal for commercial kitchens, retail, and export.',
    varieties: ['Pusa Red', 'N-53', 'Agrifound Dark Red'],
    sizes: ['30mm - 45mm (Small)', '45mm - 55mm (Medium)', '55mm - 65mm (Large)', '65mm+ (Extra Large)'],
    grades: ['A Grade (Export Quality)', 'B Grade (Domestic Commercial)'],
    packaging: ['5kg Mesh Bag', '10kg Mesh/Jute Bag', '25kg Mesh/Jute Bag', '50kg Jute Bag', 'Custom Bulk Bags'],
    applications: ['Retail / Supermarkets', 'Restaurants & Hotels', 'Food Processing', 'Export'],
    moq: '5 Metric Tons (Domestic) / 1x20ft Container (Export)',
    image: '/placeholder-red-onion.jpg'
  },
  {
    id: 'white-onion',
    name: 'White Onion',
    slug: 'white-onion',
    description: 'High-quality White Onions with a milder, sweeter flavor. Widely used in dehydration industries, Mexican cuisine, and specialized food processing.',
    varieties: ['Phule Safed', 'Agrifound White'],
    sizes: ['40mm - 50mm (Medium)', '50mm - 60mm (Large)', '60mm+ (Extra Large)'],
    grades: ['A Grade', 'Dehydration Grade'],
    packaging: ['10kg Mesh Bag', '25kg Mesh/Jute Bag', '50kg Jute Bag'],
    applications: ['Dehydration Industry', 'Food Processing', 'Restaurants'],
    moq: '5 Metric Tons',
    image: '/placeholder-white-onion.jpg'
  },
  {
    id: 'pink-onion',
    name: 'Pink Onion',
    slug: 'pink-onion',
    description: 'Versatile Pink Onions offering a balanced flavor profile. Popular in both domestic markets and specific export destinations.',
    varieties: ['Local Nashik Pink'],
    sizes: ['45mm - 55mm (Medium)', '55mm - 65mm (Large)'],
    grades: ['A Grade', 'B Grade'],
    packaging: ['10kg Mesh Bag', '25kg Jute Bag', '50kg Jute Bag'],
    applications: ['Retail', 'Wholesale', 'Hotels'],
    moq: '5 Metric Tons',
    image: '/placeholder-pink-onion.jpg'
  },
  {
    id: 'small-onion',
    name: 'Small Onion (Shallots/Sambar Onion)',
    slug: 'small-onion',
    description: 'Small, pungent onions essential for South Indian and Southeast Asian cuisines. Sourced for peak freshness and quality.',
    varieties: ['Podisu / Sambar Onion'],
    sizes: ['15mm - 25mm', '25mm - 35mm'],
    grades: ['A Grade'],
    packaging: ['5kg Mesh Bag', '10kg Mesh Bag'],
    applications: ['Retail', 'Specialty Restaurants', 'Export'],
    moq: '2 Metric Tons',
    image: '/placeholder-small-onion.jpg'
  }
];

export const packagingOptions = [
  { name: 'Mesh Bags', sizes: ['5 kg', '10 kg', '20 kg', '25 kg'], bestFor: 'Airflow, standard wholesale' },
  { name: 'Jute Bags', sizes: ['25 kg', '50 kg'], bestFor: 'Traditional transport, breathability' },
  { name: 'Custom Packaging', sizes: ['As per buyer requirement'], bestFor: 'Retail chains, supermarket brands' }
];

export const industriesServed = [
  { name: 'Food Processing', description: 'Bulk onion supply for food processing operations, sauces, and ready-to-eat meals.' },
  { name: 'Restaurants & Hotels', description: 'Consistent commercial-kitchen supply ensuring quality and standard sizing.' },
  { name: 'Retail & Supermarkets', description: 'Graded and neatly packaged onion supply ready for shelves.' },
  { name: 'Wholesale & Distribution', description: 'Bulk sourcing for regional distributors and commodity traders.' },
  { name: 'Dehydration Industry', description: 'Specific white onion grades optimized for dehydration.' }
];
