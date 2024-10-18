import React, { useState, useEffect, useRef }  from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import html2canvas from 'html2canvas';
import { logEvent } from "firebase/analytics";

import { analytics } from '../firebase';
import resultBackground from "../assets/foodtest/유형테스트_결과페이지_배경.png";
import resultPageButton1 from "../assets/foodtest/유형테스트_결과페이지_버튼1.png";
import resultPageButton2 from "../assets/foodtest/유형테스트_결과페이지_버튼2.png";

import resultsData from "../data/resultsData"; // 16가지 결과 이미지들

import kakaoIcon from '../assets/share/kakao_share.png';
import instagramIcon from '../assets/share/insta_share.png';
import twitterIcon from '../assets/share/twitter_share.png';
import linkIcon from '../assets/share/link_copy.png';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
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

const ResultButton1 = styled.img`
  width: 70%;
  cursor: pointer;
`;

const ResultButton2 = styled.img`
  width: 25%;
  cursor: pointer;
`;

const SharePart = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 20px;
`;

const ShareTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  margin-top: 0px;
  margin-bottom: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const IconImage = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const ResultPage = () => {
  const { resultId } = useParams();
  const navigate = useNavigate();
  const result = resultsData[resultId];

  const [showShareMenu, setShowShareMenu] = useState(false);
  const resultRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
      script.async = true;
      script.onload = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    // Log event when the component mounts
    logEvent(analytics, 'foodtest_result_page_visit', {
      result_id: resultId,
      result_title: result.title,
    });
  }, [resultId]);

  if (!result) {
    return <div>결과가 없습니다. 테스트를 다시 실행해주세요.</div>;
  }

  const retakeTest = () => {
    logEvent(analytics, 'foodtest_retake_test_button_click');
    navigate("/food-test");
  };

  const shareToKakao = () => {
    logEvent(analytics, 'foodtest_share_to_kakao_click');
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '연애유형으로 보는 나의 흑백요리사 음식 테스트 결과',
          description: `나는 ${result.title}입니다!`,
          imageUrl: result.image,
          link: {
            mobileWebUrl: `${window.location.origin}/food-test/share/${resultId}`,
            webUrl: `${window.location.origin}/food-test/share/${resultId}`,
          },
        },
        buttons: [
          {
            title: '결과 확인하기',
            link: {
              mobileWebUrl: `${window.location.origin}/food-test/share/${resultId}`,
              webUrl: `${window.location.origin}/food-test/share/${resultId}`,
            },
          },
        ],
      });
    } else {
      alert('카카오톡 공유를 사용할 수 없습니다.');
      logEvent(analytics, 'error', {
        message: 'Kakao.share error',
        location: 'shareToKakao',
      });
    }
  };

  const shareViaWebAPI = () => {
    logEvent(analytics, 'foodtest_share_via_webapi_click');
    if (navigator.share) {
      navigator.share({
        title: '연애유형으로 보는 나의 흑백요리사 음식 테스트 결과',
        text: `나는 ${result.title}입니다!`,
        url: `${window.location.origin}/food-test/share/${resultId}`,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => {
          console.log('Error sharing', error);
          logEvent(analytics, 'error', {
            message: error.message,
            location: 'shareViaWebAPI',
          });
        });
    } else {
      alert('공유 기능을 사용할 수 없습니다. 브라우저를 확인해주세요.');
      logEvent(analytics, 'error', {
        message: 'Navigator.share not supported',
        location: 'shareViaWebAPI',
      });
    }
  };

  const shareToTwitter = () => {
    logEvent(analytics, 'foodtest_share_to_twitter_click');
    const text = encodeURIComponent(`나는 ${result.title}입니다! #흑백요리사음식테스트`);
    const url = encodeURIComponent(`${window.location.origin}/food-test/share/${resultId}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    window.open(twitterUrl, '_blank');
  };

  const copyLink = () => {
    logEvent(analytics, 'foodtest_copy_link_click');
    navigator.clipboard.writeText(`${window.location.origin}/food-test/share/${resultId}`)
      .then(() => {
        alert('링크가 클립보드에 복사되었습니다.');
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
        logEvent(analytics, 'error', {
          message: error.message,
          location: 'copyLink',
        });
      });
  };

  const shareToInstagram = () => {
    // 웹에서 인스타 직접 공유 불가, 이미지 다운로드 후 인스타에 업로드
    logEvent(analytics, 'foodtest_share_to_instagram_click');
    downloadResultImage();
    alert('이미지가 다운로드되었습니다. Instagram에서 공유하세요!');
  };

  const downloadResultImage = () => {
    if (resultRef.current) {
      html2canvas(resultRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'result.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <>
    <GlobalStyle />
    <div ref={resultRef}>
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
          onClick={shareViaWebAPI}
        />
      </ButtonsPart>
      <SharePart>
          <ShareTitle>내 결과 공유하기!</ShareTitle>
          <IconContainer>
            <IconButton onClick={shareToKakao}>
              <IconImage src={kakaoIcon} alt="KakaoTalk" />
            </IconButton>
            <IconButton onClick={shareToInstagram}>
              <IconImage src={instagramIcon} alt="Instagram" />
            </IconButton>
            <IconButton onClick={shareToTwitter}>
              <IconImage src={twitterIcon} alt="Twitter" />
            </IconButton>
            <IconButton onClick={copyLink}>
              <IconImage src={linkIcon} alt="Copy Link" />
            </IconButton>
          </IconContainer>
        </SharePart>
    </Container>
    </div>
    </>
  );
};

export default ResultPage;
