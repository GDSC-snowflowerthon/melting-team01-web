import { Link } from "react-router-dom";

const May = () => {
  return (
    <div className="May">
      <h1>May</h1>
      <article className="diaryPage"></article>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default May;
