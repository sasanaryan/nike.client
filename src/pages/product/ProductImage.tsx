import { useEffect, useState, memo } from "react";
import type { FC } from "react";
import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { mobile } from "theme";

const Image = styled.img`
  max-width: 95%;
  width: 95%;
  object-fit: cover;
  ${mobile({ width: "100%" })}
`;

interface TImageShowCase {
  isSelected: boolean;
}

const ImageShowCase = styled.img<TImageShowCase>`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin: 4px;
  border-radius: 5px;
  filter: ${({ isSelected }) => isSelected && "brightness(70%)"};
`;

interface IArrow {
  isleft?: boolean;
}
const Arrow = styled.div<IArrow>`
  width: 36px;
  height: 36px;
  background-color: #ffffff;
  &:hover,
  &:focus {
    background-color: lightblue;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    opacity: 0.5;
  }
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isleft }) => isleft && "rotate(180deg)"};
  opacity: 0.5;
  z-index: 2;
`;

interface ProductImageProp {
  images: string[];
}

const ProductImage: FC<ProductImageProp> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  useEffect(() => {
    setMainImage(images[0]);
  }, [images]);

  const arrowLeftSide = () => {
    const length = images.length - 1;
    const index = images.indexOf(mainImage);
    if (index === 0) {
      setMainImage(images[length]);
    } else {
      setMainImage(images[index - 1]);
    }
  };

  const arrowRightSide = () => {
    const length = images.length - 1;
    const index = images.indexOf(mainImage);
    if (index === length) {
      setMainImage(images[0]);
    } else {
      setMainImage(images[index + 1]);
    }
  };

  return (
    <Stack
      direction={{ xs: "column-reverse", md: "row", lg: "row" }}
      gap={2}
      order="2"
      flex="2.5"
      position="relative"
      height="100%"
      margin={{ xl: "10px", sm: "0" }}
    >
      <Stack
        direction={{ xs: "row", md: "column", lg: "column" }}
        display={{ xs: "none", sm: "flex" }}
      >
        {images.map((i) => (
          <ImageShowCase
            key={i}
            src={i}
            isSelected={i === mainImage ? true : false}
            onMouseEnter={() => setMainImage(i)}
            onClick={() => setMainImage(i)}
          />
        ))}
      </Stack>
      <Image src={mainImage} />
      <Stack
        direction="row"
        position="absolute"
        sx={{
          bottom: { xs: "24px", sm: "100px", md: "24px" },
          right: { xs: "24px", sm: "50px", md: "-30px" },
        }}
        gap={2}
      >
        <Arrow isleft onClick={arrowLeftSide}>
          <ArrowForwardIosIcon sx={{ color: "black" }} />
        </Arrow>
        <Arrow onClick={arrowRightSide}>
          <ArrowForwardIosIcon style={{ color: "black" }} />
        </Arrow>
      </Stack>
    </Stack>
  );
};

export default memo(ProductImage);
