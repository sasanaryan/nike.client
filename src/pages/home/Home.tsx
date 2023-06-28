import type { FC } from "react";
import Footer from "components/footer";
import Navbar from "components/navbar";
import Categories from "components/categories";

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <Footer />
    </>
  );
};

export default Home;
