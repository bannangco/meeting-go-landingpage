import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Positioner = styled.div`
  width: 100%;
  /* overflow: hidden; */
  height: 100vh; //화면 꽉차게
`;

const Title = styled.div`
  /* top: 10vh; */
  margin-top: 5vh;
  font-weight: bold;
  font-size: 2rem;
`;

const TopLine = styled.hr`
  height: 5;
  margin-top: 2vh;
  margin-bottom: 7vh;
`;

const InputContainer = styled.div`
  margin-top: 3vh;
  height: 10vh;
  /* font-weight: bold; */
  width: 100%;
`;

const InputTitle = styled.div`
  font-weight: bold;
  font-size: 2rem;
  width: 90%;
  text-align: left;
  margin-left: 10%;
`;

const InputLine = styled.input`
  font-size: 1.6rem;
  width: 80%;
  /* padding: 10px; */
  margin-top: 1.5vh;
  background: #fafafa;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 5;
  border-color: darkgray;
  border-radius: 3px;
  ::placeholder {
    color: gray;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 40vh;
  padding-top: 2vh;
`;

const CompleteButton = styled.button`
  width: 80vw;
  height: 7vh;
  margin-top: 3vh;
  font-weight: bold;
  font-size: 1.8rem;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #454545;
  color: white;
`;

const BackButton = styled.button`
  width: 80vw;
  height: 7vh;
  margin-top: 3vh;
  font-weight: bold;
  font-size: 1.8rem;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

function SigninPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const buttonClicked = (e) => {
    if (e.target.id === "complete") {
      let tempInfo = info;
      tempInfo.name = name;
      tempInfo.phone = phone;
      tempInfo.email = email;
      tempInfo.password = password;
      setInfo(tempInfo);
      /* send name, phone, email and password to backend */
      console.log("tempInfo is ", tempInfo);
      console.log("info is ", info);

      window.location = `/home`;
    } else {
      window.location = `/`;
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <Positioner>
      <Title>회원가입</Title>
      <TopLine />
      <InputContainer>
        <InputTitle>이름</InputTitle>
        <InputLine
          name="name"
          type="text"
          placeholder="ex. 안현수"
          value={name}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <InputTitle>전화번호</InputTitle>
        <InputLine
          name="phone"
          type="text"
          placeholder="ex. 010-1234-5678"
          value={phone}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <InputTitle>이메일</InputTitle>
        <InputLine
          name="email"
          type="text"
          placeholder="ex. email@gmail.com"
          value={email}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <InputTitle>비밀번호</InputTitle>
        <InputLine
          name="password"
          type="text"
          placeholder="ex. hello"
          value={password}
          onChange={handleChange}
        />
      </InputContainer>

      <ButtonContainer>
        <CompleteButton id="complete" onClick={buttonClicked}>
          완료
        </CompleteButton>
        <BackButton id="back" onClick={buttonClicked}>
          돌아가기
        </BackButton>
      </ButtonContainer>
    </Positioner>
  );
}

export default SigninPage;