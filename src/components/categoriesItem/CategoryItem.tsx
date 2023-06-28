import type { FC } from "react";
import { CatItem } from "type";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import styled from "@emotion/styled/macro";
import { mobile } from "theme";
import CustomButton from "components/button";

const Container = styled.div`
  flex: 1;
  flex-direction: column;
  margin-top: 15px;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${mobile({ height: "60vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

type CategoryItemProp = {
  item: CatItem;
};

const CategoryItem: FC<CategoryItemProp> = ({ item }) => {
  return (
    <Container>
      <Typography
        fontSize={{ md: 60, sm: 40, xs: 30 }}
        sx={{ fontWeight: "bold", margin: "20px 0 5px" }}
      >
        {item.message}
      </Typography>
      <Link to={`/products/${item.cat}`}>
        <CustomButton>
          <Typography>Shop {item.cat}</Typography>
        </CustomButton>
      </Link>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Typography
            fontSize={{ md: 60, sm: 40, xs: 30 }}
            sx={{
              fontWeight: "bold",
              color: "#ffffff",
              textShadow: "1px 1px 4px #000000",
            }}
          >
            {item.title}
          </Typography>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
