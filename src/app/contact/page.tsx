'use client';

import { submitContactForm } from '@/lib/actions';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactPage() {
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
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#5c1a1b] mb-4">Request a Bulk Quote</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please fill out the form below with your exact requirements. Our sales team will get back to you with a customized quotation within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            {status === 'success' ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded text-green-800">
                <h3 className="font-bold text-lg mb-2">Inquiry Submitted Successfully!</h3>
                <p>Thank you for reaching out. Our team will review your requirements and contact you shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 underline font-medium">Submit another inquiry</button>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input type="text" name="name" required className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-2 border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                    <input type="text" name="company" required className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-2 border" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                    <input type="email" name="email" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-2 border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp *</label>
                    <input type="tel" name="phone" required className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-2 border" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country / City</label>
                    <input type="text" name="location" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-2 border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Buyer Type</label>
                    <select name="buyerType" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-2 border">
                      <option value="">Select Buyer Type</option>
                      <option value="wholesaler">Wholesaler / Distributor</option>
                      <option value="retail">Retail Chain / Supermarket</option>
                      <option value="processing">Food Processing / Manufacturer</option>
                      <option value="importer">International Importer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-4">Requirement Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Onion Variety</label>
                      <select name="product" defaultValue={prefilledProduct} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-2 border">
                        <option value="">Select Variety</option>
                        <option value="red-onion">Red Onion</option>
                        <option value="white-onion">White Onion</option>
                        <option value="pink-onion">Pink Onion</option>
                        <option value="small-onion">Small Onion</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Required Quantity (MT)</label>
                      <input type="text" name="quantity" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-2 border" placeholder="e.g., 20 MT" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message / Specifications</label>
                  <textarea name="message" rows={4} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#5c1a1b] focus:border-[#5c1a1b] p-2 border" placeholder="Specify grades, sizes, or packaging requirements..."></textarea>
                </div>

                <div>
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full md:w-auto bg-[#5c1a1b] text-white px-8 py-3 rounded font-bold hover:bg-[#4a1516] transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Business Inquiry'}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-500 text-sm mt-2">There was an error submitting your inquiry. Please try again or contact us via WhatsApp.</p>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#1a2e1f] text-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-[#f5f5dc]">Direct Contact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Call Us</p>
                  <a href="tel:+919876543210" className="text-lg font-semibold hover:underline">+91 98765 43210</a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline text-green-400">+91 98765 43210</a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a href="mailto:sales@nashikonionb2b.example" className="text-lg font-semibold hover:underline">sales@nashikonionb2b.example</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-[#1a2e1f]">Business Address</h3>
              <address className="not-italic text-gray-600 leading-relaxed">
                Nashik Agricultural Market,<br />
                Pimpalgaon Baswant,<br />
                Nashik, Maharashtra,<br />
                India - 422209
              </address>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
