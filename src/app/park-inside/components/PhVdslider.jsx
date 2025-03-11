// "use client"; // Add this at the top if using Next.js App Router
// import GenLineHead from "@/app/Components/Heading/GenLineHead";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/free-mode";
// const PhVdslider = () => {
//   return (
//     <div className="py-[65px]">
//       <div className="fix12">
//         <GenLineHead heading="Park Gallery" />
//       </div>
//       <div>
//         <div className="ml-[max(5%,calc((100vw-1250px)/2))]">
//           <Swiper
//             modules={[Navigation, FreeMode]}
//             navigation={{
//               prevEl: ".swiper-button-prev-landingp",
//               nextEl: ".swiper-button-prev-landingn",
//             }}
//             spaceBetween={43}
//             slidesPerView={3.5} // Show 3 slides at a time
//             speed={300}
//             freeMode={true}
//             preventInteractionOnTransition={true}
//             allowTouchMove={false}
//             touchMoveStopPropagation={true}
//             breakpoints={{
//               1024: {
//                 slidesPerView: 1,
//                 spaceBetween: 30,
//               },
//               1280: {
//                 slidesPerView: 1.5,
//                 spaceBetween: 43,
//               },
//             }}
//           >
//             <SwiperSlide>
//               <img
//                 className=" h-[380px] max-w-[100%]"
//                 src="/ParkPage/card1.png"
//                 alt=""
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 className=" h-[380px] max-w-[100%]"
//                 src="/ParkPage/card2.png"
//                 alt=""
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 className=" h-[380px] max-w-[100%]"
//                 src="/ParkPage/card1.png"
//                 alt=""
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 className=" h-[380px] max-w-[100%]"
//                 src="/ParkPage/card2.png"
//                 alt=""
//               />
//             </SwiperSlide>
//           </Swiper>
//         </div>
//         <div className="fix12 flex items-start pt-[45px]">
//           <div className="flex gap-[14px] items-center justify-center">
//             <button className="swiper-button-prev-landingp h-[41px] w-[41px]">
//               <img
//                 className="h-[41px] w-[41px]"
//                 src="/ParkPage/parrowp.svg"
//                 alt="ArrowLeft"
//               />
//             </button>
//             <button className="swiper-button-next-landingn h-[41px] w-[41px]">
//               <img
//                 className="h-[41px] w-[41px]"
//                 src="/ParkPage/parrown.svg"
//                 alt="ArrowRight"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhVdslider;

"use client";
import { useEffect, useRef } from "react";
// import GenLineHead from "./app/Components/Heading/GenLineHead";
import GenLineHead from "../../Components/Heading/GenLineHead";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const PhVdslider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl =
        ".swiper-button-prev-landingp";
      swiperRef.current.swiper.params.navigation.nextEl =
        ".swiper-button-next-landingn";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="py-[65px]">
      <div className="fix12">
        <GenLineHead heading="Park Gallery" />
      </div>
      <div>
        <div className="ml-[max(5%,calc((100vw-1250px)/2))]" id="slidercontpp">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, FreeMode]}
            spaceBetween={43}
            slidesPerView={1.5}
            speed={300}
            freeMode={true}
            preventInteractionOnTransition={true}
            // allowTouchMove={false}
            // touchMoveStopPropagation={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              1024: { slidesPerView: 1, spaceBetween: 30 },
              1280: { slidesPerView: 1.5 },
            }}
          >
            <SwiperSlide>
              <img
                className="w-full select-none h-[380px] max-w-[100%]"
                src="/ParkPage/card1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full select-none h-[380px] max-w-[100%]"
                src="/ParkPage/card2.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full select-none h-[380px] max-w-[100%]"
                src="/ParkPage/card1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full select-none h-[380px] max-w-[100%]"
                src="/ParkPage/card2.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="fix12 flex items-start pt-[45px]">
          <div className="flex gap-[14px] items-center justify-center">
            <button className="swiper-button-prev-landingp h-[41px] w-[41px]">
              <img
                className="h-[41px] w-[41px]"
                src="/ParkPage/parrowp.svg"
                alt="ArrowLeft"
              />
            </button>
            <button className="swiper-button-next-landingn h-[41px] w-[41px]">
              <img
                className="h-[41px] w-[41px]"
                src="/ParkPage/parrown.svg"
                alt="ArrowRight"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhVdslider;
