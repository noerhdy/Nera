import React from "react";
import ModalSearch from "./Modal/ModalSearch";
import ModalOrder from "./Modal/ModalOrder";
import ModalFilter from "./Modal/ModalFilter";

const ModalComponent = ({
  isSearchVisible,
  handleCloseSearch,
  isOrderVisible,
  handleCloseOrder,
  isFilterVisible,
  handleCloseFilter,
}) => {
  return (
    <>
      <ModalSearch isVisible={isSearchVisible} onClose={handleCloseSearch} />
      <ModalOrder isVisible={isOrderVisible} onClose={handleCloseOrder} />
      <ModalFilter isVisible={isFilterVisible} onClose={handleCloseFilter} />
    </>
  );
};

export default ModalComponent;
