import { Link } from "react-router-dom";

const December = () => {
  return (
    <div className="December">
      <h1>December</h1>
      <article className="diaryPage"></article>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default December;
