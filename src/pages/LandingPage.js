import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; // To push the content to the top and button to the bottom
  align-items: center; // Center content horizontally
  width: 100%;
  min-width: 307px;
  background-color: #fdf6f7;
`;


const MaxWidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px; // Set the maximum width for large screens
  margin: 0 auto; // This will center the div if the screen is larger than max-width
  background-color: #f8d7da;
  padding: 5vh 5vw; // Add some padding

  @media (max-width: 768px) {
    width: auto; // Take the full width of the screen
    padding: 5vh 5%; // Use percentage for responsive padding
  }
`;


const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  text-align: center; // Center the text
  margin: 2vh 0; // Add top and bottom margin
`;


const Description1 = styled.p` // Use <p> for text, styled as h3
  font-weight: bold;
  font-size: 1rem;
  text-align: center; // Center the text
  margin: 2vh 0; // Add top and bottom margin
`;

const BtnStart = styled.button`
    width: 50%;
    padding: 2vh;
    border-radius: 5px;
    color: white;
    background-color : black;
    font-size: 1.2rem;
    text-align: center;
    margin: 5vh 0;
    &:hover {
        cursor: pointer;
        background-color: #333;
    }
`

const ContentWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 5vh 0;
    align-items: center;
`
const ContentImg = styled.img`
    flex:1;
    display: block;
`

const ContentDiv = styled.div`
    flex:1;
    width: 100%;
    margin: 3vh 0;
    color: red;
    text-align:center;
`



function LandingPage(props) {

    const buttonClicked = (e) =>{
        if (e.target.id === "signin"){
            window.location = `/form`;
        }
        else if (e.target.id === "Btn_start") {
          window.location = `/form`;
        } else {
          window.location = `/`;
        }
    };
    return (
        <Positioner>
      <MaxWidthWrapper>
        <Title>미팅은? 미팅GO!</Title>
        <Description1>
          상위권 대학에 재학중인 학생들의 미팅!<br/>아직은 개발중....<br/>현재 XX명의 대학생들이 사전 신청을 완료했습니다!
        </Description1>
        <BtnStart id = "Btn_start" onClick={buttonClicked}>지금 시작하기</BtnStart>
        <ContentWrap>
          <ContentImg src="\logo\logostransparent3.png"></ContentImg>
          <ContentDiv>
            확실한 신원 관리!
          </ContentDiv>
        </ContentWrap>
        <ContentWrap>
          <ContentImg src="\logo\logostransparent3.png"></ContentImg>
          <ContentDiv>
            5:5 성비
          </ContentDiv>
        </ContentWrap>
      </MaxWidthWrapper>
    </Positioner>
    );
}

export default LandingPage;