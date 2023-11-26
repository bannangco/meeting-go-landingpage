import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Positioner = styled.div`
  width: 100%;
  /* overflow: hidden; */
  height: 100vh; //화면 꽉차게
  background-color: red;
`;

const Title = styled.div`
  /* top: 10vh; */
  margin-top: 5vh;
  font-weight: bold;
  font-size: 2rem;
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
  
  return (
    <Positioner>
      <Title>사전 신청하기!</Title>
      <ButtonContainer>
        <CompleteButton id="complete">
          사전신청하기
        </CompleteButton>
        <BackButton id="back">
          사전신청하기
        </BackButton>
      </ButtonContainer>
    </Positioner>
  );
}

export default SigninPage;