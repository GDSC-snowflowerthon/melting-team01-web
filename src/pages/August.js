import { Link } from "react-router-dom";

const August = () => {
  return (
    <div className="August">
      <h1>August</h1>
      <article className="diaryPage"></article>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default August;
