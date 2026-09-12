'use client';

import { submitContactForm } from '@/lib/actions';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

function ContactFormContent() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get('product') || '';

  async function handleSubmit(formData: FormData) {
    setStatus('submitting');
    try {
      const response = await submitContactForm(formData);
      if (response.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
      
      {/* Form Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100"
      >
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-green-50/50 border border-green-200 p-12 rounded-2xl text-center h-full flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-3xl mb-4 text-green-900 tracking-tight">Inquiry Received!</h3>
              <p className="text-green-700 text-lg mb-8 max-w-sm mx-auto">
                Thank you for reaching out. Our sales team is reviewing your requirements and will contact you within 24 hours.
              </p>
              <button 
                onClick={() => setStatus('idle')} 
                className="text-green-600 font-bold hover:text-green-800 transition-colors underline underline-offset-4"
              >
                Submit another inquiry
              </button>
            </motion.div>
          ) : (
            <motion.form 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              action={handleSubmit} 
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 border-b pb-4">Contact Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input type="text" name="name" required className="w-full bg-gray-50 border-gray-200 rounded-xl shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-3 border transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                    <input type="text" name="company" required className="w-full bg-gray-50 border-gray-200 rounded-xl shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-3 border transition-colors" placeholder="Acme Foods Ltd." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Business Email *</label>
                    <input type="email" name="email" required className="w-full bg-gray-50 border-gray-200 rounded-xl shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-3 border transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone / WhatsApp *</label>
                    <input type="tel" name="phone" required className="w-full bg-gray-50 border-gray-200 rounded-xl shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-3 border transition-colors" placeholder="+91 98765 43210" />
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="text-xl font-bold text-gray-900 border-b pb-4">Requirement Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Onion Variety</label>
                  <select name="product" defaultValue="red-onion" className="w-full bg-gray-50 border-gray-200 rounded-xl shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-3 border transition-colors">
                    <option value="red-onion">Red Onion</option>
                  </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Required Quantity (MT)</label>
                    <input type="text" name="quantity" className="w-full bg-gray-50 border-gray-200 rounded-xl shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-3 border transition-colors" placeholder="e.g., 20 MT / 1 Container" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Destination City / Country</label>
                  <input type="text" name="location" className="w-full bg-gray-50 border-gray-200 rounded-xl shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-3 border transition-colors" placeholder="Where do you need it delivered?" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Specifications</label>
                  <textarea name="message" rows={4} className="w-full bg-gray-50 border-gray-200 rounded-xl shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-3 border transition-colors resize-none" placeholder="Specify grades, sizes, or custom packaging requirements..."></textarea>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-[#5c1a1b] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#4a1516] transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">Processing...</span>
                  ) : (
                    <><Send className="w-5 h-5" /> Submit Business Inquiry</>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm mt-3 text-center font-medium">There was an error submitting your inquiry. Please try again or contact us via WhatsApp.</p>
                )}
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Contact Info Sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="lg:col-span-2 space-y-8"
      >
        <div className="bg-[#1a2e1f] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <h3 className="text-2xl font-bold mb-8 text-[#f5f5dc] relative z-10">Direct Contact</h3>
          <div className="space-y-6 relative z-10">
            <a href="tel:+919876543210" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Phone className="w-5 h-5 text-[#f5f5dc]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">Call Us</p>
                <p className="text-lg font-bold group-hover:text-[#f5f5dc] transition-colors">+91 98765 43210</p>
              </div>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">WhatsApp</p>
                <p className="text-lg font-bold text-green-400 group-hover:text-green-300 transition-colors">+91 98765 43210</p>
              </div>
            </a>
            <a href="mailto:sales@nashikonionb2b.example" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5 text-[#f5f5dc]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">Email</p>
                <p className="text-lg font-bold group-hover:text-[#f5f5dc] transition-colors">sales@nashikonion.com</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-[#5c1a1b]" />
            <h3 className="text-xl font-bold text-gray-900">Headquarters</h3>
          </div>
          <address className="not-italic text-gray-600 leading-relaxed font-medium">
            Nashik Agricultural Market,<br />
            Pimpalgaon Baswant,<br />
            Nashik, Maharashtra,<br />
            India - 422209
          </address>
        </div>
      </motion.div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-[#5c1a1b] text-white pt-24 pb-40 rounded-b-[3rem] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#f5f5dc] mb-6 tracking-tight">Request a Bulk Quote</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            Fill out the form below with your exact requirements. Our Nashik-based sales team will respond with a customized quotation within 24 hours.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl -mt-24">
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-400 font-medium">Loading form...</div>}>
          <ContactFormContent />
        </Suspense>
      </div>
    </main>
  );
}
