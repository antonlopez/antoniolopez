import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {isMobile} from 'react-device-detect';
import {fadeIn} from 'react-animations';
import ParticlesBackground from '../components/ParticlesBackground';
import HomeButton from '../components/HomeBtn';


class AboutMe extends Component {

    render() {
      const {width, height}=this.state || 0;
        return (
            <Container>
                {isMobile ? '' : <ParticlesBackground backgroundColor={"#000"} color={"#fff"} width={width} height={height}/>}
                <HomeButton history={this.props.history} />
                <h1 style={styles.header}>About Me</h1>
                <div style={styles.container}>
                   <div style={styles.division}>
                       <p style={styles.subHeader}> Professional </p>
                       <p align='justify' style={styles.text}>
                         I graduated on May 2017 with a B.S. degree in Electrical Engineering at the University of Texas in El Paso.
                         From 2017-2018 I worked as a software developer at Wycliffe Associates. I can develop web applications in React/Redux,
                         and mobile apps in React Native and Android.
                       </p>
                       <p style={styles.text}>Skills:</p>
                       <ul style={styles.text}>
                           <li>Javascript ES6</li>
                           <li>Python</li>
                           <li>Kotlin</li>
                           <li>React ( Redux, Router, Axios, Styled components, Animations)</li>
                           <li>Django( Websockets, REST API's) </li>
                           <li>React native</li>
                           <li>Agile methodology</li>
                       </ul>
                   </div>
                    <div style={styles.division}>
                        <p style={styles.subHeader}> Personal </p>
                        <p style={styles.text}> I am an extroverted person who likes to make new friends and enjoys sports.
                            I like to play soccer, racquetball, tennis and some volleyball. I love to travel. I have done missionary work in different places of Mexico such as, Oaxaca, Celaya and Juarez.
                            In the U.S. I have served in Kenai, AK, South Padre Island, TX, and also had the opportunity to go to Heredia, Costa Rica. During college I was involved as a leader at the Baptist Student Ministry
                            in El Paso, TX. I enjoy teaching people something new if I can or learn from them.
                        </p>
                        <div style = {styles.video}>
                            <iframe
                                title="Mission"
                                width="518"
                                height="315"
                                src="https://www.youtube.com/embed/SBHoV-l60FA"
                                frameBorder="0"
                                gesture="media"
                                allowFullScreen>
                            </iframe>
                        </div>
                   </div>
                </div>

            </Container>
        );
    }
}

const fadeInAnimation = keyframes`${fadeIn}`;

const Container = styled.div`
        animation: ${fadeInAnimation} .7s ease-in-out;
        width: 100%;
        height:100%;
    `;


const styles = {
    container: {
        display:'flex',
        flexDirection:'row',
        width: '100%'

    },
    division:{
        width: '50%',
        display:'flex',
        flexDirection:'column'
    },
    header:{
        display: 'flex',
        justifyContent:'center',
        color: '#fff',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'lighter',
        letterSpacing: 1,
        lineHeight: 1
    },
    subHeader:{
        alignSelf:'center',
        color: '#fff',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'bold',
        letterSpacing: 1,
        lineHeight: 1,
        fontSize: '1.2vw',


    },
    text:{
        color: '#fff',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'lighter',
        marginLeft: '2%',
        letterSpacing: 1,
        lineHeight: 2,
        width:'80%',
        alignSelf:'center',
        fontSize:'1.1vw'
    },
    video:{
        alignSelf:'center'
    }

};





export default AboutMe;
