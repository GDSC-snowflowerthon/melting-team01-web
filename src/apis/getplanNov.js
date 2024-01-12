import axios from "axios";

export const getPlan = async () => {
  const access = localStorage.getItem("access"); // localStorage에서 accessToken 받아오기
  const memberId = localStorage.getItem("memberId"); // localStorage에서 memberId 받아오기
  // 토큰이 존재하는지 확인
  if (!access) {
    // 토큰이 없으면 처리할 로직을 여기에 추가
    console.error("토큰이 존재하지 않습니다.");
    return null; // 또는 다른 적절한 처리를 수행하세요.
  }

  try {
    // 토큰이 존재하는 경우에만 요청 보내기
    const result = await axios.get(
      `http://43.201.121.70:8080/diary/${memberId}/November`,
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
    return result.data;
  } catch (error) {
    console.error("get 실패", error);
  }
};
