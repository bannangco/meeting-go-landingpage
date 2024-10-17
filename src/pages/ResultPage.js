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
  justify-content: center;
  height: 100vh;
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 375px;
  }
`;

const BackIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 15px;
  cursor: pointer;
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;
  cursor: pointer;
`;

const ResultImage = styled.img`
  /* Styles for the result image */
`;

const ButtonImage = styled.img`
  position: absolute;
  bottom: ${(props) => props.bottom || "15%"};
  left: ${(props) => props.left || "50%"};
  transform: translateX(-50%);
  width: 90%;
  max-width: 350px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  /* Styles for text content */
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

  return (
    <Container bgimage={resultBackground}>
      {/* Back to Home Logo */}
      <Logo src={logo} alt="Logo" onClick={goToLandingPage} />

      {/* Result Content */}
      <ResultImage src={result.image} alt={result.title} />

      <TextContainer>
        <h1>{result.title}</h1>
        <p>{result.description}</p>
      </TextContainer>

      {/* Buttons */}
      <ButtonImage src={resultPageButton1} alt="Retake Test" onClick={retakeTest} />
      {/* Add more buttons as needed */}
    </Container>
  );
};

export default ResultPage;
