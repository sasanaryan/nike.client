import { useState, useEffect, memo } from "react";
import type { FC } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Container = styled.div`
  display: flex;
  height: 70px;
  background-color: #f7f7f7;
  align-items: center;
  overflow: hidden;
`;

interface WrapperProp {
  slideIndex: number;
}

const Wrapper = styled.div<WrapperProp>`
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavbarBottom: FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  useEffect(() => {
    const intervalIndex = setInterval(() => {
      setSlideIndex((prev) => (prev > 0 ? prev - 1 : 1));
    }, 4000);
    return () => {
      clearInterval(intervalIndex);
    };
  }, [slideIndex]);

  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        <Slide>
          <Typography
            variant="body2"
            sx={{ width: { xl: "300px", sm: "200px" }, height: "50px" }}
          >{`FREE SHIPPING + RETURNS, FREE
                     MEMBERSHIP, EXCLUSIVE PRODUCTS`}</Typography>
        </Slide>
        <Slide>
          <Typography variant="body2">
            NEW MARKDOWNS: UP TO 40% OFF Shop just-reduced styles—no code
            needed.
          </Typography>
        </Slide>
      </Wrapper>
    </Container>
  );
};

export default memo(NavbarBottom);
