import React from "react";

// import Countersec from "../../Components/Counter/Countersec";
// import AboutCounter from "./AboutCounter";
// import AboutVision from "./AboutVision";

const InvesterSec2 = () => {
  return (
    <>
      <div className="fix12 py-[98px]">
        <h1 className="fpt-500 text-[#141414] text-[44px] leading-[48.84px] border-b-[4px]  border-[#F7E327]">
          Fueling growth-Global investors who have placed confidence in KSH
          Infra
        </h1>
        <div className=" flex flex-col lg:flex-row justify-between gap-[20px] lg:gap-[5%] pt-[30px]">
          <div className="flex-1  xl:w-[538px] xl:min-h-[540px] ">
            <div className="text-[#434343] text-base leading-[26px] fsans-400 flex flex-col justify-between  gap-3">
              <p>Transformative Infra Solutions that Accelerate Growth. </p>
              <p>
                {" "}
                We have delivered over 4 million square feet of warehousing and
                industrial infrastructure to leading global multinational
                companies, such as Kawasaki Motors, Jabil, Faurecia, Gedia,
                Rieter, Linamar, Saleri, Kimberly Clark among several others.
              </p>
              <p>
                {" "}
                This has been made possible by the support we have garnered from
                our marquee global investors such as the Pacific Century Group
                of Hong Kong, Morgan Stanley Real Estate Investing (MSREI) of
                the USA, and Mapletree Investments of Singapore.
              </p>
              <p>
                {" "}
                With our recent Joint Venture Agreement with Indospace Capital
                to develop 10 million square feet of industrial infrastructure
                across key markets in India, we are stated to become the
                preferred partners to companies expanding their footprint in
                manufacturing, e-commerce, logistics, and several other domains.
              </p>
              <p>
                {" "}
                Chakan Park III and all future projects will go through a
                stringent process of innovation and improvement to achieve IGBC
                Platinum certification, setting the benchmark for eco-conscious
                green industrial infrastructure projects.
              </p>
            </div>
          </div>

          <div className="flex-1 xl:flex-none  xl:w-[640px] xl:min-h-[540px] bg-yellow-300 ">
            <img
              src="./investorRel/InvesSpotSec2.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvesterSec2;
