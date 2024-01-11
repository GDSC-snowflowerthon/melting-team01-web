import React from "react";

const Snowflake = ({ style }) => {
  return (
    <p className="snow-flake" style={style}>
      {"\u2745"}
    </p>
  );
};

const makeSnowFlakes = () => {
  let animationDelay = "0s"; // 기본 값은 0초이다.
  let fontSize = "20px"; // 기본 폰트사이즈는 14px로 했다.
  const arr = Array.from(
    "Merry Christmas, Do you wanna build a snowman? Come on, let's go and play."
  ); // length가 15인 array가 생긴다.

  // arr의 length 만큼의 <SnowFlake />를 반환한다.
  return arr.map((el, i) => {
    animationDelay = `${(Math.random() * 16).toFixed(2)}s`; // 0~16 사이에서 소수점 2번째 자리수까지의 랜덤숫자
    fontSize = `${Math.floor(Math.random() * 10) + 13}px`; // 13~20 사이의 정수
    const style = {
      animationDelay,
      fontSize,
      opacity: 0,
    };
    return <Snowflake key={i} style={style} />;
  });
};

const FallingSnow = () => (
  <div className="snow-container">{makeSnowFlakes()}</div>
);

export { FallingSnow, Snowflake }; // 기본 내보내기
