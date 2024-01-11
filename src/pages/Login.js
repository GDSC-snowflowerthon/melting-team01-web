import React, { useState } from "react";
import { styled } from "styled-components";
import { Form, Input, Inputs, Title, Wrapper } from "../components/Common";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../apis/login";

const Login = () => {
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();
  const onChangeId = (e) => {
    setMemberId(e.target.value);
  };
  const onChangePw = (e) => {
    setPassword(e.target.value);
  };

  const onClick = async () => {
    try {
      // 로그인 api
      const result = await login(memberId, password);
      const { accessToken, refreshToken } = result;

      // 로그인 성공 시 토큰을 localStorage에 저장
      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);

      // 로그인 성공 시 페이지 이동
      router("/snowflakes");
    } catch (error) {
      // 에러 발생 시 로그에 출력
      console.error("로그인 중 에러:", error);
    }
  };
  return (
    <div className="Login">
      <h1>Login</h1>
      <Inputs>
        <Input placeholder="아이디" value={memberId} onChange={onChangeId} />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={onChangePw}
        />
      </Inputs>
      <Button onClick={onClick}>Login</Button>
      <CustomLink to="/signup">회원가입하기</CustomLink>
    </div>
  );
};

export default Login;

const Button = styled.button`
  background-color: #9bb7ff;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  box-shadow: rgba(255, 255, 255, 0.5) 0px 7px 20px;
  cursor: pointer;
`;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: rgb(243, 233, 255);
  &:visited {
    color: rgb(243, 233, 255);
  }
`;
