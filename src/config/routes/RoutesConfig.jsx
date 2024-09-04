import MainLayout from "@/components/layout/MainLayout";
import HomePage from "@/pages/home/HomePage";
import ProductPage from "@/pages/product/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
