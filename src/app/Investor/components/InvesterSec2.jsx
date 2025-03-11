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
            <div className="text-[#434343] text-base flex flex-col justify-between  gap-3">
              <p>Transformative Infra Solutions that Accelerate Growth. </p>
              <p>
                {" "}
                Having delivered over 4 million square feet of high-quality
                industrial and logistical assets, KSH INFRA is on a steady
                trajectory of expansion across key Indian markets with a
                targeted development of 10 million square feet over the next 5
                years.
              </p>
              <p>
                {" "}
                We construct industrial and logistics parks that are greener,
                leaner, and more efficient. KSH believes in minimizing
                environmental impact and surrounding community stress induced by
                infrastructure development.
              </p>
              <p>
                {" "}
                The design and construction of high-quality energy- and
                resource-efficient industrial infrastructure stem from KSH INFRA
                core philosophy—Inspiring a green industrial future by driving
                sustainability and accelerating impact. We have time and again
                demonstrated how critical your successes are to us by ensuring
                long-term savings and timely delivery of complex projects.
              </p>
            </div>
          </div>

          <div className="flex-1 xl:flex-none  xl:w-[640px] xl:min-h-[540px] bg-yellow-300 ">
            <img
              src="/AboutPage/aboutUsSec2.png"
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
