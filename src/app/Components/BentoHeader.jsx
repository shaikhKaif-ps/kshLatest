"use client";
import { motion } from "framer-motion";
import LineHead from "./Heading/LineHead";

const BentoHeader = () => {
  return (
    <div>
      <div>
        <LineHead clr="text-white" bclr="red" heading="Our Blog" />
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-[30px] items-center justify-between max-w-full overflow-hidden">
        <div className="lg:w-[60%] md:w-[50%] w-full">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }} // Animation triggers only once
            transition={{ duration: 0.9 }}
            className="text-white xl:text-[88px] md:leading-[105%] pb-[15px] lg:text-[60px] md:text-[40px] text-3xl fpt-600 w-fit max-w-fit border-b-[10px] border-[#F7E327] fpt-600"
          >
            Latest <br className="md:flex hidden" />
            Insights
          </motion.h2>
        </div>
        <motion.div
          className="md:w-[50%] lg:w-[40%] w-full flex flex-col gap-[30px]"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }} // Animation triggers only once
          transition={{ duration: 0.9 }}
        >
          <motion.p className="gradinetText text-[16px] lg:text-[20px] fsans-400">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid.
          </motion.p>

          <motion.div
            className="flex cursor-pointer group items-center gap-4 justify-between hover:translate-x-[5px] font-semibold text-[#ffffff] text-[16px] w-fit"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }} // Animation triggers only once
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <img
              src="/buttonarrows/redarico.svg"
              className="rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out cursor-pointer"
              alt=""
            />
            Explore More
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BentoHeader;
