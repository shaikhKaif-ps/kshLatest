"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const SustainDownload2 = () => {
  const tabsData = [
    {
      title: "IGBC",
      heading: "IGBC Certification",
      description:
        "The vision of the Indian Green Building Council (IGBC)—a part of the Confederation of Indian Industry (CII)—is to enable a sustainably built environment for all. KSH INFRA Chakan Park II Industrial park is going through a stringent process of innovation and improvement to achieve IGBC Platinum certification, the recognized standard of green infrastructure.",
      image: "/Slideimgs/IGBC.png",
    },
    {
      title: "EDGE",
      heading: "EDGE Certification",
      description:
        "EDGE is a green building certification system focused on making buildings more resource-efficient. KSH INFRA Chakan Park II is implementing sustainable practices to achieve EDGE certification, ensuring energy efficiency and cost savings for industrial development.",
      image: "/Slideimgs/EDGE.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Handle tab click (updates both tab and slide)
  const handleTabClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    }
  };

  // Handle navigation
  const handleNext = () => {
    if (swiperRef.current && activeIndex < tabsData.length - 1) {
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

  return (
    <div
      className="h-auto lg:h-[690px] flex overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
      }}
    >
      <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden w-full">
        {/* Left Section */}
        <div className="leftCon bg-[#141D28] w-full lg:w-[60%] px-[5%]">
          {/* Heading & Tabs */}
          <div className="md:flex items-center justify-between pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50">
            <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
              Certifications
            </h1>
            {/* Tabs */}
            <div className="tabs flex gap-4">
              {tabsData.map((tab, index) => (
                <button
                  key={tab.title}
                  className={`px-3 h-[46px] border-[#D7D7D7] border-opacity-50 border-[2px] text-white rounded-[10px] ${
                    activeIndex === index
                      ? "bg-red-700 border-red-700"
                      : "bg-transparent"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Animated Content Section */}
          <div className="relative w-full h-[300px] xl-1024:h-[350px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -500, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
                className="absolute text-white"
              >
                <h1 className="text-3xl md:text-6xl font-medium border-b-[8px] border-[#F7E327] w-fit pb-3 pt-16">
                  {tabsData[activeIndex].heading}
                </h1>
                <p className="md:w-[60%] pt-6 md:pt-12 md:pb-12 text-base text-[#6C8DAB]">
                  {tabsData[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center pt-[45px] justify-between pb-[70px]">
            <div className="flex items-center gap-4 text-[#fff] text-[16px] group hover:translate-x-[5px] transition-transform duration-[400ms] cursor-pointer">
              <img
                src="/buttonarrows/redarico.svg"
                className="group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out h-10 w-10 rotate-45 hover:rotate-0 cursor-pointer"
                alt=""
              />
              Explore Careers
            </div>

            <div className="flex gap-2 items-center">
              <button
                className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
                onClick={handlePrev}
                disabled={activeIndex === 0}
              >
                <img className="h-10 w-10" src="/landingr.svg" alt="" />
              </button>
              <div className="text-base text-[#6C8DAB]">
                {activeIndex + 1} / {tabsData.length}
              </div>
              <button
                className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
                onClick={handleNext}
                disabled={activeIndex === tabsData.length - 1}
              >
                <img className="h-10 w-10" src="/landingl.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (Swiper) */}
        <div className="rightCon w-full lg:w-[40%] h-full bg-green-500 CertificationsRigthImgBg">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {tabsData.map((tab) => (
              <SwiperSlide key={tab.title}>
                <img
                  src={tab.image}
                  alt={tab.title}
                  className="max-w-none w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SustainDownload2;
