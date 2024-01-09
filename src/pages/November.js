import { Link } from "react-router-dom";

const November = () => {
  return (
    <div className="November">
      <h1>November</h1>
      <article className="diaryPage"></article>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default November;
