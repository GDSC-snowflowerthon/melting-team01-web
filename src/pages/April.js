import { Link } from "react-router-dom";

const April = () => {
  return (
    <div className="April">
      <h1>April</h1>
      <article className="diaryPage"></article>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default April;
