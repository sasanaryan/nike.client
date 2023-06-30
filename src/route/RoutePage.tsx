import type { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "pages/register";
import Login from "pages/login";
import Home from "pages/home";
import Product from "pages/product";

const RoutePage: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
export default RoutePage;
