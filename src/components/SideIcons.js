import React from 'react'
import styled from 'styled-components';
import phone from '../img/phone.png'
import linkedin from '../img/linkedin.png'
import location from '../img/location.png'
import github from '../img/github.png';
import '../css/image.css';


const SideIcons = () =>{


    return(
        <Container>
            <LinkedinContainer>
                <Image alt="linkedin" src={linkedin}/>
                <AnchorContainer href="https://www.linkedin.com/in/antonio-lopez-01383012a">Linkedin</AnchorContainer>
            </LinkedinContainer>
            <GithubContainer>
                <Image alt="github" src={github}/>
                <AnchorContainer href="https://github.com/antonlopez">Github</AnchorContainer>
            </GithubContainer>
            <LocationContainer>
                <LocationImage alt="location" src={location} />
                <TextContainer> El Paso, Texas</TextContainer>
            </LocationContainer>
        </Container>
    );

};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: left;
    width: 12vw;
`;

const GithubContainer = styled.div`
    color: #111;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: lighter;
    font-size:.9vw;
    padding-top: 1vw;
    display: flex;
`;

const LinkedinContainer = styled.div`
    color: #111;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: lighter;
    font-size:.9vw;
    display: flex;
`;

const PhoneContainer = styled.div`
   color: #111;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: lighter;
    font-size:.9vw;
    display: flex;
    padding-top: .3vw;
`;

const LocationContainer = styled.div`
    color: #111;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: lighter;
    font-size:.9vw;
    display: flex;
    padding-left: .2vw;
`;

const TextContainer = styled.p`
    display: flex;
    align-items: center;
`;

const AnchorContainer = styled.a`
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    display: flex;
    justify-content:center;
    height: 1.6vw;
    width: 1.5vw;
    align-self: center;
    padding-right: .2vw;
`;

const LocationImage = styled.img`
    display: flex;
    justify-content:center;
    height: 1.7vw;
    width: 1.2vw;
    align-self: center;
    padding-right: .4vw;
`;


export default SideIcons;
