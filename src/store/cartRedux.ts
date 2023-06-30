import { createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "type";

type cartslicetype = {
  products: CartProduct[];
  quantity: number;
  total: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state: cartslicetype, action) => {
      const existedProduct = state.products.find(
        (i) =>
          i.orderedProductId === action.payload.id &&
          i.selectedSize === action.payload.selectedSize
      );
      if (!existedProduct) {
        state.products.push(action.payload);
        state.quantity += 1;
        state.total += action.payload.price;
      }
    },
    removeItemFromCart: (state: cartslicetype, action) => {
      const removedProduct = state.products.find(
        (i) => i.orderedProductId === action.payload.id
      );
      if (removedProduct) {
        state.products = state.products.filter(
          (i) => i.orderedProductId !== removedProduct.orderedProductId
        );
        state.quantity -= 1;
        state.total -= removedProduct.price;
      }
    },
    changeProductSize: (state: cartslicetype, action) => {
      const changedProduct = state.products.find(
        (i) => i.orderedProductId === action.payload.id
      );
      if (changedProduct) {
        changedProduct.selectedSize = action.payload.size;
      }
    },
    changeProductQuality: (state: cartslicetype, action) => {
      const changedProduct = state.products.find(
        (i) => i.orderedProductId === action.payload.id
      );
      if (changedProduct) {
        changedProduct.quality = action.payload.quality;
      }
    },
  },
});

export const {
  addProduct,
  removeItemFromCart,
  changeProductSize,
  changeProductQuality,
} = cartSlice.actions;
export default cartSlice.reducer;
