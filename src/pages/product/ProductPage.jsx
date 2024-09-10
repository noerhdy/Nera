import React from "react";
import { useOutletContext } from "react-router-dom";
import ProductSection from "@/components/fragments/Product/ProductSection";

export default function ProductPage() {
  // Mengakses context yang diteruskan oleh Outlet di MainLayout
  const { handleOpenSort, handleOpenSearch, handleOpenFilter } =
    useOutletContext();

  return (
    <div className="w-full h-full px-4 pt-12 mb-16 sm:px-12">
      <ProductSection
        onOpenSort={handleOpenSort}
        onOpenSearch={handleOpenSearch}
        onOpenFilter={handleOpenFilter}
      />
    </div>
  );
}
