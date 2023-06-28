import type { FC } from "react";
import { FetchedProduct } from "type";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styled from "@emotion/styled/macro";
import { mobile } from "theme";

const Wraper = styled.div`
  flex: 1;
  margin: 5px 5px 30px 5px;
  min-width: 300px;
  max-width: 500px;
  height: 420px;
  flex-grow: 0.5;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  ${mobile({ flexBasis: "fill", flexGrow: "1" })}
`;

const Container = styled.div`
  min-width: 280px;
  height: 310px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

interface productProp {
  item: FetchedProduct;
}

const Product: FC<productProp> = ({ item }) => {
  return (
    <Wraper>
      <Link to={`/product/${item._id}`}>
        <Container>
          <Image src={item.img[0]} />
        </Container>
        <Stack direction="column" gap={1} margin="10px 0 30px">
          <Typography fontWeight={500} sx={{ color: "#111111" }}>
            {item.title}
          </Typography>
          <Typography fontWeight={500} sx={{ color: "#7a7a7d" }}>
            {item.gender}`s shoe
          </Typography>
          <Typography fontWeight={500} sx={{ color: "#111111" }}>
            $ {item.price}
          </Typography>
        </Stack>
      </Link>
    </Wraper>
  );
};

export default Product;
