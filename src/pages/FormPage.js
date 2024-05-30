import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet-async";

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; // To push the content to the top and button to the bottom
  align-items: center; // Center content horizontally
  width: 100%;
  // min-width: 307px;
  // background-color: #fff4f4;
`;


const MaxWidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  min-width: 700px;
  margin: 0 auto; 
  // background-color: #fff4f4;
  padding: 0 5vw 8vh 5vw;

  @media (max-width: 768px) {
    width: auto; // Take the full width of the screen
    min-width: 100px;
    padding: 0 5%; // Use percentage for responsive padding
  }
`;


const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  text-align: center; // Center the text
  margin: 5vh 0 0 0; // Add top and bottom margin
  line-height: 1.36;
`;

const Description1 = styled.p` // Use <p> for text, styled as h3
  font-weight: 200;
  font-size: 15px;
  text-align: center; // Center the text
  margin: 0 0 2vh 0; // Add top and bottom margin
  line-height: 1.36;

  @media (max-width: 768px) {
    width: auto; // Take the full width of the screen
    padding: 1vh 5%; // Use percentage for responsive padding
  }
`;

const Description2 = styled.p` // Use <p> for text, styled as h3
  font-weight: 300;
  font-size: 24px;
  text-align: center; // Center the text
  margin: 2vh 0 4vh 0;

`;

// Styling for the iframe that will contain the Google Form
const GoogleFormEmbed = styled.iframe`
  width: 100%;
  height: 70vh; // Set a height for the iframe
  border: none; // Remove iframe border
  margin: 5vh 0;
`;

const ImageWrapper3 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 2vh 0 0 0;
  width: 80%;
`;

const CompleteButton = styled.button`
  width: 100%;
  height: 7vh;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: black;
  color: white;
  margin: 2vh 0;

  @media (max-width: 768px) {
    width: auto; // Take the full width of the screen
    padding: 1vh 5%; // Use percentage for responsive padding
    font-size: 1.1rem;
  }
`;

const StyledImage = styled.img`
  flex: 1;
  display: block;
  width: 100%;
`;

const ImageWrapper4 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 6vh 0 0 0;

  img {
    width: 154px;

    @media (max-width: 768px) {
      width: 100px;
    }
  }
`;

const BtnStart = styled.button`
  width: 190px;
  padding: 20px 5px;
  color: white;
  background-color: #9C41FF;
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
    background-color: #6d2db2;
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
    <StyledImage src={fallbackSrc} alt={alt} />
  </picture>
);

function FormPage() {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdVfSgWPLI-N9wBj3MSJJDKv-qpx88KRliz3pjDu0HeE_JBrg/viewform';

  // Function to handle the click on the button
  const handleFormButtonClick = () => {
    // Open the Google Form in a new tab
    window.open(googleFormUrl, '_blank');
  };
  const buttonClicked = (e) => {
    if (e.target.id === "signin") {
      // logEvent(analytics, `test_firebase_analytics_signin`);
      window.location = `/form/`;
    } else if (e.target.id === "Btn_form") {
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
      <link rel="canonical" href="/form" />
    </Helmet>
    <Positioner>
      <MaxWidthWrapper>
        <ImageWrapper3>
          <ImageWithFallback
            webpSrc="\img\new_landingp_5.webp"
            fallbackSrc="\img\new_landingp_5.png"
            alt="청춘으로 추억을 만들자, 미팅은? 미팅고 라고 적힌 미팅GO 대표 이미지"
          />
        </ImageWrapper3>
        <Title>서비스 사전 신청하기</Title>
        <Description1>
          아래 페이지에서 서비스를 사전 신청한 후 5만 원 상당의 혜택을 누려보세요
        </Description1>
        <GoogleFormEmbed src={googleFormUrl} alt="대학생 미팅 서비스 미팅고 앱을 사전신청 하는 구글 폼" />
        <ImageWrapper4>
          <img src="\img\cry_emoji.png" alt="Cry Emoji Image" />
        </ImageWrapper4>
        <Description2>위의 구글 설문지가 잘 보이지 않는다면?</Description2>
        <BtnStart id="Btn_form" onClick={buttonClicked}>
            구글 폼 연결
            <img src="\img\arrow_icon.png" alt="arrow icon" width="23" height="19" />
        </BtnStart>
      </MaxWidthWrapper>
    </Positioner>
    </>
  );
}

export default FormPage;
