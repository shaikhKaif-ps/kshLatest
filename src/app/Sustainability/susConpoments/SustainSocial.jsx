"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const SustainSocial = () => {
  return (
    <div className="bg-[#EEF0F3] overflow-hidden">
      <div className="md:ml-[calc((100vw-1250px)/2)] py-16 xl-1280:ml-[50px] xl-1024:ml-[45px] xl-768:ml-[40px] w-[90%] mx-auto">
        <h1 className="text-[#092241] fpt-500 text-[44px] border-b-[#D7D7D7] border-b-[1px] pb-3">
          Social
        </h1>

        {/* Swiper Div */}
        <div className="pt-14">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1.3}
            spaceBetween={150}
            navigation={{ nextEl: ".rightBtn", prevEl: ".leftBtn" }}
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop="true"
            breakpoints={{
              320: {
                slidesPerView: 1,
                // spaceBetween: 30,
              },
              768: {
                slidesPerView: 1,
                // spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1.2,
                // spaceBetween: 30,
              },
              1280: {
                slidesPerView: 1.2,
                spaceBetween: 100,
              },
              1536: {
                slidesPerView: 1.3,
                spaceBetween: 80,
              },
              1600: {
                slidesPerView: 1.3,
                spaceBetween: 80,
              },
              1900: {
                slidesPerView: 1.6,
                spaceBetween: 80,
              },
            }}
          >
            <SwiperSlide>
              <div className=" xl-1280:w-[1000px] xl-1024:w-[800px] md:w-[1071px] md:h-[450px] xl-768:h-auto  md:flex">
                <div className="imgCon xl-768:w-[300px] w-[495px] bg-red-400 flex">
                  <img
                    src="/Sustainability/social1.png"
                    className="w-full"
                    alt="Social Impact"
                  />
                </div>
                <div className=" contentCon bg-white xl-768:w-[400px] md:w-[576px] xl-1024:py-10 xl-768:py-4 md:py-24 py-12 px-9 md:px-11">
                  <h1 className="text-[#092241] text-[22px] fsans-700">
                    POSITIVE COMMUNITY ENGAGEMENT
                  </h1>
                  <div className="md:pt-[38px]  pt-6 xl-768:pt-2 text-[#717171] text-base  fsans-600 ">
                    <ul className="flex flex-col gap-[18px] list-disc">
                      <li>
                        Advanced waste management systems to minimize
                        environmental impact and maintain cleanliness in
                        surrounding areas
                      </li>
                      <li>
                        Rainwater harvesting and water recycling to promote
                        sustainable water use and support local water
                        conservation efforts.
                      </li>
                      <li>
                        Stormwater drainage systems to prevent flooding,
                        ensuring safer conditions for both our parks and
                        neighboring communities.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" xl-1280:w-[1000px] xl-1024:w-[800px] md:w-[1071px] md:h-[450px] xl-768:h-auto  md:flex">
                <div className="imgCon xl-768:w-[300px] w-[495px] bg-red-400 flex">
                  <img
                    src="/Sustainability/social1.png"
                    className="w-full"
                    alt="Social Impact"
                  />
                </div>
                <div className=" contentCon bg-white xl-768:w-[400px] md:w-[576px] xl-1024:py-10 xl-768:py-4 md:py-24 py-12 px-9 md:px-11">
                  <h1 className="text-[#092241] text-[22px] fsans-700">
                    EMPLOYEE WELL-BEING
                  </h1>
                  <div className="md:pt-[38px]  pt-6 xl-768:pt-2 text-[#717171] text-base  fsans-600 ">
                    <ul className="flex flex-col gap-[18px] list-disc">
                      <li>
                        Improved accessibility and personnel amenities to create
                        a better, more comfortable experience for employees and
                        visitors.
                      </li>
                      <li>
                        Sustainable infrastructure designed to enhance workplace
                        safety, efficiency, and overall employee satisfaction.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" xl-1280:w-[1000px] xl-1024:w-[800px] md:w-[1071px] md:h-[450px] xl-768:h-auto  md:flex">
                <div className="imgCon xl-768:w-[300px] w-[495px] bg-red-400 flex">
                  <img
                    src="/Sustainability/social1.png"
                    className="w-full"
                    alt="Social Impact"
                  />
                </div>
                <div className=" contentCon bg-white xl-768:w-[400px] md:w-[576px] xl-1024:py-10 xl-768:py-4 md:py-24 py-12 px-9 md:px-11">
                  <h1 className="text-[#092241] text-[22px] fsans-700">
                    ENVIRONMENTAL & OPERATIONAL RESPONSIBILITY
                  </h1>
                  <div className="md:pt-[38px]  pt-6 xl-768:pt-2 text-[#717171] text-base  fsans-600 ">
                    <ul className="flex flex-col gap-[18px] list-disc">
                      <li>
                        Solar energy system options at all industrial and
                        logistics parks to reduce reliance on the national power
                        grid.
                      </li>
                      <li>
                        Sustainable development practices integrated into all
                        future projects, ensuring long-term environmental
                        responsibility.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Swiper Buttons */}
        <div className="pt-12 flex justify-center items-center gap-4">
          <div className="cursor-pointer leftBtn w-10 h-10 border-2 border-[#D7D7D7] rounded-full flex items-center justify-center">
            <img src="/Sustainability/socialLeft.svg" alt="Left Arrow" />
          </div>
          <div className="cursor-pointer rightBtn w-10 h-10 border-2 border-[#D7D7D7] rounded-full flex items-center justify-center">
            <img src="/Sustainability/socialRigthArrow.svg" alt="Right Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainSocial;
