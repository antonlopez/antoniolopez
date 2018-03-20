import React, { Component } from 'react';
import { ModalManager} from 'react-dynamic-modal';
import styled from 'styled-components';
import me from './img/me2.png'
import projects from './img/projects.png'
import about from './img/about.png'
import './css/image.css';
import About from './components/about';
import Intro from './pages/Intro';
import Projects from './pages/Projects'


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
