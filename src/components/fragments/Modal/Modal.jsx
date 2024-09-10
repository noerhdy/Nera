import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const Modal = ({ isVisible, onClose, children }) => {
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

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed inset-0 z-40 px-4 bg-black bg-opacity-80"
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
              <div className="w-full px-4 sm:w-2/5">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
