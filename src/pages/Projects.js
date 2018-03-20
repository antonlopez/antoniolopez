import React, { Component } from 'react';
import styled from 'styled-components';
import ParticlesBackground from '../components/ParticlesBackground';
import Card from '../components/ProjectCard';
import bsm3 from '../img/bsm3.png';
import phoneContainer from '../img/phoneContainer.png'
import henna from '../img/henna.png';




class Projects extends Component {



    render() {
        const bsm = "Web Application developed for a student organization that has presence in 200 colleges " +
            "around Texas.";

        const mobile = "Mobile application developed for the Baptist student ministry, available in the App store and Google Playstore";

        const caminando = "Web application that helps distributing material to create henna tattos to share the gospel in spanish." +
            "project in process..";

        const {width, height}=this.state || 0;

        return (
            <Container>
                <ParticlesBackground backgroundColor={"#000"} color={"#fff"} width={width} height={height}/>
                <ProjectsContainer>
                    <ProjectsText>Projects <Line width="80vw"/> </ProjectsText>
                    <CardsContainer>
                     <Card reverse={true} height="35vw" width="30vw" img={bsm3} text={bsm}/>
                     <Card height="15vw" width="10vw" img={phoneContainer} text ={mobile}/>
                    </CardsContainer>
                    <CardsContainer singleCard={true}>
                        <Card reverse={true} height="35vw" width="30vw" img={henna} text={caminando}/>
                    </CardsContainer>
                </ProjectsContainer>
                <ProjectsContainer>
                    <ProjectsText>Cool Stuff <Line width="78vw"/> </ProjectsText>
                </ProjectsContainer>



            </Container>
        );
    }
}


const Container = styled.div`
        width: 100%;
        height:100%;    
   
    `;


const ProjectsContainer = styled.div`
        padding-top: 10vw;
        padding-left: 4vw;
      
    `;

const CardsContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: ${props=> props.singleCard ? '': 'space-around'};
        padding-left: ${props=> props.singleCard ? '20vw': ''};
        padding-top: ${props=> props.singleCard ? '3vw': ''};
        
       
    
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

const ProjectsText = styled.h1`
        color: #fff;
        font-family: "Helvetica Neue", sans-serif;
        font-weight: lighter;
        font-size: 2.5vw;
        letter-spacing: .2vw;
        `;
const NavigatorsContainer = styled.div `
        padding-top: 1vw;
        display: flex;
        justify-content:space-between;
        
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


export default Projects;
