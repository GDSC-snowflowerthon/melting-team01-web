import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getImage } from "../apis/getImage";

const Outside = () => {
  const [imageData, setImageData] = useState(null);
  let snowmanImage = null;

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageData = await getImage(); //이게 이미지에 해당하는 숫자..?
        setImageData(imageData);
      } catch (error) {
        console.error("Error fetching image:", error);
        // 에러 처리 로직 추가: 사용자에게 메시지 표시 또는 다른 조치
      }
    };

    fetchImage();
  }, []);

  switch (imageData) {
    case 1:
      snowmanImage = `/assets/snowman1.png`;
      break;
    case 2:
      snowmanImage = `/assets/snowman2.png`;
      break;
    case 3:
      snowmanImage = `/assets/snowman3.png`;
      break;
    case 4:
      snowmanImage = `/assets/snowman4.png`;
      break;
    case 5:
      snowmanImage = `/assets/snowman5.png`;
      break;
    case 6:
      snowmanImage = `/assets/snowman6.png`;
      break;
    case 7:
      snowmanImage = `/assets/snowman7.png`;
      break;
    case 8:
      snowmanImage = `/assets/snowman8.png`;
      break;
    case 9:
      snowmanImage = `/assets/snowman9.png`;
      break;
    case 10:
      snowmanImage = `/assets/snowman10.png`;
      break;
    case 11:
      snowmanImage = `/assets/snowman11.png`;
      break;
  }

  return (
    <div className="Outside">
      <h1>Outside</h1>
      <img
        className="snowman"
        src={process.env.PUBLIC_URL + snowmanImage}
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
