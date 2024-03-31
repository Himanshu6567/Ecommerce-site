import React from "react";
import { GrFacebookOption } from "react-icons/gr";

import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

import { BsGoogle } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="border">
      <div className="flex h-28 justify-center items-center  space-x-2">
        <div className="bg-[#6479AA] text-white rounded-full h-8 w-8 flex justify-center items-center shadow-lg">
          <GrFacebookOption className="text-2xl" />
        </div>
        <div className="bg-[#C56BC2] text-white rounded-full h-8 w-8 flex justify-center items-center shadow-lg">
          <AiOutlineInstagram className="text-2xl" />
        </div>
        <div className="bg-[#51A5D6] text-white rounded-full h-8 w-8 flex justify-center items-center shadow-lg">
          <AiOutlineTwitter className="text-2xl" />
        </div>
        <div className="bg-[#7F7C7C] text-white rounded-full h-8 w-8 flex justify-center items-center shadow-lg">
          <AiOutlineGithub className="text-2xl" />
        </div>
        <div className="bg-[#E88D82] text-white rounded-full h-8 w-8 flex justify-center items-center shadow-lg">
          <BsGoogle className="text-2xl" />
        </div>
        <div className="bg-[#5BAAD8] text-white rounded-full h-8 w-8 flex justify-center items-center shadow-lg ">
          <AiOutlineLinkedin className="text-2xl" />
        </div>
      </div>

      <div className="h-12 bg-gray-400 text-center flex justify-center items-center text-white">
        © 2020 Copyright: MDBootstrap.com
      </div>
    </div>
  );
}
