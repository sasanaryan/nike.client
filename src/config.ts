import axios from "axios";

const Url = process.env.REACT_APP_API_URL;
export const baseurl = axios.create({
  baseURL: Url,
});
