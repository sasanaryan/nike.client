import Products from "components/products/Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import styled from "@emotion/styled/macro";
import { mobile, tablet } from "theme";

import Navbar from "components/navbar";
import Footer from "components/footer/Footer";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
  ${mobile({ margin: "10px 0px" })}
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  flexdirection: row;
  margin: 15px;
  ${tablet({ width: "0px 20px", display: "flex", flexDirection: "column" })}
  ${mobile({ margin: "5px" })}
`;
const Price = styled.div`
  flex: 2;
  margin: 20px;
  ${mobile({ display: "flex", width: "85%", margin: "5px" })}
  ${tablet({ margin: "10px" })}
`;

type selectevent = React.ChangeEvent<HTMLSelectElement>;
type gendetstste = string;
type sortstate = string;

const ProductList = () => {
  const location = useLocation();

  const cat = location.pathname.split("/")[2];
  const searchWord = location.state?.searchWord;
  const [gender, setGender] = useState<gendetstste>("No gender");
  const [range, setRange] = useState<number[]>([50, 200]);
  const [sort, setSort] = useState<sortstate>("newest");
  const handleChange = (event: Event, newValue: number | number[]) => {
    setRange(newValue as number[]);
  };
  function valuetext(value: number) {
    return `${value}`;
  }

  return (
    <>
      <Navbar />
      <Stack direction="column">
        <Typography
          sx={{
            justifyContent: "center",
            textAlign: "center",
            margin: "15px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          {searchWord ? `Result for:  ${searchWord} ` : cat}
        </Typography>

        <Stack
          direction={{ sm: "row", xs: "column" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <SelectContainer>
            <Typography fontWeight="bold">Filter Gender:</Typography>
            <Select
              name="gender"
              onChange={(e: selectevent) => setGender(e.target.value)}
            >
              <option value="No gender">No gender</option>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
            </Select>
          </SelectContainer>
          <Price>
            <Slider
              getAriaLabel={() => "Temperature range"}
              min={50}
              max={200}
              value={range}
              marks={customMarks}
              step={5}
              getAriaValueText={valuetext}
              onChange={handleChange}
              valueLabelDisplay="auto"
              color="secondary"
            />
          </Price>
          <SelectContainer>
            <Typography fontWeight="bold">Sort Products:</Typography>
            <Select onChange={(e: selectevent) => setSort(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </Select>
          </SelectContainer>
        </Stack>
        <Products
          gender={gender}
          range={range}
          cat={cat}
          sort={sort}
          searchWord={searchWord}
        />
      </Stack>
      <Footer />
    </>
  );
};

export default ProductList;

const customMarks = [
  {
    value: 50,
    label: "50 $",
  },
  {
    value: 100,
    label: "100 $",
  },
  {
    value: 150,
    label: "150 $",
  },
  {
    value: 200,
    label: "200 $",
  },
];
