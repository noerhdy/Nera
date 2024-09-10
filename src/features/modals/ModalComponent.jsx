import React from "react";
import { useModalContext } from "@/features/modals/ModalContext";
import {
  ModalSearch,
  ModalOrder,
  ModalFilter,
  ModalSort,
} from "@/components/fragments/indexModal";

const ModalComponent = () => {
  const {
    isSearchVisible,
    isOrderVisible,
    isFilterVisible,
    isSortVisible,
    handleCloseModal,
    handleOpenModal,
  } = useModalContext();

  return (
    <>
      {/* Render ModalSearch jika isSearchVisible true */}
      {isSearchVisible && (
        <ModalSearch isVisible={isSearchVisible} onClose={handleCloseModal} />
      )}

      {/* Render ModalOrder jika isOrderVisible true */}
      {isOrderVisible && (
        <ModalOrder isVisible={isOrderVisible} onClose={handleCloseModal} />
      )}

      {/* Render ModalSort jika isSortVisible true */}
      {isSortVisible && (
        <ModalSort isVisible={isSortVisible} onClose={handleCloseModal} />
      )}

      {/* Render ModalFilter jika isFilterVisible true */}
      {isFilterVisible && (
        <ModalFilter
          isVisible={isFilterVisible}
          onClose={handleCloseModal}
          onOpenSearch={() => handleOpenModal("search")}
        />
      )}
    </>
  );
};

export default ModalComponent;
