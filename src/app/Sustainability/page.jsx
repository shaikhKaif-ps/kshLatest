import React from "react";
import SustainSpotLigth from "./susConpoments/SustainSpotLigth";
import ImgAndContent from "../GlobalComponents/ImgAndContent";
import SustainSec2 from "./susConpoments/SustainSec2";
import SustainSocial from "./susConpoments/SustainSocial";
import SustainEnviroment from "./susConpoments/SustainEnviroment";
import Usp from "../Components/USP/Usp";
import SustainGovernence from "./susConpoments/SustainGovernence";
import SustainDownload from "./susConpoments/SustainDownload";
import SustainDownload2 from "./susConpoments/SustainDownload2";

const page = () => {
  return (
    <div>
      <SustainSpotLigth />
      <SustainSec2 />
      <SustainDownload />
      <SustainDownload2 />
      <SustainSocial />
      {/* <SustainEnviroment /> */}
      {/* <Usp /> */}
      <SustainGovernence />
    </div>
  );
};

export default page;
