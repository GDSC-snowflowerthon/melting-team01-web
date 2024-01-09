import { Link } from "react-router-dom";

const January = () => {
  return (
    <div className="January">
      <h1>January</h1>
      <article className="diaryPage"></article>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default January;
