import axios from "axios";

export const postId = async (grade) => {
  const access = localStorage.getItem("access"); // localStorage에서 accessToken 받아오기
  const memberId = localStorage.getItem("memberId"); // localStorage에서 memberId 받아오기

  try {
    const result = await axios.post(
      `http://43.201.121.70:8080/diary/${memberId}/January`,
      {
        grade,
      }
    );
    return result.data;
  } catch (error) {
    // 요청이 실패한 경우에 대한 처리
    if (error.response.statusCode === 400) {
      // 토큰이 만료된 경우
      console.log("토큰 만료");
    }
  }
};
