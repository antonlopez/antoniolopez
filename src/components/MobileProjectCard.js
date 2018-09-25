import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'





export default ({img, text, header, width}) => {


    return(
        <Container>
          <Fade bottom>
            <Header>{header}</Header>
            <ImageContainer>
                <Img width='95vw' src={img} alt='alt' />
            </ImageContainer>
            </Fade>
        </Container>
    );

};


const Container = styled.div`
    width: 100%;
    margin-top: 6vh;
    margin-bottom: 3vh;
    background-color: transparent;
    border-radius: .5vw;
    justify-content: space-between;
    display:flex;
    flex-direction: column;
    align-items: center;

`;


const Header = styled.h1`
    color: #fff;
    text-align: center;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: lighter;
    font-size: 5.2vw;
    letter-spacing: 1px;
`;


const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
    width: ${props => props.width};
    height: 60vw;
    border-radius: .5vw;

    `;
