import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavContainer = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const Logo = styled.img`
  max-height: 50px;
  max-width: 100%; 
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
`;

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

function NavBar() {
  return (
    <NavContainer>
      <NavBarLeft>
        <LogoLink to="/">
            <Logo src="/logo/logostransparent1.png" alt="Logo" />
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
          <NavBarMenusMenu>
            <NavStyle to="/form">Login</NavStyle>
          </NavBarMenusMenu>
        </NavBarMenus>
        <SpecialButton to="/form">시작하기</SpecialButton>
      </NavBarRight>
    </NavContainer>
  );
}

export default NavBar;
