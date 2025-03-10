import React from "react";

const SustainSpotLigth = () => {
  return (
    <div className="relative bg-[#092241] h-[742px] z-0">
      {/* <div className=""> */}
      <div className="fix12 pt-[140px] ">
        <p className="text-[#D7D7D7A3] text-base fsans-400">{`Home  > Sustainability`}</p>
        <h1 className="text-[60px] max-w-fit ftp-500 text-white border-b-[6px] border-[#F7E327] ">
          Sustainability &nbsp;&nbsp;&nbsp;
        </h1>
      </div>
      <img
        src="./Sustainability/sustainSpot.png"
        // className="absolute bottom-0 w-full h-[637px]"
        className="absolute bottom-0 w-full "
        alt=""
      />
    </div>
  );
};

export default SustainSpotLigth;
