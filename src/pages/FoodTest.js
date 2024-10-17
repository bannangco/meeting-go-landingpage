import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import backIcon from "../assets/back_vector.svg";
import logo from "../assets/logo.svg";

import mainPageImage from "../assets/foodtest/유형테스트_메인페이지.png";
import mainPageButton from "../assets/foodtest/유형테스트_메인페이지_버튼1.png";

import questionImage1 from "../assets/foodtest/유형테스트_문제1.png";
import questionButton1_1 from "../assets/foodtest/유형테스트_문제1_버튼1.png";
import questionButton1_2 from "../assets/foodtest/유형테스트_문제1_버튼2.png";

import questionImage2 from "../assets/foodtest/유형테스트_문제2.png";
import questionButton2_1 from "../assets/foodtest/유형테스트_문제2_버튼1.png";
import questionButton2_2 from "../assets/foodtest/유형테스트_문제2_버튼2.png";

import questionImage3 from "../assets/foodtest/유형테스트_문제3.png";
import questionButton3_1 from "../assets/foodtest/유형테스트_문제3_버튼1.png";
import questionButton3_2 from "../assets/foodtest/유형테스트_문제3_버튼2.png";
import questionButton3_3 from "../assets/foodtest/유형테스트_문제3_버튼3.png";
import questionButton3_4 from "../assets/foodtest/유형테스트_문제3_버튼4.png";

import questionImage4 from "../assets/foodtest/유형테스트_문제4.png";
import questionButton4_1 from "../assets/foodtest/유형테스트_문제4_버튼1.png";
import questionButton4_2 from "../assets/foodtest/유형테스트_문제4_버튼2.png";

import questionImage5 from "../assets/foodtest/유형테스트_문제5.png";
import questionButton5_1 from "../assets/foodtest/유형테스트_문제5_버튼1.png";
import questionButton5_2 from "../assets/foodtest/유형테스트_문제5_버튼2.png";
import questionButton5_3 from "../assets/foodtest/유형테스트_문제5_버튼3.png";
import questionButton5_4 from "../assets/foodtest/유형테스트_문제5_버튼4.png";

import questionImage6 from "../assets/foodtest/유형테스트_문제6.png";
import questionButton6_1 from "../assets/foodtest/유형테스트_문제6_버튼1.png";
import questionButton6_2 from "../assets/foodtest/유형테스트_문제6_버튼2.png";
import questionButton6_3 from "../assets/foodtest/유형테스트_문제6_버튼3.png";
import questionButton6_4 from "../assets/foodtest/유형테스트_문제6_버튼4.png";

import resultPageImage from "../assets/foodtest/유형테스트_결과페이지_배경.png";
import resultPageButton1 from "../assets/foodtest/유형테스트_결과페이지_버튼1.png";
import resultPageButton2 from "../assets/foodtest/유형테스트_결과페이지_버튼2.png";

import sharedPageButton from "../assets/foodtest/유형테스트_공유페이지_버튼.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${(props) => props.bgImage});
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
    @media (min-height: 950px) {
      width: 450px;
    }
  }
`;

const ButtonImage = styled.img`
  position: absolute;
  bottom: ${(props) => props.bottom || "15%"};
  left: ${(props) => props.left || "50%"};
  transform: translateX(-50%);
  width: 90%;
  max-width: 350px;
  cursor: pointer;

  @media (min-width: 768px) {
    @media (max-height: 500px) {
      width: 230px;
    }
    @media (max-height: 650px) {
      width: 280px;
    }
    @media (min-height: 950px) {
      max-width: 430px;
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

const BackIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 15px;
  cursor: pointer;
`;

const FoodTest = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // -1 means the main page
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      background: questionImage1,
      buttons: [
        { img: questionButton1_1, position: "20%" },
        { img: questionButton1_2, position: "8%" },
      ],
    },
    {
      background: questionImage2,
      buttons: [
        { img: questionButton2_1, position: "20%" },
        { img: questionButton2_2, position: "8%" },
      ],
    },
    {
        background: questionImage3,
        buttons: [
          { img: questionButton3_1, position: "31%" },
          { img: questionButton3_2, position: "22%" },
          { img: questionButton3_3, position: "13%" },
          { img: questionButton3_4, position: "4%" },
        ],
    },
    {
        background: questionImage4,
        buttons: [
          { img: questionButton4_1, position: "20%" },
          { img: questionButton4_2, position: "8%" },
        ],
    },
    {
        background: questionImage5,
        buttons: [
          { img: questionButton5_1, position: "31%" },
          { img: questionButton5_2, position: "22%" },
          { img: questionButton5_3, position: "13%" },
          { img: questionButton5_4, position: "4%" },
        ],
    },
    {
        background: questionImage6,
        buttons: [
          { img: questionButton6_1, position: "31%" },
          { img: questionButton6_2, position: "22%" },
          { img: questionButton6_3, position: "13%" },
          { img: questionButton6_4, position: "4%" },
        ],
    },
  ];

  const goToLandingPage = () => {
    navigate("/");
  };

  const startTest = () => {
    setCurrentQuestionIndex(0);
  };

  const handleAnswerClick = (buttonIndex) => {
    setAnswers([...answers, buttonIndex]);
    console.log("buttonIndex: ", buttonIndex);
    console.log("answer click, answers: ", answers);

    // Move to the next question or show result if it's the last question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const resultId = calculateResult(answers);
      alert("Test Completed!");
      navigate(`/food-test/result/${resultId}`);
    }
  };

  const calculateResult = (answers) => {
    console.log("calculateResult answers: ", answers);
    const sum = answers.reduce((acc, curr) => acc + curr, 0);
    const resultId = sum % 16;
    return resultId;
  };

  const goBackToMain = () => {
    setCurrentQuestionIndex(-1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Container bgImage={currentQuestionIndex === -1 ? mainPageImage : currentQuestion.background}>
      {currentQuestionIndex === -1 ? (
        <>
          <Logo src={logo} alt="MeetingGO Logo" onClick={goToLandingPage} />
          <ButtonImage src={mainPageButton} alt="Start Test" onClick={startTest} />
        </>
      ) : (
        <>
          <BackIcon src={backIcon} alt="Go back" onClick={goBackToMain} />
          {/* Render buttons for the current question */}
          {currentQuestion.buttons.map((button, index) => (
            <ButtonImage
              key={index}
              src={button.img}
              alt={`Option ${index + 1}`}
              bottom={button.position}
              onClick={() => handleAnswerClick(index)}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default FoodTest;
