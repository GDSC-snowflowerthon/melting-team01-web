import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getImage } from "../apis/getImage";

const Outside = () => {
  const memberId = localStorage.getItem("memberId"); // localStorage에서 memberId 받아오기

  const [data, setData] = useState();
  useEffect(() => {
    getImage().then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  /*
  const getImage = async () => {
    const data = data?.contnet?.items;
    console.log(data);
    await getImage(data);
  };
  */

  /*
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

  */
  return (
    <div className="Outside">
      <h1>Outside</h1>
      {/*
      <img
        className="snowman"
        src={process.env.PUBLIC_URL + snowmanImage}
        alt="Snowman" //이미지를 불러오지 못했을 때 화면에 표시되는 텍스트
      />{" "}
  */}
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
