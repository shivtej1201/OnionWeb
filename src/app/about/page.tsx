'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Warehouse, Globe, Target } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative bg-[#1a2e1f] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?q=80&w=2070&auto=format&fit=crop" 
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeIn} className="inline-block bg-[#5c1a1b] text-white px-3 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
              Our Story
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-[#f5f5dc]">
              About NashikOnion B2B
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-gray-300 font-light leading-relaxed">
              We are a premier B2B sourcing and supply platform located in the heart of India's onion capital: Nashik, Maharashtra. We bridge the gap between quality-focused farmers and commercial buyers globally.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl -mt-20 relative z-20">
        {/* Content Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={fadeIn} className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow group">
            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
              <Users className="w-7 h-7 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Sourcing Network</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our strength lies in our direct relationships with farmers across the Nashik agricultural belt. By working directly with growers, we ensure consistent supply, traceability, and fair pricing.
            </p>
            <ul className="space-y-3">
              {['Direct farmer procurement', 'Stringent quality checks at source', 'Support for sustainable farming'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-500" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeIn} className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow group">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
              <Warehouse className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Infrastructure</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We operate modern sorting and grading facilities equipped to handle bulk commercial orders efficiently, ensuring every batch meets international standards.
            </p>
            <ul className="space-y-3">
              {['Spacious, well-ventilated warehousing', 'Advanced sorting and grading lines', 'Customized packing (5kg to 50kg)', 'Efficient domestic & export loading docks'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-500" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="bg-[#5c1a1b] text-white rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <motion.div variants={fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-[#f5f5dc]" />
                <h3 className="text-3xl font-bold text-[#f5f5dc]">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-200 font-light leading-relaxed">
                To provide reliable, quality-assured bulk onion supply to domestic and international B2B buyers while ensuring fair value for our farming community.
              </p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-[#f5f5dc]" />
                <h3 className="text-3xl font-bold text-[#f5f5dc]">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-200 font-light leading-relaxed">
                To be recognized as India's most trusted and professional commercial onion sourcing partner, setting global industry standards for grading and supply chain efficiency.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to discuss your bulk requirements?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-[#5c1a1b] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#4a1516] transition-all shadow-xl hover:-translate-y-1 text-lg">
              Request a Quote
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-xl hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
              WhatsApp Sales
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
