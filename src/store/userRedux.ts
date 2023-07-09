import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserPayloadAction, UserRedux } from "type";

interface IinitialState {
  currentUser: UserRedux | null;
  isFatching: boolean;
  error: boolean;
  accessToken?: string | null;
  errormessage: string | null;
}
const initialState: IinitialState = {
  currentUser: null,
  accessToken: null,
  isFatching: false,
  error: false,
  errormessage: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    Start: (state) => {
      state.isFatching = true;
      state.error = false;
      state.errormessage = null;
    },
    loginSuccess: (state, action: PayloadAction<UserPayloadAction>) => {
      const { accessToken, ...userDetail } = action.payload;
      state.isFatching = false;
      state.currentUser = userDetail;
      state.accessToken = accessToken;
      state.errormessage = null;
    },
    Failure: (state) => {
      state.isFatching = false;
      state.error = true;
      state.errormessage = null;
    },
    FailureLogin: (state, action: PayloadAction<string>) => {
      state.isFatching = false;
      state.error = true;
      state.errormessage = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.currentUser = null;
      state.isFatching = false;
      state.error = false;
      state.errormessage = null;
    },
    RefreshToken: (state, action) => {
      state.accessToken = action.payload;
      state.isFatching = false;
      state.error = false;
      state.errormessage = null;
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

export const {
  Start,
  loginSuccess,
  Failure,
  logout,
  SetFavorite,
  FailureLogin,
  RefreshToken,
} = userSlice.actions;
export default userSlice.reducer;
