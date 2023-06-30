import { useState } from "react";
import type { FC } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Mockproducts } from "data";
import { mobile, tablet } from "theme";
import Navbar from "components/navbar";
import Footer from "components/footer/Footer";
import NormalButton from "components/button";
import SizeGuide from "pages/product/SizeGuide";
import ProductImage from "pages/product/ProductImage";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  vertical-align: top;
  margin: 0px auto 40px;
  max-width: 1100px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
  ${tablet({ padding: "15px", flexDirection: "column" })}
`;

type Iimage = {
  showcase?: boolean;
};
export const ImageShowCase = styled.img<Iimage>`
  width: 110px;
  height: 110px;
  object-fit: cover;
  margin: 10px 0 10px;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Product: FC = () => {
  const example = Mockproducts[0];
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const [notSelected, setNotselected] = useState(false);

  const favoritHandler = () => {};

  const handelAddToCart = () => {};

  const sizeHandle = (e: React.FormEvent<HTMLDivElement>, size: number) => {
    e.preventDefault();
    setSelectedSize(size);
    setNotselected(false);
  };

  return (
    <>
      <Navbar />
      <>
        <Wrapper>
          <ProductImage images={example.img} />
          <InfoContainer>
            <Typography variant="h5" sx={{ fontWeight: "medium" }}>
              {example.title}
            </Typography>
            <Typography>{example.gender}'s shoe</Typography>
            <Typography>$ {example.price}</Typography>
            <ImageShowCase src={example.img[0]} />
            <SizeGuide
              handelChange={sizeHandle}
              sizeSelected={selectedSize}
              sizeExisted={example.existedSize}
              notSelected={notSelected}
            />
            <NormalButton onClick={handelAddToCart}>
              <Typography>Add to Bage</Typography>
            </NormalButton>
            <NormalButton whiteBg onClick={favoritHandler}>
              <Checkbox
                checked={true}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "black" }} />}
              />
              <Typography>Favorite</Typography>
            </NormalButton>
            <Typography sx={{ marginTop: "15px" }}>{example.desc}</Typography>
          </InfoContainer>
        </Wrapper>
      </>
      <Footer />
    </>
  );
};

export default Product;
