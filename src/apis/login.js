import axios from "axios";
export const login = async (memberId, password) => {
  const result = await axios.post("http://43.201.121.70:8080/members/login", {
    memberId,
    password,
  });
  return result.data.data;
  // 마지막의 data는 백엔드에서 응답 성공시 반환하는 항목. 백엔드에서 정한이름 따라가기 일단 영상 기준으로 함
};
