import React from "react";
import { categories } from "data";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import type { FC } from "react";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;

interface CategoryLinkProp {
  setActiveSide: React.Dispatch<React.SetStateAction<boolean>>;
}
const CategoryLink: FC<CategoryLinkProp> = ({ setActiveSide }) => {
  return (
    <>
      {categories.map((item) => (
        <Stack
          key={item.cat}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          marginTop="15px"
          onClick={() => setActiveSide(false)}
        >
          <StyledLink to={`/products/${item.cat}`}>
            <Typography fontSize="25px" fontWeight="500">
              {item.title}
            </Typography>
          </StyledLink>
          <ArrowForwardIosIcon />
        </Stack>
      ))}
    </>
  );
};

export default CategoryLink;
