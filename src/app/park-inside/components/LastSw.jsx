"use client"; // Add this at the top if using Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import LastCard from "./LastCard";
const LastSw = () => {
  return (
    <div className="bg-white pt-[72px] pb-[95px] flex gap-[49px] flex-col">
      <div className="flex md:flex-row flex-col items-start md:gap-0 gap-[20px] fix12 justify-between">
        <h3 className="fsans-600 leading-[111%] border-b-[6px] border-b-[#F7E327] max-w-fit spotlightheaddd text-[36px] md:text-[44px] text-[#092241]">
          Other Parks in Chakan
        </h3>
        <div className="flex gap-[14px] items-center justify-center">
          <button className="swiper-button-prev-landing h-[41px] w-[41px]">
            <img
              className="h-[41px] w-[41px]"
              src="/buttonarrows/arrowleft.svg"
              alt="ArrowLeft"
            />
          </button>
          <button className="swiper-button-next-landing h-[41px] w-[41px]">
            <img
              className="h-[41px] w-[41px]"
              src="/buttonarrows/arrowright.svg"
              alt="ArrowRight"
            />
          </button>
        </div>
      </div>
      <div className="ml-[max(5%,calc((100vw-1250px)/2))]" id="slidercontpp2">
        <Swiper
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: ".swiper-button-prev-landing",
            nextEl: ".swiper-button-next-landing",
          }}
          spaceBetween={43}
          slidesPerView={3.5} // Show 3 slides at a time
          speed={300}
          freeMode={true}
          preventInteractionOnTransition={true}
          allowTouchMove={false}
          touchMoveStopPropagation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 43,
            },
          }}
        >
          <SwiperSlide>
            <LastCard />
          </SwiperSlide>
          <SwiperSlide>
            <LastCard />
          </SwiperSlide>
          <SwiperSlide>
            <LastCard />
          </SwiperSlide>
          <SwiperSlide>
            <LastCard />
          </SwiperSlide>
          <SwiperSlide>
            <LastCard />
          </SwiperSlide>
          <SwiperSlide>
            <LastCard />
          </SwiperSlide>
          <SwiperSlide>
            <LastCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LastSw;
