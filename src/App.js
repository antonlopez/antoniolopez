import React, { Component } from 'react';
import { ModalManager} from 'react-dynamic-modal';
import styled from 'styled-components';
import './css/image.css';
import Intro from './pages/Intro';



class App extends Component {


    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }


  render() {
        const {height, width} = this.state;


    return (
        <Container height={height} >
            <Intro height={height} width={width} history ={this.props.history}/>
            {/*<Projects height={height} width={width} />*/}
        </Container>
    );
  }
}

const Container = styled.div`
    width: 100%;
    height: ${props => props.height}px
    
`;


export default App;
