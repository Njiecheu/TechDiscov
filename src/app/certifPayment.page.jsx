import { Link } from "rasengan";
import logo from "@assets/logo.svg";
import Image from "@rasenganjs/image";

const CertifPayment = () => {
  return (
    <section className="w-full h-full  flex flex-col items-center py-8 px-[20px] md:px-[50px] xl:px-[200px] font-comfortaa">
      <form>
        <div className="mb-4">
          <label
            htmlFor="card-element"
            className="block text-gray-700 font-bold"
          >
            Card Number
          </label> 
          <input
            id="card-element"
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your card number"
            type="card"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="card-expiry"
            className="block text-gray-700 font-bold"
          >
            Expiry Date
          </label>
          <div className="flex items-center">
            <input
              id="card-expiry-month"
              className="w-16 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM"
              type="number"
              max="12"
            />
            <span className="mx-2 text-gray-500">/</span>
            <input
              id="card-expiry-year"
              className="w-16 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="YYYY"
              type="number"
              min="2023"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="card-cvc" className="block text-gray-700 font-bold">
            CVC
          </label>
          <input
            id="card-cvc"
            className="w-16 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="123"
            type="number"
          />
        </div>

        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 disabled:bg-gray-400 cursor-pointer"
          
          type="submit"
        >
          "Pay Now"
        </button>
      </form>
    </section>
  );
};

CertifPayment.path = "/certif-payment";
CertifPayment.metadata = {
  title: " CertifPayment ",
  description: " CertifPayment  page",
};

export default CertifPayment;
