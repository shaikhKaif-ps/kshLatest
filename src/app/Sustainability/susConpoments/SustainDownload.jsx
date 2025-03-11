import React from "react";

const SustainDownload = () => {
  return (
    <div className="bg-red-500 bgSusDown">
      <div className="flex flex-col md:flex-row w-[90%] mx-auto justify-center gap-[50px] md:h-[352px] items-center py-10 ">
        <div className="">
          <img src="Sustainability/downloadBook.png" alt="" />
        </div>
        <div className="text-white flex flex-col gap-8 items-start justify-center">
          <h1 className="fsans-600 text-xl">
            View how we prioritize sustainability in every task, Download our
            ESG Report
          </h1>
          <button className="items-center fsans-600 text-[16px] leading-7 flex py-3 px-8 border gap-[10px] border-[#D7D7D7] rounded-[10px] ">
            Download Now{" "}
            <img src="Sustainability/downloadBookArrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SustainDownload;
