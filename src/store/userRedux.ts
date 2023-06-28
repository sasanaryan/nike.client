import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRedux } from "type";

interface IinitialState {
  currentUser: UserRedux | null;
  isFatching: boolean;
  error: boolean;
}
const initialState: IinitialState = {
  currentUser: null,
  isFatching: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    Start: (state) => {
      state.isFatching = true;
      state.error = false;
    },
    loginSuccess: (state, action: PayloadAction<UserRedux>) => {
      state.isFatching = false;
      state.currentUser = action.payload;
    },
    Failure: (state) => {
      state.isFatching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFatching = false;
      state.error = false;
    },
  },
});

export const { Start, loginSuccess, Failure, logout } = userSlice.actions;
export default userSlice.reducer;
