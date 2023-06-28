import type { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "pages/register";
import Login from "pages/login";
import Home from "pages/home";

const RoutePage: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
export default RoutePage;
