// SharePage.js
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { logEvent } from "firebase/analytics";


import { analytics } from '../firebase';
import resultBackground from "../assets/foodtest/유형테스트_결과페이지_배경.png";
import sharePageButton from "../assets/foodtest/유형테스트_공유페이지_버튼.png";

import resultsData from "../data/resultsData";

const GlobalStyle = createGlobalStyle`
  /* Your font-face declarations */
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://fastly.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSans-Light.woff2') format('woff2'),
         url('https://fastly.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSans-Light.woff') format('woff'),
         url('https://fastly.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSansTTFLight.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://fastly.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSans-Medium.woff2') format('woff2'),
         url('https://fastly.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSans-Medium.woff') format('woff'),
         url('https://fastly.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSansTTFMedium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://fastly.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSans-Bold.woff2') format('woff2'),
         url('https://fastly.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSans-Bold.woff') format('woff'),
         url('https://fastly.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSansTTFBold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;

const Container = styled.div`
  font-family: 'GmarketSans', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-position: center;

  @media (min-width: 600px) {
    margin: 0 auto;
    width: 375px;

    @media (max-height: 500px) {
      width: 250px;
    }
    @media (min-height: 850px) {
      width: 420px;
    }
    @media (min-height: 950px) {
      width: 480px;
    }
  }
`;

const MyFoodPart = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8%;
`;

const MyFoodTitle = styled.h2`
  font-size: 25px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 5px;

  @media (min-width: 500px) {
    font-size: 28px;
  }
`;

const ResultImage = styled.img`
  width: auto;
  max-width: 76%;
  height: auto;
  margin-top: 0px;
  margin-bottom: 5px;
  border-radius: 10px;
`;

const ResultTitle = styled.h3`
  width: 90%;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  margin-top: 15px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 1;
`;

const ResultShort = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  margin-top: -7px;
  margin-bottom: 0px;

  @media (min-width: 500px) {
    font-size: 16px;
  }
`;

const DescriptionBox = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  width: 90%;
  min-height: 15vh;
  max-height: 28vh;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 3px solid black;
  box-shadow: 0px 1px 11.6px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(24.5px);
  padding: 10px;
  overflow-y: auto;
`;

const DescriptionText = styled.p`
  font-size: 11px;
  font-weight: 400;
  color: #010101;
  text-align: left;
  white-space: pre-wrap;
  line-height: 1;
  margin: 0px;

  @media (min-width: 450px) {
    font-size: 12px;
  }

  @media (min-width: 600px) {
    font-size: 13px;
  }
`;

const CompatibilityPart = styled.div`
  width: 100%;
  height: fit-content;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
`;

const HalfSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompatibilityTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 5px;

  @media (min-width: 500px) {
    font-size: 18px;
  }
`;

const CompatibilityImage = styled.img`
  width: auto;
  max-width: 60%;
  height: auto;
  margin-top: 5px;
  border-radius: 10px;
`;

const CompatibilityShort = styled.p`
  width: 98%;
  font-size: 10px;
  font-weight: 300;
  color: #fff;
  margin-top: 8px;
  margin-bottom: 0px;
  text-align: center;

  @media (min-width: 500px) {
    font-size: 12px;
  }
`;

const CompatibilityName = styled.p`
  width: 95%;
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  margin-top: 2px;
  text-align: center;
  line-height: 1.2;

  @media (min-width: 500px) {
    font-size: 18px;
  }
`;

const ButtonsPart = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
`;

const ResultButton = styled.img`
  width: 90%;
  cursor: pointer;
`;

const SharePage = () => {
  const { resultId } = useParams();
  const navigate = useNavigate();
  const result = resultsData[resultId];

  useEffect(() => {
    // Log event when the component mounts
    logEvent(analytics, 'foodtest_share_page_visit', {
      result_id: resultId,
      result_title: result.title,
    });
  }, [resultId]);

  if (!result) {
    return <div>결과가 없습니다. 테스트를 다시 실행해주세요.</div>;
  }

  const retakeTest = () => {
    logEvent(analytics, 'foodtest_share_page_button_click');
    navigate("/food-test");
  };

  return (
    <>
      <GlobalStyle />
        <Container bgimage={resultBackground}>
          <MyFoodPart>
            <MyFoodTitle>친구의 음식 유형</MyFoodTitle>
            <ResultImage src={result.image} alt={result.title} />
            <ResultTitle>{result.title}</ResultTitle>
            <ResultShort>{result.short}</ResultShort>
            <DescriptionBox>
              <DescriptionText>{result.description}</DescriptionText>
            </DescriptionBox>
          </MyFoodPart>

          <CompatibilityPart>
            <HalfSection>
              <CompatibilityTitle>최고의 궁합</CompatibilityTitle>
              <CompatibilityImage
                src={resultsData[result.best].image}
                alt={resultsData[result.best].title}
              />
              <CompatibilityShort>{resultsData[result.best].short}</CompatibilityShort>
              <CompatibilityName>{resultsData[result.best].title}</CompatibilityName>
            </HalfSection>

            <HalfSection>
              <CompatibilityTitle>최악의 궁합</CompatibilityTitle>
              <CompatibilityImage
                src={resultsData[result.worst].image}
                alt={resultsData[result.worst].title}
              />
              <CompatibilityShort>{resultsData[result.worst].short}</CompatibilityShort>
              <CompatibilityName>{resultsData[result.worst].title}</CompatibilityName>
            </HalfSection>
          </CompatibilityPart>

          <ButtonsPart>
            <ResultButton
              src={sharePageButton} // Use your desired button image
              alt="Take Test"
              onClick={retakeTest}
            />
          </ButtonsPart>
        </Container>
    </>
  );
};

export default SharePage;
