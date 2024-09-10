import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import ModalComponent from "@/features/modals/ModalComponent";
import { useModalContext } from "@/features/modals/ModalContext";

export default function MainLayout() {
  const {
    isSearchVisible,
    isOrderVisible,
    isFilterVisible,
    isSortVisible,
    handleOpenModal, // Mengakses fungsi dari ModalContext
    handleCloseModal,
  } = useModalContext();

  return (
    <main className="relative size-full bg-[#111]">
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

      {/* Outlet dengan context untuk membuka modals */}
      <Outlet
        context={{
          handleOpenSort: () => handleOpenModal("sort"),
          handleOpenSearch: () => handleOpenModal("search"),
          handleOpenFilter: () => handleOpenModal("filter"),
        }}
      />

      <Footer />
    </main>
  );
}
