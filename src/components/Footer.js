import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5vh 0 1.5vh 20px;
  z-index: 10;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  max-height: 70px;
  max-width: 100%; 
  flex-shrink: 0;
`;

const LogoLink = styled(NavLink)`
  display: flex; // Keep the logo aligned properly
  align-items: center; // Center the logo vertically
`;


const NavBarLeft = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`;

const NavBarRight = styled.div`
  flex:2;
  display: flex;
  align-items: center;
`;

const RightContent = styled.div`
  flex : 1;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 20px 0px;
  }
`

const NavStyle = styled(NavLink)`
  color: black;
  text-decoration: none;
  &:hover {
    color: #000;
    text-decoration: none;
  }
  &.active {
    color: #000;
    font-weight: bold;
  }
`;

const SpecialButton = styled(NavLink)`
  background-color: black;
  color: white;
  padding: 10px 15px;
  border-radius: 5px; 
  text-decoration: none;
  margin-left: 10px; 
  &:hover {
    background-color: #333;
  }
`;

const Copyright1 = styled.div`
flex:1;
color: #fff;
padding: 20px;
text-align:right;
@media (max-width: 768px) {
    display: none;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <NavBarLeft>
        <LogoLink to="/">
            <Logo src="/logo/logostransparent3.png" alt="Logo, 대학생 미팅 앱 미팅고의 로고" />
        </LogoLink>
        {/* <NavBarMenus>
          <NavBarMenusMenu>
            <NavStyle to="/form">대학 미팅 찾기</NavStyle>
          </NavBarMenusMenu>
          <NavBarMenusMenu>
            <NavStyle to="/form">동네 미팅 찾기</NavStyle>
          </NavBarMenusMenu>
        </NavBarMenus> */}
      </NavBarLeft>
      <NavBarRight>
        <RightContent>
        <SpecialButton to="/form">Mobile App</SpecialButton>
        {/* <SpecialButton to="/form">Community</SpecialButton>
        <SpecialButton to="/form">Company</SpecialButton> */}
        </RightContent>
        <Copyright1>&copy;Bannangco.Corp.2023<br></br> Garage to Space Station</Copyright1>
      </NavBarRight>
    </FooterContainer>
  );
}

export default Footer;
