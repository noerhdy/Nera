import MainLayout from "@/components/layout/MainLayout";
import ErorPage from "@/pages/ErorPage";
import HomePage from "@/pages/home/HomePage";
import OrderPage from "@/pages/order/OrderPage";
import ProductPage from "@/pages/product/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErorPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Route>
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
