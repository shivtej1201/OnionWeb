'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Scissors, Scale, ShieldCheck, PackageCheck, Truck } from 'lucide-react';

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

const steps = [
  { icon: Search, title: 'Sourcing & Initial Inspection', desc: 'Onions are procured directly from Nashik farms. An initial visual inspection is conducted to reject lots with high moisture or visible rot.' },
  { icon: Scissors, title: 'Sorting & Cleaning', desc: 'Produce passes through our sorting lines where loose skins, soil, and visibly damaged onions are manually and mechanically removed.' },
  { icon: Scale, title: 'Size Grading', desc: 'Onions are graded into precise size categories (e.g., 45-55mm, 55-65mm) using specialized grading nets to ensure uniformity for retail and processing.' },
  { icon: ShieldCheck, title: 'Quality Inspection', desc: 'A secondary manual inspection targets hidden defects, double bulbs, thick necks, and premature sprouting.' },
  { icon: PackageCheck, title: 'Packing & Weighing', desc: 'Graded onions are packed into breathable mesh or jute bags and accurately weighed before stitching.' },
  { icon: Truck, title: 'Storage & Dispatch', desc: 'Packed bags are stored in dry, well-ventilated areas prior to loading onto trucks or export containers.' }
];

export default function QualityGradingPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* Hero Section */}
      <div className="bg-[#1a2e1f] text-white pt-24 pb-32">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-block bg-[#5c1a1b] text-white px-3 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
              Our Standard
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-[#f5f5dc]">
              Quality, Grading & Sorting
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              We understand that for B2B buyers, consistency is just as important as quality. Our stringent grading process ensures you receive exactly what you ordered, every time.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl -mt-20">
        {/* The Process Flow */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 mb-16">
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight"
          >
            Our Quality Assurance Process
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeIn} className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="absolute -right-6 -top-6 text-gray-200/50 group-hover:text-[#5c1a1b]/5 transition-colors duration-500">
                  <step.icon className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#5c1a1b] font-bold text-xl border border-gray-100 group-hover:scale-110 group-hover:bg-[#5c1a1b] group-hover:text-white transition-all">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Grading Specifications Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 mb-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-100 pb-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Standard Size Specifications</h2>
            <div className="bg-[#5c1a1b]/10 text-[#5c1a1b] px-4 py-2 rounded-lg font-semibold text-sm">
              Custom Sizing Available
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-400 uppercase text-xs tracking-wider border-b-2 border-gray-100">
                  <th className="p-4 font-bold">Grade / Size</th>
                  <th className="p-4 font-bold">Diameter (mm)</th>
                  <th className="p-4 font-bold">Typical Application</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 font-medium">
                <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-4 h-4 bg-gray-200 rounded-full" /> Small
                  </td>
                  <td className="p-4 text-gray-500">30mm - 45mm</td>
                  <td className="p-4">Processing, Specific Retail</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full" /> Medium
                  </td>
                  <td className="p-4 text-gray-500">45mm - 55mm</td>
                  <td className="p-4">Standard Wholesale, Retail</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-400 rounded-full" /> Large
                  </td>
                  <td className="p-4 text-gray-500">55mm - 65mm</td>
                  <td className="p-4">Retail Chains, Food Service</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-500 rounded-full" /> Extra Large
                  </td>
                  <td className="p-4 text-gray-500">65mm +</td>
                  <td className="p-4">Specific B2B requirements</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mt-6 italic flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Exact sizing can be customized based on bulk buyer requirements.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c1a1b] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#4a1516] transition-all shadow-xl hover:-translate-y-1 text-lg">
            Discuss Your Quality Requirements <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
}
