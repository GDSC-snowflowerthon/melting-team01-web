import { Link } from "react-router-dom";

const Diary = () => {
  return (
    <div className="Diary">
      <h1>Diary</h1>
      <Link to="/january">January</Link>
      <Link to="/february">February</Link>
      <Link to="/march">March</Link>
      <Link to="/april">April</Link>
      <Link to="/may">May</Link>
      <Link to="/june">June</Link>
      <Link to="/july">July</Link>
      <Link to="/august">August</Link>
      <Link to="/september">September</Link>
      <Link to="/october">October</Link>
      <Link to="/november">November</Link>
      <Link to="/december">December</Link>
      <Link to="/outside">Go outside </Link>
    </div>
  );
};

export default Diary;
