import type { FC } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Routes from "./route";
import StatusProvider from "context/StatusProvider";
import Snackbars from "components/alert";

const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusProvider>
          <Routes />
          <Snackbars />
        </StatusProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
