import React from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { icons } from "data";
import CategoryLink from "components/hamburgerMenu/CategoryLink";
import UserSection from "components/hamburgerMenu/UserSection";
import { mobile } from "theme";

type ModelProp = {
  open?: boolean;
};
const Model = styled.div<ModelProp>`
  ${({ open }) =>
    open &&
    `
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);`};
`;

type ContainerProp = {
  open?: boolean;
};
const Container = styled.div<ContainerProp>`
  ${({ open }) =>
    open
      ? `
  position: fixed;
  background-color: #ffffff;
  transition: transform 0.3s ease-in-out ;
  transform: translateX(0%);
  `
      : `
  position:relative;
  transform: translateX(100%);
  `};
  ${mobile({ width: "100vw" })};
  padding: 0px 30px 0px 30px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #ffffff;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  border-left: 1px solid gray;
`;

const Logo = styled.img`
  margin: 0px 5px 0px 5px;
  position: relative;
  top: 0px;
  height: 20px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;

interface HamburgerMenuProp {
  activeSide: boolean;
  setActiveSide: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: FC<HamburgerMenuProp> = ({
  activeSide,
  setActiveSide,
}) => {
  return (
    <Model open={activeSide}>
      <Container open={activeSide}>
        <Stack
          direction="column"
          gap={3}
          sx={{ padding: "10px 0px 10px 0px", width: "100%" }}
        >
          <CloseTwoToneIcon
            sx={{ alignSelf: "flex-end", fontSize: "30px" }}
            onClick={() => setActiveSide(false)}
          />
          <Stack direction="column" marginTop="20px" width="100%">
            <CategoryLink setActiveSide={setActiveSide} />
            <UserSection setActiveSide={setActiveSide} />
          </Stack>
          <Stack direction="row" gap={2}>
            <Logo src={icons.cart} />
            <StyledLink to="/cart" onClick={() => setActiveSide(false)}>
              <Typography fontSize="17px" fontWeight="500">
                Bag
              </Typography>
            </StyledLink>
          </Stack>
          <Stack direction="row" gap={2}>
            <HelpOutlineOutlinedIcon />
            <Typography fontSize="17px" fontWeight="500">
              Help
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Model>
  );
};

export default HamburgerMenu;
