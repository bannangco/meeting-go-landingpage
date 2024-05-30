import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5vh 30px 3vh 30px;
  // border-top: 1px solid #eaeaea;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #000;
  margin: 0 10px;
`;

const LogoText = styled.div`
  font-size: 0.9rem;
  color: #000;
`;

const CenterText = styled.div`
  font-size: 0.9rem;
  color: #000;
  white-space: nowrap;
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: #000;
  white-space: nowrap;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 10px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoText>Meeting Go</LogoText>
      <Line />
      <CenterText>Garage to Space Station</CenterText>
      <Line />
      <Copyright>&copy; Bannangco 2024</Copyright>
    </FooterContainer>
  );
}

export default Footer;
