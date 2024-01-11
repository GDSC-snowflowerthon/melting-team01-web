import { Link } from "react-router-dom";
import React, { useState } from "react";

//'체크박스' 컴포넌트
function CheckboxSelection({ onCheckboxChange, onSubmit }) {
  const checkboxes = [
    { id: 1, label: "매우 잘했다" },
    { id: 2, label: "잘했다" },
    { id: 3, label: "적당히 했다" },
    { id: 4, label: "못했다" },
    { id: 5, label: "매우 못했다" },
  ];

  const minSelection = 1;
  const maxSelection = 1;

  const [selectedItem, setSelectedItem] = useState([]);

  const handleCheckboxChange = (e, id) => {
    const value = e.target.value;

    if (e.target.checked) {
      if (selectedItem.length >= maxSelection) {
        alert("평가 항목을 하나만 선택해주세요.");
        e.target.checked = false;
        return;
      }
      setSelectedItem([id]);
    } else {
      setSelectedItem([]);
    }

    onCheckboxChange(e, id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedItem.length < minSelection) {
      alert("평가 항목을 하나 선택해주세요.");
    } else {
      onSubmit(selectedItem[0]);
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
                onChange={(e) => handleCheckboxChange(e, checkbox.id)}
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
  const [selectedItemId, setSelectedItemId] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    setPlan(text);
    console.log(plan);
  };

  const handleCheckboxChange = (e, id) => {
    console.log(`Checkbox ${id} changed: ${e.target.checked}`);
  };

  const handleSubmit = (id) => {
    setSelectedItemId(id);
  };

  return (
    <div>
      <h2>Plan : {plan}</h2>
      <CheckboxSelection
        onCheckboxChange={handleCheckboxChange}
        onSubmit={handleSubmit}
      />
      <br />
      <input type="text" name="plan" onChange={onChange}></input>
      <button onClick={onClick}>저장/수정</button>

      {selectedItemId && <p>선택된 체크 박스의 아이디 값:{selectedItemId}</p>}
    </div>
  );
}

const January = () => {
  return (
    <div className="January">
      <h1>January</h1>
      <p>
        <Plan />
      </p>
      <Link to="/diary">
        <span>Go contents</span>
      </Link>
    </div>
  );
};

export default January;
