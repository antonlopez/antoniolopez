import React, { Component } from 'react';
import {fadeIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import {isMobile} from 'react-device-detect';
import ParticlesBackground from '../components/ParticlesBackground';
import me from '../img/me2.png'
import projects from '../img/projects.png'
import about from '../img/about.png'
import '../css/image.css';
import '../css/me.css';
import SideIcons from '../components/SideIcons';
import ProjectsMobile from './ProjectsMobile';
import ContactMobile from '../components/ContactMobile';


//const URL = "https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/";
// const me = `${URL}me2.png?alt=media&token=8a7d1335-0c57-4dc8-ad62-85b658b554a7`;
// const projects = `${URL}projects.png?alt=media&token=5cd8db5d-d8be-43d6-b75c-9c38321e6548`;
// const about = `${URL}about.png?alt=media&token=9f100394-442c-4dd4-ad84-d4614d3465fb`;

class Mobile extends Component {

    openProjects()  {
        this.props.history.push('./projects');
    };

    openAbout(){
        this.props.history.push('./aboutme');
    }

    render() {

        const {width, height}=this.state || 0;
        return (
          <Container>
              <IntroContainer>
                  <ImgContainer >
                      <ImageMyself alt="Me" src={me} />
                  </ImgContainer>
                  <CenterContainer>
                      <TextContainer>
                          <Header> Hi! My name is Antonio Lopez.</Header>
                          <IntroductionText> I will create your website or mobile app using cutting edge technologies such as Augmented and Virtual Reality </IntroductionText>
                      </TextContainer>
                  </CenterContainer>
               </IntroContainer>
               <ProjectsMobile/>
               <ContactMobile/>
            </Container>
        );
    }
}


    const fadeInAnimation = keyframes`${fadeIn}`;

    const ProjectsContainer = styled.div`
      background-color: #000;
      height: 100%
    `;

    const Container = styled.div`
      width: 100%;
      height:100%;
      display: flex;
      flex-direction: column;
    `;

    const IntroContainer = styled.div`
        margin-top: 12vw;
        display: flex;
        justify-content: center;
        animation: ${fadeInAnimation} 1s ease-in-out;
        height: 700vh;
    `;

    const TextContainer = styled.div`
    `;

    const ImgContainer = styled.div `
    `;

    const CenterContainer = styled.div `
        display:flex;
        justify-content:center
        margin-top: 36vw;
        flex-direction:column;
        height: 42vw;

    `;

    const Header = styled.h1`
        color: #111;
        font-family: "Helvetica Neue", sans-serif;
        font-weight: lighter;
        font-size: 10.5vw;
        `;

    const NavigatorsContainer = styled.div `
        padding-top: 1vw;
        display: flex;
        justify-content:space-between;
        width: 60vw;
    `;

    const IntroductionText = styled.p`
        color: #111;
        font-family: "Helvetica Neue", sans-serif;
        font-weight: lighter;
        font-size: 3.9vw;
        width: 58vw;
    `;

    const ImageMyself = styled.img`
        height: 93vw;
        width:31vw;
        padding-top 3vh;
    `;

    const ImageProject = styled.img`
        height: 13vw
        width:25vw;
        cursor: pointer;
        transition: transform 200ms ease-in-out;
        &:hover {
        transform: scale(1.1);
        }
    `;

    const ImageAbout = styled.img`
        height: 13vw
        width:25vw;
        cursor: pointer;
        transition: transform 200ms ease-in-out;
        &:hover {
        transform: scale(1.1);
           }
    `;


export default Mobile;
