'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { onionProducts, industriesServed } from '@/lib/data/products';
import { ArrowRight, MapPin, CheckCircle, Package, PhoneCall, MessageCircle } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?q=80&w=2070&auto=format&fit=crop" 
            alt="Nashik Onion Farm"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e1f]/90 to-[#5c1a1b]/80 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl text-white"
          >
            <motion.div variants={fadeIn} className="inline-block bg-[#f5f5dc]/20 backdrop-blur-md border border-[#f5f5dc]/30 text-[#f5f5dc] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              Nashik's Premier Onion Exporter
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Premium Nashik Onions for <span className="text-[#f5f5dc]">Global B2B</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl mb-10 text-gray-200 font-light leading-relaxed max-w-2xl">
              Quality-focused onion sourcing and bulk supply from Nashik, Maharashtra, with reliable grading, packaging, and delivery solutions.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="group flex items-center justify-center gap-2 bg-[#f5f5dc] text-[#5c1a1b] px-8 py-4 rounded-lg font-bold hover:bg-white transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Request a Bulk Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600/90 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-green-500 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 border border-green-500/50">
                <MessageCircle className="w-5 h-5" />
                Talk on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70"
        >
          <span className="text-sm tracking-widest uppercase mb-2">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
            <motion.div 
              className="w-full h-1/2 bg-white absolute top-0"
              animate={{ top: ['-50%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e1f] mb-4 tracking-tight">Why Partner With Us?</h2>
            <div className="w-24 h-1 bg-[#5c1a1b] mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: MapPin, title: "Nashik-Based Sourcing", desc: "Direct from the farms of India's largest onion producing region, ensuring freshness and competitive pricing." },
              { icon: CheckCircle, title: "Quality Controlled", desc: "Strict sorting and grading processes to remove damaged produce and ensure consistent sizes and quality." },
              { icon: Package, title: "Bulk Capability", desc: "Equipped to handle large domestic and export orders with flexible packaging from 5kg to 50kg." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-16 h-16 bg-[#5c1a1b]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5c1a1b] transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-[#5c1a1b] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e1f] mb-4 tracking-tight">Our Onion Varieties</h2>
              <div className="w-24 h-1 bg-[#5c1a1b] rounded-full" />
            </div>
            <Link href="/contact" className="text-[#5c1a1b] font-bold hover:underline flex items-center gap-2">
              View full specifications <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {onionProducts.map((product, i) => (
              <motion.div key={product.id} variants={fadeIn}>
                <Link href={`/onion-varieties/${product.slug}`} className="block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative aspect-square overflow-hidden bg-gray-200">
                    <Image 
                      src={`https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?q=80&w=600&auto=format&fit=crop`} 
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{product.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">{product.description}</p>
                    <span className="text-[#5c1a1b] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#5c1a1b]" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to secure your bulk onion supply?</h2>
            <p className="text-xl text-[#f5f5dc] mb-10 font-light max-w-2xl mx-auto">
              Contact our sales team today to discuss your exact requirements, check current Nashik mandi pricing, and receive a customized quotation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-[#5c1a1b] px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl hover:-translate-y-1 transform duration-300">
                Get a Quote Now
              </Link>
              <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-transparent border-2 border-[#f5f5dc] text-[#f5f5dc] px-10 py-4 rounded-lg font-bold hover:bg-[#f5f5dc] hover:text-[#5c1a1b] transition-all text-lg shadow-xl hover:-translate-y-1 transform duration-300">
                <PhoneCall className="w-5 h-5" />
                Call Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
