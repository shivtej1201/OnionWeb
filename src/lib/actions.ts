'use server'

export async function submitQuoteForm(formData: FormData) {
  // In a real application, this would save to a database or send an email.
  const data = {
    name: formData.get('name'),
    company: formData.get('company'),
    whatsapp: formData.get('whatsapp'),
    product: formData.get('product'),
    quantity: formData.get('quantity'),
    destination: formData.get('destination'),
    message: formData.get('message'),
  };
  
  console.log('Received Quote Request:', data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true, message: 'Your quote request has been received. Our sales team will contact you shortly.' };
}

export async function submitContactForm(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  console.log('Received Contact Inquiry:', data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true, message: 'Your inquiry has been submitted successfully.' };
}
