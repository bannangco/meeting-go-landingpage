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
  background-color: #fff4f4;
`;


const MaxWidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 501px; // Set the maximum width for large screens
  margin: 0 auto; // This will center the div if the screen is larger than max-width
  background-color: #fff4f4;
  padding: 5vh 5vw; // Add some padding

  @media (max-width: 768px) {
    width: auto; // Take the full width of the screen
    padding: 5vh 5%; // Use percentage for responsive padding
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center; // Center the text
  margin: 2vh 0 0 0; // Add top and bottom margin
`;

const Title2 = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  margin: 10vh 0 1vh 0;
`;

const Title3 = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
  // text-align: center;
  // margin: 1vh 0;
`;

const Description1 = styled.p` // Use <p> for text, styled as h3
  font-weight: bold;
  font-size: 1rem;
  text-align: center; // Center the text
  margin: 2vh 0; // Add top and bottom margin
`;

const HighlightedText = styled.span`
  font-size: 1.4rem;
  // display: block;
`

const BtnStart = styled.button`
    width: 60%;
    padding: 2vh;
    border-radius: 5px;
    color: white;
    background-color : black;
    font-size: 1.2rem;
    text-align: center;
    margin: 3vh 0 2vh 0;
    &:hover {
        cursor: pointer;
        background-color: #333;
    }
`

const ContentWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 3vh 0 10vh 0;
    align-items: center;
`
const ContentImg1 = styled.img`
    flex:1;
    display: block;
    width: 100%;
`

const ContentImg2 = styled.img`
    flex:1;
    display: block;
    width: 100%;
`

const ContentDiv = styled.div`
    flex:1;
    width: 100%;
    // margin: 0.5vh 0 1vh 0;
    // color: red;
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
          <ContentImg1 src="\img\landingpage1.png"></ContentImg1>
          <Description1>
            너무 부담스러운 소개팅에 질렸다면?<br/>
            친구들과 편하게 놀고 오는 미팅 GO!<br/>
            <br/>
            <HighlightedText>편하게, 미팅GO!</HighlightedText><br/>
            <BtnStart id = "Btn_start" onClick={buttonClicked}>지금 시작하기</BtnStart>
            <br/>
            현재 13명의 대학생들이 사전 신청을 완료했습니다!
          </Description1>
          
          <Title2> 미팅GO의 차별점 </Title2>
          <ContentWrap>
            <ContentImg2 src="\img\landingpage2.png"></ContentImg2>
            <Title3> 확실한 신원 관리 </Title3>
            <ContentDiv>
              대학생 사용자의 재학증명서 인증을 통해 확실한 신원을 확보하며, 3단계 인증을 통한 신원 관리
            </ContentDiv>
          </ContentWrap>

          <ContentWrap>
            <ContentImg2 src="\img\landingpage3.png"></ContentImg2>
            <Title3> 미팅 팀 평가를 통한 실사용자 관리 </Title3>
            <ContentDiv>
              미팅 후 상대 팀에 대한 리뷰를 남길 수 있고, 본인의 프로필에 선택된 리뷰를 표시해 우호도를 높일 수 있음
            </ContentDiv>
          </ContentWrap>

          <ContentWrap>
            <ContentImg2 src="\img\landingpage4.png"></ContentImg2>
            <Title3> 편의성 극대화, 미팅 전과정 관리 </Title3>
            <ContentDiv>
              팀 생성, 매칭, 채팅/약속, 미팅지원, 리뷰, 이벤트 등 앱 내에서 미팅의 시작부터 후까지 관리하는 all-in-one 서비스, 지도 및 캘린더 공유 서비스를 통한 미팅 편의성 향상
            </ContentDiv>
          </ContentWrap>
          
        </MaxWidthWrapper>
      </Positioner>
    );
}

export default LandingPage;