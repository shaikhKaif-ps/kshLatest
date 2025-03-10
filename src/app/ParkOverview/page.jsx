import React from "react";
import ParkOverviewContent from "./ParkOverviewContent";
import TrustedPartners from "../Components/TrustedPartners";
import WhyKsh from "./WhyKsh";
// import Map from "../Components/Map";
import Map1 from "../Components/Map1";
import Usp from "../Components/USP/Usp";
import ParkOverviewSpot from "./ParkOverviewSpot";

const page = () => {
  return (
    <div>
      <ParkOverviewSpot />
      <ParkOverviewContent />
      <Map1 />
      <Usp />
      <WhyKsh />
      <TrustedPartners paddingB={70} />
    </div>
  );
};

export default page;
