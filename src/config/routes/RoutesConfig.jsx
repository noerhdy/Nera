import HomePage from "@/pages/home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        {/* <Route path="/" element={<MainPage />}> */}
        {/* <Route path="product" element={<ProductPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="cart" element={<CartPage />} /> */}
        {/* </Route> */}
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
