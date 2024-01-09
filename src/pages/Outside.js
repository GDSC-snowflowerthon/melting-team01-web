import { Link } from "react-router-dom";

const Outside = () => {
  return (
    <div className="Outside">
      <h1>Outside</h1>
      <img
        className="snowman"
        src={process.env.PUBLIC_URL + `/assets/snowman.png`}
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
