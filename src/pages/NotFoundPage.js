import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet-async";

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 60px;
  color: #9C41FF;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #333;
  margin-bottom: 40px;
`;

const HomeButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  background-color: #9C41FF;
  border-radius: 25px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-bottom: 30px;

  &:hover {
    background-color: #e55a4f;
  }
`;

const CuteImage = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 40px;
`;

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <link rel="canonical" href="/404" />
      </Helmet>
      <Positioner>
        <CuteImage src="/img/cute_404_image.webp" alt="Cute 404 Image" />
        <Title>허거덩!</Title>
        <Description>존재하지 않는 페이지 입니다.</Description>
        <HomeButton href="https://meetinggo.kr">Home으로 돌아가기</HomeButton>
      </Positioner>
    </>
  );
}

export default NotFoundPage;
