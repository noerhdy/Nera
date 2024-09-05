import React from "react";
import ModalSearch from "./Modal/ModalSearch";
import ModalOrder from "./Modal/ModalOrder";

const ModalComponent = ({
  isSearchVisible,
  handleCloseSearch,
  isOrderVisible,
  handleCloseOrder,
}) => {
  return (
    <>
      <ModalSearch isVisible={isSearchVisible} onClose={handleCloseSearch} />
      <ModalOrder isVisible={isOrderVisible} onClose={handleCloseOrder} />
    </>
  );
};

export default ModalComponent;
