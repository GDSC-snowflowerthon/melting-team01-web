import React, { useState } from "react";
import { styled } from "styled-components";
import { Form, Input, Inputs, Title, Wrapper } from "../components/Common";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../apis/login";

const Login = () => {
  const [memberId, setId] = useState("");
  const [password, setPw] = useState("");
  const router = useNavigate();
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const onClick = async () => {
    // 로그인 api
    const result = await login(memberId, password);
    // console.log(result); 정상적이라면 accessToken과 refreshToken이 출력되야함
    const { accessToken, refreshToken } = result;
    //accessToken, refreshToken은 백엔드에서 정하기 나름
    localStorage.setItem("access", accessToken);
    localStorage.setItem("refresh", refreshToken);
    router("/snowflakes");
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
