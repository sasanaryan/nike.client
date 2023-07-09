import { Dispatch } from "redux";
import axios from "axios";
import {
  Start,
  loginSuccess,
  Failure,
  logout,
  FailureLogin,
} from "store/userRedux";
import { baseurl } from "config";
import { AppDispatch } from "store/store";
import { userLogin, userRegister } from "type";

export const login = async (dispatch: AppDispatch, user: userLogin) => {
  dispatch(Start());
  try {
    const res = await baseurl.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    if (axios.isAxiosError(err)) {
      dispatch(FailureLogin(err?.response?.data.title));
    } else {
      dispatch(Failure());
    }
  }
};

export const registerUser = async (dispatch: Dispatch, user: userRegister) => {
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
