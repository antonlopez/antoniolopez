import React, { Component } from 'react';
import styled from 'styled-components';




class DiabeticEyeSupport extends Component {


    render() {
        return (
            <Container >
               <Header>Diabetic eye simulator Support</Header>
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
        background: #000000;  /* fallback for old browsers */
        flex-direction:column;
        align-items:center;
        justify-content:space-around;

    `;

    const Text = styled.p`
      color:#ffffff;
      font-size: 2vw;
      text-align:center;
    `;



    const Header = styled.h2`
      text-align: center;
      color:white;
      font-size: 3vw;
    `;




export default DiabeticEyeSupport;
