import type { FC } from "react";
import { Stack } from "@mui/system";
import { categories } from "data";
import CategoryItem from "components/categoriesItem/CategoryItem";

const Categories: FC = () => {
  return (
    <Stack direction="column">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Stack>
  );
};

export default Categories;
