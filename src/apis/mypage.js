import axios from "axios";

export const getMyPage = async () => {
  const access = localStorage.getItem("access");
  const result = await axios.get("http://43.201.121.70:8080/snowflakes", {
    headers: {
      Authorization: access,
    },
  });
  return result.data;
};
