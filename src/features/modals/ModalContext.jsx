// ModalContext.js
import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isSortVisible, setIsSortVisible] = useState(false);

  const handleOpenModal = (modal) => {
    setIsSearchVisible(false);
    setIsOrderVisible(false);
    setIsFilterVisible(false);
    setIsSortVisible(false);

    if (modal === "search") setIsSearchVisible(true);
    if (modal === "order") setIsOrderVisible(true);
    if (modal === "filter") setIsFilterVisible(true);
    if (modal === "sort") setIsSortVisible(true);
  };

  const handleCloseModal = () => {
    setIsSearchVisible(false);
    setIsOrderVisible(false);
    setIsFilterVisible(false);
    setIsSortVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isSearchVisible,
        isOrderVisible,
        isFilterVisible,
        isSortVisible,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
