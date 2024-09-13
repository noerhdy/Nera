import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { dataItem } from "@/constants/Index";

function SideCheck() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const carts = useSelector((store) => store.cart.items);

  // Menghitung total harga dan jumlah item
  const totalPrice = carts.reduce((acc, item) => {
    const product = dataItem.find((product) => product.id === item.productId);
    if (product) {
      return acc + product.price * item.quantity;
    }
    return acc;
  }, 0);

  const totalQuantity = carts.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    // Mengecek ukuran layar apakah mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Cek saat pertama kali komponen dirender
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  // Render untuk desktop
  const renderDesktopSummary = () => (
    <>
      <div className="py-2 border-b-2 border-[#A9A69F] ">
        <h1 className="font-semibold text-[1rem] ">Checkout Summary</h1>
      </div>
      <div className="flex  items-center justify-between">
        <h1 className="font-medium text-[1rem]">Original Product Price</h1>
        <h1 className="font-semibold text-[1.2rem]">
          Rp {new Intl.NumberFormat("id-ID").format(totalPrice)}
        </h1>
      </div>
      <h1 className="font-semibold text-[1rem] text-zinc-400">
        {totalQuantity} item
      </h1>
      <div className="flex items-center justify-between w-full ">
        <h1 className="font-medium text-[1rem]">Total Product Price</h1>
        <h1 className="font-semibold text-[1.2rem]">
          Rp. {new Intl.NumberFormat("id-ID").format(totalPrice)}
        </h1>
      </div>
      {/* <div className="flex items-center justify-between text-[1rem] text-zinc-400">
        <h1>Product Discount</h1>
        <h1>-Rp.200.000</h1>
      </div> */}
      <div className="py-4 sm:py-8">
        <Link to="/checkout">
          <Button className="rounded-xl text-[1rem] w-full">Check Out</Button>
        </Link>
      </div>
    </>
  );

  // Render untuk mobile dengan modal
  const renderMobileModal = () => (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={handleClose}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-zinc-950 rounded-t-xl"
            initial={{ y: 800 }}
            animate={{ y: 0 }}
            exit={{ y: 800 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="py-2 border-b-2 border-zinc-600 ">
              <h1 className="font-semibold text-[1rem]">Checkout Summary</h1>
            </div>
            <div className="flex items-center pt-2 justify-between w-full">
              <h1 className="font-medium text-[0.75rem]">
                Original Product Price
              </h1>
              <h1 className="font-semibold text-[0.75rem]">
                Rp. {new Intl.NumberFormat("id-ID").format(totalPrice)}
              </h1>
            </div>
            <h1 className="flex font-semibold text-[0.75rem] text-zinc-400">
              {totalQuantity} item
            </h1>
            <div className="flex items-center justify-between w-full pt-4">
              <h1 className="font-medium text-[1rem]">Total Product Price</h1>
              <h1 className="font-semibold text-[1.2rem]">
                Rp. {new Intl.NumberFormat("id-ID").format(totalPrice)}
              </h1>
            </div>
            <div className="py-4">
              <Link to="/checkout">
                <Button className="w-full rounded-xl text-[1rem]">
                  Check Out
                </Button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="relative w-full sm:w-2/5 bg-transparent  sm:bg-zinc-950 p-4 rounded-[1.5rem]">
      {/* Komponen harga dan Chevron untuk mobile di bagian bawah */}
      <div
        onClick={handleOpen}
        className="sm:hidden fixed bottom-0  left-0 right-0 bg-zinc-950 flex justify-between items-center p-4 z-50"
      >
        <h1 className="font-semibold text-[1.2rem]">
          Rp {new Intl.NumberFormat("id-ID").format(totalPrice)}
        </h1>
        <ChevronUp className="cursor-pointer" />
      </div>

      {/* Komponen summary untuk desktop */}
      <div className="hidden sm:block">{renderDesktopSummary()}</div>

      {/* Render modal untuk mobile */}
      {isMobile && renderMobileModal()}
    </div>
  );
}

export default SideCheck;
