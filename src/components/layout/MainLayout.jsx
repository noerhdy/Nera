import React, { useState } from "react";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import { Outlet } from "react-router-dom";
import ModalComponent from "../fragments/ModalComponent";

export default function MainLayout() {
  // State  modal
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isSortVisible, setIsSortVisible] = useState(false);

  //  modal
  const handleOpenModal = (modal) => {
    setIsSearchVisible(false);
    setIsOrderVisible(false);
    setIsFilterVisible(false);
    setIsSortVisible(false);

    // modal parameter
    if (modal === "search") setIsSearchVisible(true);
    if (modal === "order") setIsOrderVisible(true);
    if (modal === "filter") setIsFilterVisible(true);
    if (modal === "sort") setIsSortVisible(true);
  };

  // closed modal
  const handleCloseModal = () => {
    setIsSearchVisible(false);
    setIsOrderVisible(false);
    setIsFilterVisible(false);
    setIsSortVisible(false);
  };

  return (
    <main className="relative size-full bg-[#111]  ">
      <Navbar
        onOpenSearch={() => handleOpenModal("search")}
        onOpenOrder={() => handleOpenModal("order")}
      />
      <ModalComponent
        isSearchVisible={isSearchVisible}
        isOrderVisible={isOrderVisible}
        isFilterVisible={isFilterVisible}
        isSortVisible={isSortVisible}
        onCloseModal={handleCloseModal}
        onOpenSearch={() => handleOpenModal("search")}
      />
      <Outlet
        context={{
          handleOpenSort: () => handleOpenModal("sort"),
          handleOpenSearch: () => handleOpenModal("search"),
          handleOpenFilter: () => handleOpenModal("filter"),
        }}
      />
      <div
        className=" h-[300px] relative z-20  "
        style={{ clipPath: "polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100%) " }}
      >
        <div className=" fixed h-[300px] w-full bottom-0">
          <Footer />
        </div>
      </div>
    </main>
  );
}
