import React from 'react';
import styled, {keyframes} from 'styled-components';
import {zoomIn} from "react-animations";
import Fade from 'react-reveal/Fade'




export default ({img, text, header, width, color, isMobile}) => {


    return(
        <Container isMobile={isMobile}>
          <Fade bottom>
          {isMobile ? <Header isMobile = {isMobile}>{header}</Header> : '' }
            <ImageContainer isMobile={isMobile} color={color}>
                <Img isMobile ={isMobile} width={width} src={img} alt='alt' />
            </ImageContainer>
            {isMobile ?
              ''
            :
            <TextContainer>
                <Header isMobile={isMobile}>{header}</Header>
                <Text>{text}</Text>
            </TextContainer>
            }
          </Fade>
        </Container>
    );

};

const lightSpeedIn_animation = keyframes`${zoomIn}`;


const Container = styled.div`
    align-items: ${props => props.isMobile ? 'center':''};
    width: 100%;
    margin-top: 9vh;
    background-color: transparent;
    border-radius: .5vw;
    justify-content: space-between;
    display:flex;
    flex-direction: ${props => props.isMobile ? 'column': ''}
`;


const Header = styled.h1`
    color: #fff;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: lighter;
    font-size: ${props => props.isMobile ? '4.9vw' : '1.9vw' } ;
    text-align: ${props => props.isMobile ? 'center' : '' } ;
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
    width: ${props => props.isMobile ? '95vw': '53vw'};
    height: ${props => props.isMobile ? '60vw': ''};
    background-color: ${props => props.color};
    border-radius: .5vw;
`;

const Img = styled.img`
    width: ${props => props.width};
    height: ${props => props.isMobile ? '72vw': '30vw'} ;
    border-radius: .5vw;

    `;



const TextContainer = styled.div`
    width: 39%;
    display: flex;
    flex-direction: column;
    align-items: center;



`;
