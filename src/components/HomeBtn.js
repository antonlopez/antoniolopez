import React, {Component} from 'react';
import styled from 'styled-components';
import homeBtn from '../img/home.png';
import { MorphIcon } from 'react-svg-buttons'





export default class HomeBtn extends Component {
  constructor(props){
    super(props);
    this.state= {type:'home'}
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(){
    this.setState({type: 'arrowRight'});
  }

  onMouseLeave(){
    this.setState({type: 'home'});
  }

  render(){
    const {history} = this.props;
    return(
        <Container>
        <MorphIcon
             type={this.state.type}
             size={80}
             thickness={2}
             color="#fff"
             style={{cursor:'pointer', marginRight:'20px'}}
             onClick={()=> history.push('/')}
             onMouseEnter={this.onMouseEnter}
             onMouseLeave={this.onMouseLeave}
              />

        </Container>
    )
  }
};

//const lightSpeedIn_animation = keyframes`${zoomIn}`;


const Container = styled.div`
    width: 100%;
    position: sticky;
    top:0;
    background-color: transparent;
    justify-content: flex-end;
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
