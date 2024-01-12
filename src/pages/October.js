import { Link } from "react-router-dom";

const October = () => {
  return (
    <div className="October">
      <h1>October</h1>
      <article className="diaryPage"></article>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default October;
