import { memo } from "react";
import type { FC } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

type IContainer = {
  notSelected: boolean;
};
const Container = styled.div<IContainer>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 7px;
  margin: 10px;
  border: 2px red;
  border-style: ${({ notSelected }) => (notSelected ? "solid" : "hidden")};
  border-radius: 7px;
`;

interface ISize {
  selected?: boolean;
  existed?: boolean;
}

const Size = styled.div<ISize>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  padding: 5px;
  color: ${({ existed }) => (existed ? "black" : "#BDC6D1")};
  border: ${({ selected }) =>
    selected ? "2px solid #2B2D42" : "2px solid #DBE2E8"};
  background-color: ${({ existed }) => (existed ? "unset" : "#E1E7EC")};
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  cursor: ${({ existed }) => (existed ? "pointer" : "")};
  &:hover {
    border: ${({ existed }) =>
      existed ? "2px solid #2B2D42" : "2px solid #DBE2E8"};
  }
`;
const size = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12];

interface SizeGuide {
  handelChange: (e: React.FormEvent<HTMLDivElement>, size: number) => void;
  sizeSelected?: number;
  sizeExisted: number[];
  notSelected: boolean;
}

const SizeGuide: FC<SizeGuide> = ({
  handelChange,
  sizeSelected,
  sizeExisted,
  notSelected,
}) => {
  return (
    <Stack direction="column">
      <Stack direction="row" justifyContent="space-between">
        <Typography color={notSelected ? "red" : "black"}>
          Select Size
        </Typography>
        <Typography color={"GrayText"}>Size Guide</Typography>
      </Stack>
      <Container notSelected={notSelected}>
        {size.map((size) => (
          <Size
            key={size}
            onClick={(e, existSize = sizeExisted.includes(size)) =>
              existSize ? handelChange(e, size) : null
            }
            selected={size == sizeSelected}
            existed={sizeExisted.includes(size)}
          >
            <Typography sx={{ margin: "5px" }}> {size} </Typography>
          </Size>
        ))}
      </Container>
      {notSelected && (
        <Typography color="red">Please select a size.</Typography>
      )}
    </Stack>
  );
};

export default memo(SizeGuide);
