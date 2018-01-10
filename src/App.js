import React, { Component } from 'react';
import { ModalManager} from 'react-dynamic-modal';
import me from './img/me2.png'
import projects from './img/projects.png'
import about from './img/about.png'
import './css/image.css';
import SideBar from './sideBar';
import About from './components/about';
import Projects from './components/projects';



class App extends Component {

    constructor(props){
        super(props);

        this.state = { height: null,
                      width:null
        };


    }

    componentWillMount(){
        if(!this.state.projects || !this.state.about) {
            this.setState({ height: window.innerHeight , width: window.innerWidth});

        }
    }


    openProjectsModal(){
        ModalManager.open(<Projects  onRequestClose={() => true}/>);
    }

    openAboutModal(){
        ModalManager.open(<About  onRequestClose={() => true}/>);
    }


  render() {
        const width = this.state.width * .15;
        const height = this.state.height * .8;

    return (
        <div className="App" style = {{display:'flex'} }>
            <div style = {{display:'flex'} }>
                <div className="fadeIn" >

                    <img alt="Me" src={me} style={{height, width}}  />

                </div>
                <div className="fadeIn" style={styles.textAndProjects}>
                    <div className="text"  >
                        <header style={styles.header}> Hi! My name is Antonio Lopez.</header>
                        <p1 style = {styles.text}> I am an Electrical Engineer, React front end developer and I like to make things work :) </p1>
                    </div>
                    <div className="projects" style={styles.projects}>
                        <img
                            alt="Projects"
                            style ={styles.projectsImg}
                            src={projects}
                            onClick={this.openProjectsModal.bind(this)}

                        />
                        <img
                            alt="Img"
                            style ={styles.aboutImg}
                            src={about}
                            onClick={this.openAboutModal.bind(this)}


                        />

                    </div>
                </div>

            </div>
            <SideBar/>

        </div>
    );
  }
}


const styles = {

    textAndProjects:{
       display: 'flex',
       justifyContent: 'space-between',
        flexDirection: 'column',
        flex:1,
        paddingTop: 200,
        paddingLeft: 100

  },
    projects: {
        height: 'fix-content',
        width: 'fix-content'
    },
    projectsImg:{
        cursor:'pointer'

    },
    aboutImg:{
        cursor:'pointer',
        marginLeft:20

    },
    text:{
        color: '#111',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'lighter',
        fontSize: 23


    },
    header:{
        color: '#111',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'lighter',
        fontSize: 33
    }

};

export default App;
