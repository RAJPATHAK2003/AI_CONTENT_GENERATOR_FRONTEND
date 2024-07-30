import React from 'react';

const PaymentSuccessCard = () => (
  <div className="max-w-sm mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-xl overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-2xl text-white mb-2">Payment Successful!</div>
      <p className="text-white text-base">
        Thank you for your payment. Your transaction was successful.
      </p>
    </div>
  </div>
);

export default PaymentSuccessCard;
