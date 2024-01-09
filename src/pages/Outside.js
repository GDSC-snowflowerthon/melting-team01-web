import { Link } from "react-router-dom";

const Outside = () => {
  return (
    <div className="Outside">
      <h1>Outside</h1>
      <ul>
        <li>
          <Link to="/diary">다이어리</Link>
        </li>
        <li>
          <Link to="/">시작화면</Link>
        </li>
      </ul>
    </div>
  );
};

export default Outside;
