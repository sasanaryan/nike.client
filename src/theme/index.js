import { css } from "styled-components";
import { createTheme } from "@mui/material/styles";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 426px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 770px) and (min-width: 427px) {
      ${props}
    }
  `;
};

const theme = createTheme({
  typography: {
    fontFamily: [
      "Manrope",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#111111",
      light: "#ffffff",
      dark: "#111111",
    },
    secondary: {
      main: "#e5e5e5",
      dark: "#cccccc",
      darker: "#0d0d0d",
    },
    textColors: {
      blackFade: "#111111",
      whiteFade: "#ffffff",
      gray: "#7a7a7d",
    },
    backgroundColors: {
      dark: "#111111",
      light: "#ffffff",
      gray: "#7a7a7d",
    },
  },
});
export default theme;
