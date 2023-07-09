import { useEffect, useState } from "react";
import type { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Mockproducts } from "data";
import { mobile, tablet } from "theme";
import uuid from "react-uuid";
import Navbar from "components/navbar";
import Footer from "components/footer/Footer";
import NormalButton from "components/button";
import SizeGuide from "pages/product/SizeGuide";
import ProductImage from "pages/product/ProductImage";
import { baseurl } from "config";
import { useAppDispatch, useAppSelector } from "store/store";
import { FetchedProduct } from "type";
import { addProduct } from "store/cartRedux";
import useFavorite from "feature/useFavorite";
import { Stack } from "@mui/system";
import ProductInfo from "./ProductInfo";
import useStatus from "feature/useStatus";
import ImageSkeleton from "components/skeleton/imageSkeleton";
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  vertical-align: top;
  margin: 15px auto 40px;
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
  order: 3;
  ${mobile({ padding: "10px" })}
`;

const initialProduct = {
  _id: "1",
  title: "",
  desc: "",
  img: ["", ""],
  categories: "",
  gender: "",
  price: 1,
  existedSize: [5, 6],
};

const Product: FC = () => {
  const example = Mockproducts[0];
  const [product, setProduct] = useState<FetchedProduct>(initialProduct);
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const [notSelected, setNotselected] = useState(false);
  const [loading, setLoading] = useState(true);
  const { isLiked, favoriteHandler } = useFavorite(product._id);
  const { cartStatus, favoriteStatus } = useStatus();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const quality = "1";

  const user = useAppSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await baseurl.get(`products/find/` + id);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [id]);

  const favoritHandler = () => {
    if (user) {
      favoriteHandler();
      favoriteStatus(product, isLiked);
    } else {
      navigate("/login");
    }
  };

  const handelAddToCart = () => {
    if (selectedSize !== 0) {
      const orderedProductId = uuid();
      dispatch(
        addProduct({ ...product, selectedSize, quality, orderedProductId })
      );
      cartStatus(product.title, "Add");
    } else {
      setNotselected(true);
    }
  };

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
          <Stack sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
            <ProductInfo product={product} loading={loading} />
          </Stack>
          {loading ? <ImageSkeleton /> : <ProductImage images={product?.img} />}
          <InfoContainer>
            <Stack sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
              <ProductInfo product={product} loading={loading} />
            </Stack>
            <SizeGuide
              handelChange={sizeHandle}
              sizeSelected={selectedSize}
              sizeExisted={product.existedSize}
              notSelected={notSelected}
            />
            <NormalButton onClick={handelAddToCart}>
              <Typography>Add to Bage</Typography>
            </NormalButton>
            <NormalButton whiteBg onClick={favoritHandler}>
              <Checkbox
                checked={isLiked}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "black" }} />}
              />
              <Typography>Favorite</Typography>
            </NormalButton>
            <Typography sx={{ marginTop: "15px" }}>{product.desc}</Typography>
          </InfoContainer>
        </Wrapper>
      </>
      <Footer />
    </>
  );
};

export default Product;
