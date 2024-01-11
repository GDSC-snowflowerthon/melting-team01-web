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
    router("/mypage");
  };
  return (
    <Wrapper>
      <Title>Log in</Title>
      <Form>
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
      </Form>
      <CustomLink to="/signup">회원가입하기</CustomLink>
    </Wrapper>
  );
};

export default Login;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
`;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
    text-decoration: none;
  }
`;
