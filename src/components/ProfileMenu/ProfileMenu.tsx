import React, { ReactNode } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "store/store";
import { LogOut } from "services/apiCall";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;
type clickEvent = React.MouseEvent<HTMLButtonElement>;
interface ProfileMenuProp {
  children: ReactNode | JSX.Element | JSX.Element[];
}

const ProfileMenu: FC<ProfileMenuProp> = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);

  const open = Boolean(anchorEl);

  const handleClick = (event: clickEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    LogOut(dispatch, currentUser?.refreshToken!);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{ padding: "0px", textTransform: "none" }}
      >
        {children}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <StyledLink to="/profile">Profile</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
