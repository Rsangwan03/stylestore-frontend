import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">We'd love to hear from you! Reach out via the form below or email us at <a href="mailto:de2pak@outlook.com" className="text-blue-600 underline">de2pak@outlook.com</a>.</p>

      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;
