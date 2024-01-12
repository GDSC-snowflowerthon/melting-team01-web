import axios from "axios";

export const signup = async (memberId, password, name) => {
  // 추후 이름 입력 추가 시, 변수에 name추가
  const result = await axios.post("http://43.201.121.70:8080/members/join", {
    memberId,
    password,
    name,
  });
  return result.data;
};
