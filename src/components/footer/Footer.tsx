import React from "react";
import type { FC } from "react";
import { Facebook, Instagram, YouTube, Twitter } from "@mui/icons-material";
import { Stack } from "@mui/system";
import styled from "@emotion/styled";
import { mobile, tablet } from "theme";
import { footerMenu } from "data";
import uuid from "react-uuid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
  background-color: #111111;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const SocialContainer = styled.div`
  margin: 30px 30px 15px 15px;
  display: flex;
`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #111111;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  ${tablet({ marginRight: "10px" })}
`;

const SubItems = styled.span`
  font-size: 12px;
  font-family: "Nunito", sans-serif;
  font-weight: 200;
  color: #7a7a7d;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

const Items = styled.span`
  font-size: 13px;
  color: #fff;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  cursor: pointer;
  ${tablet({ fontSize: "11px " })}
`;

const Footer: FC = () => {
  return (
    <Container>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={{ xs: 2, md: 5, lg: 10 }}
        >
          <Stack direction="column" gap={2} sx={{ margin: "30px " }}>
            {footerMenu.mainMenu.map((item) => (
              <Items key={uuid()}>{item}</Items>
            ))}
          </Stack>
          <Stack direction="column" gap={2} sx={{ margin: "30px " }}>
            <Items>GET HELP</Items>
            {footerMenu.getHelp.map((item) => (
              <SubItems key={uuid()}>{item}</SubItems>
            ))}
          </Stack>
          <Stack direction="column" gap={2} sx={{ margin: "30px " }}>
            <Items>ABOUT NIKE</Items>
            {footerMenu.adoutNike.map((item) => (
              <SubItems key={uuid()}>{item}</SubItems>
            ))}
          </Stack>
        </Stack>
        <SocialContainer>
          <SocialIcon color="7a7a7d">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="7a7a7d">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="7a7a7d">
            <YouTube />
          </SocialIcon>
          <SocialIcon color="7a7a7d">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="flex-end"
        sx={{ padding: "15px" }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} gap={3}>
          {footerMenu.subMenu.map((item) => (
            <SubItems key={uuid()}>{item}</SubItems>
          ))}
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        sx={{ margin: "10px" }}
      >
        <SubItems>© 2023 Nike, Inc. All Rights Reserved</SubItems>
        <SubItems>CA Supply Chains Act</SubItems>
      </Stack>
    </Container>
  );
};

export default React.memo(Footer);
