import { Link, useNavigate } from "react-router-dom";

const Diary = () => {
  const router = useNavigate();
  const memberId = localStorage.getItem("memberId"); // localStorage에서 memberId 받아오기

  const handleButtonClick = (month) => {
    // 버튼을 눌렀을 때 라우터 변경
    router(`/diary/${memberId}/${month}`);
  };

  return (
    <div className="Diary">
      <h1>Diary</h1>
      {/*
      diary
      
      <Link to="/diary/january">January</Link>
      
      */}
      <button onClick={() => handleButtonClick("January")}>January</button>
      <button onClick={() => handleButtonClick("february")}>February</button>
      <button onClick={() => handleButtonClick("march")}>March</button>
      <button onClick={() => handleButtonClick("april")}>April</button>
      <button onClick={() => handleButtonClick("may")}>May</button>
      <button onClick={() => handleButtonClick("june")}>June</button>
      <button onClick={() => handleButtonClick("july")}>July</button>
      <button onClick={() => handleButtonClick("august")}>August</button>
      <button onClick={() => handleButtonClick("september")}>September</button>
      <button onClick={() => handleButtonClick("october")}>October</button>
      <button onClick={() => handleButtonClick("november")}>November</button>
      <button onClick={() => handleButtonClick("december")}>December</button>

      <button onClick={() => router(`/snowman/${memberId}`)}>Go outside</button>
    </div>
  );
};

export default Diary;
