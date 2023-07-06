import { useEffect, useState } from "react";
import type { FC } from "react";
import { Grid } from "@mui/material";
import { FetchedProduct } from "type";
import { baseurl } from "config";
import { useAppSelector } from "store/store";
import Product from "components/product/Product";
import ProductsSkeleton from "components/skeleton/productsSkeleton";
const Favourits: FC = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<
    FetchedProduct[] | null
  >();
  const [products, setProducts] = useState<FetchedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const user = useAppSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await baseurl.get("/products");
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    setFavoriteProducts(
      products.filter((product: FetchedProduct) =>
        user?.favorites?.includes(product._id)
      )
    );
  }, [products]);

  return (
    <>
      {loading ? (
        <ProductsSkeleton listsToRender={user?.favorites?.length!} />
      ) : (
        <Grid container padding={{ xs: "0px", sm: "5px" }}>
          {favoriteProducts?.map((product: FetchedProduct) => (
            <Product key={product._id} item={product} />
          ))}
        </Grid>
      )}
    </>
  );
};
export default Favourits;
