import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';
import ParticlesBackground from '../components/ParticlesBackground';
import {isMobile} from 'react-device-detect';
import Card from '../components/MobileProjectCard';
import MobileCard from '../components/MobileCard';
import HomeButton from '../components/HomeBtn';


//const bsmWeb = "https://i.imgur.com/yyTG1FI.png";
//const mobileImg = "https://i.imgur.com/ZSLL7eR.png";
//const henna="https://i.imgur.com/aDmMj07.png";
//const wa1 ="https://i.imgur.com/8kOv7nV.png";
//const unity1 ="https://i.imgur.com/qNzWpmk.png"
//const jdenticon = "https://i.imgur.com/uqq64F0.png";
//const localizerGen = "https://i.imgur.com/3Sjlz0k.png";
//const localizerTrans = "https://i.imgur.com/olatJag.png"

const URL = "https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/";
// const bsmWeb = `${URL}bsm1.png?alt=media&token=9d55417e-0cdb-437d-bb67-c3e6d2b3e344`;
// const mobileImg = `${URL}mobile1.png?alt=media&token=66d28fda-92da-4e73-87eb-8258baa77dc3`;
// const henna = `${URL}henna1.png?alt=media&token=2c46660e-a659-421f-a54f-8f2eeac46cd6`;
// const wa1 = `${URL}wa1.png?alt=media&token=a6d0ada7-5d27-404c-ad25-e14026789605`;
// const unity1 = `${URL}unityGame.png?alt=media&token=0e5569fa-e7c2-4aa2-a75c-b1e5151ec3bc`;
// const jdenticon = `${URL}jdenticon.png?alt=media&token=6400e9f2-002e-4b90-bc39-838feb2c5297`;
// const localizerGen =`${URL}localierGen.png?alt=media&token=e773fc59-b3f7-438a-a5b9-a2cc727d839e`;
// const localizerTrans =`${URL}localizerTrans.png?alt=media&token=529d8953-059f-4cd0-8fda-460c620f00a1`;


class ProjectsMobile extends Component {
    constructor(props){
      super(props);
      this.state = {
        bsmWeb: `${URL}bsm1.png?alt=media&token=9d55417e-0cdb-437d-bb67-c3e6d2b3e344`,
        mobileImg :`${URL}mobile1.png?alt=media&token=66d28fda-92da-4e73-87eb-8258baa77dc3`,
        henna:`${URL}henna1.png?alt=media&token=2c46660e-a659-421f-a54f-8f2eeac46cd6`,
        wa1: `${URL}wa1.png?alt=media&token=a6d0ada7-5d27-404c-ad25-e14026789605`,
        unity1:`${URL}unityGame.png?alt=media&token=0e5569fa-e7c2-4aa2-a75c-b1e5151ec3bc`,
        jdenticon: `${URL}jdenticon.png?alt=media&token=6400e9f2-002e-4b90-bc39-838feb2c5297`,
        localizerGen: `${URL}localierGen.png?alt=media&token=e773fc59-b3f7-438a-a5b9-a2cc727d839e`,
        localizerTrans: `${URL}localizerTrans.png?alt=media&token=529d8953-059f-4cd0-8fda-460c620f00a1`
        }
    }

    render() {
      const {bsmWeb, mobileImg, henna, wa1, unity1, jdenticon, localizerGen, localizerTrans} = this.state;

        const bsm = "Web application developed for a student organization that has presence in 200 colleges " +
            "around Texas. It is a tool to display the information collected by the BSM Survey APP";

        const jdenticonTxt = "Creates a unique identicon from characters. Developed using React and a Javascript library named jdenticon.";

        const unityGame = "Racing game developed in C# using a cross platform game engine called Unity. This was developed as a hobby because I always wanted to develop a game.";

        const localizerTransTxt = "Electron desktop app developed in order to help in the translation of websites based on screenshots.";

        const localizerGenTxt = "Desktop App developed in Electron, used to generate a compressed file that contains screenshots and a json file associated to them, so " +
        "it can be feeded into Localizer translator and translate a website.";

        const mobile = "Mobile application used to survey students around colleges campus. It was developed using React-Native and Google Firebase, it is available in the App store and Google Playstore.";

        const caminando = "Web application that contains material to teach how to create henna tattoos to share the gospel in spanish." +
            " Project in development...";

        const wa = " Translation exchange is open source web application developed in React and Django. It is being developed to help bible translators reach out oral communities around the world to accelerate the process of making a bible in every language";

        const {width, height}=this.state || 0;



        return (
            <Container >
                <ProjectsContainer>
                    <ProjectsText>Projects </ProjectsText>
                     <Card img={wa1} text={wa} header="Translation Exchange" width="53vw" />
                     <Card img={bsmWeb} text={bsm} header="Baptist Student Ministry" width="53vw"/>
                     <Card img={henna} text ={caminando}header ="Cristo por Henna" width="53vw"/>
                     <MobileCard
                       isMobile={true}
                       color="#ee6f6f"
                       img={mobileImg}
                       text={mobile}
                       width="49vw"
                       header="BSM Survey app"/>
                       <Card img={unity1} text ={unityGame} width="53vw" header ="Racing game"/>
                       <Card img={jdenticon} text ={jdenticonTxt} width="53vw" header ="Identicon Generator"/>
                       <Card img={localizerTrans} text ={localizerTransTxt} width="53vw" header ="Localizer Translator"/>
                       <Card img={localizerGen} text ={localizerGenTxt} width="53vw" header ="Localizer Generator"/>
                </ProjectsContainer>
            </Container>
        );
    }
}

const VideoContainer = styled.div`
  display:flex;
  flex-direction:column;
  color:white;
  width: 43vw;
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
        background-color: #000;
        display flex;
        flex-wrap: wrap;
        margin-top: 151vw;
    `;


const ProjectsContainer = styled.div`
        background-color: #000;
        height: 100%;
        width: 100%;
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
        text-align: center;
        font-size: 8vw;
        letter-spacing: .2vw;
        animation: ${fadeInanimation} 1s ease-in-out;
        `;

export default ProjectsMobile;
