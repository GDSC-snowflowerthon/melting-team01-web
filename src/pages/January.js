import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

//'체크박스' 컴포넌트
function CheckboxSelection() {
  const checkboxes = [
    { id: 1, label: "매우 잘했다" },
    { id: 2, label: "잘했다" },
    { id: 3, label: "적당히 했다" },
    { id: 4, label: "못했다" },
    { id: 5, label: "매우 못했다" },
  ];

  const minSelction = 1;
  const maxSelction = 1;

  const [selectedItem, setSelectedItem] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      if (selectedItem.length >= maxSelction) {
        alert("평가 항목을 하나만 선택해주세요.");
        e.target.checked = false;
        return;
      }
      setSelectedItem([...selectedItem, value]);
    } else {
      setSelectedItem(selectedItem.filter((item) => item !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedItem.length < minSelction) {
      alert("평가 항목을 하나 선택해주세요.");
    } else {
      console.log("Selected option:" + selectedItem);
      console.log("Number of selected option" + selectedItem.length);
    }
  };

  return (
    <div className="group-form offset-3">
      <h3>SelfEval</h3>
      <form onSubmit={handleSubmit}>
        {checkboxes.map((checkbox) => (
          <div key={checkbox.id}>
            <label>
              <input
                type="checkbox"
                value={checkbox.label}
                onChange={handleCheckboxChange}
              />
              {checkbox.label}
            </label>
            <p></p>
          </div>
        ))}

        <button className="btn btn-primary me-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

//'계획 저장/수정' 컴포넌트
function Plan() {
  const [text, setText] = useState("");
  const [plan, setPlan] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    setPlan(text);
    console.log(plan);
  };

  return (
    <div>
      <h2>Plan : {plan}</h2>
      <CheckboxSelection></CheckboxSelection>
      <br />
      <input type="text" name="plan" onChange={onChange}></input>
      <button onClick={onClick}>저장/수정</button>
    </div>
  );
}

const January = () => {
  return (
    <div className="January">
      <h1>January</h1>
      {/*<article className="diaryPage"></article>*/}
      <p>
        <Plan></Plan>
      </p>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default January;
