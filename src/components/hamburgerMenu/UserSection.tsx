import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useAppDispatch, useAppSelector } from "store/store";
import { LogOut } from "services/apiCall";
import CustomButton from "components/button";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;

const Logo = styled.img`
  margin: 0px 5px 0px 5px;
  position: relative;
  top: 0px;
  height: 20px;
  font-weight: bold;
`;

interface UserSectionProp {
  setActiveSide: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserSection: FC<UserSectionProp> = ({ setActiveSide }) => {
  const user = useAppSelector((state) => state.user);
  const currentUser = user.currentUser;
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    LogOut(dispatch, user.accessToken!);
    setActiveSide(false);
  };

  return (
    <>
      {currentUser ? (
        <>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "bold", marginTop: "30px" }}
          >
            Hi, {currentUser?.username}
          </Typography>
          <Stack
            direction="row"
            gap={2}
            marginTop="15px"
            onClick={handleLogOut}
          >
            <LogoutIcon />
            <Typography fontSize="17px" fontWeight="500">
              Logout
            </Typography>
          </Stack>
          <Stack direction="row" gap={2} marginTop="15px">
            <PersonOutlineOutlinedIcon />
            <StyledLink to="/profile">
              <Typography fontSize="17px" fontWeight="500">
                Profile
              </Typography>
            </StyledLink>
          </Stack>
        </>
      ) : (
        <Stack direction="column" marginBottom="40px">
          <Typography sx={{ margin: "20px 0 15px 0" }}>
            Become a Nike Member for the best products, inspiration and stories
            in sport.
          </Typography>
          <Stack
            direction="row"
            gap={1}
            sx={{ maxHeight: "30px", width: "250px" }}
          >
            <StyledLink to="/register">
              <CustomButton>
                <Typography fontSize="17px" fontWeight="500">
                  Join Us
                </Typography>
              </CustomButton>
            </StyledLink>
            <StyledLink to="/login">
              <CustomButton whiteBg>
                <Typography fontSize="17px" fontWeight="500">
                  LogIn
                </Typography>
              </CustomButton>
            </StyledLink>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default UserSection;
