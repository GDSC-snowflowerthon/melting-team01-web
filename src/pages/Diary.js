import { Link } from "react-router-dom";

const Diary = () => {
  return (
    <div className="Diary">
      <ul>
        <li>
          <Link to="/outside">밖으로</Link>
        </li>
      </ul>
    </div>
  );
};

export default Diary;
