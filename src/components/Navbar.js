import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavContainer = styled.nav`
  background-color: #fff; // Changed to white as per the image
  display: flex;
  justify-content: flex-end; // Align items to the right
  align-items: center;
  height: 50px; // Set a fixed height for the navbar
  padding: 0 20px; // Padding on the sides
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Subtle shadow as per the image
  z-index: 10; // Ensure navbar is above other content
`;

const NavBarMenus = styled.ul`
  display: flex;
  justify-content: flex-end; // Align items to the right
  list-style: none;
  padding-left: 0px;
  margin: 0; // Remove default margin
`;

const NavBarMenusMenu = styled.li`
  padding: 0 10px; // Spacing between menu items
`;

const NavStyle = styled(NavLink)`
  color: black; // Text color as per the image
  text-decoration: none;
  &:hover {
    color: #000; // Adjust the color for hover effect
    text-decoration: none; // No underline on hover
  }
  &.active {
    color: #000; // Active link color
    font-weight: bold; // Make active link bold
  }
`;

function NavBar() {
    return (
      <NavContainer>
        <NavBarMenus>
          <NavBarMenusMenu>
            <NavStyle to="/tournament">대학 미팅 찾기</NavStyle>
          </NavBarMenusMenu>
          <NavBarMenusMenu>
            <NavStyle to="/home">동네 미팅 찾기</NavStyle>
          </NavBarMenusMenu>
          <NavBarMenusMenu>
            <NavStyle to="/start">시작하기</NavStyle>
          </NavBarMenusMenu>
          <NavBarMenusMenu>
            <NavStyle to="/help">Help</NavStyle>
          </NavBarMenusMenu>
          <NavBarMenusMenu>
            <NavStyle to="/login">Login</NavStyle>
          </NavBarMenusMenu>
        </NavBarMenus>
      </NavContainer>
    );
  }

export default NavBar;