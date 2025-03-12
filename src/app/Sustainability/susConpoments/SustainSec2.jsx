const SustainSec2 = () => {
  return (
    <>
      <div className=" ">
        <div className="fix12 flex flex-col lg:flex-row justify-between gap-[20px] lg:gap-[6%] py-[98px]">
          <div className="flex-1  xl:w-[538px] xl:min-h-[540px] ">
            <div className="w-[100%]">
              <h1 className="text-[#141414] text-[44px] fpt-500 leading-[48.84px] pb-3">
                Sustainability drives KSH INFRA’s development.
              </h1>
              <div className="bg-[#F7E327] h-[5px] w-[80%]"></div>
            </div>
            <div className="text-[#434343] text-base flex flex-col justify-between pt-9 gap-3">
              <p>
                The KSH INFRA ethos is geared towards creating a sustainable
                future. We have taken numerous initiatives to ensure our move in
                this direction is impactful while being carefully controlled.
                Every development project at KSH is built with Green Building
                norms in place. With the EDGE Certification and IGBC
                Platinum-compliant planning, our mission is to develop
                high-quality, efficient, and sustainable logistics and
                industrial parks.
              </p>
              <p>
                {" "}
                As a budding global power, all industries in India owe it to
                future generations to develop responsible infrastructure. And
                KSH INFRA is committed to playing its part.
              </p>
            </div>
          </div>

          <div className="flex-1 xl:flex-none  xl:w-[640px] xl:min-h-[540px] bg-yellow-300 ">
            <img
              src="/AboutPage/aboutUsSec2.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* <AboutCounter /> */}
      </div>
    </>
  );
};

export default SustainSec2;
