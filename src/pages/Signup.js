import React from "react";
import { Input, Title, Inputs, Wrapper } from "../components/Common";
import { useForm } from "../hooks/useForm";
import { styled } from "styled-components";
import { signup } from "../apis/signup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [memberId, onChangeId] = useForm();
  const [password, onChangePw] = useForm();
  const router = useNavigate();
  const onClick = async () => {
    await signup(memberId, password);
    router("/login");
  };
  {
    /*const [name, onChangeName] = useForm();*/
  }
  return (
    <Wrapper>
      <Title>Sign up</Title>
      <Inputs>
        <Input placeholder="아이디" value={memberId} onChange={onChangeId} />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={onChangePw}
        />
        {/*<Input placeholder="이름" value={name} onChange={onChangeName} /> */}
      </Inputs>
      <Button onClick={onClick}>Sign Up</Button>
    </Wrapper>
  );
};

export default Signup;
const Button = styled.button`
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  margin-top: 20px;
`;
