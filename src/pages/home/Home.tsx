import type { FC } from "react";
import Footer from "components/footer";
import Navbar from "components/navbar";
import Categories from "components/categories";
import Products from "components/products";

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
