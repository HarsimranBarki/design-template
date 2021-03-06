import React from "react";

const Pricing = () => {
  return (
    <div className="mt-20  max-w-screen-2xl m-auto ">
      <h1 className="text-6xl text-purple-900 font-semibold leading-tight">
        Transparent Pricing
      </h1>
      <p className="text-gray-500 mt-3">
        No hidden fees or extra charges, view the charts for all things
        Pricing-related.
      </p>

      <div className="flex items-center space-x-10 mt-5">
        <div className="border border-gray-400 p-5 rounded-lg bg-yellow-100 w-80">
          <button className="rounded-full bg-purple-900 text-purple-100 px-4 py-2 shadow-md block">
            Startup
          </button>
          <button className="bg-purple-900 text-purple-100 hover:bg-purple-800 transition-all px-5 py-2 mt-3 w-full rounded-md shadow-inner font-medium">
            Try for free
          </button>
          <div className="mt-5">
            <ol className="list-disc ml-5  space-y-3">
              <li>Brochure, websites, applications</li>
              <li>Free stock photos</li>
              <li>Unlimited Revision</li>
              <li>Unlimited Orders</li>
            </ol>
            <div className="text-4xl mt-10 font-semibold">$699/Mo</div>
          </div>
        </div>
        <div className="border border-gray-400 p-5 rounded-lg bg-yellow-100 w-80">
          <button className="rounded-full bg-purple-900 text-purple-100 px-4 py-2 shadow-md block">
            Buisness
          </button>

          <button className="bg-yellow-100 border border-purple-900 text-purple-900 hover:bg-purple-100 transition-all px-5 py-2 mt-3 w-full rounded-md shadow-inner font-medium">
            Try for free
          </button>
          <div className="mt-5">
            <ol className="list-disc ml-5 space-y-3">
              <li>Brochure, websites, applications</li>
              <li>Free stock photos</li>
              <li>Unlimited Revision</li>
              <li>Unlimited Orders</li>
            </ol>
          </div>
          <div className="text-4xl mt-10 font-semibold">$699/Mo</div>
        </div>
        <div className="border border-gray-400 p-5 rounded-lg bg-yellow-100 w-80">
          <button className="rounded-full bg-purple-900 text-purple-100 px-4 py-2 shadow-md">
            Enterprise
          </button>
          <button className="bg-yellow-100 border border-purple-900 text-purple-900 hover:bg-purple-100 transition-all px-5 py-2 mt-3 w-full rounded-md shadow-inner font-medium">
            Schedule consultancy call
          </button>
          <div className="mt-5">
            <ol className="list-disc ml-5  space-y-3">
              <li>Brochure, websites, applications</li>
              <li>Free stock photos</li>
              <li>Unlimited Revision</li>
              <li>Unlimited Orders</li>
            </ol>
            <div className="text-4xl mt-10 font-semibold">Contact US</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
