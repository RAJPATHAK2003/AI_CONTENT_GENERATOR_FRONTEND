// import {PaymentElement,useElements,useStripe} from '@stripe/react-stripe-js'
import { useNavigate } from "react-router";

const CheckoutForm=()=>{
    let navigate=useNavigate();
    const handleClink=()=>{
        navigate("/paymentsuccess")
    }
   return  (
    <div  className='bg-gray-900 h-screen -mt-4 flex justify-center items-center'>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Payment

        </h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="bankName" className="block text-gray-800 font-bold mb-2">
              Bank Name
            </label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              className="w-full border border-gray-300 p-2 rounded-md shadow-md"
              placeholder="Enter bank name"
            />
          </div>
          <div>
            <label htmlFor="accountNumber" className="block text-gray-800 font-bold mb-2">
              Bank Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              className="w-full border border-gray-300 p-2 rounded-md shadow-md"
              placeholder="Enter account number"
            />
          </div>
          <div>
            <label htmlFor="ifscCode" className="block text-gray-800 font-bold mb-2">
              IFSC Code
            </label>
            <input
              type="text"
              id="ifscCode"
              name="ifscCode"
              className="w-full border border-gray-300 p-2 rounded-md shadow-md"
              placeholder="Enter IFSC code"
            />
          </div>
          <div>
          <div>
  <label htmlFor="expiryMonth" className="block text-gray-800 font-bold mb-2">
    Expiry Month
  </label>
  <input
    type="number"
    id="expiryMonth"
    name="expiryMonth"
    className="w-full border border-gray-300 p-2 rounded-md shadow-md"
    placeholder="MM"
    min="1"
    max="12"
    aria-label="Expiry month"
  />

  <label htmlFor="expiryYear" className="block text-gray-800 font-bold mt-4 mb-2">
    Expiry Year
  </label>
  <input
    type="number"
    id="expiryYear"
    name="expiryYear"
    className="w-full border border-gray-300 p-2 rounded-md shadow-md"
    placeholder="YY"
    min="00"
    max="99"
    aria-label="Expiry year"
  />
</div>
          </div>
          <button
            type="submit"
            onClick={handleClink}
            className="w-full rounded-lg bg-blue-500 text-white px-6 py-2 font-medium uppercase"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
    </div>
   )
}
export default CheckoutForm;


