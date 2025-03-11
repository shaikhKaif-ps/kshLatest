"use client";
import { motion } from "framer-motion";
const Card = ({ todos, activeSidebar }) => {
  const activeItem = todos.find((item) => item.id === activeSidebar);

  return (
    <div className="flex flex-col gap-[23px] xl:w-[710px] xl-1280:w-[650px] w-full md:pb-[30px] lg:min-h-[550px] overflow-hidden">
      <div className="xl:min-w-fit lg:min-h-fit max-w-[700px]">
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
          className="border-[10px] border-[#6E5E55] xl:min-w-fit max-w-[700px]"
        >
          <img
            src="/cnpoex.png"
            alt="CNPO Example"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
      <motion.h3
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1], delay: 0.1 }}
        className="fsans-600 lg:text-[36px] xl-1366:h-[120px] lg:h-[150px] h-[150px] text-[24px] text-white spotlightheaddd"
      >
        {activeItem ? activeItem.content : "No Data Available"}
      </motion.h3>
      {/* <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 5, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1], delay: 0.3 }}
        className="flex group hover:translate-x-[5px]  cursor-pointer items-center gap-4 justify-between font-semibold text-[#ffffff] text-[16px] w-fit"
      >
        <img
          src="/buttonarrows/redarico.svg"
          className="rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out cursor-pointer"
          alt=""
        />
        Explore More
      </motion.div> */}
      <motion.div
        className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1 }}
      >
        {/* Padding added to prevent clipping */}
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
      </motion.div>
    </div>
  );
};

export default Card;
