import React, { Component } from 'react';
import styled from 'styled-components';
import BuildUpIcon from '../img/buildUpIcon.png';






class BuildUpSupport extends Component {


    render() {
        return (
            <Container >
              <Header>Build up AR Support</Header>
                <Img src={BuildUpIcon} alt="builp"/>
              <Text> Any question or support contact me at: <strong>anton.lopez09@gmail.com</strong></Text>
            </Container>
        );
    }
}



    const Container = styled.div`
        top:0;
        left: 0;
        width: 100%;
        height:100%;
        display: flex;
        justify-content: ${props => props.isMobile ? 'space-between' : '' };
        color:white;
        background: #65d737;  /* fallback for old browsers */
        flex-direction:column;
        align-items:center;
        justify-content:space-around;

    `;

    const Text = styled.p`
      font-family: 'Press Start 2P', cursive;
      font-size: 2vw;
      text-align:center;
    `;

    const Img = styled.img`
      width:300px;

    `;


    const Header = styled.h2`
      text-align: center;
        font-family: 'Press Start 2P', cursive;
      font-size: 3vw;
    `;




export default BuildUpSupport;
