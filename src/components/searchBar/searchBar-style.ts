import { mobile, tablet } from "theme";
import styled from "@emotion/styled";

type ModelProp = {
  openSearchBar?: boolean;
};
export const Model = styled.div<ModelProp>`
  ${({ openSearchBar }) =>
    openSearchBar &&
    `
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);`};
`;

type ContainerProp = {
  openSearchBar?: boolean;
};
export const Container = styled.div<ContainerProp>`
  ${({ openSearchBar }) =>
    openSearchBar
      ? `
    position: fixed;
    background-color: #ffffff;
    width: 100%;
    top: 40px;
    transition: transform 0.3s ease-in-out ;
    transform: translateY(-40px);
    gap:20px;
    padding: 0px 30px 0px 30px;
    `
      : `
    position:relative;
    `};
  ${mobile({ top: "0px", transform: "translateY(0px)" })}
  ${tablet({ top: "0px", transform: "translateY(0px)" })}
    
    display: flex;
  direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  height: 70px;
`;

type WrapperProp = {
  openSearchBar?: boolean;
};
export const Wrapper = styled.div<WrapperProp>`
    position: relative;
    display:table
    
    hight: 52px;
    min-hight: 52px;
    max-hight: 52px;
    border-radius: 26px;
    padding:10px;
  
    width: ${({ openSearchBar }) => (openSearchBar ? "90%" : "200px")};
     ${({ openSearchBar }) =>
       tablet(
         `width: ${openSearchBar ? "90%" : "52px"};  padding: ${
           openSearchBar ? "17px" : "16px"
         };  hight: 52px; `
       )};
     ${({ openSearchBar }) =>
       mobile(
         `width: ${openSearchBar ? "90%" : "52px"};  padding: ${
           openSearchBar ? "17px" : "16px"
         };    hight:"52"; `
       )};
    transition: width 0.5s ease-out ;
    
    background-color: #f7f7f7;
  `;

type ClearProp = {
  openSearchBar?: boolean;
};
export const Clear = styled.div<ClearProp>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 10px;
  top: 0px;
  display: ${({ openSearchBar }) => (openSearchBar ? "flex" : "none")};
  margin-right: 5px;
  cursor: pointer;
  width: 52px;
  height: 52px;
`;

type SearchIconProp = {
  openSearchBar?: boolean;
};
export const SearchIcon = styled.div<SearchIconProp>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 26px;
  left: 0px;
  top: 0px;
  margin-right: 5px;
  cursor: pointer;
  width: 52px;
  height: 52px;
  background-color: #f7f7f7;
  ${({ openSearchBar }) =>
    tablet(`background-color: ${openSearchBar ? "#f7f7f7" : "#ffffff"};   `)};
  ${({ openSearchBar }) =>
    mobile(`background-color: ${openSearchBar ? "#f7f7f7" : "#ffffff"};   `)};
  &:hover:focus {
    background-color: #cccccc;
  }
`;

type InputProp = {
  openSearchBar?: boolean;
};
export const Input = styled.input<InputProp>`
  background-color: #f7f7f7;
  width: 100%;
  padding: 8px 15px 8px 43px;
  display: table-cell;
  ${({ openSearchBar }) =>
    mobile(`padding: ${openSearchBar ? "0px 15px 0px 35px" : "0px"};`)};
  ${({ openSearchBar }) =>
    tablet(`padding: ${openSearchBar ? "0px 15px 0px 35px" : "0px"};`)};
  &:focus {
    outline: none;
  }
`;
type NikeItemProp = {
  openSearchBar?: boolean;
};
export const NikeItem = styled.div<NikeItemProp>`
  ${({ openSearchBar }) =>
    openSearchBar
      ? `
  display: flex;
  
  `
      : `
  display: none;
  `};
  ${mobile({ display: "none" })};
  ${tablet({ display: "none" })};
`;

type CancleProp = {
  openSearchBar?: boolean;
};
export const Cancle = styled.div<CancleProp>`
  ${({ openSearchBar }) =>
    openSearchBar
      ? `
  display: flex;
  cursor: pointer;
  `
      : `
  display: none;
  
  
  
  `};
`;

export const Logo = styled.img`
  margin: 0px 5px 0px 5px;
  position: relative;
  top: 0px;
  height: 20px;
  font-weight: bold;
`;
