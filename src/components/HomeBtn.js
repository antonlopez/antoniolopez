import React from 'react';
import styled from 'styled-components';
import homeBtn from '../img/home.png';





export default ({history}) => {
    return(
        <Container>
          <Img onClick={()=> history.push('/')}src={homeBtn} alt='alt' />
        </Container>
    );
};

//const lightSpeedIn_animation = keyframes`${zoomIn}`;


const Container = styled.div`
    width: 100%;
    position: fixed;
    top:0;
    margin-top: 2vh;
    background-color: transparent;
    border-radius: .5vw;
    justify-content: space-between;
    display:flex;
`;

const Img = styled.img`
  position: absolute;
  right: 3px;
  height: 5vw;
  &:hover{
    cursor: pointer;
    transform: scale(1.1);
  }
    `;
