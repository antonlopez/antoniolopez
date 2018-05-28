import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {fadeIn, headShake} from 'react-animations';
import ParticlesBackground from '../components/ParticlesBackground';
import Card from '../components/ProjectCard';
import bsm3 from '../img/bsm3.png';
import phoneContainer from '../img/phoneContainer.png'
import henna from '../img/henna.png';






class Projects extends Component {



    render() {
        const bsm = "Web application developed for a student organization that has presence in 200 colleges " +
            "around Texas.";

        const mobile = "Mobile application developed for the Baptist student ministry, available in the App store and Google Playstore";

        const caminando = "Web application that helps distributing material that teaches how to create henna tattoos to share the gospel in spanish." +
            " Project in development...";

        const {width, height}=this.state || 0;

        return (
            <Container>
                <ParticlesBackground backgroundColor={"#000"} color={"#fff"} width={width} height={height}/>
                <ProjectsContainer>
                    <ProjectsText>Projects <Line width="80vw"/> </ProjectsText>
                    <CardsContainer>
                     <Card reverse={true} height="20vw" width="40vw" img={bsm3} text={bsm}/>
                     <Card reverse={false} height="15vw" width="10vw" img={phoneContainer} text ={mobile}/>
                    </CardsContainer>
                    <CardsContainer singleCard={true}>
                        <Card reverse={true} height="45vw" width="35vw" img={henna} text={caminando}/>
                    </CardsContainer>
                </ProjectsContainer>
                <ProjectsContainer>
                    <ProjectsText>Cool Stuff <Line width="78vw"/> </ProjectsText>
                    <CoolStuffContainer>
                      <VideoContainer>
                      <iframe
                          title="project 1"
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/66bU4dFE57E?rel=0&amp;controls=0&amp;showinfo=0"
                          frameborder="0" allowfullscreen = {false}>
                      </iframe>
                          <VideoText align="center" >
                              UART communication between a microprocessor and Processing. The system senses gyroscope data in real time.
                          </VideoText>
                      </VideoContainer>
                      <VideoContainer>
                        <iframe
                            title="project 2"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/lJlNHwAQjiA?rel=0&amp;controls=0&amp;showinfo=0&amp;start=23"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>
                        <VideoText  align="center" >
                            Prototype of a real time flight remote simulator. The system responds to data received from
                            a gyroscope placed on a UAV and the motion is controlled by a pneumatic system.
                        </VideoText>
                      </VideoContainer>
                      <VideoContainer>
                        <iframe
                                title="project 3"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/k1OkFEw4Kds?rel=0&amp;controls=0&amp;showinfo=0"
                                frameborder="0"
                                allowfullscreen>
                        </iframe>
                            <VideoText align="center" >
                               Head tracking system for FPV, using smartphone internal gyroscope and developed on android.
                            </VideoText>
                      </VideoContainer>
                    </CoolStuffContainer>
                </ProjectsContainer>



            </Container>
        );
    }
}

const VideoContainer = styled.div`
  display:flex;
  flex-direction:column;
  color:white;
  width: 560px;
  margin-top: 3vw;
  background: rgba(45,45,45,0.5);
  border-radius: 10px;
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

`;

const Container = styled.div`
        width: 100%;
        height:100%;



    `;


const ProjectsContainer = styled.div`
        padding-top: 3vw;
        padding-left: 4vw;


    `;

const CardsContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: ${props=> props.singleCard ? '': 'space-around'};
        padding-left: ${props=> props.singleCard ? '20vw': ''};
        padding-top: ${props=> props.singleCard ? '3vw': ''};



    `;

const CoolStuffContainer = styled.div`
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
`;

// keyframes returns a unique name based on a hash of the contents of the keyframes
const HeadShake_animation = keyframes`${headShake}`;


const CoolIcon = styled.img`
    height: 10vw;
    cursor: pointer;
    &:hover{
        animation: ${HeadShake_animation} .7s linear infinite;
    }

`;


const Line = ({width})=> { return( <svg height=".8vw" width="80vw">
                              <line x1="0" y1="0" x2={width} y2="0" style={{stroke:'#fff', strokeWidth:2}} />
                           </svg> )} ;



const ImgContainer = styled.div `
    `;

const CenterContainer = styled.div `
        display:flex;
        justify-content:center;
        flex-direction:column;
        padding-right: 6vw;
    `;

const IconsContainer = styled.div `
    `;

const fadeInanimation = keyframes`${fadeIn}`;

const ProjectsText = styled.h1`
        color: #fff;
        font-family: "Helvetica Neue", sans-serif;
        font-weight: lighter;
        font-size: 2.5vw;
        letter-spacing: .2vw;
        animation: ${fadeInanimation} 1s ease-in-out;
        margin-bottom: 5vw;
        `;


const ImageMyself = styled.img`
        height: 45vw;
        width:15vw;
        padding-top 3vh;
    `;




export default Projects;
