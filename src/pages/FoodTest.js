import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import { analytics } from '../firebase';
import { logEvent } from "firebase/analytics";
import axios from 'axios';

import backIcon from "../assets/back_vector.svg";
import logo from "../assets/logo.svg";

import mainPageImage from "../assets/foodtest/유형테스트_메인페이지.png";
import mainPageButton from "../assets/foodtest/유형테스트_메인페이지_버튼1.png";
import mainPageButton2 from "../assets/foodtest/유형테스트_메인페이지_버튼2.png";

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

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSans-Light.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSans-Light.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSansTTFLight.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSans-Medium.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSans-Medium.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSansTTFMedium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSans-Bold.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSans-Bold.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket-sans/GmarketSansTTFBold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;

const Container = styled.div`
  font-family: 'GmarketSans', sans-serif;

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

const ButtonImage = styled.img`
  position: absolute;
  bottom: ${(props) => props.bottom || "15%"};
  left: ${(props) => props.left || "50%"};
  transform: translateX(-50%);
  width: ${(props) => props.width || "90%"};
  max-width: ${(props) => props.maxwidth || "350px"};
  cursor: pointer;

  @media (min-width: 768px) {
    @media (max-height: 500px) {
      width: 230px;
    }
    @media (max-height: 650px) {
      width: 280px;
    }
    @media (min-height: 850px) {
      max-width: 400px;
      max-width: ${(props) => props.maxwidth || "400px"};
    }
    @media (min-height: 950px) {
      max-width: 430px;
      max-width: ${(props) => props.maxwidth || "430px"};
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

  const [questionStartTime, setQuestionStartTime] = useState(null);
  const [hasAbandoned, setHasAbandoned] = useState(false);
  const abandonmentTimeout = useRef(null);

  useEffect(() => {
    // Log event when the component mounts
    logEvent(analytics, 'food_test_visit');
  }, []);

  useEffect(() => {
    return () => {
      // Component will unmount
      if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length && !hasAbandoned) {
        logEvent(analytics, 'test_abandoned', {
          last_question_index: currentQuestionIndex,
        });
      }
      // Clear any timeouts
      if (abandonmentTimeout.current) {
        clearTimeout(abandonmentTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (currentQuestionIndex >= 0) {
      // Start timer for the current question
      setQuestionStartTime(Date.now());
  
      // Clear any existing abandonment timeout
      if (abandonmentTimeout.current) {
        clearTimeout(abandonmentTimeout.current);
      }
  
      // Set a timeout to detect abandonment (e.g., 60 seconds of inactivity)
      abandonmentTimeout.current = setTimeout(() => {
        if (currentQuestionIndex < questions.length && !hasAbandoned) {
          logEvent(analytics, 'test_abandoned', {
            last_question_index: currentQuestionIndex,
          });
          setHasAbandoned(true);
        }
      }, 60000); // 60 seconds
    }
  }, [currentQuestionIndex]);

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
    logEvent(analytics, 'landing_page_button_click');
    navigate("/");
  };

  const startTest = () => {
    logEvent(analytics, 'start_test_button_click');
    setCurrentQuestionIndex(0);
  };

  const handleAnswerClick = async (buttonIndex) => {
    const timeSpent = Date.now() - questionStartTime;

    const newAnswers = [...answers, buttonIndex];
    setAnswers(newAnswers);

    logEvent(analytics, 'question_answered', {
      question_index: currentQuestionIndex,
      answer_index: buttonIndex,
      time_spent_ms: timeSpent,
    });

    if (abandonmentTimeout.current) {
      clearTimeout(abandonmentTimeout.current);
    }

    // Move to the next question or show result if it's the last question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const calcResult = calculateResult(answers);
      console.log("answers:", answers);
      console.log("calcResult:", calcResult);

      logEvent(analytics, 'test_completed', {
        result_id: calcResult,
        answers: newAnswers.toString(), // Convert array to string for logging
      });

      try {
        await axios.post(`https://${process.env.REACT_APP_API_DNS}/api/foodTest/testResult`, {
          answers: answers,
          resultId: calcResult,
        });
        console.log('Test result sent successfully');
      } catch (error) {
        console.error('Error sending test result:', error);
      }

      navigate(`/food-test/result/${calcResult}`);
    }
  };

  const calculateResult = (answers) => {
    let IE = 0;
    let SN = 0;
    let TF = 0;
    let JP = 0;

    for (let i = 0; i < answers.length; i++) {
      const answer = answers[i];
      switch (i) {
        case 0:
          IE += answer === 0 ? -1 : 1;
          break;
        case 1:
          JP += answer === 0 ? 1 : -1;
          break;
        case 2:
          if (answer === 0 || answer === 2) {
            IE += 1;
          } else {
            IE -= 1;
          }
          break;
        case 3:
          SN += answer === 0 ? 1 : -1;
          break;
        case 4:
          if (answer === 0) {
            TF += 1;
            JP += 1;
          } else if (answer === 1) {
            TF += 1;
            JP -= 1;
          } else if (answer === 2) {
            TF -= 1;
            JP += 1;
          } else {
            TF -= 1;
            JP -= 1;
          }
          break;
        case 5:
          if (answer === 0) {
            IE -= 1;
            JP += 1;
          } else if (answer === 1) {
            IE -= 1;
            JP -= 1;
          } else if (answer === 2) {
            IE += 1;
            JP += 1;
          } else {
            IE += 1;
            JP -= 1;
          }
          break;
        default:
          break;
      }
    }

    let calcResult;

    if (IE>0) {
      if (SN>0) {
        if (TF>0) {
          if (JP>0) {
            calcResult = 0; //istj
          } else {
            calcResult = 4; //istp
          }
        } else {
          if (JP>0) {
            calcResult = 1; //isfj
          } else {
            calcResult = 5; //isfp
          }
        }
      } else {
        if (TF>0) {
          if (JP>0) {
            calcResult = 3; //intj
          } else {
            calcResult = 7; //intp
          }
        } else {
          if (JP>0) {
            calcResult = 6; //infj
          } else {
            calcResult = 2; //infp
          }
        }
      }
    }
    else {
      if (SN>0) {
        if (TF>0) {
          if (JP>0) {
            calcResult = 12; //estj
          } else {
            calcResult = 8; //estp
          }
        } else {
          if (JP>0) {
            calcResult = 13; //esfj
          } else {
            calcResult = 9; //esfp
          }
        }
      } else {
        if (TF>0) {
          if (JP>0) {
            calcResult = 15; //entj
          } else {
            calcResult = 11; //entp
          }
        } else {
          if (JP>0) {
            calcResult = 14; //enfj
          } else {
            calcResult = 10; //enfp
          }
        }
      }
    }

    return calcResult;
  };

  const goBackToMain = () => {
    setCurrentQuestionIndex(-1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
    <GlobalStyle />
    <Container bgimage={currentQuestionIndex === -1 ? mainPageImage : currentQuestion.background}>
      {currentQuestionIndex === -1 ? (
        <>
          <Logo src={logo} alt="MeetingGO Logo" onClick={goToLandingPage} />
          <ButtonImage src={mainPageButton} alt="Start Test" onClick={startTest} />
          <ButtonImage src={mainPageButton2} alt="Start Test" onClick={goToLandingPage} bottom="9%" width="50%" maxwidth="250px" />
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
    </>
  );
};

export default FoodTest;
