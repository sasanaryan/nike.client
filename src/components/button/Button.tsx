import React from "react";
import type { FC } from "react";
import styled from "@emotion/styled";
import theme from "theme";

interface CustomButtonStyledProp {
  whiteBg?: boolean;
}

const CustomButtonStyled = styled.button<CustomButtonStyledProp>`
  border-radius: 30px;
  border: ${({ whiteBg }) =>
    whiteBg
      ? `1.5px solid ${theme.palette.primary.dark}`
      : "1.5px solid transparent"};
  align-items: center;
  background-color: ${({ whiteBg }) =>
    whiteBg ? theme.palette.primary.light : theme.palette.primary.dark};
  margin-top: 10px;
  color: ${({ whiteBg }) =>
    whiteBg ? theme.palette.primary.dark : theme.palette.primary.light};
  width: 100%;
  min-height: 30px;
  max-height: 60px;
  padding: 15px 15px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  justify-content: center;
  alighn-item: center;
`;

interface CustomButtonProp {
  children: string | JSX.Element | JSX.Element[];
  onClick?: React.MouseEventHandler<HTMLElement>;
  whiteBg?: boolean;
}

const CustomButton: FC<CustomButtonProp> = ({ children, onClick, whiteBg }) => {
  return (
    <CustomButtonStyled onClick={onClick} whiteBg={whiteBg}>
      {children}
    </CustomButtonStyled>
  );
};

export default React.memo(CustomButton);
