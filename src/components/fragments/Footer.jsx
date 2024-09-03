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
    <div className=" p-[1.1rem] h-full flex flex-col items-center justify-center  bg-zinc-900 ">
      <div className=" font-medium flex w-full sm:w-1/2 sm:text-[0.875rem] text-[0.675rem] text-white ">
        <div className=" w-1/2 flex flex-col [&_span]:border-b-2 [&_span]:py-2 ">
          <span className="">
            <NavLink to="/">Home</NavLink>
          </span>
          <span>
            <NavLink to="/about">About Us</NavLink>
          </span>
          <span>
            <NavLink to="/product">Product</NavLink>
          </span>
          <span>
            <NavLink to="/cart">Cart</NavLink>
          </span>
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <h1 className="text-white text-[2rem] font-bold">NERA</h1>
          <p>Find us.</p>
          <div className=" flex [&_span]: gap-4 mt-2">
            <span>
              <Facebook />
            </span>
            <span>
              <Twitter />
            </span>
            <span>
              <Instagram />
            </span>
            <span>
              <Youtube />
            </span>
          </div>
        </div>
      </div>
      <div className="font-medium flex w-full sm:w-1/2 sm:text-[0.875rem] justify-between text-[0.675rem] text-zinc-700 mt-12">
        <p>© 2024. Company Name. All rights reserved.</p>
        <p>2024 NN</p>
      </div>
    </div>
  );
}

export default Footer;
