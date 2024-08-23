

import React, { useState } from 'react';

const DollarToNairaConverter = () => {
  const [dollarAmount, setDollarAmount] = useState('');
  const [nairaAmount, setNairaAmount] = useState('');

  const exchangeRate = 410;

  const convertToNaira = () => {
    if (!isNaN(dollarAmount)) {
      const convertedAmount = parseFloat(dollarAmount) * exchangeRate;
      setNairaAmount(convertedAmount.toFixed(2));
    } else {
      setNairaAmount('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"><img src="https://img.freepik.com/premium-photo/black-woman-cash-fan-finance-portrait-happy-with-prize-loan-dollars-isolated-blue-background-money-cashback-lottery-win-with-payment-financial-freedom-bills-studio_590464-215149.jpg" alt="" />
        <h2 className="text-2xl font-bold mb-6 text-center">Dollar to Naira Converter</h2>
        <div className="mb-4">
          <label htmlFor="dollarAmount" className="block text-gray-700 mb-2">Enter amount in USD:</label>
          <input
            type="number"
            id="dollarAmount"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            placeholder="Enter amount"
            value={dollarAmount}
            onChange={(e) => setDollarAmount(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full w-full"
          onClick={convertToNaira}
        >
          Convert
        </button>
        {nairaAmount !== '' && (
          <div className="mt-4">
            <p className="text-lg font-semibold mt-2">Equivalent amount in NGN:</p>
            <p className="text-2xl text-green-700 font-bold">{nairaAmount} NGN</p>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default DollarToNairaConverter;
