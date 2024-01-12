import axios from "axios";

export const getImage = async () => {
  const access = localStorage.getItem("access"); // localStorage에서 accessToken 받아오기
  const memberId = localStorage.getItem("memberId"); // localStorage에서 memberId 받아오기

  const result = await axios.get(
    `http://43.201.121.70:8080/snowman/${memberId}`,
    {
      headers: {
        Authorization: "Bearer " + access,
      },
    }
  );
  return result.data;
};
