import About from "./Components/About";
import Esg from "./Components/Esg";
import Parent from "./Components/CNPO/Parent";
import TS from "./Components/TabSlider/TS";
import TrustedPartners from "./Components/TrustedPartners";
import PFetch from "./Components/CNPO/PFetch";
import NewUSP from "./Components/USP/NewUSP";
import Usp from "./Components/USP/Usp";
import LandingSwiper from "./Components/LandingSwiper";
import Capabilities from "./Components/Capability";
import SlideSection from "./Components/SlideSection";
import BentoSlider from "./Components/BentoSlider";

export default function Home() {
  return (
    <>
      <LandingSwiper />
      <About />
      <Capabilities />
      <NewUSP />
      <PFetch />
      <TrustedPartners />
      <Esg />
      <SlideSection />
      <BentoSlider />
    </>
  );
}
