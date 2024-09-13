import React from "react";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import ModalComponent from "@/features/modals/ModalComponent";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main className="relative size-full bg-[#111]">
      <Navbar />

      <ModalComponent />

      {/* Outlet dengan dispatch untuk membuka modals */}
      <Outlet />

      <Footer />
    </main>
  );
}
