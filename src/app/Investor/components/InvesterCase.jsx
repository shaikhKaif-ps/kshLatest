"use client";
import React from "react";
import { motion } from "framer-motion";
const InvesterCase = () => {
  return (
    <>
      <div className="bg-[#092241] py-16">
        <div className="fix12  ">
          <div className="lg:flex justify-between items-center gap-10">
            <div className="leftCon relative overflow-hidden lg:w-[500px] h-[480px]  flex-shrink-0 flex items-center justify-center">
              <img src="/investorRel/indoSpace.png" alt="" />
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#092241]"
                initial={{ x: 0 }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
              />
            </div>
            <div className="RightCon flex-1 lg:p-4 xl-768:mt-14">
              <motion.h1
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.1, once: true }}
                className="fpt-500 text-white pb-2 text-3xl whitespace-nowrap overflow-hidden leading-[33px] border-b-[#D7D7D7] border-b-[1px]"
              >
                KSH INFRA X Indospace Capital
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.1, once: true }}
                className="relative overflow-hidden pt-10 space-y-[40px]"
              >
                <p className="text-base fsans-400 leading-[26px] text-[#eee]">
                  Indospace Capital is a private equity firm that invests in
                  industrial real estate in India. The firm was founded in 2010
                  and is based in Mumbai. The firm has a strong team of
                  professionals with vast experience in the real estate market.
                  With their strong focus on the industrial and warehousing
                  sector in India, Indospace has partnered with KSH INFRA to
                  deliver an ecosystem of sustainable, ESG-positive industrial
                  parks in several strategically important economic zones in
                  India.
                </p>
                <p className="text-base fsans-400 leading-[26px] text-[#eee]">
                  Indospace is investing ₹1,000 crore (approximately $135
                  million) in a joint venture (JV) with KSH INFRA to develop a
                  10 million square feet portfolio of world-class warehousing
                  and industrial parks across the country over the next five
                  years.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- */}
      <div className="bg-[#EEF0F3] py-16">
        <div className="fix12  ">
          <div className="flex justify-between items-center gap-10 flex-row-reverse">
            <div className="leftCon overflow-hidden relative w-[500px] h-[480px] bg-red-500 flex-shrink-0">
              <img src="/investorRel/indoSpace.png" alt="" />
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#EEF0F3]"
                initial={{ x: 0 }}
                whileInView={{ x: "-100%" }}
                transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
              />
            </div>
            <div className="RightCon flex-1 p-4">
              <motion.h1
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.1, once: true }}
                className="fpt-500 whitespace-nowrap overflow-hidden pb-2 text-3xl leading-[33px] border-b-[#464646] border-b-[1px]"
              >
                KSH INFRA x Pacific Century Group of Hong Kong
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.1, once: true }}
                className="overflow-hidden pt-10 space-y-[40px]"
              >
                <p className="text-base fsans-400 leading-[26px] ">
                  Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="text-base fsans-400 leading-[26px] ">
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- */}
      <div className="bg-[#092241] py-16">
        <div className="fix12  ">
          <div className="flex justify-between items-center gap-10">
            <div className="leftCon overflow-hidden relative w-[500px] h-[480px] bg-red-500 flex-shrink-0">
              <img src="/investorRel/indoSpace.png" alt="" />
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#092241]"
                initial={{ x: 0 }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
              />
            </div>
            <div className="RightCon flex-1 p-4">
              <motion.h1
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.1, once: true }}
                className="fpt-500 text-white whitespace-nowrap overflow-hidden pb-2 text-3xl leading-[33px] border-b-[#D7D7D7] border-b-[1px]"
              >
                KSH INFRA x Morgan Stanley Real Estate Investing
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.1, once: true }}
                className="overflow-hidden relative pt-10 space-y-[40px]"
              >
                <p className="text-base fsans-400 leading-[26px] text-[#eee]">
                  Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="text-base fsans-400 leading-[26px] text-[#eee]">
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- */}
      <div className="bg-[#EEF0F3] py-16">
        <div className="fix12  ">
          <div className="flex justify-between items-center gap-10 flex-row-reverse">
            <div className="leftCon relative overflow-hidden w-[500px] h-[480px]  flex-shrink-0">
              <img src="./investorRel/mapleTree.png" alt="" />
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#092241]"
                initial={{ x: 0 }}
                whileInView={{ x: "-100%" }}
                transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
              />
            </div>
            <div className="RightCon flex-1 p-4">
              <h1 className="fpt-500  pb-2 text-3xl leading-[33px] border-b-[#464646] border-b-[1px]">
                KSH INFRA x Mapletree Investments of Singapore
              </h1>
              <div className=" pt-10 space-y-[40px]">
                <p className="text-base fsans-400 leading-[26px] ">
                  Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="text-base fsans-400 leading-[26px] ">
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvesterCase;
