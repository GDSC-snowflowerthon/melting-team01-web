import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyPage } from "../apis/mypage";
import { recommend } from "../apis/recommend";
import { useForm } from "../hooks/useForm";
import { select } from "../apis/select";
import { Snowflake } from "../components/Snowflake";

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
    if (data?.content?.items.length > 9) {
      // 추천 목록 10개로 막기
      alert("더 이상 추천할 수 없습니다!");
    } else {
      await recommend(content);
      alert("추천해줘서 고마워 >.<");
    }
  };

  const url = window.location.href;

  const copyUrl = async () => {
    await navigator.clipboard.writeText(url);
    alert("링크가 복사되었습니다!");
  };

  const randomSnowflakeId = async () => {
    const snowflakeItems = data?.content?.items;

    if (snowflakeItems && snowflakeItems.length > 0) {
      const randomIndex = Math.floor(Math.random() * snowflakeItems.length);
      const selectSnowflakeId = snowflakeItems[randomIndex]?.snowflakeId;

      console.log("Randomly selected Snowflake ID:", selectSnowflakeId); // 여기까지는 잘 작동

      await select(selectSnowflakeId);

      router(`/snowman/${memberId}`); // 선택이 되면, 눈사람 페이지로 이동
    } else {
      console.log("No Snowflake IDs available.");
    }
  };

  return (
    <div className="Mypage">
      <h1>My page</h1>

      <p>{data?.content?.items.length}개의 추천이 있습니다</p>

      <div className="area">
        <div className="recommendList">
          {data?.content?.items.map((item, index) => (
            <p key={index}>{item.content}</p>
          ))}
        </div>

        <div className="buttonList">
          <button onClick={copyUrl}>링크 공유하기</button>
          <textarea
            placeholder="나를 위해 추천해줘!"
            value={content}
            onChange={onChangeContent}
          />
          <button onClick={onClick}>추천하기</button>
          <button onClick={() => router(`/snowman/${memberId}`)}>
            Go outside
          </button>

          {data?.content?.items.length > 4 ? (
            <button onClick={randomSnowflakeId}>새해 다짐 고르기</button>
          ) : (
            <p onClick={() => alert("추천 목록이 5개 이상이어야 합니다!")}>
              <button disabled>새해 다짐 고르기</button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mypage;
