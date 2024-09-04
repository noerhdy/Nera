import React from "react";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main className="bg-zinc-950 relative w-full h-fit overflow-hidden ">
      <Navbar />
      <Outlet />
      <div
        className=" h-[300px] relative  "
        style={{ clipPath: "polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100%) " }}
      >
        <div className=" fixed h-[300px] w-full bottom-0">
          <Footer />
        </div>
      </div>
    </main>
  );
}
