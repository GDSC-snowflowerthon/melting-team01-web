import axios from "axios";

export const postPlan = async (content) => {
  const access = localStorage.getItem("access"); // localStorage에서 accessToken 받아오기
  const memberId = localStorage.getItem("memberId"); // localStorage에서 memberId 받아오기

  //try {
  const result = await axios.post(
    `http://43.201.121.70:8080/diary/${memberId}/January`,
    {
      content,
    },
    {
      headers: {
        Authorization: "Bearer " + access,
      },
    }
  );
  return result.data;
};
