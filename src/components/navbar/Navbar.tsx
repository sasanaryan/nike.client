import { memo } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useAppSelector } from "store/store";
import { icons } from "data";
import NavbarMiddle from "components/navbar/NavbarMiddle";
import NavbarBottom from "components/navbar/NavbarBottom";
import ProfileMenu from "components/ProfileMenu/ProfileMenu";
import Snackbars from "components/alert";

const Logo = styled.img`
  margin: 0px 5px 0px 5px;
  position: relative;
  top: 0px;
  height: 20px;
  font-weight: bold;
`;

const MenuIt = styled.span`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;

const Navbar: FC = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "#f7f7f7",
          height: "40px",
          width: "100%",
          padding: "10px 20px",
          display: { xs: "none", sm: "none", md: "flex" },
        }}
      >
        <Stack direction="row" flex="1" alignItems="center">
          <Logo src={icons.icon1} />
          <Logo src={icons.icon2} />
        </Stack>
        <Stack
          direction="row"
          flex="1"
          justifyContent="flex-end"
          alignItems="center"
          margin="0px 8px 0px 0px"
        >
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <MenuIt>
              <Typography sx={{ fontSize: "12px", fontWeight: "Medium" }}>
                Find a Store
              </Typography>
            </MenuIt>
            <MenuIt>
              <Typography sx={{ fontSize: "12px", fontWeight: "Medium" }}>
                Help
              </Typography>
            </MenuIt>
            {currentUser ? (
              <ProfileMenu>
                <MenuIt>
                  <>
                    <Typography sx={{ fontSize: "12px", fontWeight: "Medium" }}>
                      Hi, {currentUser.username}
                    </Typography>
                  </>

                  <PersonOutlineOutlinedIcon
                    sx={{ fontSize: "medium", marginLeft: "5px" }}
                  />
                </MenuIt>
              </ProfileMenu>
            ) : (
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <MenuIt>
                  <StyledLink to="/register">
                    <Typography sx={{ fontSize: "12px", fontWeight: "Medium" }}>
                      Join Us
                    </Typography>
                  </StyledLink>
                </MenuIt>
                <MenuIt>
                  <StyledLink to="/Login">
                    <Typography sx={{ fontSize: "12px", fontWeight: "Medium" }}>
                      Log In
                    </Typography>
                  </StyledLink>
                </MenuIt>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
      <NavbarMiddle />
      <NavbarBottom />
      <Snackbars />
    </>
  );
};

export default memo(Navbar);
