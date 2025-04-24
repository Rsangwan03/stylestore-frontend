import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        We respect your privacy and are committed to protecting your personal data. This policy explains how we handle your information.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>We only collect necessary information to provide our services.</li>
        <li>We never sell your personal data to third parties.</li>
        <li>Your data is stored securely and only accessible by authorized personnel.</li>
      </ul>
      <p className="mt-4">
        If you have any questions or concerns, feel free to <a href="/contact" className="text-blue-600 underline">contact us</a>.
      </p>
    </div>
  );
};

export default Privacy;
