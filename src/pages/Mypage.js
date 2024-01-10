import { Link } from "react-router-dom";

const Mypage = () => {
  return (
    <div>
      <h1>Mypage</h1>
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

export default Mypage;
