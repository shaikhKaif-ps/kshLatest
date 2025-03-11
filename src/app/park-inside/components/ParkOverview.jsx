import React from "react";
// import LineHead from "@/app/Components/Heading/LineHead";
import LineHead from "../../Components/Heading/LineHead";
const ParkOverview = () => {
  return (
    <div
      className="w-full lg:h-[594px] pt-[70px] pb-[20px]"
      id="parkov"
      style={{
        background: "linear-gradient(to bottom, #141D28 70%, #EEF0F3 30%)",
      }}
    >
      <div className="md:mr-[max(5%,calc((100vw-1250px)/2))] mr-0 lg:h-[502px] bg-[url(/ParkPage/pobg.webp)] bg-cover bg-no-repeat flex flex-col">
        <div className="ml-[max(5%,calc((100vw-1250px)/2))] md:mr-0 mr-[max(5%,calc((100vw-1250px)/2))]  flex flex-col w-auto lg:w-[75%] xl:w-[40%] py-[70px]">
          <LineHead heading="KSH Chakan Park IV Overview" />
          <h3 className="xl-1280:text-[22px] gradinetText leading-[130%] spotlightheaddd fsans-700 text-[20px] mt-[-20px] xl:1024:mt-[-40px] xl-1280:mt-[-20px]">
            Chakan Park IV in Shinde, Pune is poised to set a new standard for
            eco-friendly and sustainable warehousing and industrial parks.
          </h3>
          <p className="flato-400 text-[18px] leading-[26px] text-[#6C8DAB] pt-[24px]">
            The industrial park boasts IGBC pre-certified Platinum status,
            highlighting KSH Infra's dedication to green industrial development.
            With exceptional planning and top-notch amenities, this fully
            customisable, move-in ready industrial facility guarantees
            uncompromised productivity, efficiency, and safety{" "}
            <br className="xl:flex hidden" />
            for your workforce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParkOverview;
