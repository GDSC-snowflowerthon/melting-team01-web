import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyPage } from "../apis/mypage";
import { recommend } from "../apis/recommend";
import { useForm } from "../hooks/useForm";

const Mypage = () => {
  const memberId = localStorage.getItem("memberId"); // localStorage에서 memberId 받아오기
  const router = useNavigate();

  const [data, setData] = useState();
  useEffect(() => {
    getMyPage().then((res) => {
      setData(res);
    });
  }, []);

<<<<<<< HEAD
  const url = window.location.href; // 현재 링크를 가져오는 코드
  console.log(url);
=======
  const [content, onChangeContent] = useForm();
  const onClick = async () => {
    await recommend(content);
  };

  const url = window.location.href;

>>>>>>> 1bbda00d33ec4302f85982cb82c2eac60f64a75d
  const copyUrl = async () => {
    await navigator.clipboard.writeText(url);
    alert("링크가 복사되었습니다!");
  };

  return (
    <div>
      <h1>My page</h1>
<<<<<<< HEAD
      <div>{data?.snowflakeId}</div>
      <div>{data?.content}</div>
      <button onClick={copyUrl}>링크 공유하기</button>
=======
      <div>{data?.items?.[0]?.snowflakeId}</div>
      <div>{data?.items?.[0]?.content}</div>
      <button onClick={copyUrl}>링크 공유하기</button>
      <textarea
        placeholder="추천해주기"
        value={content}
        onChange={onChangeContent}
      />
      <button onClick={onClick}>추천하기</button>
      <button onClick={() => router(`/snowman/${memberId}`)}>Go outside</button>
>>>>>>> 1bbda00d33ec4302f85982cb82c2eac60f64a75d
    </div>
  );
};

export default Mypage;
