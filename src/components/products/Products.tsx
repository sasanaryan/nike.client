import { useState, useEffect } from "react";
import type { FC } from "react";
import { FilterProducts } from "type";
import { FetchedProduct } from "type";
import Grid from "@mui/material/Unstable_Grid2";
import { baseurl } from "config";
import Product from "components/product";

const Products: FC<FilterProducts> = ({ gender, range, cat, sort }) => {
  const [products, setProducts] = useState<FetchedProduct[]>([]);
  const [filter, setFilter] = useState<FetchedProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await baseurl.get(
          cat ? `/products?category=${cat}` : "/products"
        );
        setProducts(res.data);
        setFilter(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    range &&
      setFilter(
        products.filter(
          (item) => item.price <= range[1] && range[0] <= item.price
        )
      );

    gender !== "No gender" &&
      setFilter((prev) => [...prev].filter((item) => item.gender === gender));
  }, [range, gender]);

  useEffect(() => {
    if (sort === "newest") {
      setFilter((prev) =>
        [...prev].sort((a, b) => +a.createdAt! - +b.createdAt!)
      );
    } else if (sort === "asc") {
      setFilter((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilter((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Grid container margin={{ xs: "0px", sm: "5px" }}>
      {cat
        ? filter.map((item: FetchedProduct) => (
            <Product item={item} key={item._id} />
          ))
        : products
            .slice(0, 12)
            .map((item: FetchedProduct) => (
              <Product item={item} key={item._id} />
            ))}
    </Grid>
  );
};

export default Products;
