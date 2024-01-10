import { Link } from "react-router-dom";

const Diary = () => {
  return (
    <div className="Diary">
      <h1>Diary</h1>
      <Link to="/diary/january">January</Link>
      <Link to="/diary/february">February</Link>
      <Link to="/diary/march">March</Link>
      <Link to="/diary/april">April</Link>
      <Link to="/diary/may">May</Link>
      <Link to="/diary/june">June</Link>
      <Link to="/diary/july">July</Link>
      <Link to="/diary/august">August</Link>
      <Link to="/diary/september">September</Link>
      <Link to="/diary/october">October</Link>
      <Link to="/diary/november">November</Link>
      <Link to="/diary/december">December</Link>
      <Link to="/outside">Go outside </Link>
    </div>
  );
};

export default Diary;
