import { Grid, Skeleton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { FC } from "react";

const ProductInfoSkeleton: FC = () => {
  return (
    <Stack>
      <Skeleton width="180px" height="40px" />
      <Skeleton width="110px" height="25px" />
      <Skeleton width="35px" height="20px" />
      <Skeleton variant="rectangular" width="110px" height="110px" />
    </Stack>
  );
};

export default ProductInfoSkeleton;
