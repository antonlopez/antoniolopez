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
            <Container >

                <ImgContainer class="glitch" >
                    <ImageMyself alt="Me" src={me} />
                </ImgContainer>
                <CenterContainer>
                    <TextContainer>
                        <Header> Hi! My name is Antonio Lopez.</Header>
                        <IntroductionText> I am a software Engineer passionate about coding who likes to make things work </IntroductionText>
                    </TextContainer>

                      <NavigatorsContainer>
                        <ImgWrapper>
                          <ImageProject
                              alt="Projects"
                              src={projects}
                              onClick={()=>this.openProjects()}
                          />
                        </ImgWrapper>
                        <ImgWrapper>
                          <ImageAbout
                              alt="Img"
                              src={about}
                              onClick={()=>this.openAbout()}
                          />
                        </ImgWrapper>


                       </NavigatorsContainer>
                </CenterContainer>
                <SideIcons/>
            </Container>
        );
    }
}




    const Container = styled.div`
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height:100%;
        display: flex;
        justify-content: ${props => props.isMobile ? 'space-between' : '' };
    `;

    const TextContainer = styled.div`
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
        color: #111;
        font-family: "Helvetica Neue", sans-serif;
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
        color: #111;
        font-family: "Helvetica Neue", sans-serif;
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


export default Web;
