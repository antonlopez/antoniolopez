import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';
import ParticlesBackground from '../components/ParticlesBackground';
import {isMobile} from 'react-device-detect';
import Card from '../components/ProjectCard';
import SlideCard from '../components/ProjectSlideCard';
import MobileCard from '../components/MobileCardWeb';
import HomeButton from '../components/HomeBtn';
import BackgroundImg from '../img/projects_background.jpg';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';



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


class Projects extends Component {
    constructor(props){
      super(props);
      this.state = {
        mobileImg :`${URL}mobile1.png?alt=media&token=66d28fda-92da-4e73-87eb-8258baa77dc3`,
        henna:`${URL}henna1.png?alt=media&token=2c46660e-a659-421f-a54f-8f2eeac46cd6`,
        wa1: `${URL}wa1.png?alt=media&token=a6d0ada7-5d27-404c-ad25-e14026789605`,
        unity1:`${URL}unityGame.png?alt=media&token=0e5569fa-e7c2-4aa2-a75c-b1e5151ec3bc`,
        jdenticon: `${URL}jdenticon.png?alt=media&token=6400e9f2-002e-4b90-bc39-838feb2c5297`,
        localizerGen: `${URL}localierGen.png?alt=media&token=e773fc59-b3f7-438a-a5b9-a2cc727d839e`,
        localizerTrans: `${URL}localizerTrans.png?alt=media&token=529d8953-059f-4cd0-8fda-460c620f00a1`,
        mafia:[
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/main_screely.png?alt=media&token=de93efd7-9d33-4101-b505-eabe10a9118a'},
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/moderator_screely.png?alt=media&token=5335b22e-2572-4a72-bb4f-954f2545859b'},
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/moderator_room_screely.png?alt=media&token=5a891a02-296e-4295-b987-cc4f6411f733'},
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/card_screely.png?alt=media&token=7d433371-e712-4a4d-bb4a-6e2359b28bff'},
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/back_card_screely.png?alt=media&token=a85e25ec-c41e-46e2-9d34-214b8b88e383'},
        ],

        translationExchange:[
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/translation_exchange_1.png?alt=media&token=32f9a2b6-0b96-48e5-81da-69c301b98ec0'},
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/translation_exchange_2.png?alt=media&token=10ba3480-d8fd-4b00-9f50-f7bb2d10afe0'},
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/translation_exchange_3.png?alt=media&token=c51a1925-b289-4b30-b8e1-bddfe6739ed0'},
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/translation_exchange_4.png?alt=media&token=3b430ad3-5390-4328-b677-981a8664e921'},
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/translation_exchange_5.png?alt=media&token=29bf1600-f6e6-41b7-82bb-ae472f6e703c'},
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/translation_exchange_6.png?alt=media&token=1e689296-3c0c-4212-9f1c-c0bf38a7271a'},
        ],
        bsmMobile:[
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/bsm_mobile_1.png?alt=media&token=e8bedec4-e0ff-45f4-a626-42503b7093b9'},
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/bsm_mobile_2.png?alt=media&token=063be04b-0cb1-466c-a63f-d89ec8f0b0ee'},
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/bsm_mobile_3.png?alt=media&token=b8e83ede-9cd3-46c3-b416-bd1fa6b3fa64'},
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/bsm_mobile_4.png?alt=media&token=56e71773-5322-427e-b87d-6ac5b62cc390'},
        ],
        bsmWeb:[
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/bsm1.png?alt=media&token=9d55417e-0cdb-437d-bb67-c3e6d2b3e344'},
          { img: 'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/bsm_web_2.png?alt=media&token=b10e6173-494f-48af-98df-6b2aaa54585e'}
        ],
        cfo: [
          {img:'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/cfo_1.png?alt=media&token=6e19b641-89a5-457f-892d-b84d23423c9c'},
          {img:'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/cfo_2.png?alt=media&token=0954c5b1-071e-4b95-a1a9-ee9454eda0ca'}
        ],
        bhvr:[
          {img:'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/bhvr_1.png?alt=media&token=c3ff4082-f658-45d5-b8ea-3f9ec1852c4d'},
          {img:'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/bhvr_2.png?alt=media&token=e37e3871-472e-4c20-9441-d92f2d5dbdc2'},
          {img:'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/bhvr_3.png?alt=media&token=c35acaa4-4de9-4fc8-922a-9056de09a434'},
          {img:'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/bhvr_4.png?alt=media&token=6f071fe7-684d-464d-8876-251a6969e82c'}
        ]


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

        const wa = " Translation exchange is an open source web application developed in React and Django. It was developed to help bible translators reach out oral communities around the world to accelerate the process of making a bible in every language";

        const mafia = "Popular game developed in react native and Flask was implemented for the backend, used websockets for real time communication";

        const cfo = "Web application designed for financial services. This application is being developed in React with server side rendering in nodejs. Application still in development..."

        const bhvr = "Vue.js application built for a company dedicated to develop VR/AR Apps. Worked in frontend and backend (PHP). Development still in progress... "

        const {width, height}=this.state || 0;

        const badgeUrls = [
          'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/android_badge.png?alt=media&token=18ce0ed5-8d87-4e60-9133-667737e59492',
          'https://firebasestorage.googleapis.com/v0/b/antonio-webpage.appspot.com/o/apple_badge.png?alt=media&token=00f14dd1-b867-44b0-adf9-dac9b59dd4a7'
        ];

        const mafiaAppUrls = [
          'https://play.google.com/store/apps/details?id=com.antonzdev.mafiaclassiccarddealer',
          'https://itunes.apple.com/us/app/id1448146284'
        ];

        const bsmAppUrls = [
          'https://play.google.com/store/apps/details?id=com.bsmsurvey&hl=en',
          'https://itunes.apple.com/us/app/bsm-survey/id1339909969?ls=1&mt=8'

        ]


    //
    //<ParticlesBackground backgroundColor={"#000"} color={"#fff"} width={width} height={height}/>


        return (
            <Container isMobile={isMobile}>
                {isMobile ? '': <TempBack/> }
                <HomeButton history={this.props.history} />
                <ProjectsContainer>
                    <ProjectsText marginTop="-4vw" ><Line width="50vw"/> Projects <Line width="50vw"/> </ProjectsText>

                    <SlideCard imgs={this.state.mafia} text={mafia} header="Mafia Card Dealer" width="17vw" backgroundColor="#fff" mafiaUrls={badgeUrls} mafiaAppUrls={mafiaAppUrls} />
                    <SlideCard imgs={this.state.cfo} text={cfo} header="CFO" width="53vw" backgroundColor="#CCCBC4" mafiaUrls={[]} />

                    <SlideCard imgs={this.state.bsmMobile} text={mobile} header="BSM Survey App" width="17vw" backgroundColor="#EE6F6F" mafiaAppUrls={bsmAppUrls} mafiaUrls={badgeUrls} />
                    <SlideCard imgs={this.state.bsmWeb} text={bsm} header="BSM Web App" width="53vw" backgroundColor="#68595e" mafiaUrls={[]} />
                    <SlideCard imgs={this.state.bhvr} text={bhvr} header="Beacon Hill VR" width="52vw" backgroundColor="#94F56A" mafiaUrls={[]} />
                    <SlideCard imgs={this.state.translationExchange} text={wa} header="Translation Exchange" width="53vw" backgroundColor="#4A90E2" mafiaUrls={[]} />

                     <Card img={henna} text ={caminando}header ="Cristo por Henna" width="53vw"/>
                     <Card img={unity1} text ={unityGame} width="53vw" header ="Racing game"/>
                     <Card img={jdenticon} text ={jdenticonTxt} width="53vw" header ="Identicon Generator"/>
                     <Card img={localizerTrans} text ={localizerTransTxt} width="53vw" header ="Localizer Translator"/>
                     <Card img={localizerGen} text ={localizerGenTxt} width="53vw" header ="Localizer Generator"/>




                </ProjectsContainer>
                <ProjectsContainer>
                    <ProjectsText><Line width="78vw"/> Cool Stuff <Line width="78vw"/> </ProjectsText>
                    <CoolStuffContainer>
                      <VideoContainer>
                      <iframe
                          title="project 1"
                          width="600vw"
                          height="400vw"
                          src="https://www.youtube.com/embed/66bU4dFE57E?rel=0&amp;controls=0&amp;showinfo=0"
                          frameBorder="0" allowFullScreen = {false}>
                      </iframe>
                          <VideoText align="center" >
                              UART communication between a microprocessor and Processing. The system senses gyroscope data in real time.
                          </VideoText>
                      </VideoContainer>
                      <VideoContainer>
                        <iframe
                            title="project 2"
                            width="600vw"
                            height="400vw"
                            src="https://www.youtube.com/embed/lJlNHwAQjiA?rel=0&amp;controls=0&amp;showinfo=0&amp;start=23"
                            frameBorder="0"
                            allowFullScreen = {false}>
                        </iframe>
                        <VideoText  align="center" >
                            Prototype of a real time flight remote simulator. The system responds to data received from
                            a gyroscope placed on a UAV and the motion is controlled by a pneumatic system.
                        </VideoText>
                      </VideoContainer>
                      <VideoContainer>
                        <iframe
                                title="project 3"
                                width="600vw"
                                height="400vw"
                                src="https://www.youtube.com/embed/k1OkFEw4Kds?rel=0&amp;controls=0&amp;showinfo=0"
                                frameBorder="0"
                                allowFullScreen = {false}>
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
        background-color: ${props => props.isMobile ? '#000' : ''}
        position: absolute;
        top:0;
        left:0
        width: 100%;
        height:100%;
        background-image: url(${BackgroundImg});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;

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



const Line = ({width})=> { return( <svg height=".8vw" width="20vw">
                              <line x1="0" y1="0" x2={width} y2="0" style={{stroke:'#fff', strokeWidth:2}} />
                           </svg> )} ;


const fadeInanimation = keyframes`${fadeIn}`;

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

const TempBack = styled.div`
  background-color: #000;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const ImageContainer = styled.div`
  color:white;
  width: 100%;
  height:100%;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;




export default Projects;
