import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

//테스트 필요
export const getMyPage = async () => {
  const access = localStorage.getItem("access"); // localStorage에서 accessToken 받아오기

  try {
    const result = await axios.get("여기에 이미지 가져올 url 넣기", {
      headers: {
        Authorization: access,
      },
    });
    return result.data;
  } catch (error) {
    console.log("Error:", error);
    /*throw error; // 에러를 다시 던져서 상위 컴포넌트에서 처리할 수 있도록 함*/
  }
};

const Outside = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageData = await getMyPage();
        setImageUrl(imageData.url); // 이미지 데이터에서 실제 URL을 추출해야 함
      } catch (error) {
        console.error("Error fetching image:", error);
        // 에러 처리 로직 추가: 사용자에게 메시지 표시 또는 다른 조치
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="Outside">
      <h1>Outside</h1>
      <img
        className="snowman"
        src={process.env.PUBLIC_URL + imageUrl}
        alt="Snowman" //이미지를 불러오지 못했을 때 화면에 표시되는 텍스트
      />{" "}
      <ul>
        <li>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + `/assets/homeBtn.png`} />{" "}
          </Link>
        </li>
        <li>
          <Link to="/diary">
            <img src={process.env.PUBLIC_URL + `/assets/diaryBtn.png`} />{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Outside;
