import type { FC } from "react";
import { FetchedProduct } from "type";
import Product from "components/product";
import { Mockproducts } from "data";

const Products: FC = () => {
  return (
    <>
      {Mockproducts.map((item: FetchedProduct) => (
        <Product item={item} key={item._id} />
      ))}
    </>
  );
};

export default Products;
