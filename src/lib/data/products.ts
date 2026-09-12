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
  { name: 'Wholesale & Distribution', description: 'Bulk sourcing for regional distributors and commodity traders.' }
];
