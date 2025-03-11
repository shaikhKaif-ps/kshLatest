"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion"; // Import motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import LineHead from "./Heading/LineHead";
const Capabilities = () => {
  const tabs = [
    {
      title: "Capital Deployment",
      heading: (
        <>
          Capital <br /> Deployment
        </>
      ),
      content:
        "Capital Deployment Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      images: {
        top: ["/OurCapabilities/dev_top1.png"],
        bottom1: ["/OurCapabilities/dev_bottom1_1.png"],
        bottom2: ["/OurCapabilities/dev_bottom2_1.png"],
      },
    },
    {
      title: "Land Acquisition",
      heading: (
        <>
          {" "}
          Land <br /> Acquisition{" "}
        </>
      ),
      content:
        "Land Acquisition Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      images: {
        top: ["/OurCapabilities/top1.png"],
        bottom1: ["/OurCapabilities/bottom1_1.png"],
        bottom2: ["/OurCapabilities/bottom2_1.png"],
      },
    },
    {
      title: "Property Management",
      heading: (
        <>
          {" "}
          Property <br /> Management{" "}
        </>
      ),
      content:
        "Property Management Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      images: {
        top: ["/OurCapabilities/proTop.png"],
        bottom1: ["/OurCapabilities/proBottom2.png"],
        bottom2: ["/OurCapabilities/proBottom1.png"],
      },
    },
  ];
  const [activeTab, setActiveTab] = useState(0); // Track active tab index

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  // Handle navigation
  const handleNext = () => {
    if (swiperRef.current && activeIndex < tabs.length - 1) {
      setActiveIndex(activeIndex + 1);
      swiperRef.current.slideNext();
    }
  };
  const handlePrev = () => {
    if (swiperRef.current && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      swiperRef.current.slidePrev();
    }
  };

  // Fade in
  const fadeInX = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
    },
  };
  return (
    <div className="bg-[#092241] ">
      <div className="bg-[#092241] md:h-auto h-fit flex items-end justify-end">
        <div className="border-white w-full  maxTab xl-1024:ml-[44px] xl-1280:ml-[59px] xl-1366:ml-[60px] xl-1440:ml-[90px] xl-1536:ml-[137px] xl-1600:ml-[175px] xl-1920:ml-[17.5%]  lg:pb-0 pb-[100px] lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
          <div className="leftCon flex-1 max-h-[600px]  ">
            <div className="pt-[40px]">
              <LineHead
                heading="Our Capabilities"
                bclr="#d7d7d7"
                bopacity="34%"
                clr="text-white"
              />
            </div>
            {/* Tabs */}
            <div className="tabs flex flex-nowrap overflow-x-scroll overflow-y-hidden gap-4  xl-768:w-[95%] xl-1024:w-[90%] xl-1280:w-[90%] xl-1440:w-[90%]">
              {tabs.map((tab, index) => (
                <button
                  key={tab.title}
                  className={`px-3 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px]
                                ${
                                  activeTab === index
                                    ? "bg-[#E30613] text-black"
                                    : ""
                                }`}
                  onClick={() => setActiveTab(index)} // Update active tab
                >
                  {tab.title}
                </button>
              ))}
            </div>
            {/* Animated Content Section */}
            <div className="w-full pt-[30px] xl:pt-0">
              <motion.div
                key={activeTab} // Re-render on tab change
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                // exit={{ x: -1000, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
                className="w-[516px] xl-1024:w-[400px] contentArea xl-768:w-full"
              >
                <div className="flex flex-col  xl:pt-10 gap-7 xl-1280:h-[350px]  xl-1366:h-[300px] xl-768:w-full  w-[516px] xl-1024:w-[400px] contentArea xl-1024:h-[300px] h-[250px] xl-768:h-auto xl-768:gap-10 xl-1440:h-[385px] min-1440:h-[390px] ">
                  <h1 className="tabHeading text-4xl md:text-[40px] md:leading-[50px] lg:text-[60px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327] ]">
                    {tabs[activeTab].heading}
                    {/* dangerouslySetInnerHTML= {{ __html: tabs[activeTab].heading }} */}
                  </h1>
                  <p className="tabContent text-xl gradinetText xl-1024:text-lg">
                    {tabs[activeTab].content}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center xl-1366:pt-20 pt-[35px] xl:w-[60%] xl-1280:w-[80%] xl-1024:w-[90%] xl-1440:w-[90%] md:w-[100%] w-[100%] justify-between">
              {/* <div className="flex items-center gap-4 text-[#fff] text-[16px] group hover:translate-x-[5px] transition-transform duration-[400ms] cursor-pointer">
                <img
                  src="/buttonarrows/redarico.svg"
                  className="group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out  h-10 w-10 rotate-45 hover:rotate-0 cursor-pointer"
                  alt=""
                />
                Explore Capabilities
              </div> */}

              <button className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3">
                <img
                  src="/buttonarrows/redarico.svg"
                  width={0}
                  height={0}
                  className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
                  alt="Red Arrow Icon"
                />
                <p className="text-[#ffffff] fsans-600">Explore More</p>
              </button>

              <div className="flex gap-2 items-center">
                <button
                  className="rounded-full border flex items-center justify-center disabled:opacity-50"
                  onClick={() => {
                    setActiveTab((prev) => Math.max(prev - 1, 0));
                    handleNext();
                  }}
                  disabled={activeTab === 0}
                >
                  <img className="w-10 h-10" src="/landingr.svg" alt="" />
                </button>
                <div className="text-base text-[#6C8DAB]">
                  {activeTab + 1} / {tabs.length}
                </div>

                <button
                  className="rounded-full border border-[#D7D7D7] border-opacity-50 w-10 h-10 flex items-center justify-center disabled:opacity-50"
                  onClick={() => {
                    setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1));
                    handlePrev();
                  }}
                  disabled={activeTab === tabs.length - 1}
                >
                  <img className="w-10 h-10" src="/landingl.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          {/* Right Container with Swipers */}
          <div className="rightCon flex-1 lg:max-w-[50%]">
            {/* Top Image Swiper */}
            <div>
              <Swiper
                modules={[EffectFade, Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                className="h-full w-full topSlider"
              >
                {tabs[activeTab].images.top.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <motion.div>
                      <img
                        src={img}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex h-full">
              {/* Bottom Left Image Swiper */}
              <div className="w-[50%] h-[236px]">
                <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation
                  className="h-full w-full bottomLeft"
                >
                  {tabs[activeTab].images.bottom1.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Bottom Right Image Swiper */}
              <div className="w-[50%] h-[236px]">
                <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation
                  className="h-full w-full bottomright"
                >
                  {tabs[activeTab].images.bottom2.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Capabilities;
