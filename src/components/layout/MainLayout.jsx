import React from "react";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import { Outlet } from "react-router-dom";
import ModalComponent from "../fragments/ModalComponent";
import { useState } from "react";

export default function MainLayout() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleOpenSearch = () => {
    setIsSearchVisible(true);
  };
  const handleOpenOrder = () => {
    setIsOrderVisible(true);
  };
  const handleOpenFilter = () => {
    setIsFilterVisible(true);
  };
  const handleCloseSearch = () => {
    setIsSearchVisible(false);
  };

  const handleCloseOrder = () => {
    setIsOrderVisible(false);
  };
  const handleCloseFilter = () => {
    setIsFilterVisible(false);
  };

  return (
    <main className="bg-zinc-950 relative w-full h-fit overflow-hidden ">
      <Navbar onOpenSearch={handleOpenSearch} onOpenOrder={handleOpenOrder} />
      <ModalComponent
        isSearchVisible={isSearchVisible}
        handleCloseSearch={handleCloseSearch}
        isOrderVisible={isOrderVisible}
        handleCloseOrder={handleCloseOrder}
        isFilterVisible={isFilterVisible}
        handleCloseFilter={handleCloseFilter}
      />
      <Outlet context={{ handleOpenFilter }} />
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
