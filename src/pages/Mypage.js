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
    getMyPage().then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  const [content, onChangeContent] = useForm();
  const onClick = async () => {
    await recommend(content);
    alert("추천해줘서 고마워 >.<");
  };

  const url = window.location.href;

  const copyUrl = async () => {
    await navigator.clipboard.writeText(url);
    alert("링크가 복사되었습니다!");
  };

  return (
    <div>
      <h1>My page</h1>
      <p>{data?.content?.items.length}개의 추천이 있습니다</p>

      {data?.content?.items.map((item, index) => (
        <p key={index}>{item.content}</p>
      ))}

      <button onClick={copyUrl}>링크 공유하기</button>
      <textarea
        placeholder="나를 위해 추천해줘!"
        value={content}
        onChange={onChangeContent}
      />
      <button onClick={onClick}>추천하기</button>
      <button onClick={() => router(`/snowman/${memberId}`)}>Go outside</button>
    </div>
  );
};

export default Mypage;
