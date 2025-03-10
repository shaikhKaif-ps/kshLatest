// import React from "react";

// const ParkInfo = () => {
//   return (
//     <div className="flex py-[84px] px-[122px] gap-[160px]">
//       <div>
//         <img src="/ParkPage/parkinfo.webp" alt="Parkinfo" />
//       </div>
//       <div>
//         <div className="flex justify-between">
//           <div>0.36 Million</div>
//           <div>
//             SQ. FT. of <br />
//             Total Area
//           </div>
//         </div>
//         <div>
//           <div>02 Buildings</div>
//           <div>
//             Total <br />
//             Buildings
//           </div>
//         </div>
//         <div>
//           <div>Pune, Maharashtra</div>
//           <div>
//             Park <br />
//             Location
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParkInfo;

import React from "react";

const ParkInfo = () => {
  const stats = [
    { value: "0.36 Million", label: "SQ. FT. of\nTotal Area" },
    { value: "02 Buildings", label: "Total\nBuildings" },
    { value: "Pune, Maharashtra", label: "Park\nLocation" },
  ];

  return (
    <div
      className="flex py-[84px] w-full justify-between items-center"
      id="parkhighlight"
    >
      {/* Left Image */}
      <div className="flex md:flex-row flex-col fix12 justify-between items-center xl:gap-[160px] gap-[80px]">
        <div className="md:w-1/2 w-full">
          <img
            src="/ParkPage/parkinfo.webp"
            alt="Park Info"
            className="w-full"
          />
        </div>

        {/* Right Stats Section */}
        <div className="md:w-1/2 w-full space-y-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex justify-between md:gap-0 gap-[20px]  items-center pb-4 ${
                index < stats.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              <div className="lg:text-[40px] text-[28px] fsans-600 text-gray-800">
                {stat.value}
              </div>
              <div className="lg:text-[20px] text-[18px] fsans-600 text-[#E4222E] text-right whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParkInfo;
