import React from "react";

const ContactSpot = () => {
  return (
    <div className="relative bg-[#092241] h-[740px] z-0">
      {/* <div className=""> */}
      <div className="fix12 pt-[140px] ">
        <p className="text-[#D7D7D7A3] text-base fsans-400">{`Home > Contact`}</p>
        <h1 className="text-[60px] max-w-fit ftp-500 text-white border-b-[6px] border-[#F7E327] ">
          Contact Us &nbsp;&nbsp;&nbsp;
        </h1>
      </div>
      <img
        src="./contact/contactheader.webp"
        className="absolute bottom-0 w-full object-cover h-[637px]"
        alt=""
      />
    </div>
  );
};

export default ContactSpot;
