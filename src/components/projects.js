import React, {Component} from 'react';
import { Modal, Effect} from 'react-dynamic-modal';


class Projects extends Component{
    render(){
        const { onRequestClose } = this.props;
        return (
            <Modal style={modalStyle}
                onRequestClose={onRequestClose}
                effect={Effect.ScaleUp}>
                <h1 style={styles.header}>Projects</h1>
                <div style = {styles.content}>
                    <div style ={styles.projects}>
                        <div style={{backgroundColor: 'springgreen'}}>
                            <iframe
                                title="project 1"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/66bU4dFE57E?rel=0&amp;controls=0&amp;showinfo=0"
                                frameborder="0" allowfullscreen = {false}>
                            </iframe>
                                <p  align="center" style = {styles.description} >
                                    UART communication between a microprocessor and Processing. The system senses gyroscope data in real time.
                                </p>
                        </div>
                        <div style={{backgroundColor: 'black'}}>
                                <iframe
                                    title="project 2"
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/lJlNHwAQjiA?rel=0&amp;controls=0&amp;showinfo=0&amp;start=23"
                                    frameborder="0"
                                    allowfullscreen>
                                </iframe>
                                <p  align="center"style = {styles.description2} >
                                    Prototype of a real time flight remote simulator. The system responds to data received from
                                    a gyroscope placed on a UAV and the motion is controlled by a pneumatic system.
                                </p>
                        </div>
                    </div>

                    <div style ={styles.projects}>
                        <div style={{backgroundColor: 'black'}}>
                        <iframe
                                title="project 3"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/k1OkFEw4Kds?rel=0&amp;controls=0&amp;showinfo=0"
                                frameborder="0"
                                allowfullscreen>
                        </iframe>
                            <p align="justify" style = {styles.description2} >
                               Head tracking system for FPV, using smartphone internal gyroscope and developed on android.
                            </p>
                        </div>
                        <div style={{backgroundColor: 'springgreen'}}>
                        <iframe
                            title="project 3"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/ru2ahAXbzeU?rel=0&amp;controls=0&amp;showinfo=0"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>
                            <p  align="center"style = {styles.description} >
                                Game developed in Android studio.
                            </p>
                        </div>

                    </div>

                </div>

            </Modal>
        );
    }
}


const styles = {
    header:{
        display: 'flex',
        justifyContent:'center',
        color: '#111',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'lighter',
        letterSpacing: 1,
        lineHeight: 1
    },
    content:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        overflowY:'scroll'
    },
    projects:{
        display:'flex',
        justifyContent:'space-between',
        width:'90%',
        alignSelf:'center',
        marginBottom:'3%'
    },
    description:{
        width: 560,
        color: '#111',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'lighter',
        letterSpacing: 1,
        lineHeight: 1.3,
        alignSelf:'center',
        fontSize: 18

    },
    description2:{
        width: 560,
        color: '#fff',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'lighter',
        letterSpacing: 1,
        lineHeight: 1.3,
        alignSelf:'center',
        fontSize: 18,
        paddingLeft: 4,
        paddingRight: 4

    }

};


const modalStyle =
    {
        overlay: {
            position        : 'fixed',
            top             : 0,
            left            : 0,
            right           : 0,
            bottom          : 0,
            zIndex          : 99999999,
            overflow        : 'hidden',
            perspective     :  1300,
            backgroundColor : 'rgba(0, 0, 0, 0.3)',
            overflowY               : 'scroll'
        },

        content: {
            position                : 'relative',
            margin                  : '5% auto',
            width                   : '90%',
            border                  : '1px solid rgba(0, 0, 0, .2)',
            background              : '#fff',
            overflow                : 'auto',
            borderRadius            : '4px',
            outline                 : 'none',
            boxShadow               : '0 5px 10px rgba(0, 0, 0, .3)',

        }
    };



export default Projects;
