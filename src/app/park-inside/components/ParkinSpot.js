// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const fadeIn = {
//   hidden: { opacity: 0, y: 100 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//   },
//   exit: {
//     opacity: 0,
//     y: -100,
//     transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//   },
// };
// const fadeIn2 = {
//   hidden: { opacity: 0, x: -100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//   },
//   exit: {
//     opacity: 0,
//     x: 100,
//     transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//   },
// };

// const ParkinSpot = ({}) => {
//   return (
//     <motion.div
//       className="bg-[url(/fistfold.png)] bg-cover bg-center z-0 relative"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ amount: 0.1, once: true }}
//     >
//       <div className="ml-[max(5%,calc((100vw-1250px)/2))] pt-[80px] md:pt-[150px] md:mr-0 mr-[5%] flex items-center lg:justify-center justify-evenly h-screen xl:gap-[100px] md:gap-[50px] gap-[20px] md:flex-row flex-col-reverse">
//         {/* Left Side Content */}
//         <motion.div
//           className="flex flex-col xl:flex-1 max-w-full gap-5 xl:gap-10 lg:h-[450px] justify-center"
//           variants={fadeIn2}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ amount: 0.1, once: true }}
//         >
//           <motion.h1
//             className="fpt-600 xl:text-[56px] lg:text-[40px] md:text-[32px] text-[20px] text-white border-b-[5px] md:border-b-[10px] border-[#F7E327] leading-[150%] md:leading-[105%] pb-5 2xl:text-[70px]"
//             variants={fadeIn2}
//           >
//             KSH Chakan IV
//           </motion.h1>
//           <motion.p
//             className="fsans-500 text-[14px] lg:text-[18px] xl:text-[20px] leading-[26px]"
//             style={{
//               backgroundImage: "linear-gradient(to bottom, #ffffff, #163E71)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//               color: "transparent",
//             }}
//             variants={fadeIn2}
//           >
//             Leading the development of Data & explainable AI-driven real estate
//             valuations and insights globally.
//           </motion.p>
//           <motion.div variants={fadeIn}>
//             <button className="bg-[#E30613] max-w-fit h-[50px] flex items-center text-base fsans-600 text-white px-[21px] py-[14px] gap-[10px] rounded-3xl">
//               <p>Enquire Now</p>
//               <img
//                 className="h-[24px] w-[24px]"
//                 src="/downarrow.svg"
//                 alt="Arrow"
//               />
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* Right Side Image */}
//         <motion.div
//           className="xl:flex-1 flex flex-col justify-center items-end"
//           variants={fadeIn}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ amount: 0.1, once: true }}
//         >
//           <motion.div
//             className="flex items-end justify-center flex-col lg:w-[688.5px] 2xl:w-[810px] lg:h-[476px] 2xl:h-[560px] max-w-full"
//             variants={fadeIn}
//           >
//             {/* Desktop Image */}
//             <motion.div
//               variants={fadeIn}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ amount: 0.1, once: true }}
//             >
//               <motion.img
//                 src="/Container.png"
//                 className="object-cover md:inline-block hidden"
//                 alt="some"
//                 variants={fadeIn}
//               />
//             </motion.div>

//             {/* Mobile Image */}
//             <motion.div
//               variants={fadeIn}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ amount: 0.1, once: true }}
//             >
//               <motion.img
//                 src="/Container.png"
//                 className="object-cover md:hidden inline-block"
//                 alt="some"
//                 variants={fadeIn}
//               />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default ParkinSpot;

"use client";
import Image from "next/image";

const ParkinSpot = ({}) => {
  return (
    <div className="bg-[url(/fistfold.png)] bg-cover bg-center z-0 relative">
      <div className="ml-[max(5%,calc((100vw-1250px)/2))] pt-[80px] md:pt-[150px] md:mr-0 mr-[5%] flex items-center lg:justify-center justify-evenly h-screen xl:gap-[100px] md:gap-[50px] gap-[20px] md:flex-row flex-col-reverse">
        {/* Left Side Content */}
        <div className="flex flex-col xl:flex-1 max-w-full gap-5 xl:gap-10 lg:h-[450px] justify-center relative">
          <h1 className="fpt-600 xl:text-[56px] lg:text-[40px] md:text-[32px] text-[20px] text-white border-b-[5px] md:border-b-[10px] border-[#F7E327] leading-[150%] md:leading-[105%] pb-5 2xl:text-[70px]">
            KSH Chakan IV
          </h1>
          <p
            className="fsans-500 text-[14px] lg:text-[18px] xl:text-[20px] leading-[26px]"
            style={{
              backgroundImage: "linear-gradient(to bottom, #ffffff, #163E71)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Leading the development of Data & explainable AI-driven real estate
            valuations and insights globally.
          </p>
          <div>
            <button className="bg-[#E30613] max-w-fit h-[50px] flex items-center text-base fsans-600 text-white px-[21px] py-[14px] gap-[10px] rounded-3xl">
              <p>Enquire Now</p>
              <img
                className="h-[24px] w-[24px]"
                src="/downarrow.svg"
                alt="Arrow"
              />
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="xl:flex-1 flex flex-col justify-center items-end">
          <div className="flex items-end justify-center flex-col lg:w-[688.5px] 2xl:w-[810px] lg:h-[476px] 2xl:h-[560px] max-w-full relative">
            {/* Desktop Image */}
            <div className="relative">
              <img
                src="/ParkPage/container.png"
                className="object-cover md:inline-block hidden"
                alt="some"
              />
              <img
                src="/ParkPage/container2.png"
                className="absolute top-[20%] left-[-5%] z-[10] w-[40vw] md:w-[180px]"
                alt="floating"
              />
              <img
                src="/ParkPage/container1.png"
                className="absolute top-auto left-[150px] bottom-[-5%] z-[10] w-[50vw] md:w-[274px]"
                alt="floating"
              />
              <img
                src="/ParkPage/container3.png"
                className="absolute top-auto left-auto right-[3%] bottom-[-5%] z-[10] w-[45vw] md:w-[228px]"
                alt="floating"
              />
            </div>

            {/* Mobile Image */}
            <div>
              <img
                src="/ParkPage/container.png"
                className="object-cover md:hidden inline-block"
                alt="some"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkinSpot;
