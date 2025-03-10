"use client";
import React from "react";
import { motion } from "framer-motion";

const GenLineHead = ({ heading, acbtn, setAcBtn }) => {
  const spotlight_btn_content = [{ title: "Photos" }, { title: "Videos" }];

  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
      className="pb-[20px] border-b mb-[60px] border-[#D7D7D7] overflow-hidden whitespace-nowrap w-[1280px] tablinehead flex-nowrap"
    >
      <div className="flex items-center justify-between w-full lg:gap-0 gap-[20px]">
        <h2 className="leading-[26px] text-[20px] fsans-600 text-[#092241] tbhead">
          {heading}
        </h2>
        <div
          className="flex gap-[5px] overflow-x-auto scrollbar"
          style={{
            scrollbarWidth: "none", // Hides scrollbar in Firefox
            msOverflowStyle: "none",
          }}
        >
          {spotlight_btn_content.map((btntitle, index) => (
            <button
              onClick={() => setAcBtn(btntitle.title)}
              key={btntitle.title + " " + String(index)}
              className={`px-[12px] py-[10px] flex-1 flex items-center justify-center rounded-[10px] border-[#092241] border-opacity-30 text-[#092241] text-opaciy-50 border ${
                acbtn === btntitle.title ? "bg-[#E30613] border-[#E30613]" : ""
              }`}
            >
              {btntitle.title}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GenLineHead;
