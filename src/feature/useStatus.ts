import { useContext } from "react";
import { StatusContext } from "context/StatusProvider";

const useStatus = () => {
  const {
    state,
    openSnackbar,
    setOpenSnackbar,
    favoriteStatus,
    purchasedStatus,
    cartStatus,
  } = useContext(StatusContext);
  return {
    state,
    openSnackbar,
    setOpenSnackbar,
    favoriteStatus,
    purchasedStatus,
    cartStatus,
  };
};
export default useStatus;
