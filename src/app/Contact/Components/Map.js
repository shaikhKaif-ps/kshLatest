import React from "react";

const Map = () => {
  return (
    <div className="bg-[#092241] py-[100px]">
      <div className="fix12">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199441.20894454428!2d73.63006995591901!3d18.756486522274358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b427f3ca505d%3A0xd175ea8fa8d8f15f!2sKSH%20Infra!5e0!3m2!1sen!2sin!4v1741330366372!5m2!1sen!2sin"
          height="450"
          style={{ border: "0" }} // JSX requires an object for styles
          allowFullScreen // Instead of allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // Use camelCase
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
