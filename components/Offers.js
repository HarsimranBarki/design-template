import React from "react";
import upload from "../public/📤.png";
import party from "../public/🎉.png";
import spin from "../public/🤸.png";
import book from "../public/📚.png";

const Offers = () => {
  return (
    <div className="flex items-strech justify-between mt-20 max-w-screen-2xl m-auto flex-grow space-x-10  ">
      <div className="border border-gray-500 p-8 rounded-md bg-white">
        <img src={upload} alt="" />
        <h2 className="text-gray-900 font-semibold text-xl mt-3">
          Request Design
        </h2>
        <p className="text-gray-500">
          Send us a message with all the details. At any time during the day.
          Through Discord, Slack, or even Whatsapp{" "}
        </p>
      </div>
      <div className="border border-gray-500 p-8 rounded-md bg-white">
        <img src={spin} alt="" />
        <h2 className="text-gray-900 font-semibold text-xl mt-3">
          Quick Response
        </h2>
        <p className="text-gray-500">
          {" "}
          One of our designer will get back to you with 24 hours detailing the
          time frame you will be receiving your designs
        </p>
      </div>
      <div className="border border-gray-500 p-8 rounded-md bg-white">
        <img src={book} alt="" />
        <h2 className="text-gray-900 font-semibold text-xl mt-3">Revision</h2>
        <p className="text-gray-500">
          Unlimited Revision are included in all our plans. At no extra fee
          whatsover so that we can assure you love the final designs.
        </p>
      </div>
      <div className="border border-gray-500 p-8 rounded-md bg-white">
        <img src={party} alt="" />
        <h2 className="text-gray-900 font-semibold text-xl mt-3">All Done</h2>
        <p className="text-gray-500">
          {" "}
          Done with one project? No problem, keep asking for more, It's all
          included in the price. Again, at no extra fee whatsoever!
        </p>
      </div>
    </div>
  );
};

export default Offers;
