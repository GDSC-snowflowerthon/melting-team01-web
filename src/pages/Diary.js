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
      <button className="month" onClick={() => handleButtonClick("January")}>
        January
      </button>
      <button className="month" onClick={() => handleButtonClick("february")}>
        February
      </button>
      <button className="month" onClick={() => handleButtonClick("march")}>
        March
      </button>
      <button className="month" onClick={() => handleButtonClick("april")}>
        April
      </button>
      <button className="month" onClick={() => handleButtonClick("may")}>
        May
      </button>
      <button className="month" onClick={() => handleButtonClick("june")}>
        June
      </button>
      <button className="month" onClick={() => handleButtonClick("july")}>
        July
      </button>
      <button className="month" onClick={() => handleButtonClick("august")}>
        August
      </button>
      <button className="month" onClick={() => handleButtonClick("september")}>
        September
      </button>
      <button className="month" onClick={() => handleButtonClick("october")}>
        October
      </button>
      <button className="month" onClick={() => handleButtonClick("november")}>
        November
      </button>
      <button className="month" onClick={() => handleButtonClick("december")}>
        December
      </button>

      <button
        className="outside"
        onClick={() => router(`/snowman/${memberId}`)}
      >
        Go outside
      </button>
    </div>
  );
};

export default Diary;
