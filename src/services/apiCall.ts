import { Start, loginSuccess, Failure, logout } from "store/userRedux";
import { baseurl } from "config";
import { Dispatch } from "redux";
import { AppDispatch } from "store/store";
import { UserRedux } from "type";

export const login = async (dispatch: AppDispatch, user: UserRedux) => {
  dispatch(Start());
  try {
    const res = await baseurl.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(Failure());
  }
};
export const registerUser = async (dispatch: Dispatch, user: UserRedux) => {
  dispatch(Start());
  try {
    const res = await baseurl.post("/auth/register", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(Failure());
  }
};

export const LogOut = async (dispatch: Dispatch, refreshToken: string) => {
  const config = {
    data: {
      refreshToken: refreshToken,
    },
  };

  dispatch(Start());
  try {
    const res = await baseurl.delete("/refreshtoken", config);
    dispatch(logout());
  } catch (err) {
    dispatch(Failure());
  }
};
