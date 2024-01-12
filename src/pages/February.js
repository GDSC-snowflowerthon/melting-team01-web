import { Link } from "react-router-dom";

const February = () => {
  return (
    <div className="February">
      <h1>February</h1>
      <article className="diaryPage"></article>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default February;
