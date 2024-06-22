import React from "react";
import styled from 'styled-components';
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";
import { Helmet } from "react-helmet-async";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 307px;
`;

const ContentWrapper = styled.div`
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

const HeaderTitle = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
  margin: 2vh 0 0 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SubSectionTitle = styled.h3`
  font-weight: 400;
  font-size: 32px;
  margin: 0 0 0 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const DescriptionText = styled.p`
  font-weight: ${({ weight }) => weight || 100};
  font-size: ${({ size }) => size || '14px'};
  margin: 14px 0 5px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${({ mobileSize }) => mobileSize || '12px'};
  }
`;

const CenteredDescription = styled.div`
  font-weight: 200;
  font-size: 20px;
  text-align: center;
  margin: 5vh 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FlexButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 60px 0 10px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const StyledButton = styled.button`
  width: 190px;
  padding: 20px 5px;
  margin: 15px 0 20px 0;
  color: white;
  background-color: ${({ bgColor }) => bgColor || '#9C41FF'};
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
    background-color: ${({ hoverColor }) => hoverColor || '#6d2db2'};
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
    margin: 5px 0 20px 0;
  }
`;

const ImageWithFallback = ({ svgSrc, webpSrc, fallbackSrc, alt }) => (
  <picture>
    {svgSrc && <source srcSet={svgSrc} type="image/svg+xml" />}
    {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
    <source srcSet={fallbackSrc} type="image/png" />
    <img src={fallbackSrc} alt={alt} style={{ flex: 1, display: 'block', width: '100%' }} />
  </picture>
);


const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems || 'flex-end'};
  margin: ${({ margin }) => margin || '0'};

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
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px 0 0 0;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    margin: auto;
    align-items: center;
  padding: 20px 0 0 0;

  }
`;

const SmallText = styled.div`
  font-weight: 200;
  margin: 0 0 2px 0;
  font-size: 12px;
  text-align: center;
`;

const InfoText = styled.p`
  font-weight: 200;
  font-size: 16px;
