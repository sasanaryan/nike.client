import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import type { FC } from "react";
import styled from "@emotion/styled";
import { FetchedProduct } from "type";
import ProductInfoSkeleton from "components/skeleton/productInfoSkeleton";
export const ImageShowCase = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  margin: 10px 0 10px;
`;
interface ProductInfoProp {
  product: FetchedProduct;
  loading: boolean;
}

const ProductInfo: FC<ProductInfoProp> = ({ product, loading }) => {
  return (
    <>
      {loading ? (
        <ProductInfoSkeleton />
      ) : (
        <Stack>
          <Typography
            variant="h5"
            sx={{ fontWeight: "medium", marginTop: "10px" }}
          >
            {product.title}
          </Typography>
          <Typography>{product.gender}'s shoe</Typography>
          <Typography>$ {product.price}</Typography>

          <ImageShowCase src={product.img[0]} />
        </Stack>
      )}
    </>
  );
};

export default ProductInfo;
