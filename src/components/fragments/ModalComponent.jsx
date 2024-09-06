import React from "react";
import ModalSearch from "./Modal/ModalSearch";
import ModalOrder from "./Modal/ModalOrder";
import ModalFilter from "./Modal/ModalFilter";
import ModalSort from "./Modal/ModalSort";

const ModalComponent = ({
  isSearchVisible,
  isOrderVisible,
  isFilterVisible,
  isSortVisible,
  onCloseModal,
  onOpenSearch, // Tambahkan ini untuk membuka ModalSearch dari ModalFilter
}) => {
  return (
    <>
      <ModalSearch isVisible={isSearchVisible} onClose={onCloseModal} />
      <ModalOrder isVisible={isOrderVisible} onClose={onCloseModal} />
      <ModalSort isVisible={isSortVisible} onClose={onCloseModal} />
      <ModalFilter
        isVisible={isFilterVisible}
        onClose={onCloseModal}
        onOpenSearch={onOpenSearch} // Pass the callback to ModalFilter
      />
    </>
  );
};

export default ModalComponent;
