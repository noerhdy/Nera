import ProductSection from "@/components/fragments/Product/ProductSection";
import React from "react";
import { useOutletContext } from "react-router-dom";

export default function ProductPage() {
  const { handleOpenFilter } = useOutletContext();
  return (
    <div>
      <div className="mb-16 pt-12 ">
        <ProductSection onOpenFilter={handleOpenFilter} />
      </div>
    </div>
  );
}
