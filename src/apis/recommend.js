import axios from "axios";

export const recommend = async (content) => {
  const memberId = localStorage.getItem("memberId"); // localStorage에서 memberId 받아오기
  const result = await axios.post(
    `http://43.201.121.70:8080/snowflakes/${memberId}`, // ${memberId} 삽입하기
    {
      content,
    }
  );
  return result.data;
};
