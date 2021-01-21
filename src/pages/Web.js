import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {isMobile} from 'react-device-detect';
import ParticlesBackground from '../components/ParticlesBackground';
import me from '../img/me2.png'
import projects from '../img/projects.png'
import about from '../img/about.png'
import '../css/image.css';
import '../css/me.css';
import SideIcons from '../components/SideIcons';
import {fadeIn} from 'react-animations';




//const URL = "https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/";
// const me = `${URL}me2.png?alt=media&token=8a7d1335-0c57-4dc8-ad62-85b658b554a7`;
// const projects = `${URL}projects.png?alt=media&token=5cd8db5d-d8be-43d6-b75c-9c38321e6548`;
// const about = `${URL}about.png?alt=media&token=9f100394-442c-4dd4-ad84-d4614d3465fb`;

class Web extends Component {

    openProjects()  {
        this.props.history.push('./projects');
    };

    openAbout(){
        this.props.history.push('./aboutme');
    }

    render() {
      // <ParticlesBackground backgroundColor={'#fff'} color={"#3CA9D1"} width={width} height={height}/>

        const {width, height}=this.state || 0;
        return (
            <Container>
                <LandingContainer>
                <ImgContainer >

                </ImgContainer>
                <CenterContainer>
                    <TextContainer>
                        <Header> Antonio Lopez </Header>
                        <IntroductionText> I develop Augmented and Virtual Reality for mobile devices  </IntroductionText>
                    </TextContainer>

                </CenterContainer>

                <SideIcons/>
                </LandingContainer>
                <ProjectsContainer>
                    <ProjectsText><Line width="78vw"/> Projects <Line width="78vw"/> </ProjectsText>
                    <CoolStuffContainer>
                      <VideoContainer>
                      <iframe
                          title="project 1"
                          width="600vw"
                          height="400vw"
                          src="https://www.youtube.com/embed/zYlmoMW_wZg?rel=0&amp;controls=0&amp;showinfo=0"
                          frameBorder="0" allowFullScreen = {false}>
                      </iframe>
                          <VideoText align="center" >
                              Papi Bird 360
                          </VideoText>
                      </VideoContainer>
                      <VideoContainer>
                        <iframe
                            title="project 2"
                            width="600vw"
                            height="400vw"
                            src="https://www.youtube.com/embed/gcg2uw8mhcU?rel=0&amp;controls=0&amp;showinfo=0&amp;start=23"
                            frameBorder="0"
                            allowFullScreen = {false}>
                        </iframe>
                        <VideoText  align="center" >
                          Build Up AR
                        </VideoText>
                      </VideoContainer>
                      <VideoContainer>
                        <iframe
                                title="project 3"
                                width="600vw"
                                height="400vw"
                                src="https://www.youtube.com/embed/SSnjEpN43Jc?rel=0&amp;controls=0&amp;showinfo=0"
                                frameBorder="0"
                                allowFullScreen = {false}>
                        </iframe>
                            <VideoText align="center" >
                              US Bills AR
                            </VideoText>
                      </VideoContainer>
                      <VideoContainer>
                        <iframe
                                title="project 3"
                                width="600vw"
                                height="400vw"
                                src="https://www.youtube.com/embed/64ztzc4qHco?rel=0&amp;controls=0&amp;showinfo=0"
                                frameBorder="0"
                                allowFullScreen = {false}>
                        </iframe>
                            <VideoText align="center" >
                              Anatomy AR+
                            </VideoText>
                      </VideoContainer>
                    </CoolStuffContainer>
                </ProjectsContainer>
            </Container>
        );
    }
}





    const Container = styled.div`
        top:0;
        left: 0;
        width: 100%;
        height:100%;
        background-color: #000;
        justify-content: ${props => props.isMobile ? 'space-between' : '' };
        padding-bottom:50px;
    `;

    const LandingContainer = styled.div`
        width: 100%;
        height:90%;
        display: flex;
        justify-content: ${props => props.isMobile ? 'space-between' : '' };
    `;

    const ProjectsHeader = styled.h1`
        color: #fff;
        font-family: 'Jost', sans-serif;
        font-weight: lighter;
        font-size: 2.5vw;
        margin-top: 0;
        text-align:center;
        `;

    const TextContainer = styled.div`
    `;

    const fadeInanimation = keyframes`${fadeIn}`;

    const ProjectsContainer = styled.div`
        background-color: #000;
        height: 100%;
        padding-bottom:70px;

    `;

    const ImgContainer = styled.div `
        height: 13vw
        width:25vw;
    `;

    const CenterContainer = styled.div `
        display:flex;
        justify-content:center;
        flex-direction:column;
        padding-right: 6vw;
        height: 42vw;
        margin-left:8vw;
    `;

    const Header = styled.h1`
        color: #fff;
        font-family: 'Jost', sans-serif;
        font-weight: lighter;
        font-size: 2.5vw;
        `;
    const NavigatorsContainer = styled.div `
        padding-top: 1vw;
        display: flex;
        justify-content:space-between;
        width: 60vw;

    `;

    const IntroductionText = styled.p`
        color: #fff;
        font-family: 'Jost', sans-serif;
        font-weight: lighter;
        font-size: 1.5vw;
    `;



    const ImageMyself = styled.img`
        height: 45vw;
        width:15vw;
        padding-top 3vh;

    `;

    const ImageProject = styled.img`
        height: 13vw
        width:25vw;
        cursor: pointer;
        transition: transform 300ms ease-in-out;
        &:hover {
        transform: scale(1.1);
        }
    `;

    const ImageAbout = styled.img`
        height: 13vw
        width:25vw;
        cursor: pointer;
        transition: transform 300ms ease-in-out;
        &:hover {
        transform: scale(1.1);
           }
    `;

    const ImgWrapper = styled.div`
      height: 13vw
      width:25vw;
      overflow:hidden;
    `;


    const CoolStuffContainer = styled.div`
         display: flex;
         flex-wrap: wrap;
         justify-content: space-around;
         background-color: #000;
         padding-bottom:20px;
    `;

    const VideoContainer = styled.div`
      display:flex;
      flex-direction:column;
      color:white;
      width: 43vw;
      margin-top: 3vw;
      background: rgba(45,45,45,0.5);
      border-radius: 10px;
      justify-content:center;
      align-items:center;
    `;

    const VideoText = styled.div`
      color: #fff;
      font-family: "Helvetica Neue", sans-serif;
      font-weight: lighter;
      font-size: 1.2vw;
      letter-spacing: .1vw;
      text-align: center;
      height: 7vw;
      display: flex;
      align-items: center;
      width:100%;
      justify-content: center;
    `;

    const ProjectsText = styled.h1`
            color: #fff;
            font-family: "Helvetica Neue", sans-serif;
            font-weight: lighter;
            font-size: 2.5vw;
            letter-spacing: .2vw;
            animation: ${fadeInanimation} .3s ease-in-out;
            margin-bottom: 5vw;
            margin-top: ${props=> props.marginTop};
            text-align:center;
            `;


    const Line = ({width})=> { return( <svg height=".8vw" width="20vw">
                                  <line x1="0" y1="0" x2={width} y2="0" style={{stroke:'#fff', strokeWidth:2}} />
                               </svg> )} ;





export default Web;
