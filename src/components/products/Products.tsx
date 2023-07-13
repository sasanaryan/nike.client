import { useState, useEffect, memo } from "react";
import type { FC } from "react";
import { FilterProducts, FetchedProduct } from "type";
import Grid from "@mui/material/Unstable_Grid2";
import { baseurl } from "config";
import Product from "components/product";
import ProductsSkeleton from "components/skeleton/productsSkeleton";

const Products: FC<FilterProducts> = ({
  gender,
  range,
  cat,
  sort,
  searchWord,
}) => {
  const [products, setProducts] = useState<FetchedProduct[]>([]);
  const [filter, setFilter] = useState<FetchedProduct[]>([]);
  const [filterSearch, setFilterSearch] = useState<FetchedProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchWord) {
      const getFilteredProducts = async () => {
        try {
          const res = await baseurl.get("/products");
          const productsFilter = res.data.filter((item: FetchedProduct) => {
            return item.title.toLowerCase().includes(searchWord.toLowerCase());
          });

          setFilterSearch(productsFilter);
          setFilter(productsFilter);
          setLoading(false);
          console.log(`${searchWord} ${filter.toString()}`);
        } catch (err) {
          console.log(err);
        }
      };
      getFilteredProducts();
    } else {
      const getProducts = async () => {
        try {
          const res = await baseurl.get(
            cat ? `/products?category=${cat}` : "/products"
          );
          setProducts(res.data);
          setFilter(res.data);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
      getProducts();
    }
  }, [cat, searchWord]);

  useEffect(() => {
    if (searchWord) {
      range &&
        setFilter(
          filterSearch.filter(
            (item) => item.price <= range[1] && range[0] <= item.price
          )
        );
    } else {
      range &&
        setFilter(
          products.filter(
            (item) => item.price <= range[1] && range[0] <= item.price
          )
        );
    }
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
    <>
      {loading ? (
        <ProductsSkeleton listsToRender={8} />
      ) : (
        <Display
          products={products}
          filter={filter}
          cat={cat}
          searchWord={searchWord}
        />
      )}
    </>
  );
};

export default memo(Products);

interface DisplayProp {
  products: FetchedProduct[];
  filter: FetchedProduct[];
  searchWord?: string;
  cat?: string;
}

const Display: FC<DisplayProp> = memo(
  ({ products, filter, cat, searchWord }) => {
    return (
      <Grid container padding={{ xs: "0px", sm: "5px" }}>
        {cat || searchWord
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
  }
);
