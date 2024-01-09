import { Link } from "react-router-dom";

const March = () => {
  return (
    <div className="March">
      <h1>March</h1>
      <article className="diaryPage"></article>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default March;
