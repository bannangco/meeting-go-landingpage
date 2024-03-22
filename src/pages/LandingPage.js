import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";
import { Helmet } from "react-helmet-async";

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
  max-width: 508px; // Set the maximum width for large screens
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
const StyledImage = styled.img`
  flex: 1;
  display: block;
  width: 100%;
`;

const ContentDiv = styled.div`
    flex:1;
    width: 100%;
    // margin: 0.5vh 0 1vh 0;
    // color: red;
    text-align:center;
`

// Functional component for rendering images with WebP and fallback
const ImageWithFallback = ({ webpSrc, fallbackSrc, alt }) => (
	<picture>
		<source srcSet={webpSrc} type="image/webp" />
		<source srcSet={fallbackSrc} type="image/png" />
		<StyledImage src={fallbackSrc} alt={alt}/>
	</picture>
);

function LandingPage(props) {
    const buttonClicked = (e) =>{
        if (e.target.id === "signin"){
          logEvent(analytics, `test_firebase_analytics_signin`);
          window.location = `/form/`;
        }
        else if (e.target.id === "Btn_start") {
          window.location = `/form/`;
        } else {
          window.location = `/`;
        }
    };
    return (
      <>
      <Helmet>
        <title>미팅GO - 대학생 미팅은? 미팅고!</title>
        <meta name="description" content="가장 편리하고 안전한 대학생 미팅 잡기! 친구들과 미팅고에서 미팅 잡자!" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Positioner>
        <MaxWidthWrapper>
          <Title>미팅은? 미팅GO!</Title>
          <ImageWithFallback
            webpSrc="\img\landingpage1.webp"
            fallbackSrc="\img\landingpage1.png"
            alt="미팅을 하는 대학생 남녀의 일러스트"
		      />
          <Description1>
            너무 부담스러운 소개팅에 질렸다면?<br/>
            친구들과 편하게 놀고 오는 미팅 GO!<br/>
            <br/>
            <HighlightedText>편하게, 미팅GO!</HighlightedText><br/>
            <BtnStart id = "Btn_start" onClick={buttonClicked}>지금 시작하기</BtnStart>
            <br/>
            현재 24명의 대학생들이 사전 신청을 완료했습니다!
          </Description1>
          
          <Title2> 미팅GO의 차별점 </Title2>
          <ContentWrap>
            <ImageWithFallback
              webpSrc="\img\landingpage2.webp"
              fallbackSrc="\img\landingpage2.png"
              alt="잘생기고 예쁜 남녀 대학생이 과잠을 입고 학교 앞에 서있는 일러스트"
            />
            <Title3> 확실한 신원 관리 </Title3>
            <ContentDiv>
              대학생 사용자의 재학증명서 인증을 통해 확실한 신원을 확보하며, 3단계 인증을 통한 신원 관리
            </ContentDiv>
          </ContentWrap>

          <ContentWrap>
            <ImageWithFallback
              webpSrc="\img\landingpage3.webp"
              fallbackSrc="\img\landingpage3.png"
              alt="미팅고 서비스 중 미팅 팀에 대한 리뷰를 남기는 페이지와 이를 둘러싼 대학생 이용자들 일러스트"
            />
            <Title3> 미팅 팀 평가를 통한 실사용자 관리 </Title3>
            <ContentDiv>
              미팅 후 상대 팀에 대한 리뷰를 남길 수 있고, 본인의 프로필에 선택된 리뷰를 표시해 우호도를 높일 수 있음
            </ContentDiv>
          </ContentWrap>

          <ContentWrap>
            <ImageWithFallback
              webpSrc="\img\landingpage4.webp"
              fallbackSrc="\img\landingpage4.png"
              alt="대학생 미팅의 전 과정을 관리하는 것을 보여주는 귀여운 일러스트"
            />
            <Title3> 편의성 극대화, 미팅 전과정 관리 </Title3>
            <ContentDiv>
              팀 생성, 매칭, 채팅/약속, 미팅지원, 리뷰, 이벤트 등 앱 내에서 미팅의 시작부터 후까지 관리하는 all-in-one 서비스, 지도 및 캘린더 공유 서비스를 통한 미팅 편의성 향상
            </ContentDiv>
          </ContentWrap>
          
        </MaxWidthWrapper>
      </Positioner>
      </>
    );
}

export default LandingPage;