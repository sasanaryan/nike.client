import type { FC } from "react";
import { Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import uuid from "react-uuid";

const ImageSkeleton: FC = () => {
  return (
    <Stack
      direction={{ xs: "column-reverse", md: "row", lg: "row" }}
      gap={2}
      flex="2.5"
      height="100%"
      margin={{ xl: "10px", sm: "0" }}
    >
      <Stack
        direction={{ xs: "row", md: "column", lg: "column" }}
        display={{ xs: "none", sm: "flex" }}
      >
        {Array(8)
          .fill(1)
          .map(() => (
            <Skeleton
              key={uuid()}
              variant="rectangular"
              sx={{
                width: "60px",
                height: "60px",
                margin: "4px",
                borderRadius: "5px",
              }}
            />
          ))}
      </Stack>
      <Skeleton
        variant="rectangular"
        sx={{
          width: "100%",
          height: { xs: "360px", sm: "871px", md: "748px", lg: "837px" },
        }}
      />
    </Stack>
  );
};

export default ImageSkeleton;
