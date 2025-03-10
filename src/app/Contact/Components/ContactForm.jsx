import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#092241] px-[40px] pt-[47px] sm:pb-0 pb-[47px] xl:mt-[50px] mt-0">
      <form action="" className="flex flex-col gap-[24px] sm:gap-[50px]">
        {/* Name & Company Name */}
        <div className="flex sm:flex-row flex-col gap-[24px]">
          <input
            type="text"
            placeholder="Name"
            className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-[295px]"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-[295px]"
          />
        </div>
        {/* Phone & Email */}
        <div className="flex sm:flex-row flex-col gap-[24px]">
          <input
            type="number"
            placeholder="Phone"
            className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-[295px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-[295px]"
          />
        </div>
        {/* Subject */}
        <div className="">
          <div className="relative w-full">
            <select
              name="Subject"
              id="sub"
              className="w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]" // Add pr-[40px] for spacing
            >
              <option value="">Subject</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M19.5888 9.31081L13.4983 15.3051C13.3654 15.4366 13.186 15.5103 12.9991 15.5103C12.8122 15.5103 12.6328 15.4366 12.4999 15.3051L6.4094 9.31211C6.27569 9.18071 6.09572 9.10709 5.90825 9.10709C5.72078 9.10709 5.54081 9.18071 5.4071 9.31211C5.34126 9.3763 5.28893 9.45302 5.2532 9.53775C5.21747 9.62248 5.19907 9.71351 5.19907 9.80546C5.19907 9.89742 5.21747 9.98844 5.2532 10.0732C5.28893 10.1579 5.34126 10.2346 5.4071 10.2988L11.4963 16.2918C11.8974 16.6856 12.437 16.9062 12.9991 16.9062C13.5612 16.9062 14.1008 16.6856 14.5019 16.2918L20.5911 10.2988C20.6571 10.2346 20.7096 10.1578 20.7455 10.0729C20.7813 9.9881 20.7998 9.89692 20.7998 9.80481C20.7998 9.7127 20.7813 9.62152 20.7455 9.53667C20.7096 9.45182 20.6571 9.37502 20.5911 9.31081C20.4574 9.17941 20.2774 9.10579 20.09 9.10579C19.9025 9.10579 19.7225 9.17941 19.5888 9.31081Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* Message */}
        <div className="w-full">
          <textarea
            className="h-[118px] resize-none w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
            name="Message"
            placeholder="Message"
            id="message"
          ></textarea>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
          >
            <p>Submit</p>
            <img src="/rightUpArrow.svg" alt="Arrow" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
