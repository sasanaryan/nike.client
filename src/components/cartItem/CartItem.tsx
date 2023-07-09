import { useState } from "react";
import type { FC } from "react";
import { CartProduct } from "type";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { Checkbox, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { useAppDispatch, useAppSelector } from "store/store";
import {
  changeProductQuality,
  changeProductSize,
  removeItemFromCart,
} from "store/cartRedux";
import useFavorite from "feature/useFavorite";
import { mobile } from "theme";
import ChangeSelect from "components/cartItem/ChangeSelect";
import useStatus from "feature/useStatus";

const Image = styled.img`
  width: 170px;
  height: 180px;
  object-fit: cover;
  ${mobile({ width: "110px", height: "120px" })}
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;
const existedQuality = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type EventSelect = React.ChangeEvent<HTMLSelectElement>;

interface CardItemProp {
  product: CartProduct;
}

const CartItem: FC<CardItemProp> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    product.selectedSize
  );
  const [selectedQuality, setSelectedQuality] = useState<string>(
    product.quality
  );

  const { isLiked, favoriteHandler } = useFavorite(product._id);
  const { cartStatus, favoriteStatus } = useStatus();
  const id = product.orderedProductId;
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const handleSizeChange = (event: EventSelect) => {
    const size = event.target.value;
    setSelectedSize(size as string);
    dispatch(changeProductSize({ id, size }));
  };

  const handleQualityChange = (event: EventSelect) => {
    const quality = event.target.value;
    setSelectedQuality(quality as string);
    dispatch(changeProductQuality({ id, quality }));
  };

  const handleRemove = () => {
    dispatch(removeItemFromCart({ id, selectedSize }));
    cartStatus(product.title, "remove");
  };

  const handleFavorite = () => {
    if (currentUser) {
      favoriteHandler();
      favoriteStatus(product, isLiked);
    } else {
      navigate("/login");
    }
  };

  return (
    <Stack
      direction="column"
      margin={{ xs: "15px 0 10px 0", md: "15px 10px 10px 10px", lg: "15px" }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" gap={{ xs: 0, md: 2, lg: 5 }}>
          <StyledLink to={`/product/${product._id}`}>
            <Image src={product.img[0]} />
          </StyledLink>
          <Stack direction="column" margin="10px" gap={1}>
            <Stack direction="row" gap={2}>
              <StyledLink to={`/product/${product._id}`}>
                <Typography fontWeight="600">{product.title}</Typography>
              </StyledLink>
              <Typography fontWeight="500" display={{ xs: "flex", sm: "none" }}>
                {product.price}$
              </Typography>
            </Stack>
            <Typography color="gray">{product.gender} Shoes</Typography>
            <Typography color="gray">blue</Typography>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography color="gray">Size</Typography>
              <ChangeSelect
                selectedValue={selectedSize}
                handleChange={handleSizeChange}
                existedValue={product.existedSize}
              />
              <Typography color="gray">Quality</Typography>
              <ChangeSelect
                selectedValue={selectedQuality}
                handleChange={handleQualityChange}
                existedValue={existedQuality}
              />
            </Stack>
            <Stack direction="row" marginTop="10px">
              <IconButton size="medium" onClick={handleRemove}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
              <IconButton onClick={handleFavorite}>
                <Checkbox
                  checked={isLiked}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "black" }} />}
                />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Typography fontWeight="500" display={{ xs: "none", sm: "flex" }}>
          {product.price}$
        </Typography>
      </Stack>
      <Typography>Free Pick-up</Typography>
      <Typography
        sx={{ textDecoration: "underline", textDecorationThickness: "2px" }}
      >
        Find a Store
      </Typography>
    </Stack>
  );
};

export default CartItem;
