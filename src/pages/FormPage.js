import React from 'react';
import styled from 'styled-components';
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
  max-width: 500px;
  margin: 0 auto; 
  background-color: #fff4f4;
  padding: 5vh 5vw;

  @media (max-width: 768px) {
    width: auto; // Take the full width of the screen
    padding: 5vh 5%; // Use percentage for responsive padding
  }
`;


const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  text-align: center; // Center the text
  margin: 2vh 0; // Add top and bottom margin
`;

const Description1 = styled.p` // Use <p> for text, styled as h3
  font-weight: bold;
  font-size: 1rem;
  text-align: center; // Center the text
  margin: 2vh 0; // Add top and bottom margin

  @media (max-width: 768px) {
    width: auto; // Take the full width of the screen
    padding: 1vh 5%; // Use percentage for responsive padding
    font-size: 0.72rem;
  }
`;

const Description2 = styled.p` // Use <p> for text, styled as h3
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center; // Center the text
  margin: 2vh 0;

`;

// Styling for the iframe that will contain the Google Form
const GoogleFormEmbed = styled.iframe`
  width: 100%;
  height: 70vh; // Set a height for the iframe
  border: none; // Remove iframe border
  margin: 2vh 0;
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

function FormPage() {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdVfSgWPLI-N9wBj3MSJJDKv-qpx88KRliz3pjDu0HeE_JBrg/viewform';

  // Function to handle the click on the button
  const handleFormButtonClick = () => {
    // Open the Google Form in a new tab
    window.open(googleFormUrl, '_blank');
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
        <Title>사전 신청하기!</Title>
        <Description1>
          서비스 런치: 2024년 3월 3일 <br/> 
          <br/>
          미리 신청한 사람들에게는... 5만원 상당의 혜택이..!
        </Description1>
        <GoogleFormEmbed src={googleFormUrl} alt="대학생 미팅 서비스 미팅고 앱을 사전신청 하는 구글 폼" />
        <Description2>위에 구글 설문지가 보이지 않는다면?</Description2>
        <CompleteButton onClick={handleFormButtonClick}>
          사전 신청 설문지 링크
        </CompleteButton>
      </MaxWidthWrapper>
    </Positioner>
    </>
  );
}

export default FormPage;
