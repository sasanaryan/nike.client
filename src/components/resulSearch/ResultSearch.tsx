import { useEffect, useState } from "react";
import type { FC } from "react";
import { FetchedProduct } from "type";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { baseurl } from "config";
import { mobile } from "theme";
import Product from "components/product";

type ContainerProp = {
  openSearchBar?: boolean;
};

const Container = styled.div<ContainerProp>`
  ${({ openSearchBar }) =>
    openSearchBar
      ? `
    position: absolute;
    background-color: #ffffff;
    width: 100vw;
    height: 455px;
    top: 60px;
    right: 0px;
    overflow-x:  auto;
    overflow-y: unset;
    `
      : `
display: none;
`};
  ${({ openSearchBar }) =>
    mobile(` height: ${openSearchBar && "100vh"}; 
     overflow-y: ${openSearchBar && "auto"} ;
     overflow-x: "unset" ;
     top: 70px;
`)};
`;
interface ResultSearchProp {
  searchWord: string;
  openSearchBar: boolean;
}
const ResultSearch: FC<ResultSearchProp> = ({ searchWord, openSearchBar }) => {
  const [products, setProducts] = useState<FetchedProduct[]>([]);
  const [filter, setFilter] = useState<FetchedProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await baseurl.get("/products");
        setProducts(res.data);
        searchWord !== ""
          ? setFilter(
              products.filter((person) => {
                return person.title
                  .toLowerCase()
                  .includes(searchWord.toLowerCase());
              })
            )
          : setFilter([]);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [searchWord]);

  return (
    <Container openSearchBar={openSearchBar}>
      <Grid
        container
        direction={{ sx: "column", sm: "row" }}
        sx={{ flexWrap: { sx: "wrap", sm: "nowrap" } }}
        margin={{ xs: "0px", sm: "20px" }}
      >
        {filter.slice(0, 12).map((item: FetchedProduct) => (
          <Product item={item} key={item._id} />
        ))}
      </Grid>
    </Container>
  );
};

export default ResultSearch;
