import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getImage } from "../apis/getImage";

const Outside = () => {
  /*
  const memberId = localStorage.getItem("memberId"); // localStorage에서 memberId 받아오기

  const [data, setData] = useState();
  const [imageSrc, setImageSrc] = useState(""); // 수정된 부분

  useEffect(() => {
    getImage().then((data) => {
      console.log(data);
      const snowmanGrade = data?.content?.items[0]?.snowmanGrade;
      console.log(snowmanGrade);

      const imagePath = getSnowmanImage(snowmanGrade);
      setImageSrc(imagePath); // 수정된 부분
      setData(data);
    });
  }, []);

  const getSnowmanImage = (grade) => {
    switch (grade) {
      case 1:
        return `/assets/snowman1.png`;
      case 2:
        return `/assets/snowman2.png`;
      case 3:
        return `/assets/snowman3.png`;
      case 4:
        return `/assets/snowman4.png`;
      case 5:
        return `/assets/snowman5.png`;
      case 6:
        return `/assets/snowman6.png`;
      case 7:
        return `/assets/snowman7.png`;
      case 8:
        return `/assets/snowman8.png`;
      case 9:
        return `/assets/snowman9.png`;
      case 10:
        return `/assets/snowman10.png`;
      case 11:
        return `/assets/snowman11.png`;
      default:
        return ""; // Handle default case if necessary
    }
  };
*/
  return (
    <div className="Outside">
      <h1>Outside</h1>
      {/*
      <img
        className="snowman"
        src={process.env.PUBLIC_URL + imageSrc} // 수정된 부분
        alt="Snowman"
      />
      */}
      <img src={process.env.PUBLIC_URL + `/assets/snowman4.png`} />

      <ul>
        <li>
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + `/assets/homeBtn.png`}
              alt="Home"
            />
          </Link>
        </li>
        <li>
          <Link to="/diary">
            <img
              src={process.env.PUBLIC_URL + `/assets/diaryBtn.png`}
              alt="Diary"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Outside;
