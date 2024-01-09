import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="Start">
      <h1>Melting</h1>
      <img src={process.env.PUBLIC_URL + `/assets/snowman.png`} />{" "}
      <ul>
        <li className="list">
          <Link to="/outside">내 눈사람 보러가기</Link>
        </li>
      </ul>
    </div>
  );
};

export default Start;
