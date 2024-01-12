import React, { useEffect, useState } from "react";
import { getMyPage } from "../apis/mypage";

const Mypage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getMyPage().then((res) => {
      setData(res);
    });
  }, []);

  const url = window.location.href; // 현재 링크를 가져오는 코드
  console.log(url);
  const copyUrl = async () => {
    await navigator.clipboard.writeText(url);
    alert("링크가 복사되었습니다!");
  };

  return (
    <div>
      <h1>My page</h1>
      <div>{data?.snowflakeId}</div>
      <div>{data?.content}</div>
      <button onClick={copyUrl}>링크 공유하기</button>
    </div>
  );
};

export default Mypage;
