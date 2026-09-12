'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShieldCheck, Scale, Truck, MessageCircle } from 'lucide-react';

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

export default function ProductClient({ product, whatsappMessage }: { product: any, whatsappMessage: string }) {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-[#1a2e1f] text-white pt-12 pb-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-block bg-[#5c1a1b] text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              Premium Export Quality
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-[#f5f5dc]">
              {product.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              {product.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl -mt-20">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Gallery Area */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative h-96 lg:h-auto min-h-[500px] bg-gray-100"
            >
              <Image 
                src="https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?q=80&w=1000&auto=format&fit=crop" 
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 flex gap-2">
                {product.varieties.map((v: string) => (
                  <span key={v} className="bg-white/20 backdrop-blur-md text-white border border-white/40 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {v}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Specifications Area */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="p-8 md:p-12"
            >
              <motion.h2 variants={fadeIn} className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2 border-b pb-4">
                <ShieldCheck className="text-[#5c1a1b] w-6 h-6" /> Product Specifications
              </motion.h2>

              <div className="space-y-8">
                {/* Sizes */}
                <motion.div variants={fadeIn}>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Scale className="w-4 h-4" /> Available Sizes
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.sizes.map((s: string) => (
                      <div key={s} className="bg-gray-50 border border-gray-100 p-3 rounded-lg flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{s}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Packaging */}
                <motion.div variants={fadeIn}>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <PackageIcon className="w-4 h-4" /> Packaging Options
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.packaging.map((p: string) => (
                      <span key={p} className="bg-[#1a2e1f]/5 text-[#1a2e1f] border border-[#1a2e1f]/20 px-4 py-2 rounded-lg text-sm font-semibold">
                        {p}
                      </span>
                    ))}
                  </div>
                </motion.div>
                
                {/* Grades & MOQ */}
                <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Quality Grades</h3>
                    <ul className="space-y-1">
                      {product.grades.map((g: string) => (
                        <li key={g} className="text-gray-800 font-medium flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#5c1a1b] rounded-full" /> {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Truck className="w-4 h-4" /> Min. Order (MOQ)
                    </h3>
                    <p className="text-gray-800 font-semibold">{product.moq}</p>
                  </div>
                </motion.div>
              </div>

              {/* CTAs */}
              <motion.div variants={fadeIn} className="mt-12 flex flex-col sm:flex-row gap-4 pt-8 border-t">
                <Link 
                  href={`/contact?product=${product.slug}`} 
                  className="flex-1 text-center bg-[#5c1a1b] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#4a1516] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Request a Custom Quote
                </Link>
                <a 
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-green-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex justify-center items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
