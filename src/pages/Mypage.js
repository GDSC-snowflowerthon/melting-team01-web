import React, { useEffect, useState } from "react";
import { getMypage } from "../apis/mypage";

const Mypage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //mypage 정보를 불러오기
    getMypage().then((res) => {
      setData(res); //mypage의 정보를 불러옴
      setLoading(false);
    });
  }, []);
  if (loading)
    return (
      <div>
        ❄️
        <br /> 로딩 중...
      </div>
    ); //로딩 화면

  //loading이 false라면 아래의 마이페이지 정보가 뜸
  return (
    <div>
      {/*<div>{data?.name}</div>*/}
      <h1>My page</h1>
    </div>
    // 백엔드에서 지정한 mypage api의 json 항목 이름을 따른다
  );
};

export default Mypage;
