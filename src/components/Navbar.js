import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavContainer = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 10px 30px 10px 20px;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const Logo = styled.img`
  max-height: 50px;
  max-width: 100%; 
  min-width: 75px;
  flex-shrink: 0;
`;

const LogoLink = styled(NavLink)`
  display: flex; // Keep the logo aligned properly
  align-items: center; // Center the logo vertically
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
  white-space: nowrap; // Prevent text from wrapping
  
  @media (max-width: 768px) { // Adjust the breakpoint as needed
    padding: 0 5px;
    font-size: 0.8rem; // Smaller text on smaller screens
  }
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
    font-weight: bold;
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

function NavBar() {
  return (
    <NavContainer>
      <NavBarLeft>
        <LogoLink to="/">
            <Logo src="/logo/logo.png" alt="Logo, 대학생 미팅 앱 미팅고의 로고" />
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
        <NavBarMenus>
          <NavBarMenusMenu>
            <NavStyle to="/">Home</NavStyle>
          </NavBarMenusMenu>
          {/* <NavBarMenusMenu>
            <NavStyle to="/form">Login</NavStyle>
          </NavBarMenusMenu> */}
        </NavBarMenus>
        <SpecialButton to="/form">사전예약</SpecialButton>
      </NavBarRight>
    </NavContainer>
  );
}

export default NavBar;
