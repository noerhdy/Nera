import React from "react";
import Navbar from "../fragments/Navbar";
import BannerSwipe from "../fragments/Home/BannerSwipe";
import ProductSection from "../fragments/Home/ProductSection";
import Footer from "../fragments/Footer";

export default function MainLayout() {
  return (
    <main className="bg-zinc-950 relative w-full h-full overflow-hidden ">
      <Navbar />
      <div className="  mb-16 ">
        <BannerSwipe />
        <ProductSection />
      </div>
      <Footer />
    </main>
  );
}
