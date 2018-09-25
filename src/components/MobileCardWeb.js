import React from 'react';
import styled, {keyframes} from 'styled-components';
import {zoomIn} from "react-animations";
import Fade from 'react-reveal/Fade'




export default ({img, text, header, width, color}) => {

    return(
        <Container>
            <ImageContainer color={color}>
                <Img width={width} src={img} alt='alt' />
            </ImageContainer>
            <TextContainer>
                <Header>{header}</Header>
                <Text>{text}</Text>
            </TextContainer>
        </Container>
    );
};

const lightSpeedIn_animation = keyframes`${zoomIn}`;


const Container = styled.div`
    width: 100%;
    margin-top: 9vh;
    background-color: transparent;
    border-radius: .5vw;
    justify-content: space-between;
    display:flex;
`;


const Header = styled.h1`
    color: #fff;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: lighter;
    font-size:  1.9vw;
    letter-spacing: 1px;


`;

const Text = styled.p `
    padding-top: 1vw;
    color: #fff;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: lighter;
    font-size: 1.3vw;
    width: 28vw;
    letter-spacing: .6px;

`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:53vw;
    background-color: ${props => props.color};
    border-radius: .5vw;
`;

const Img = styled.img`
    width: ${props => props.width};
    height: 30vw ;
    border-radius: .5vw;

    `;



const TextContainer = styled.div`
    width: 39%;
    display: flex;
    flex-direction: column;
    align-items: center;



`;
