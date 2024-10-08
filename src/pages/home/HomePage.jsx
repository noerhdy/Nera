import BannerSwipe from "@/components/fragments/Home/BannerSwipe";
import ProductHome from "@/components/fragments/Home/ProductHome";
import React from "react";
import { toast, Toaster } from "sonner";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setToastShown } from "@/stores/Toast";
import { useEffect } from "react";

export default function HomePage() {
  const dispatch = useDispatch();
  const hasShownToast = useSelector((state) => state.toast.hasShownToast);

  useEffect(() => {
    if (!hasShownToast) {
      const timeout1 = setTimeout(() => {
        toast.info("Hello World!");
      }, 3000);
      const timeout2 = setTimeout(() => {
        toast.info("This is a Prototype Website"); // Perbarui status untuk mencegah toast memuat kembali saaat berpindah halaman ke home
      }, 5000);
      const timeout3 = setTimeout(() => {
        toast.info(
          "and all the data displayed is static, without any connection to a database."
        );
        dispatch(setToastShown(true)); // Perbarui status untuk mencegah toast memuat kembali saaat berpindah halaman ke home
      }, 7000);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      };
    }
  }, [dispatch, hasShownToast]);
  return (
    <>
      <div className="mb-16 ">
        <Toaster position="top-center" />
        <div
          className="h-[calc(100vh-20px)] sm:h-[500px] relative  "
          style={{ clipPath: "polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100%) " }}
        >
          <div className=" fixed inset-0 h-[calc(100vh-400px)] sm:h-[500px]  w-full top-10 ">
            <BannerSwipe />
          </div>
        </div>
        <ProductHome />
      </div>
    </>
  );
}
