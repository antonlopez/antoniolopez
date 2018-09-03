import React from 'react'
import styled from 'styled-components';
import phone from '../img/phone.png'
import linkedin from '../img/linkedin.png'
import location from '../img/location.png'
import '../css/image.css';


const SideIcons = () =>{


    return(
        <Container>
            <LinkedinContainer>
                <Image alt="linkedin" src={linkedin}/>
                <AnchorContainer href="https://www.linkedin.com/in/antonio-lopez-01383012a">Linkedin</AnchorContainer>

            </LinkedinContainer>
            <PhoneContainer>
                <Image alt="phone" src={phone}/>
                <p> +1 915 704 71 16</p>
            </PhoneContainer>
            <LocationContainer>
                <LocationImage alt="location" src={location} />
                <TextContainer> Orlando, Florida</TextContainer>
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
    padding-top: 1vw;
    
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