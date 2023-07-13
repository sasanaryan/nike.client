import type { FC } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.834);
  z-index: 1;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  display: relative;
  width: 100px;
  height: 100px;
  border: 8px solid;
  border-color: #3d5af1 transparent #3d5af1 transparent;
  border-radius: 50%;
  animation: ${rotate} 1.2s linear infinite;
`;

const Loading: FC = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loading;
