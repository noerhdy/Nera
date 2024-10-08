import { Twitch } from "lucide-react";
import { LucideTwitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className=" p-[1.1rem] h-full flex flex-col items-center justify-center  bg-[#000] ">
      <div className=" font-medium flex w-full sm:w-1/2 sm:text-[0.875rem] text-[0.675rem] text-[#888888] ">
        <div className=" w-1/2 flex flex-col [&_span]:border-b-2 [&_span]:border-[#454545] [&_span]:py-2 [&_span]:cursor-pointer ">
          <span>Home</span>
          <span>About Us</span>
          <span>Product</span>
          <span>Cart</span>
        </div>
        <div className="flex flex-col items-end justify-end w-1/2">
          <h1 className="text-[#e5e4e2] sm:text-[2rem] text-[1rem] font-bold ">
            DISSARAY
          </h1>
          <p>Find us.</p>
          <div className=" flex  gap-4 mt-2 [&_span]:cursor-pointer">
            <span>
              <Facebook size={20} />
            </span>
            <span>
              <Twitter size={20} />
            </span>
            <span>
              <Instagram size={20} />
            </span>
            <span>
              <Youtube size={20} />
            </span>
          </div>
        </div>
      </div>
      <div className="font-medium flex w-full sm:w-1/2 sm:text-[0.875rem] justify-between text-[0.675rem] text-zinc-600 mt-12">
        <p>© 2024. Company Name. All rights reserved.</p>
        <p>2024 NN</p>
      </div>
    </div>
  );
}

export default Footer;
