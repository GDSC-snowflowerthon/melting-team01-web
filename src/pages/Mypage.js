import React, { useEffect, useState } from "react";
import { getMyPage } from "../apis/mypage";

const Mypage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getMyPage().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div>
      <h1>My page</h1>
      <div>{data?.snowflakeId}</div>
      <div>{data?.content}</div>
    </div>
  );
};

export default Mypage;
