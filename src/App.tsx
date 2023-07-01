import type { FC } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Routes from "./route";

const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
