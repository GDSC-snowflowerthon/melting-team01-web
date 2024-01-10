import axios from "axios";

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem("access");
  const refreshToken = localStorage.getItem("refresh"); //refresh api가 필요함..?
  const result = await axios.post(
    "http://43.201.121.70:8080/members/refresh",
    {
      refreshToken,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return result.data;
};
