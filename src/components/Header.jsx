import React from "react";
import logo from "../assets/image/logo.png";
function Header() {
  return (
    <div className="py-6 w-[100%] grid grid-cols-2 bg-[#f8f9fa] px-5">
      <div className="">
        <img src={logo} alt="" />
      </div>

      <div className="justify-self-end  ">
        {/* <dutton className="py-2 px-7  rounded-full text-black bg-[#988181]  border-zinc-200">
          test test
        </dutton> */}

        <a href="#" className="bg-[#dc3545] py-2 px-3 text-white rounded-md">
          Save & Close
        </a>
      </div>
    </div>
  );
}

export default Header;
