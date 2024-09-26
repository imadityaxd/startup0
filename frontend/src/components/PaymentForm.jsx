import { useState } from 'react';
import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { toast } from 'react-hot-toast';

const DummyPaymentForm = () => {
  const { getCardNumberProps, getExpiryDateProps, getCVCProps, wrapperProps, getCardImageProps } = usePaymentInputs();
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(0); // Mock balance

  const handlePayment = (e) => {
    e.preventDefault();
    if (amount > 0) {
      setBalance(balance + parseInt(amount)); // Add amount to mock balance
      toast.success(`₹${amount} added to your account!`);
      setAmount(''); // Reset the amount
    } else {
      toast.error('Please enter a valid amount');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-36 mb-16">
      <h2 className="text-2xl font-semibold mb-4 text-center">Dummy Payment</h2>
      <h3 className="text-xl mb-6 text-center">Current Balance: <span className="font-bold">₹{balance}</span></h3>

      <form onSubmit={handlePayment}>
        {/* Amount input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Enter Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Credit card input (dummy, no validation needed) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <div {...wrapperProps} className="flex items-center mt-1 border border-gray-300 rounded-md p-2">
            <svg {...getCardImageProps({ images })} className="w-10 h-6 mr-2" />
            <input {...getCardNumberProps()} placeholder="1234 1234 1234 1234"
              className="block w-full px-3 py-2 focus:outline-none sm:text-sm"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              {...getExpiryDateProps()}
              placeholder="MM/YY"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">CVC</label>
            <input
              {...getCVCProps()}
              placeholder="CVC"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Simulate Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default DummyPaymentForm;
