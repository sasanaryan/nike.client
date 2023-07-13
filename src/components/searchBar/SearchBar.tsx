import React, { useRef, useState, memo } from "react";
import type { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Stack } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { icons } from "data";
import ResultSearch from "components/resulSearch";
import {
  Model,
  Container,
  Wrapper,
  Clear,
  SearchIcon,
  Input,
  NikeItem,
  Cancle,
  Logo,
} from "components/searchBar/searchBar-style";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;

type eventOnChange = React.ChangeEvent<HTMLInputElement>;
type eventOnClick = React.KeyboardEvent<HTMLDivElement>;

interface SearchBarProp {
  setOpenSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  openSearchBar: boolean;
}
const SearchBar: FC<SearchBarProp> = ({ setOpenSearchBar, openSearchBar }) => {
  const [searchWord, setSearchWord] = useState<string>("");
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setOpenSearchBar(true);
    ref?.current?.focus();
  };
  function handleChange(event: eventOnChange) {
    setSearchWord(event.target.value);

    setOpenSearchBar(true);
  }
  const reset = () => {
    setSearchWord("");
  };
  const handleKeyDown = (event: eventOnClick) => {
    if (event.key === "Enter") {
      console.log("enter clicked");
      navigate("/products", {
        state: {
          searchWord: searchWord,
        },
      });
      setOpenSearchBar(false);
      reset();
      ref?.current?.blur();
    }
  };

  const HandleCancele = () => {
    setSearchWord("");
    setOpenSearchBar(false);
  };

  return (
    <Model openSearchBar={openSearchBar}>
      <Container openSearchBar={openSearchBar}>
        <NikeItem openSearchBar={openSearchBar}>
          <StyledLink to="/">
            <Logo src={icons.logo} />
          </StyledLink>
        </NikeItem>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          gap={3}
          sx={{ flexGrow: 1 }}
        >
          <Wrapper openSearchBar={openSearchBar}>
            <SearchIcon openSearchBar={openSearchBar} onClick={handleClick}>
              <Search />
            </SearchIcon>

            <Input
              type="text"
              value={searchWord}
              placeholder="Search"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              openSearchBar={openSearchBar}
              ref={ref}
            />

            <Clear openSearchBar={openSearchBar} onClick={reset}>
              <CloseIcon />
            </Clear>
          </Wrapper>
          <Cancle openSearchBar={openSearchBar} onClick={HandleCancele}>
            <Typography fontWeight="500">Cancle</Typography>
          </Cancle>
        </Stack>
        <ResultSearch searchWord={searchWord} openSearchBar={openSearchBar} />
      </Container>
    </Model>
  );
};

export default memo(SearchBar);
