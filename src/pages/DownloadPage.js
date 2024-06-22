import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet-async";
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MaxWidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  min-width: 700px;
  margin: 0 auto;
  padding: 0 5vw 8vh 5vw;

  @media (max-width: 768px) {
    width: auto;
    min-width: 100px;
    padding: 0 5%;
  }
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  text-align: center;
  margin: 5vh 0 0 0;
  line-height: 1.36;
`;

const Description = styled.p`
  font-weight: ${({ weight }) => weight || 200};
  font-size: ${({ size }) => size || '15px'};
  text-align: center;
  margin: ${({ margin }) => margin || '0 0 2vh 0'};
  line-height: 1.36;

  @media (max-width: 768px) {
    width: auto;
    padding: 1vh 5%;
    font-size: ${({ mobileSize }) => mobileSize || '15px'};
  }
`;

const Button = styled.button`
  width: 190px;
  padding: 20px 5px;
  color: white;
  background-color: ${({ bgColor }) => bgColor || '#9C41FF'};
  border: 0;
  font-weight: 200;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
    background-color: ${({ hoverColor }) => hoverColor || '#6d2db2'};
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
  }
`;

const ImageWithFallback = ({ webpSrc, fallbackSrc, alt }) => (
  <picture>
    <source srcSet={webpSrc} type="image/webp" />
    <source srcSet={fallbackSrc} type="image/png" />
    <img src={fallbackSrc} alt={alt} style={{ flex: 1, display: 'block', width: '100%' }} />
  </picture>
);

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: ${({ margin }) => margin || '2vh 0 0 0'};
  width: ${({ width }) => width || '80%'};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 4vh 0 2vh 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2vh;
  
  img {
    cursor: pointer;
    width: 200px;
    height: 200px;
  }
`;
const DownloadPage = () => {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.bannangco.meeting_go_mvp';
  const appStoreUrl = 'https://www.apple.com/app-store/';

  const handleButtonClick = (event, url) => {
    logEvent(analytics, 'download_button_click');
    window.open(url, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>미팅GO - 다운로드하기</title>
        <meta name="description" content="가장 편리하고 안전한 대학생 미팅 잡기 미팅GO! 지금 다운로드하세요!" />
        <meta name="keywords" content="미팅, 과팅, 다운로드, 대학생, meeting, 소개팅, 대학생, 미팅고, 미팅GO, meetinggo, 술친구, 술게임" />
        <meta name="author" content="Bannangco" />
        <meta property="og:type" content="website" />
        <meta property='og:site_name' content='미팅고.com' />
        <meta property='og:url' content='https://meetinggo.kr/download/' />
        <meta property='og:description' content="가장 편리하고 안전한 대학생 미팅 잡기 미팅GO! 지금 다운로드하세요!" />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:locale:alternate' content='en_US' />
        <meta property='og:title' content='미팅GO - 다운로드하기' />
        <meta property='og:image' content="https://images.pickapic.live/get/51b8f592-6199-c703-dbf1-2a112fcc0a70-1717126612.png" />
        <meta name="twitter:title" content="미팅GO - 다운로드하기" />
        <meta name="twitter:description" content="가장 편리하고 안전한 대학생 미팅 잡기 미팅GO! 지금 다운로드하세요!" />
        <meta name="twitter:image" content="https://images.pickapic.live/get/51b8f592-6199-c703-dbf1-2a112fcc0a70-1717126612.png" />
        <meta name="twitter:card" content="https://images.pickapic.live/get/51b8f592-6199-c703-dbf1-2a112fcc0a70-1717126612.png" />
        <link rel="canonical" href="/download" />
      </Helmet>
      <Positioner>
        <MaxWidthWrapper>
          <ImageWrapper>
            <ImageWithFallback
              webpSrc="\img\new_landingp_5.webp"
              fallbackSrc="\img\new_landingp_5.png"
              alt="청춘으로 추억을 만들자, 미팅은? 미팅고 라고 적힌 미팅GO 대표 이미지"
            />
          </ImageWrapper>
          <Title>미팅GO - 지금 다운로드하세요!</Title>
          <IconWrapper>
            <IconContainer>
              <img 
                src="\img\googleplay.svg" 
                alt="Playstore Icon"
                onClick={(e) => handleButtonClick(e, playStoreUrl)}
              />
              <Description>지금 플레이스토어에서 다운받으세요!</Description>
            </IconContainer>
            <IconContainer>
              <img 
                src="\img\appstore.svg" 
                alt="Appstore Icon"
                onClick={(e) => handleButtonClick(e, appStoreUrl)}
              />
              <Description>앱스토어는 1주일 내로 출시될 예정입니다..!<br/>1주일만 뒤에 다시 방문해주세요 ㅠㅠ</Description>
            </IconContainer>
          </IconWrapper>
        </MaxWidthWrapper>
      </Positioner>
    </>
  );
}

export default DownloadPage;
