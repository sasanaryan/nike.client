import axios from "axios";

const localURL = "http://localhost:8800/api/";

export const baseurl = axios.create({
  baseURL: localURL,
});

export const outhAxios = (accessToken?: string) =>
  accessToken
    ? axios.create({
        baseURL: localURL,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
    : axios.create({
        baseURL: localURL,
      });
