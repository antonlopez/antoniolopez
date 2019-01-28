import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import linkedin from '../img/linkedin.png'
import location from '../img/location.png'
import github from '../img/github.png';
import insta from '../img/instagram.png';
import face from '../img/facebook.png';
import Fade from 'react-reveal/Fade'



class ContactMobile extends Component {



    render() {

        const {width, height}=this.state || 0;
        return (
          <Container>
            <Fade bottom>
               <Header>Contact</Header>
                <IconsContainer>
                  <AnchorContainer href="https://github.com/antonlopez">
                    <Image alt="github" src={github}/>
                  </AnchorContainer>
                  <AnchorContainer href="https://www.linkedin.com/in/antonio-lopez-01383012a/">
                    <Image alt="linkedin" src={linkedin}/>
                  </AnchorContainer>
                  <AnchorContainer href="https://www.instagram.com/anton_developer/">
                    <Image alt="instagram" src={insta}/>
                  </AnchorContainer>
                  <AnchorContainer href="https://www.facebook.com/AntonLopz/">
                    <Image alt="face" src={face}/>
                  </AnchorContainer>
                </IconsContainer>
              </Fade>
          </Container>
        );
    }
}


    const Container = styled.div`
      margin-top: 698vw;
      margin-bottom: 62vw;
      width: 100%;
      height:100%;
      display: flex;
      flex-direction: column;
    `;
    const Header = styled.h1`
      text-align: center;
      color: #111;
      font-family: "Helvetica Neue", sans-serif;
      font-weight: lighter;
      font-size: 8.5vw;
    `;

    const IconsContainer = styled.div`
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      margin-top: 2vw;

    `;
    const AnchorContainer = styled.a`
        display: flex;
        align-items: center;
    `;

    const Image = styled.img`
        display: flex;
        justify-content:center;
        height: 14.6vw;
        width: 14.6vw;
        align-self: center;
        padding-right: .2vw;
    `;




export default ContactMobile;
