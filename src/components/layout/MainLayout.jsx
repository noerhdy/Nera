import React, { useState } from "react";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import { Outlet } from "react-router-dom";
import ModalComponent from "../fragments/ModalComponent";

export default function MainLayout() {
  // State untuk setiap modal
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isSortVisible, setIsSortVisible] = useState(false);

  // Fungsi pembuka modal
  const handleOpenModal = (modal) => {
    // Tutup semua modal sebelum membuka modal baru
    setIsSearchVisible(false);
    setIsOrderVisible(false);
    setIsFilterVisible(false);
    setIsSortVisible(false);

    // Buka modal sesuai parameter
    if (modal === "search") setIsSearchVisible(true);
    if (modal === "order") setIsOrderVisible(true);
    if (modal === "filter") setIsFilterVisible(true);
    if (modal === "sort") setIsSortVisible(true);
  };

  // Fungsi penutup modal
  const handleCloseModal = () => {
    setIsSearchVisible(false);
    setIsOrderVisible(false);
    setIsFilterVisible(false);
    setIsSortVisible(false);
  };

  return (
    <main className="relative w-full  bg-[#111]  ">
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
        onOpenSearch={() => handleOpenModal("search")} // Tambahkan ini untuk memicu dari ModalFilter
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
