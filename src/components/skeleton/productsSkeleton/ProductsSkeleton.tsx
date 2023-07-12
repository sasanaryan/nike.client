import { FC } from "react";
import { Grid, Skeleton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import uuid from "react-uuid";

interface ListSkeletonProp {
  listsToRender: number;
}

const ProductsSkeleton: FC<ListSkeletonProp> = ({ listsToRender }) => {
  return (
    <Grid container margin={{ xs: "0px", sm: "5px" }}>
      {Array(listsToRender)
        .fill(1)
        .map(() => (
          <Stack
            key={uuid()}
            direction="column"
            sx={{
              flexGrow: "0.5",
              width: { xs: "100%", sm: " 300px" },
              maxWidth: "500px",
              margin: "10px",
            }}
            gap={2}
          >
            <Skeleton variant="rectangular" width="100%" height={300} />
            <Box sx={{ pt: 1 }}>
              <Skeleton width="60%" />
              <Skeleton width="30%" />
              <Skeleton width="10%" />
            </Box>
          </Stack>
        ))}
    </Grid>
  );
};

export default ProductsSkeleton;
