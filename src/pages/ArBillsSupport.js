import React, { Component } from 'react';
import styled from 'styled-components';
import USart from '../img/usArt.png';






class ArBillsSupport extends Component {


    render() {
        return (
            <Container >
              <Header>AR Bills US Support</Header>
                <Img src={USart} alt="usArt"/>
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
        background: #a8ff78;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #78ffd6, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        flex-direction:column;
        align-items:center;
        justify-content:space-around;

    `;

    const Text = styled.p`
      font-family: 'Lobster';
      font-size: 4vw;
      text-align:center;
    `;

    const Img = styled.img`
      width:300px;

    `;


    const Header = styled.h2`
      text-align: center;
      font-family: 'Lobster';
      font-size: 4vw;
    `;




export default ArBillsSupport;
