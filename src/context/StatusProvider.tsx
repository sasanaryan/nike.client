import React, { useState, useCallback } from "react";
import type { FC } from "react";
import { CartProduct } from "type";
import { FetchedProduct } from "type";

type product = CartProduct | FetchedProduct;

interface statusStateType {
  snackbarMassege: string;
  severityAt?: "error" | "warning" | "info" | "success";
}
const initialStatusState: statusStateType = {
  snackbarMassege: "",
  severityAt: "error",
};
export const StatusContext = React.createContext({
  state: initialStatusState,
  openSnackbar: false,
  setOpenSnackbar: (p: boolean) => {},
  favoriteStatus: (product: product, isLiked: boolean) => {},
  purchasedStatus: () => {},
  cartStatus: (productName: string, payload: string) => {},
});

interface statusProviderProp {
  children: string | JSX.Element | JSX.Element[];
}

const StatusProvider: FC<statusProviderProp> = ({ children }) => {
  const [statusState, setStatusState] = useState(initialStatusState);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const favoriteStatus = (product: product, isLiked: boolean) => {
    setOpenSnackbar(true);
    if (isLiked) {
      setStatusState((existingValues) => ({
        ...existingValues,
        snackbarMassege: `${product.title} remove from your Favorites`,
        severityAt: "warning",
      }));
    } else {
      setStatusState((existingValues) => ({
        ...existingValues,
        snackbarMassege: `${product.title} add to your Favorites`,
        severityAt: "info",
      }));
    }
  };

  const purchasedStatus = () => {
    setOpenSnackbar(true);
    setStatusState((existingValues) => ({
      ...existingValues,
      snackbarMassege: `Shoes Were Purchased SuccessFully`,
      severityAt: "success",
    }));
  };

  const cartStatus = (productName: string, payload: string) => {
    if (payload === "Add") {
      setOpenSnackbar(true);
      setStatusState((existingValues) => ({
        ...existingValues,
        snackbarMassege: `${productName} add to cart`,
        severityAt: "success",
      }));
    } else {
      setOpenSnackbar(true);
      setStatusState((existingValues) => ({
        ...existingValues,
        snackbarMassege: `${productName} remove from your cart`,
        severityAt: "warning",
      }));
    }
  };

  const contextValue = {
    state: statusState,
    openSnackbar: openSnackbar,
    setOpenSnackbar: setOpenSnackbar,
    favoriteStatus: useCallback(
      (product: product, isLiked: boolean) => favoriteStatus(product, isLiked),
      []
    ),
    purchasedStatus: useCallback(() => purchasedStatus(), []),
    cartStatus: useCallback(
      (productName: string, payload: string) =>
        cartStatus(productName, payload),
      []
    ),
  };
  return (
    <StatusContext.Provider value={contextValue}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;