`;

const LandingPage = () => {
  const handleButtonClick = (event, eventName) => {
    logEvent(analytics, eventName);
    if (event.target.id === "Btn_start") {
      window.location = `/download/`;
    } else {
      window.location = `/`;
    }
  };

  const handleInstagramClick = () => {
    logEvent(analytics, 'click_instagram');
    window.open('https://www.instagram.com/meetinggo_official/', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>미팅GO - 대학생 미팅은? 미팅고!</title>
        <meta name="description" content="가장 편리하고 안전한 대학생 미팅 잡기! 친구들과 미팅고에서 미팅 잡자!" />
        <meta name="keywords" content="미팅, 과팅, 대학생, meeting, 소개팅, 대학생, 미팅고, meetinggo" />
        <meta name="author" content="Bannangco" />
        <meta property="og:type"       content="website" />
        <meta property='og:site_name'  content='미팅고.com' />
        <meta property='og:url'        content='https://meetinggo.kr/' />
        <meta property='og:locale'     content='ko_KR' />
        <meta property='og:locale:alternate' content='en_US' />
        <meta property='og:title'      content='미팅GO - 대학생 미팅은? 미팅고!' />
        <meta property="og:description" content="가장 편리하고 안전한 대학생 미팅 잡기! 친구들과 미팅고에서 미팅 잡자!" />
        <meta property='og:image'      content="https://images.pickapic.live/get/51b8f592-6199-c703-dbf1-2a112fcc0a70-1717126612.png" />
        <meta name="twitter:title" content="미팅GO - 대학생 미팅은? 미팅고!" />
        <meta name="twitter:description" content="가장 편리하고 안전한 대학생 미팅 잡기! 친구들과 미팅고에서 미팅 잡자!" />
        <meta name="twitter:image" content="https://images.pickapic.live/get/51b8f592-6199-c703-dbf1-2a112fcc0a70-1717126612.png" />
        <meta name="twitter:card" content="https://images.pickapic.live/get/51b8f592-6199-c703-dbf1-2a112fcc0a70-1717126612.png" />
        <link rel="canonical" href="/" />

      </Helmet>
      <PageContainer>
        <ContentWrapper>
          <ImageWrapper margin="2vh 0 0 0" width="80%">
            <ImageWithFallback
              svgSrc="\img\new_landingp_1.svg"
              webpSrc="\img\new_landingp_1.webp"
              fallbackSrc="\img\new_landingp_1.png"
              alt="청춘으로 추억을 만들자, 미팅은? 미팅고 라고 적힌 미팅GO 대표 이미지"
            />
          </ImageWrapper>
          <CenteredDescription>
            너무 부담스러운 소개팅에 질렸다면?<br />
            친구들과 편하게 놀고 오는 미팅 GO!<br />
            <FlexButtonContainer>
              <div>
                <SmallText>지금 바로 미팅고 시작하기</SmallText>
                <StyledButton id="Btn_start" onClick={(e) => handleButtonClick(e, 'click_start_now')}>
                  지금 시작하기
                  <ImageWithFallback
                    svgSrc="\img\arrow_icon.svg"
                    webpSrc="\img\arrow_icon.webp"
                    fallbackSrc="\img\arrow_icon.png"
                    alt="arrow icon"
                  />
                </StyledButton>
              </div>
              <div>
                <SmallText>미팅고의 소식이 궁금하다면</SmallText>
                <StyledButton bgColor="#5f5f5f" hoverColor="#424242" onClick={handleInstagramClick}>
                  인스타그램
                  <ImageWithFallback
                    svgSrc="\img\instagram_icon.svg"
                    webpSrc="\img\instagram_icon.webp"
                    fallbackSrc="\img\instagram_icon.png"
                    alt="Instagram icon"
                  />
                </StyledButton>
              </div>
            </FlexButtonContainer>
            {/* <InfoText>
              현재 66명의 대학생들이 사전 신청을 완료했어요 😄
            </InfoText> */}
          </CenteredDescription>

          <ImageWrapper alignItems="center" margin="8vh 0 2vh 0" width="138px">
            <ImageWithFallback
              svgSrc="\img\star.svg"
              webpSrc="\img\star.webp"
              fallbackSrc="\img\star.png"
              alt="Star Image"
            />
          </ImageWrapper>
          <SectionTitle> 미팅GO는 달라요 </SectionTitle>
          <DescriptionText weight="200" size="15px" mobileSize="14px">
            미팅GO만의 차별점을 아래에서 확인해보세요 🤗
          </DescriptionText>

          <Section>
            <TextContainer>
              <SubSectionTitle>확실한 신원 관리</SubSectionTitle>
              <DescriptionText>
                대학생 사용자의 재학증명서 인증을 통해 확실한 신원을 확보하며, <br/> 3단계 인증을 통해 엄격하게 신원을 관리합니다.
              </DescriptionText>
            </TextContainer>
            <ImageWrapper>
              <ImageWithFallback
                webpSrc="\img\new_landingp_2.webp"
                fallbackSrc="\img\new_landingp_2.png"
                alt="Image 1 Description"
              />
            </ImageWrapper>
          </Section>

          <Section reverse>
            <TextContainer alignItems="flex-end" textAlign="right">
              <SubSectionTitle>미팅 팀 평가를 통한 실사용자 관리</SubSectionTitle>
              <DescriptionText>
                미팅 후 상대 팀에 대한 리뷰를 남길 수 있고, <br/> 본인의 프로필에 선택된 리뷰를 표시해 우호도를 높일 수 있습니다.
              </DescriptionText>
            </TextContainer>
            <ImageWrapper>
              <ImageWithFallback
                webpSrc="\img\new_landingp_3.webp"
                fallbackSrc="\img\new_landingp_3.png"
                alt="Image 2 Description"
              />
            </ImageWrapper>
          </Section>

          <Section>
            <TextContainer>
              <SubSectionTitle>편의성 극대화, 미팅 전과정 관리</SubSectionTitle>
              <DescriptionText>
                팀 생성, 매칭, 채팅/약속, 미팅지원, 리뷰, 이벤트 등 <br/> 
                앱 내에서 미팅의 시작부터 후까지 관리하는 all-in-one 서비스입니다. <br/>
                지도 및 캘린더 공유 서비스를 통하여 미팅의 편의성을 향상합니다.
              </DescriptionText>
            </TextContainer>
            <ImageWrapper>
              <ImageWithFallback
                webpSrc="\img\new_landingp_4.webp"
                fallbackSrc="\img\new_landingp_4.png"
                alt="Image 3 Description"
              />
            </ImageWrapper>
          </Section>

          <ImageWrapper margin="6vh 0 0 0" width="154px">
            <ImageWithFallback
              svgSrc="\img\kiss_emoji.svg"
              webpSrc="\img\kiss_emoji.webp"
              fallbackSrc="\img\kiss_emoji.png"
              alt="Kiss Emoji Image"
            />
          </ImageWrapper>
          <DescriptionText weight="300" size="24px" mobileSize="20px">
            지금 바로 미팅GO와 함께<br />행복한 대학생활을 즐겨 보세요😄<br/><br/>
          </DescriptionText>
          <StyledButton id="Btn_start" onClick={(e) => handleButtonClick(e, 'click_start_now_bottom')}>
            지금 시작하기
            <ImageWithFallback
              svgSrc="\img\arrow_icon.svg"
              webpSrc="\img\arrow_icon.webp"
              fallbackSrc="\img\arrow_icon.png"
              alt="arrow icon"
            />
          </StyledButton>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default LandingPage;
