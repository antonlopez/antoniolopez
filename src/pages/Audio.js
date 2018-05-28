import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {headShake} from 'react-animations';
import ParticlesBackground from '../components/ParticlesBackground';
import Card from '../components/ProjectCard';
import bsm3 from '../img/bsm3.png';
import phoneContainer from '../img/phoneContainer.png'
import henna from '../img/henna.png';
import radio from '../img/radio-icon.png';
import record from '../img/record_Audio.png';
import RadioBackground from '../img/radio-background.png';




class Audio extends Component {



    render() {




        return (
            <Container>



            </Container>
        );
    }
}


const Container = styled.div`
        width: 100%;
        height:40vw;
        
        background-image: url(${RadioBackground} );
         background-position: 50%;
         background-repeat: no-repeat;
        // background-color: #2D2D2D;    
   
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


const ProjectsText = styled.h1`
        color: #fff;
        font-family: "Helvetica Neue", sans-serif;
        font-weight: lighter;
        font-size: 2.5vw;
        letter-spacing: .2vw;
        `;


const ImageMyself = styled.img`
        height: 45vw;
        width:15vw;
        padding-top 3vh; 
    `;




export default Audio;
