import { useState, memo } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import { Badge, Typography } from "@mui/material";
import SearchBar from "components/searchBar";
import MenuIcon from "@mui/icons-material/Menu";
import { mobile } from "theme";
import { icons } from "data";
import { useAppSelector } from "store/store";
import HamburgerMenu from "components/hamburgerMenu";
import ScrollTop from "components/goToTop";
const Container = styled.div`
  padding: 0px 30px 0px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #ffffff;
  ${mobile({ padding: "0px 7px 0px 10px" })};
`;

const Logo = styled.img`
  margin: 0px 5px 0px 5px;
  position: relative;
  top: -2px;
  height: 20px;
  font-weight: bold;
`;
const BadgeContent = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0px;
  font-size: 10px;
  left: 10px;
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;

const NavbarMiddle: FC = () => {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const [openSearchBar, setOpenSearchBar] = useState<boolean>(false);
  const quantity = useAppSelector((state) => state.cart.quantity);

  return (
    <>
      <Container>
        <StyledLink to="/">
          <Logo src={icons.logo} />
        </StyledLink>
        <Stack direction="row" alignItems="center" spacing={1}>
          <SearchBar
            setOpenSearchBar={setOpenSearchBar}
            openSearchBar={openSearchBar}
          />

          <Stack direction="row" alignItems="center" gap={2}>
            <StyledLink to="/cart">
              <Badge>
                <BadgeContent>
                  <Typography fontSize="13px">{quantity}</Typography>
                </BadgeContent>
                <Logo src={icons.cart} />
              </Badge>
            </StyledLink>
            <MenuIcon
              onClick={() => setOpenSideMenu(true)}
              sx={{ display: { md: "none" }, fontSize: "28px" }}
            />
          </Stack>
        </Stack>
      </Container>
      <HamburgerMenu
        activeSide={openSideMenu}
        setActiveSide={setOpenSideMenu}
      />
      <ScrollTop />
    </>
  );
};

export default memo(NavbarMiddle);
