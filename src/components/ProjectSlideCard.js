import React from 'react';
import styled, {keyframes} from 'styled-components';
import {zoomIn} from "react-animations";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';




export default ({imgs, text, header, width, backgroundColor, mafiaUrls, mafiaAppUrls}) => {


    return(
        <Container backgroundColor={backgroundColor}>
            <SliderContainer>
            <Slider>
              {imgs.map((article, index) => <div style={{backgroundColor:{backgroundColor}}} key={index}>
                <ImageContainer backgroundColor={backgroundColor}>
                  <Img width={width} src={article.img} alt={index}/>
                </ImageContainer>
              </div>)}
            </Slider>
            </SliderContainer>

            <TextContainer>
                <Header>{header}</Header>
                <Text>{text}</Text>
                {
                  mafiaUrls.length > 0 ?

                  <BadgeContainer>
                  <a href={mafiaAppUrls[0]}>
                  <BadgeImg src={mafiaUrls[0]} />
                  </a>
                  <a href={mafiaAppUrls[1]}>
                  <BadgeImg src={mafiaUrls[1]} />
                  </a>

                  </BadgeContainer>

                   :

                   ''
                 }


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
    animation: ${lightSpeedIn_animation} .4s ease-in-out;

`;


const Header = styled.h1`
    color: #fff;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: lighter;
    font-size: 1.9vw;
    letter-spacing: 1px;
`;

const Text = styled.p `
    text-align: justify;
    padding-top: 1vw;
    color: #fff;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: lighter;
    font-size: 1.3vw;
    width: 26vw;
    letter-spacing: .6px;
`;

const SliderContainer = styled.div`
    width: 124vw;
    background-color:white;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius: .5vw;
`;

const Img = styled.img`
    width: ${props => props.width};
    height: 28vw;
    `;


const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImageContainer = styled.div`
    color:white;
    width: 100%;
    height:100%;
    background-color:${props => props.backgroundColor};
    display:flex;
    justify-content:center;
    align-items:center;

`;


const BadgeImg = styled.img`
    width: 13vw;
    cursor:pointer;
`;


const BadgeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 28vw;
    margin-top:30px;

`;
