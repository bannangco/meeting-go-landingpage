import React from 'react';
import styled from 'styled-components';


const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; // To push the content to the top and button to the bottom
  align-items: center; // Center content horizontally
  width: 100%;
  background-color: #fdf6f7;
`;


const MaxWidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px; // Set the maximum width for large screens
  margin: 0 auto; // This will center the div if the screen is larger than max-width
  background-color: #f8d7da;
  padding: 5vh 5vw; // Add some padding
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
`;

const Description2 = styled.p` // Use <p> for text, styled as h3
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center; // Center the text
  margin: 2vh 0; // Add top and bottom margin
`;

// Styling for the iframe that will contain the Google Form
const GoogleFormEmbed = styled.iframe`
  width: 100%; // Take the full width of the parent div
  height: 70vh; // Set a height for the iframe
  border: none; // Remove iframe border
  margin: 2vh 0; // Add top and bottom margin
`;

const CompleteButton = styled.button`
  width: 100%; // Take the full width of the parent div
  height: 7vh;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: black; // Black background color
  color: white; // Text color white
  margin: 2vh 0; // Add top and bottom margin
`;

function FormPage() {
  const googleFormUrl = 'https://forms.gle/7JJjUUUKruTkrfRu8';

  return (
    <Positioner>
      <MaxWidthWrapper>
        <Title>사전 신청하기!</Title>
        <Description1>
          현재 개발자들이 열심히 서비스를 만들고 있습니다!<br/>미리 신청해서 5만원 상당의 혜택을 받으세요.<br/>현재 XX명의 대학생들이 사전 신청을 완료했습니다!
        </Description1>
        <GoogleFormEmbed src={googleFormUrl} />
        <Description2>위에 구글 설문지가 보이지 않는다면?</Description2>
        <CompleteButton id="complete">
          사전 신청 설문지 링크
        </CompleteButton>
      </MaxWidthWrapper>
    </Positioner>
  );
}

export default FormPage;
