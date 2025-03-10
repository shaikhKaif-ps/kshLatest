"use client";
import { useState } from "react";
import Link from "next/link";
const TabMenu = () => {
  const tabs = [
    { title: "Park Overview", link: "#parkov" },
    { title: "Park Highlights", link: "#parkhighlight" },
    { title: "Location & Connectivity", link: "#lnc" },
    { title: "Park Infrastructure", link: "#pi" },
    { title: "Download Brochure", link: "#db" },
  ];

  const [activeIndex, setActiveIndex] = useState(false);

  return (
    <div className="w-full bg-[#141D28] pt-[48px]">
      <div className="fix12 justify-between flex overflow-hidden items-center tabsmenupar">
        {tabs.map((tab, index) => (
          <Link
            href={tab.link}
            key={index}
            className={`navbtn relative text-center text-sm font-medium transition-colors
              ${
                activeIndex === index
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-300"
              }   
            `}
            onClick={() => setActiveIndex(index)}
          >
            {tab.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabMenu;
