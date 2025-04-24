import React from 'react';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Order Successfully Placed!</h2>
        <p>Your order has been placed successfully. You will receive a confirmation email shortly.</p>
        <div className="mt-4">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
