import React from 'react';
import styled, {keyframes} from 'styled-components';
import {zoomIn} from "react-animations";




export default ({img, text, height, width, reverse}) => {


    return(
        <Container reverse={reverse} heigth={height}>

            <ImageContainer width={width}>
                <Img src={img} alt='alt' />
            </ImageContainer>
            <TextContainer>
                <Text>{text}</Text>
            </TextContainer>


        </Container>

    );

};

const lightSpeedIn_animation = keyframes`${zoomIn}`;


const Container = styled.div`
    padding-top: ${props=> props.reverse ? '': '10vw'}
    height: ${props=>props.height};
    width: 30vw;
    background-color: transparent;
    border-radius: .5vw;
    display:flex;
    flex-direction: ${props=> props.reverse ? 'row-reverse': 'flex-end' }
    animation: ${lightSpeedIn_animation} .5s ease-in-out;

`;




const Text = styled.p `
    padding-top: 1vw;
    color: #fff;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: lighter;
    font-size: 1.3vw;
    width: 18vw;
    letter-spacing: .5px;

`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:  ${props=>props.width};


`;

const Img = styled.img`
    height: 20vw;
     border-radius: .5vw .5vw 0 0;

    `;



const TextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;


`;
