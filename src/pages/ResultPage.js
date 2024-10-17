import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import backIcon from "../assets/back_vector.svg";
import logo from "../assets/logo.svg";

import resultBackground from "../assets/foodtest/유형테스트_결과페이지_배경.png";
import resultPageButton1 from "../assets/foodtest/유형테스트_결과페이지_버튼1.png";
import resultPageButton2 from "../assets/foodtest/유형테스트_결과페이지_버튼2.png";

// 16가지 결과 이미지들
import resultsData from "../data/resultsData";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 375px;

    @media (max-height: 500px) {
      width: 250px;
    }
    @media (max-height: 650px) {
      width: 300px;
    }
    @media (min-height: 850px) {
      width: 420px;
    }
    @media (min-height: 950px) {
      width: 480px;
    }
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;
  cursor: pointer;
`;

const MyFoodPart = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const MyFoodTitle = styled.h2`
  font-size: 25px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 0px;
`;

const ResultImage = styled.img`
  width: auto;
  max-width: 80%;
  height: auto;
  margin-top: 5px;
  border-radius: 10px;
`;

const ResultTitle = styled.h3`
  font-size: 28px;
  font-weight: 400;
  color: #fff;
  margin-top: 5px;
  margin-bottom: 0px;
`;

const ResultShort = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  margin-top: 0px;
  margin-bottom: 5px;
`;

const DescriptionBox = styled.div`
  margin-top: 5px;
  width: 90%;
  height: 37%;
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
  line-height: 1.1;
  margin: 0px;
`;

const CompatibilityPart = styled.div`
  width: 100%;
  height: 20%;
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
`;

const CompatibilityImage = styled.img`
  width: auto;
  max-width: 60%;
  height: auto;
  margin-top: 5px;
  border-radius: 10px;
`;

const CompatibilityShort = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #fff;
  margin-top: 5px;
  margin-bottom: 0px;
`;

const CompatibilityName = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  margin-top: 0px;
`;

const ButtonsPart = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultButton1 = styled.img`
  width: 70%;
  cursor: pointer;
`;

const ResultButton2 = styled.img`
  width: 25%;
  cursor: pointer;
`;

const ResultPage = () => {
  const { resultId } = useParams();
  const navigate = useNavigate();
  const result = resultsData[resultId];

  if (!result) {
    // Handle invalid resultId
    return <div>Invalid result. Please retake the test.</div>;
  }

  const goToLandingPage = () => {
    navigate("/");
  };

  const retakeTest = () => {
    navigate("/food-test");
  };

  const shareResult = () => {
    alert("Share functionality is not implemented yet.");
  };

  return (
    <Container bgimage={resultBackground}>

      <MyFoodPart>
        <MyFoodTitle>나의 음식 유형</MyFoodTitle>
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
        <ResultButton1
          src={resultPageButton1}
          alt="Retake Test"
          onClick={retakeTest}
        />
        <ResultButton2
          src={resultPageButton2}
          alt="Share Result"
          onClick={shareResult}
        />
      </ButtonsPart>
    </Container>
  );
};

export default ResultPage;
