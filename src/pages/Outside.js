import { Link } from "react-router-dom";
import axios from "axios";

//다시.. 다시!!
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
  }
};

const Outside = () => {
  return (
    <div className="Outside">
      <h1>Outside</h1>
      <img
        className="snowman"
        src={process.env.PUBLIC_URL + getMyPage()} //여기서 눈사람 이미지를 가져와야 할 듯.
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
