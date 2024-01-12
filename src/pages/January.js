//get,post 둘 다 에러 뜸

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { postId } from "../apis/postId";
import { postPlan } from "../apis/postplan";
import { getPlan } from "../apis/getplan";

//'체크박스' 컴포넌트
function CheckboxSelection({ grade, onCheckboxChange, onSubmit }) {
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

  //체크박스 아이디 값 서버로 보내는 함수 실행.
  const onClickCheckbox = async () => {
    await postId(grade);
  };

  return (
    <div>
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

        <button onClick={onClickCheckbox}>Submit</button>
      </form>
    </div>
  );
}

//'계획 저장/수정' 컴포넌트
function Plan() {
  const [text, setText] = useState("");
  const [content, setContent] = useState("");
  const [grade, setGrade] = useState("");
  const [plani, setPlani] = useState("");

  // 서버로 보낸 계획을 다시 가져오는 함수
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const plan = await getPlan();
      setContent(plan);
      setLoading(false);
    };

    fetchData();
  }, []);

  const onChange = (e) => {
    setText(e.target.value);
  };

  //계획 서버로 보내는 함수
  const onClickPlan = async () => {
    setPlani(text);
    setContent(text);
    await postPlan(content);
  };

  const handleCheckboxChange = (e, id) => {
    console.log(`Checkbox ${id} changed: ${e.target.checked}`);
  };

  const handleSubmit = (id) => {
    setGrade(id);
  };

  return (
    <div>
      <h2>Plan : {plani}</h2>{" "}
      <CheckboxSelection
        grade={grade}
        onCheckboxChange={handleCheckboxChange}
        onSubmit={handleSubmit}
      />
      <br />
      <input
        type="text"
        name="content"
        onChange={onChange}
        placeholder="your plan"
      ></input>
      <button onClick={onClickPlan}>Save</button>
      {/*이 부분은 나중에 삭제할 것*/}
      {grade && <p>선택된 체크박스의 아이디 값:{grade}</p>}
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
