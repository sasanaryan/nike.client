import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import useStatus from "feature/useStatus";
import { Typography } from "@mui/material";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Snackbars = () => {
  const { state, setOpenSnackbar, openSnackbar } = useStatus();
  const severityAt = state?.severityAt;
  const message = state?.snackbarMassege;
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={severityAt} sx={{ width: "100%" }}>
        <Typography>{message}</Typography>
      </Alert>
    </Snackbar>
  );
};

export default Snackbars;
