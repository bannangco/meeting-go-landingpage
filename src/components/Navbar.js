import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";

const NavContainer = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 10px 30px 10px 20px;
  z-index: 10;
  
  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 14px;
  }
`;

const Logo = styled.img`
  max-height: 50px;
  max-width: 100%; 
  min-width: 75px;
  flex-shrink: 0;
`;

const LogoStyles = {
  maxHeight: '50px',
  maxWidth: '100%',
  minWidth: '75px',
  flexShrink: 0,
};

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const NavBarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavBarRight = styled.div`
  display: flex;
  align-items: center;
`;

const NavBarMenus = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;

const NavBarMenusMenu = styled.li`
  padding: 0 10px;
  white-space: nowrap;
`;

const NavStyle = styled(NavLink)`
  color: #000;
  text-decoration: none;
  &:hover {
    color: #9C41FF;
    text-decoration: none;
  }
  &.active {
    color: #9C41FF;
  }
`;

const SpecialButton = styled(NavLink)`
  background-color: black;
  color: white;
  padding: 7px 15px;
  border-radius: 5px; 
  text-decoration: none;
  margin-left: 10px; 
  min-width: 75px;
  text-align: center;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
`;

const ImageWithFallback = ({ svgSrc, webpSrc, fallbackSrc, alt, style }) => (
  <picture>
    {svgSrc && <source srcSet={svgSrc} type="image/svg+xml" />}
    {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
    <source srcSet={fallbackSrc} type="image/png" />
    <img src={fallbackSrc} alt={alt} style={style} />
  </picture>
);


const NavBar = () => {
  const handleNavClick = (event, eventName) => {
    logEvent(analytics, eventName);
  };

  return (
    <NavContainer>
      <NavBarLeft>
        <LogoLink to="/" onClick={(e) => handleNavClick(e, 'nav_click_logo')}>
          <ImageWithFallback 
            svgSrc="/logo/logo.svg" 
            webpSrc="/logo/logo.webp" 
            fallbackSrc="/logo/logo.png" 
            alt="Logo, 대학생 미팅 앱 미팅고의 로고" 
            style={LogoStyles}
          />
        </LogoLink>
      </NavBarLeft>
      <NavBarRight>
        {/* <NavBarMenus>
          <NavBarMenusMenu>
            <NavStyle to="/form">대학 미팅 찾기</NavStyle>
          </NavBarMenusMenu>
          <NavBarMenusMenu>
            <NavStyle to="/form">동네 미팅 찾기</NavStyle>
          </NavBarMenusMenu>
        </NavBarMenus> */}
        <NavBarMenus>
          <NavBarMenusMenu>
            <NavStyle to="/" onClick={(e) => handleNavClick(e, 'nav_click_home')}>
              Home
            </NavStyle>
          </NavBarMenusMenu>
          <NavBarMenusMenu>
            <NavStyle to="/download" onClick={(e) => handleNavClick(e, 'nav_click_preregister')}>
              다운로드
            </NavStyle>
          </NavBarMenusMenu>
          <NavBarMenusMenu>
            <NavStyle to="/food-test">요리테스트</NavStyle>
          </NavBarMenusMenu>
        </NavBarMenus>
      </NavBarRight>
    </NavContainer>
  );
};

export default NavBar;
