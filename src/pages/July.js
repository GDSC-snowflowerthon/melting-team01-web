import { Link } from "react-router-dom";

const July = () => {
  return (
    <div className="July">
      <h1>July</h1>
      <article className="diaryPage"></article>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default July;
