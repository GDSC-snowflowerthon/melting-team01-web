import axios from "axios";
export const login = async (memberId, password) => {
  const result = await axios.post("http://43.201.121.70:8080/members/login", {
    memberId,
    password,
  });
  return result.data.content;
};
