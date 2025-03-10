import React from "react";

const SustainDownload = () => {
  return (
    <>
      <div className="bg-red-600 flex justify-center gap-[50px] h-[352px] items-center">
        <div className="">
          <img src="Sustainability/downloadBook.png" alt="" />
        </div>
        <div className="text-white flex flex-col gap-8 items-start">
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
    </>
  );
};

export default SustainDownload;
