import React from "react";

const AboutOurLeadership = () => {
  return (
    <div className="bg-[#EEF0F3] h-[]">
      <div className="fix12 py-8 lg:py-[90px]">
        <div className="head md:flex items-center pb-[10px] justify-between border-b border-[#D7D7D7]">
          <h1 className="text-3xl lg:text-[44px] fpt-600">Our Leadership</h1>

          <div className="w-fit items-center text-sm btnCon lg:text-[18px] fsans-600 bg-[#E30613] gap-[10px] text-white py-2 flex px-5 lg:py-3 rounded-[70px]">
            Meet The team{" "}
            <img
              src="/AboutPage/meetTheTeam.svg"
              className="w-[14px] h-[14px]"
              alt=""
            />{" "}
          </div>
        </div>
        <div className="ImgCon pt-[30px] lg:pt-[50px]">
          <img src="/AboutPage/AboutOurLeadership.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutOurLeadership;
