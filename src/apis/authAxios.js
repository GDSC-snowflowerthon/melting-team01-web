import axios from "axios";
import { getNewRefreshToken } from "./refresh";

export const getAuthAxios = (token) => {
  const authAxios = axios.create({
    baseURL: "http://43.201.121.70:8080",
    headers: {
      Authorization: token,
    },
  });
  authAxios.interceptors.response.use(
    (res) => res,
    async (error) => {
      if (error.response.statusCode === 401) {
        //status와 401은 백엔드에서 정하기 나름
        //토큰이 만료된 경우
        const { accessToken, refreshToken } = await getNewRefreshToken(); //getNewRefreshToken은 refresh.js에 정의
        error.config.headers.Authorization = accessToken;
        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);
        return (await axios.get(error.config.url, error.config)).data;
      }
    }
  );
  return authAxios;
};
