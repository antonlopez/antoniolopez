import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import SideIcons from '../components/SideIcons';
import MafiaLogo from '../img/mafia1.png';






class MafiaSupport extends Component {


    render() {
        return (
            <Container >


              <Header>Mafia Card Dealer Support</Header>

              <Img src={MafiaLogo} alt="mafLogo"/>

              <Text> Any question or support contact me at: <strong>anton.lopez09@gmail.com</strong></Text>


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
        color:white;
        background-color: #000;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;

    `;

    const Text = styled.p`
      font-family: 'Press Start 2P', cursive;
    `;

    const Img = styled.img`
      width:300px;

    `;


    const Header = styled.h2`
      text-align: center;
      font-family: 'Press Start 2P', cursive;
    `;




export default MafiaSupport;
