import ProductSection from "@/components/fragments/Product/ProductSection";
import React from "react";
import { useOutletContext } from "react-router-dom";

export default function ProductPage() {
  const { handleOpenSort, handleOpenSearch, handleOpenFilter } =
    useOutletContext();
  return (
    <div>
      <div className="pt-12 mb-16 ">
        <ProductSection
          onOpenSort={handleOpenSort}
          onOpenSearch={handleOpenSearch}
          onOpenFilter={handleOpenFilter}
        />
      </div>
    </div>
  );
}
