import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="Start">
      <h1>❄️Melting❄️</h1>
      <span>당신의 새해 다짐, 녹지 않고 그대로</span>
      <img src={process.env.PUBLIC_URL + `/assets/snowman4.png`} />
      <ul>
        <li id="mypageBtn">
          <Link to="/login">로그인하기</Link>
        </li>
      </ul>
    </div>
  );
};

export default Start;
