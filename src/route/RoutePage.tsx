import React from "react";
import type { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppSelector } from "store/store";
import Loading from "components/loading";
const Register = React.lazy(() => import("pages/register"));
const Login = React.lazy(() => import("pages/login"));
const Home = React.lazy(() => import("pages/home"));
const ProductList = React.lazy(() => import("pages/productList"));
const Cart = React.lazy(() => import("pages/cart"));
const Profile = React.lazy(() => import("pages/profile"));
const Product = React.lazy(() => import("pages/product"));

const RoutePage: FC = () => {
  const user = useAppSelector((state) => state.user.currentUser);
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category?" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile/:sectionParam?" element={<Profile />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
};
export default RoutePage;
