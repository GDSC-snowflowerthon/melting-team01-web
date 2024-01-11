import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

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

  const onClick = async () => {
    setPlan(text);

    //plan + 토큰 서버로 보내기 (저장) -- response body는 아직.. 수정은 더 해야함.
    const sendPlan = async (plan) => {
      const headers = {
        Authorization: "여기에 실제 토큰 담기",
      };

      let result;
      try {
        result = await axios.post(
          "http://43.201.121.70:8080/diary/January",
          {
            content: plan,
          },
          {
            headers: headers,
          }
        );

        //서버 응답 처리
        console.log("Server response:", result.data.statusCode);
      } catch (error) {
        //에러 처리
        console.error(
          "Error:",
          error,
          result ? result.data.statusCode : undefined
        );
      }
    };

    console.log(plan);
  };

  /*
  //plan + 토큰 서버로 보내기 (저장) -- response body는 아직.. 수정은 더 해야함.
  const sendPlan = async (plan) => {
    const headers = {
      Authorization: "여기에 실제 토큰 담기",
    };
    try {
      const result = await axios.post(
        "http://43.201.121.70:8080/diary/January",
        {
          content: plan,
        },
        {
          headers: headers,
        }
      );
      .then((response) => {console.log(response.data);})   //음... response body에 있는 부분은 그냥 콘솔에 찍어주기만 하면 되는 건가..
    } .catch((response)=> {console.log('Error!');})
  };
  */

  const handleCheckboxChange = (e, id) => {
    console.log(`Checkbox ${id} changed: ${e.target.checked}`);
  };

  const handleSubmit = (id) => {
    setSelectedItemId(id);

    //체크박스 아이디값 + 토큰 서버로 보내기 -- response body 부분은 아직...
    const sendCheckboxId = async (selectedItemId) => {
      const headers = {
        Authorization: "여기에 실제 토큰 담기",
      };

      let result;

      try {
        result = await axios.post(
          "http://43.201.121.70:8080/diary/January",
          {
            grade: selectedItemId,
          },
          {
            headers: headers,
          }
        );
        console.log("Server response:", result.data.statusCode);
      } catch (error) {
        console.log(
          "Error:",
          error,
          result ? result.data.statusCode : undefined
        );
      }
    };

    /*const checkboxId = async (selectedItemId) => {
      const result = await axios
        .post("http://43.201.121.70:8080//diary/January", selectedItemId,)
        .then((response) => {
          console.log(response.statusCode, response.data.token); //이렇게 하는 게 맞나..  response.data.token 이 부분이 이름이 좀 바뀌어야 할 것 같은데..
        });
      return result.data.content; //이렇게 하는 게 맞나..
    };*/
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
      <button onClick={onClick}>Save</button>

      {/*이 부분은 나중에 삭제할 것*/}
      {selectedItemId && <p>선택된 체크박스의 아이디 값:{selectedItemId}</p>}
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
