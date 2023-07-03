import type { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "pages/register";
import Login from "pages/login";
import Home from "pages/home";
import Product from "pages/product";
import { useAppSelector } from "store/store";
import ProductList from "pages/productList/ProductList";
import Cart from "pages/cart";

const RoutePage: FC = () => {
  const user = useAppSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category?" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
};
export default RoutePage;
