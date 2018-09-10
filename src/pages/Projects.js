import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';
import ParticlesBackground from '../components/ParticlesBackground';
import Card from '../components/ProjectCard';
import MobileCard from '../components/MobileCard';
import HomeButton from '../components/HomeBtn';
//import bsm3 from '../img/bsm3.png';
//import bsmWeb from '../img/bsmWeb.png'
//import henna from '../img/cristoPor.png';
//import mobileImg from '../img/mobile1.png';
//import wa1 from '../img/wa1.png';
//import unity1 from '../img/unityGame.png';
//import jdenticon from '../img/jdenticon.png';
//import localizerGen from '../img/localizerGen.png'
//import localizerTrans from '../img/localizerTrans.png'

const bsmWeb = "https://i.imgur.com/yyTG1FI.png";
const mobileImg = "https://i.imgur.com/ZSLL7eR.png";
const henna="https://i.imgur.com/aDmMj07.png";
const wa1 ="https://i.imgur.com/8kOv7nV.png";
const unity1 ="https://i.imgur.com/qNzWpmk.png"
const jdenticon = "https://i.imgur.com/uqq64F0.png";
const localizerGen = "https://i.imgur.com/3Sjlz0k.png";
const localizerTrans = "https://i.imgur.com/olatJag.png"

class Projects extends Component {

    render() {
        const bsm = "Web application developed for a student organization that has presence in 200 colleges " +
            "around Texas.";

        const jdenticonTxt = "Identicon generator from text, created using React and a javascript library named jdenticon.";

        const unityGame = "Racing game developed in a cross platform game engine called Unity.";

        const localizerTransTxt = "Electron desktop app developed in order to help in the translation of websites based on screenshots.";

        const localizerGenTxt = "Desktop App developed in Electron, used to generate a compressed file that contains screenshots and a json file associated to them, so " +
        "it can be feeded into Localizer translator and translate a website.";

        const mobile = "Mobile application developed in React-Native for the Baptist student ministry, available in the App store and Google Playstore.";

        const caminando = "Web application that helps distributing material that teaches how to create henna tattoos to share the gospel in spanish." +
            " Project in development...";

        const wa = "Open source web application developed in React and Django, developed for bible translators used for management and review translations for oral communities."

        const {width, height}=this.state || 0;

        return (
            <Container>
                <ParticlesBackground backgroundColor={"#000"} color={"#fff"} width={width} height={height}/>
                <HomeButton history={this.props.history} />
                <ProjectsContainer>
                    <ProjectsText>Projects <Line width="80vw"/> </ProjectsText>

                     <Card img={wa1} text={wa} header="Translation Exchange" width="53vw" />
                     <Card img={bsmWeb} text={bsm} header="Baptist student ministry" width="53vw"/>
                     <Card img={henna} text ={caminando}header ="Cristo por Henna" width="53vw"/>
                     <MobileCard
                       color="#ee6f6f"
                       img={mobileImg}
                       text={mobile}
                       width="22vw"
                       header="BSM Survey app"/>
                       <Card img={unity1} text ={unityGame} width="53vw" header ="Racing game"/>
                       <Card img={jdenticon} text ={jdenticonTxt} width="53vw" header ="Identicon Generator"/>
                       <Card img={localizerTrans} text ={localizerTransTxt} width="53vw" header ="Localizer Translator"/>
                       <Card img={localizerGen} text ={localizerGenTxt} width="53vw" header ="Localizer Generator"/>




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


const CoolStuffContainer = styled.div`
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
`;



const Line = ({width})=> { return( <svg height=".8vw" width="80vw">
                              <line x1="0" y1="0" x2={width} y2="0" style={{stroke:'#fff', strokeWidth:2}} />
                           </svg> )} ;


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




export default Projects;
