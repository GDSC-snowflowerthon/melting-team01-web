import { Link } from "react-router-dom";

const September = () => {
  return (
    <div className="September">
      <h1>September</h1>
      <article className="diaryPage"></article>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default September;
