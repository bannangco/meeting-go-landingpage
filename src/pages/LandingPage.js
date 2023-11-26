import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

const Positioner = styled.div`
    width: 100%;
    /* overflow: hidden; */
    height: 100vh; //화면 꽉차게
    background-color: #FFE974;
`;

const LogoImage = styled.img`
    top: 50%;
    width: 60%;
    transform: translateY(40%);
    /* position: relative;
    top: 50%;
    transform: translateY(40%);
    margin-bottom: 3%; */
`;

const ButtonContainer = styled.div`
    width: 100%;
    height: 40vh;
    // margin-top: 30vh;
`;

const SignInButton = styled.button`
    width: 80vw;
    height: 7vh;
    margin-top: 3vh;
    font-weight: bold;
    font-size: 1.8rem;
    cursor: pointer;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

const LogInButton = styled.button`
    width: 80vw;
    height: 7vh;
    margin-top: 3vh;
    font-weight: bold;
    font-size: 1.8rem;
    cursor: pointer;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #454545;
    color: white;
    border-radius: 10px;
`;


function FirstPage(props) {

    const buttonClicked = (e) =>{
        if (e.target.id === "signin"){
            window.location = `/form`;
        }
        else{
            window.location = `/form`;
        }
    }

    return (
        <Positioner>
            {/* <LogoImage src="/logo_firstpage.png" /> */}
            <ButtonContainer>
                <SignInButton id="signin" onClick={buttonClicked}>회원가입</SignInButton>
                <LogInButton id="login" onClick={buttonClicked}>로그인</LogInButton>
            </ButtonContainer>
        </Positioner>
    );
}

export default FirstPage;