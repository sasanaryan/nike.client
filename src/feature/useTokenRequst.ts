import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "store/store";
import { logout, RefreshToken } from "store/userRedux";
import { useNavigate } from "react-router-dom";

interface MyToken {
  name: string;
  exp: number;
}
const Url = process.env.REACT_APP_API_URL;

const useTokenRequst = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const axiosInstance = axios.create({
    baseURL: Url,
    headers: { Authorization: `Bearer ${user?.accessToken}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    req.headers.Authorization = `Bearer ${user?.accessToken!}`;
    const userToken: MyToken = jwt_decode(user?.accessToken!);
    const isExpired = dayjs.unix(userToken.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;
    try {
      const response = await axios.post(`${Url}/refreshtoken`, {
        refreshToken: user?.currentUser?.refreshToken,
      });
      const newAccessToken = response.data.accessToken;
      dispatch(RefreshToken(newAccessToken));
      req.headers.Authorization = `Bearer ${newAccessToken}`;
      return req;
    } catch (err) {
      navigate("/login");
      dispatch(logout());
      req.headers.Authorization = null;
      return req;
    }
  });

  return axiosInstance;
};

export default useTokenRequst;
