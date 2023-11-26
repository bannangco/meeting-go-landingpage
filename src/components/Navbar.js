import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavContainer = styled.nav`
  background-color: blue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;

  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const NavBarMenus = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 75%;
  list-style: none;
  padding-left: 0px;
`;

const NavBarMenusMenu = styled.li`
  color: #d6d6d6;
  text-decoration: none;
`;

const NavStyle = styled(NavLink)`
  color: black;
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: aquamarine;
  }
  &.active {
    color: #ffe03a;
    position: relative;
    top: 2px;

    background-color: aquamarine;
  }
`;

const ImageSource = styled.img`
  width: 75%;
  top: auto;
`;

function NavBar() {
  return (
    <NavContainer>
      <NavBarMenus>
        <NavBarMenusMenu>
          <NavStyle to="tournament">
            <div>
              {/* <ImageSource src="./tournament.png"></ImageSource> */}
              <br></br>
              대학 미팅 찾기
            </div>
          </NavStyle>
        </NavBarMenusMenu>
        <NavBarMenusMenu>
          <NavStyle to="home">
            <div>
              {/* <ImageSource src="./navBarBee.png"></ImageSource> */}
              <br></br>
              동네 미팅 찾기
            </div>
          </NavStyle>
        </NavBarMenusMenu>
        <NavBarMenusMenu>
          <NavStyle to="travels">
            <div>
              {/* <ImageSource src="./pencil.png"></ImageSource> */}
              <br></br>
              시작하기
            </div>
          </NavStyle>
        </NavBarMenusMenu>
      </NavBarMenus>
    </NavContainer>
  );
}

export default NavBar;