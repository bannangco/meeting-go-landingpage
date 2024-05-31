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

const GoogleFormEmbed = styled.iframe`
  width: 100%;
  height: 70vh;
  border: none;
  margin: 5vh 0;
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

const FormPage = () => {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdVfSgWPLI-N9wBj3MSJJDKv-qpx88KRliz3pjDu0HeE_JBrg/viewform';

  const handleButtonClick = (event, eventName) => {
    logEvent(analytics, eventName);
    if (event.target.id === "Btn_form") {
      window.open(googleFormUrl, '_blank');
    } else {
      window.location = `/`;
    }
  };

  return (
    <>
      <Helmet>
        <title>미팅GO - 사전신청하기</title>
        <meta name="description" content="가장 편리하고 안전한 대학생 미팅 잡기 미팅GO! 사전신청하고 많은 혜택을 받으세요! 간단한 사전신청을 통해 서비스 오픈 후 5만원 상당의 혜택을 수 있습니다." />
        <meta name="keywords" content="미팅, 과팅, 사전신청, 사전등록, 사전예약, 대학생, meeting, 소개팅, 대학생, 미팅고, meetinggo" />
        <meta name="author" content="Bannangco" />
        <meta property="og:type"       content="website" />
        <meta property='og:site_name'  content='미팅고.com' />
        <meta property='og:url'        content='https://meetinggo.kr/form/' />
        <meta property='og:description' content="가장 편리하고 안전한 대학생 미팅 잡기 미팅GO! 사전신청하고 많은 혜택을 받으세요! 간단한 사전신청을 통해 서비스 오픈 후 5만원 상당의 혜택을 수 있습니다." />
        <meta property='og:locale'     content='ko_KR' />
        <meta property='og:locale:alternate' content='en_US' />
        <meta property='og:title'      content='미팅GO - 사전신청하기' />
        <meta property='og:image'      content="%PUBLIC_URL%/img/meetinggo_og_image.png" />
        <meta name="twitter:title" content="미팅GO - 사전신청하기" />
        <meta name="twitter:description" content="가장 편리하고 안전한 대학생 미팅 잡기 미팅GO! 사전신청하고 많은 혜택을 받으세요! 간단한 사전신청을 통해 서비스 오픈 후 5만원 상당의 혜택을 수 있습니다." />
        <meta name="twitter:image" content="%PUBLIC_URL%/img/meetinggo_og_image.png" />
        <meta name="twitter:card" content="%PUBLIC_URL%/img/meetinggo_og_image.png" />
        <link rel="canonical" href="/form" />
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
          <Title>서비스 사전 신청하기</Title>
          <Description>
            아래 페이지에서 서비스를 사전 신청한 후 5만 원 상당의 혜택을 누려보세요
          </Description>
          <GoogleFormEmbed src={googleFormUrl} title="Google Form" onLoad={() => logEvent(analytics, 'form_google_form_load')} />
          <ImageWrapper margin="6vh 0 0 0" width="154px">
            <ImageWithFallback
              webpSrc="\img\cry_emoji.webp"
              fallbackSrc="\img\cry_emoji.png"
              alt="Cry Emoji Image"
            />
          </ImageWrapper>
          <Description weight="300" size="24px" margin="2vh 0 4vh 0">
            위의 구글 설문지가 잘 보이지 않는다면?
          </Description>
          <Button id="Btn_form" onClick={(e) => handleButtonClick(e, 'form_click_google_form')}>
            구글 폼 연결
            <ImageWithFallback
              webpSrc="\img\arrow_icon.webp"
              fallbackSrc="\img\arrow_icon.png"
              alt="arrow icon"
            />
          </Button>
        </MaxWidthWrapper>
      </Positioner>
    </>
  );
}

export default FormPage;
