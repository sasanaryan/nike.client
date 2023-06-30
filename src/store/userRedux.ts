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
    SetFavorite: (state, action: PayloadAction<string>) => {
      if (state.currentUser !== null) {
        state.currentUser?.favorites?.includes(action.payload)
          ? (state.currentUser.favorites = state.currentUser?.favorites?.filter(
              (i) => i !== action.payload
            ))
          : state.currentUser?.favorites?.push(action.payload);
      }
    },
  },
});

export const { Start, loginSuccess, Failure, logout, SetFavorite } =
  userSlice.actions;
export default userSlice.reducer;
