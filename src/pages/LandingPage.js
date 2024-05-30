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
  // background-color: #fff4f4;
`;


const MaxWidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  // max-width: 508px; // Set the maximum width for large screens
  margin: 0 auto; // This will center the div if the screen is larger than max-width
  // background-color: #fff4f4;
  padding: 5vh 5vw 8vh 5vw; // Add some padding

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
  margin: 0 0 0 0;
`;

const Title3 = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
`;

const TitleNew = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 10px 0;
`;

const DescriptionNew = styled.p`
  font-size: 14px;
  margin: 14px 0 5px;
`;

const Description1 = styled.div`
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  margin: 4vh 0 5vh 0;
  line-height: 1.5;
`;

const Description2 = styled.p`
  font-weight: bold;
  font-size: 1rem;
  text-align: center; // Center the text
  margin: 0 0 5vh 0; // Add top and bottom margin
  // line-height: 1.5;
`;

const Description3 = styled.p`
  font-weight: bold;
  font-size: 24px;
  text-align: center; // Center the text
  margin: 1vh 0 2vh 0; // Add top and bottom margin
  line-height: 1.5;
`;

const HighlightedText = styled.span`
  font-size: 1.4rem;
  // display: block;
`

const BtnStart = styled.button`
  width: 190px;
  padding: 20px 5px;
  color: white;
  background-color : #9C41FF;
  border: 0;
  font-size: 20px;
  text-align: center;
  margin: 0 0 5vh 0;
  &:hover {
      cursor: pointer;
      background-color: #6d2db2;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 60px 0 10px 0;
`;

const BtnStart2 = styled.button`
  width: 190px;
  padding: 20px 5px;
  color: white;
  background-color : #9C41FF;
  border: 0;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 0;
  gap: 10px;
  &:hover {
      cursor: pointer;
      background-color: #6d2db2;
  }
`

const BtnInstagram = styled.button`
  width: 190px;
  padding: 20px 5px;
  color: white;
  background-color: #5f5f5f;
  border: 0;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 0 0 0;
  &:hover {
    cursor: pointer;
    background-color: #424242;
  }
`;

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

const Section = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  border-bottom: 2px solid #eaeaea;

  // @media (max-width: 768px) {
  //   flex-direction: column;
  //   text-align: center;
  // }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }

  // @media (max-width: 768px) {
  //   img {
  //     width: 60%;
  //     height: auto;
  //   }
  // }
`;

const ImageWrapper2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 8vh 0 0 0;
`;

const ImageWrapper3 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 2vh 0 0 0;
  width: 80%;
`;

const ImageWrapper4 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 6vh 0 0 0;
  img{
    width: 70%;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SmallTextWrapper = styled.div`
  // padding: 0 0 0 0;
  margin: 0 0 2px 0;
  font-size: 12px;
  text-align: center;
  @media (max-width: 768px) {
  }
`;

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
          {/* <Title>미팅은? 미팅GO!</Title> */}
          <ImageWrapper3>
            <ImageWithFallback
              webpSrc="\img\new_landingp_1.webp"
              fallbackSrc="\img\new_landingp_1.png"
              alt="청춘으로 추억을 만들자, 미팅은? 미팅고 라고 적힌 미팅GO 대표 이미지"
            />
          </ImageWrapper3>
          <Description1>
            너무 부담스러운 소개팅에 질렸다면?<br />
            친구들과 편하게 놀고 오는 미팅 GO!<br />
            <ButtonContainer>
              <div>
                <SmallTextWrapper>지금 바로 미팅고 시작하기</SmallTextWrapper>
                <BtnStart2 id="Btn_start" onClick={buttonClicked}>
                  지금 시작하기
                  <img src="\img\arrow_icon.png" alt="arrow icon" width="23" height="19" />
                </BtnStart2>
              </div>
              <div>
                <SmallTextWrapper>미팅고의 소식이 궁금하다면</SmallTextWrapper>
                <BtnInstagram id="Btn_instagram" onClick={() => window.open('https://www.instagram.com/meetinggo_official/', '_blank')}>
                  인스타그램
                  <img src="\img\instagram_icon.png" alt="Instagram icon" width="24" height="24" />
                </BtnInstagram>
              </div>
            </ButtonContainer>
            현재 24명의 대학생들이 사전 신청을 완료했어요 😄
          </Description1>
          
          <ImageWrapper2>
            <img src="\img\star.png" alt="Star Image" />
          </ImageWrapper2>
          <Title2> 미팅GO는 달라요 </Title2>
          <Description2>
            미팅GO만의 차별점을 아래에서 확인해보세요 🤗
          </Description2>
          
          <Section>
            <ImageWrapper>
              <img src="\img\new_landingp_2.png" alt="Image 1 Description" />
            </ImageWrapper>
            <TextWrapper>
              <TitleNew>확실한 신원 관리</TitleNew>
              <DescriptionNew>
                대학생 사용자의 재학증명서 인증을 통해 확실한 신원을 확보하며, 3단계 인증을 통한 신원 관리
              </DescriptionNew>
            </TextWrapper>
          </Section>
          <Section>
            <TextWrapper>
              <TitleNew>미팅 팀 평가를 통한 실사용자 관리</TitleNew>
              <DescriptionNew>
                미팅 후 상대 팀에 대한 리뷰를 남길 수 있고, 본인의 프로필에 선택된 리뷰를 표시해 우호도를 높일 수 있음
              </DescriptionNew>
            </TextWrapper>
            <ImageWrapper>
              <img src="\img\new_landingp_3.png" alt="Image 2 DescriptionNew" />
            </ImageWrapper>
          </Section>

          <Section>
            <ImageWrapper>
              <img src="\img\new_landingp_4.png" alt="Image 3 DescriptionNew" />
            </ImageWrapper>
            <TextWrapper>
              <TitleNew>편의성 극대화, 미팅 전과정 관리</TitleNew>
              <DescriptionNew>
                팀 생성, 매칭, 채팅/약속, 미팅지원, 리뷰, 이벤트 등 앱 내에서 미팅의 시작부터 후까지 관리하는 all-in-one 서비스, 지도 및 캘린더 공유 서비스를 통한 미팅 편의성 향상
              </DescriptionNew>
            </TextWrapper>
          </Section>

          <ImageWrapper4>
            <img src="\img\kiss_emoji.png" alt="Kiss Emoji Image" />
          </ImageWrapper4>
          <Description3>
            지금 바로 미팅GO와 함께<br/>행복한 대학생활을 즐겨 보세요😄
          </Description3>
          <BtnStart id = "Btn_start" onClick={buttonClicked}>지금 시작하기 --&gt; </BtnStart>
          
        </MaxWidthWrapper>
      </Positioner>
      </>
    );
}

export default LandingPage;