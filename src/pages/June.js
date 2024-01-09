import { Link } from "react-router-dom";

const June = () => {
  return (
    <div className="June">
      <h1>June</h1>
      <article className="diaryPage"></article>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default June;
