import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../Product/Sidebar";
import { useEffect, useState } from "react";

const ModalFilter = ({ isVisible, onClose, onOpenSearch }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Disable scroll when modal is visible
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to restore scroll when modal is unmounted or visibility changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  // Only render ModalCheck if it's mobile size
  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed inset-0 z-40 px-4 bg-black bg-opacity-80 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            className="fixed inset-0 top-0 z-40"
            initial={{ y: 800 }}
            animate={{ y: 0 }}
            exit={{ y: 800 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-end justify-end h-full sm:items-center sm:justify-center">
              <div className="w-full px-4 sm:w-2/5">
                <Sidebar onClose={onClose} onOpenSearch={onOpenSearch} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalFilter;
