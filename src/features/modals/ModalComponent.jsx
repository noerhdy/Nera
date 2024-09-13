import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "@/stores/ModalSlice";
import {
  ModalSearch,
  ModalOrder,
  ModalFilter,
  ModalSort,
} from "@/components/fragments/IndexModal";

const ModalComponent = () => {
  const dispatch = useDispatch();
  const { isSearchVisible, isFilterVisible, isSortVisible } = useSelector(
    (state) => state.modal
  );
  const cartItems = useSelector((state) => state.cart.items);

  // State lokal untuk mengontrol modal order
  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const showOrderModal = cartItems.length > 0;

  // Set modal order ke visible atau tidak sesuai dengan state keranjang
  useEffect(() => {
    if (
      showOrderModal &&
      !isSearchVisible &&
      !isFilterVisible &&
      !isSortVisible
    ) {
      setIsOrderVisible(true); // Tampilkan modal order jika keranjang ada item dan modal lain tidak terbuka
    } else {
      setIsOrderVisible(false); // Sembunyikan modal order jika ada modal lain yang terbuka
    }
  }, [showOrderModal, isSearchVisible, isFilterVisible, isSortVisible]);

  return (
    <>
      {/* Modal Search */}
      {isSearchVisible && (
        <ModalSearch
          isVisible={isSearchVisible}
          onClose={() => dispatch(closeModal("search"))}
        />
      )}

      {/* Modal Order: Tampilkan modal order hanya jika ada item di keranjang */}
      {isOrderVisible && (
        <ModalOrder
          isVisible={isOrderVisible}
          // Modal order tidak punya tombol close, jadi tidak perlu handler onClose
        />
      )}

      {/* Modal Sort */}
      {isSortVisible && (
        <ModalSort
          isVisible={isSortVisible}
          onClose={() => dispatch(closeModal("sort"))}
        />
      )}

      {/* Modal Filter */}
      {isFilterVisible && (
        <ModalFilter
          isVisible={isFilterVisible}
          onClose={() => dispatch(closeModal("filter"))}
          onOpenSearch={() => dispatch(openModal("search"))}
        />
      )}
    </>
  );
};

export default ModalComponent;
