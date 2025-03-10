import React from "react";

const AboutVision = () => {
  return (
    <>
      <div className="flex ">
        <div className="bg-[#092241] py-16 px-[5%] lg:px-0 lg:w-full  lg:pl-[7%] lg:pr-[5%] xl-1920:pl-[17%]">
          <div className="flex flex-col xl-768:flex-row gap-11 lg:gap-0 xl:flex-row justify-between xl:h-[756px]">
            <div className="xl-768:w-[300px] xl:flex-none xl:w-[531px]  ">
              <h1
                className="text-transparent fpt-700 text-6xl  xl:text-[140px] font-bold stroke-[#6C8DAB] xl:mb-[-30px] mb-[-7px]"
                style={{ WebkitTextStroke: "1px #6C8DAB" }}
              >
                Vision
              </h1>
              <div className="">
                <div className="">
                  <img src="./AboutPage/vision.png" alt="" />
                </div>
                <div className="bg-white text-base fsans-600">
                  <p className="pt-[55px] px-[35px] pb-[25px]">
                    Creating highly functional, transformative, carbon-neutral,
                    and sustainable warehousing and industrial park solutions
                    across key markets in India
                  </p>
                </div>
              </div>
            </div>

            <div className="xl-768:w-[300px] xl:flex-none xl:w-[531px] h-full flex flex-col justify-end  ">
              <h1
                className="text-transparent fpt-700 text-6xl  xl:text-[140px] font-bold stroke-[#6C8DAB] xl:mb-[-30px] mb-[-7px]"
                style={{ WebkitTextStroke: "1px #6C8DAB" }}
              >
                Mission
              </h1>
              <div className="bg-yellow-300">
                <div className="">
                  <img src="./AboutPage/mission.png" alt="" />
                </div>
                <div className="bg-white text-base fsans-600">
                  <p className="pt-[55px] px-[35px] pb-[25px]">
                    Becoming the preferred industrial real-estate partner to the
                    logistics, eCommerce, and manufacturing sectors and
                    attracting institutional capital from India and beyond by
                    demonstrating excellence in corporate governance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="lg:pb-[122px]  flex flex-col lg:flex-row justify-between items-end pt-11 lg:pt-0">
            <div className="flex-1 xl:flex-none xl:w-[531px] pb-6">
              <h1
                className="text-transparent fpt-700 text-6xl  xl:text-[140px] font-bold stroke-[#6C8DAB] xl:mb-[-30px] mb-[-7px]"
                style={{ WebkitTextStroke: "1px #6C8DAB" }}
              >
                Values
              </h1>
              <div className="">
                <div className="">
                  <img src="./AboutPage/values.png" alt="" />
                </div>
              </div>
            </div>

            <div className="parent lg:w-[535px]">
              <div className="flex flex-col lg:flex-row md:gap-0 gap-5 ">
                <div
                  className="flex-1 lg:h-[150px] lg:pr-[35px] lg:border-r-[1px] border-solid border-transparent"
                  style={{
                    borderImage:
                      "linear-gradient(to top right, rgba(221, 221, 221, 0.89), rgba(221, 221, 221, 0)) 10",
                  }}
                >
                  <h1 className="text-3xl fpt-500 pb-[6px] text-white">
                    Leadership
                  </h1>
                  <p className="text-[#C1C1C1] text-sm ">
                    We uphold sustainability, integrity, trust, and
                    accountability, embedding these values into all our parks to
                    set industry benchmarks.
                  </p>
                </div>
                <div className="flex-1 lg:h-[150px]  lg:pl-[35px] ">
                  <h1 className="text-3xl fpt-500 pb-[6px] text-white">
                    Teamwork
                  </h1>
                  <p className="text-[#C1C1C1] text-sm ">
                    Our care extends beyond clients and surroundings, fostering
                    trust and meaningful relationships for a better future.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row md:gap-0 gap-5 ">
                <div
                  className="flex-1 lg:h-[150px] pr-[35px] lg:border-r-[1px] lg:border-t-[1px] border-solid border-transparent"
                  style={{
                    borderImage:
                      "linear-gradient(to top right, rgba(221, 221, 221, 0), rgba(185, 140, 140, 0.70)) 30",
                  }}
                >
                  <h1 className="text-3xl fpt-500 pb-[6px] text-white pt-[13px]">
                    Responsible
                  </h1>
                  <p className="text-[#C1C1C1] text-sm ">
                    We uphold sustainability, integrity, trust, and
                    accountability, embedding these values into all our parks to
                    set industry benchmarks.
                  </p>
                </div>
                <div
                  className="flex-1  lg:h-[150px] lg:pl-[35px] lg:border-t-[1px] border-solid border-transparent"
                  style={{
                    borderImage:
                      "linear-gradient(to top right, rgba(221, 221, 221, 0), rgba(185, 140, 140, 0.70)) 30",
                  }}
                >
                  <h1 className="text-3xl fpt-500 pb-[6px] text-white pt-[13px]">
                    Caring
                  </h1>
                  <p className="text-[#C1C1C1] text-sm ">
                    Our diverse team thrives on respect and communication,
                    ensuring cohesive efforts toward shared goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#EEF0F3] w-[7%] xl-1920:w-[22%] xl-1600:w-[13.5%] xl-1536:w-[11%] xl-1440:w-[7.5%] xl-1366:w-[5.5%]  hidden min-1366:block"></div>
      </div>
    </>
  );
};

export default AboutVision;
