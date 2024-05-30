import React from "react";
import styled from 'styled-components';
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";
import { Helmet } from "react-helmet-async";

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 307px;
`;

const MaxWidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 5vh 5vw 8vh 5vw;

  @media (max-width: 768px) {
    width: auto;
    padding: 5vh 5%;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
  margin: 2vh 0 0 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Title2 = styled.h2`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const TitleNew = styled.h3`
  font-weight: 400;
  font-size: 32px;
  margin: 0 0 10px 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const DescriptionNew = styled.p`
  font-weight: 100;
  font-size: 14px;
  margin: 14px 0 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description1 = styled.div`
  font-weight: 200;
  font-size: 20px;
  text-align: center;
  margin: 5vh 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description2 = styled.p`
  font-weight: 200;
  font-size: 15px;
  text-align: center;
  margin: 0 0 5vh 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Description3 = styled.p`
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  margin: 1vh 0 2vh 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 60px 0 10px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
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

const BtnInstagram = styled.button`
  width: 190px;
  padding: 20px 5px;
  color: white;
  background-color: #5f5f5f;
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
    background-color: #424242;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
  }
`;

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3vh 0 10vh 0;
  align-items: center;
`;

const StyledImage = styled.img`
  flex: 1;
  display: block;
  width: 100%;
`;

const ContentDiv = styled.div`
  flex: 1;
  width: 100%;
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 364px;
  padding: 0 20px;
  border-bottom: 2px solid #eaeaea;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin: 0 0 20px 0;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  img {
    width: 100%;
    height: auto;
    max-height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    img {
      width: auto;
      height: auto;
      max-height: 200px;
    }
  }
`;

const ImageWrapper2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 8vh 0 2vh 0;
  width: 138px;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const ImageWrapper3 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 2vh 0 0 0;
  width: 80%;
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

const TextWrapper = styled.div`
  flex: 1;
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};

  @media (max-width: 768px) {
    align-items: center;
    margin: auto;
  }
`;

const SmallTextWrapper = styled.div`
  font-weight: 200;
  margin: 0 0 2px 0;
  font-size: 12px;
  text-align: center;
`;

const TextWrapper2 = styled.p`
  font-weight: 200;
  font-size: 16px;
`;

const ImageWithFallback = ({ webpSrc, fallbackSrc, alt }) => (
  <picture>
    <source srcSet={webpSrc} type="image/webp" />
    <source srcSet={fallbackSrc} type="image/png" />
    <StyledImage src={fallbackSrc} alt={alt} />
  </picture>
);

const LandingPage = () => {
  const buttonClicked = (e) => {
    if (e.target.id === "signin") {
      logEvent(analytics, `test_firebase_analytics_signin`);
      window.location = `/form/`;
    } else if (e.target.id === "Btn_start") {
      window.location = `/form/`;
    } else {
      window.location = `/`;
    }
  };

  return (
    <>
      <Helmet>
        <title>미팅GO - 대학생 미팅은? 미팅고!</title>
        <meta name="description" content="가장 편리하고 안전한 대학생 미팅 잡기! 친구들과 미팅고에서 미팅 잡자!" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Positioner>
        <MaxWidthWrapper>
          <ImageWrapper3>
            <ImageWithFallback
              webpSrc="\img\new_landingp_1.webp"
              fallbackSrc="\img\new_landingp_1.png"
              alt="청춘으로 추억을 만들자, 미팅은? 미팅고 라고 적힌 미팅GO 대표 이미지"
            />
          </ImageWrapper3>
          <Description1>
            너무 부담스러운 소개팅에 질렸다면?<br />
            친구들과 편하게 놀고 오는 미팅 GO!<br />
            <ButtonContainer>
              <div>
                <SmallTextWrapper>지금 바로 미팅고 시작하기</SmallTextWrapper>
                <BtnStart id="Btn_start" onClick={buttonClicked}>
                  지금 시작하기
                  <img src="\img\arrow_icon.png" alt="arrow icon" width="23" height="19" />
                </BtnStart>
              </div>
              <div>
                <SmallTextWrapper>미팅고의 소식이 궁금하다면</SmallTextWrapper>
                <BtnInstagram id="Btn_instagram" onClick={() => window.open('https://www.instagram.com/meetinggo_official/', '_blank')}>
                  인스타그램
                  <img src="\img\instagram_icon.png" alt="Instagram icon" width="24" height="24" />
                </BtnInstagram>
              </div>
            </ButtonContainer>
            <TextWrapper2>
              현재 24명의 대학생들이 사전 신청을 완료했어요 😄
            </TextWrapper2>
          </Description1>

          <ImageWrapper2>
            <img src="\img\star.png" alt="Star Image" />
          </ImageWrapper2>
          <Title2> 미팅GO는 달라요 </Title2>
          <Description2>
            미팅GO만의 차별점을 아래에서 확인해보세요 🤗
          </Description2>

          <Section>
            <TextWrapper>
              <TitleNew>확실한 신원 관리</TitleNew>
              <DescriptionNew>
                대학생 사용자의 재학증명서 인증을 통해 확실한 신원을 확보하며, 3단계 인증을 통한 신원 관리
              </DescriptionNew>
            </TextWrapper>
            <ImageWrapper>
              <img src="\img\new_landingp_2.png" alt="Image 1 Description" />
            </ImageWrapper>
          </Section>

          <Section reverse>
            <TextWrapper reverse>
              <TitleNew>미팅 팀 평가를 통한 실사용자 관리</TitleNew>
              <DescriptionNew>
                미팅 후 상대 팀에 대한 리뷰를 남길 수 있고, 본인의 프로필에 선택된 리뷰를 표시해 우호도를 높일 수 있음
              </DescriptionNew>
            </TextWrapper>
            <ImageWrapper>
              <img src="\img\new_landingp_3.png" alt="Image 2 DescriptionNew" />
            </ImageWrapper>
          </Section>

          <Section>
            <TextWrapper>
              <TitleNew>편의성 극대화, 미팅 전과정 관리</TitleNew>
              <DescriptionNew>
                팀 생성, 매칭, 채팅/약속, 미팅지원, 리뷰, 이벤트 등 앱 내에서 미팅의 시작부터 후까지 관리하는 all-in-one 서비스, 지도 및 캘린더 공유 서비스를 통한 미팅 편의성 향상
              </DescriptionNew>
            </TextWrapper>
            <ImageWrapper>
              <img src="\img\new_landingp_4.png" alt="Image 3 DescriptionNew" />
            </ImageWrapper>
          </Section>

          <ImageWrapper4>
            <img src="\img\kiss_emoji.png" alt="Kiss Emoji Image" />
          </ImageWrapper4>
          <Description3>
            지금 바로 미팅GO와 함께<br />행복한 대학생활을 즐겨 보세요😄
          </Description3>
          <BtnStart id="Btn_start" onClick={buttonClicked}>
            지금 시작하기
            <img src="\img\arrow_icon.png" alt="arrow icon" width="23" height="19" />
          </BtnStart>
        </MaxWidthWrapper>
      </Positioner>
    </>
  );
};

export default LandingPage;
