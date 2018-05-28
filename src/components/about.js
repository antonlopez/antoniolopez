import React, {Component} from 'react';
import { Modal, Effect} from 'react-dynamic-modal';


class HistoryModal extends Component{
    render(){
        const { onRequestClose } = this.props;
        return (
            <Modal style={modalStyle}
                onRequestClose={onRequestClose}
                effect={Effect.ScaleUp}>
                <h1 style={styles.header}>About Me</h1>
                <div style={styles.container}>
                   <div style={styles.division}>
                       <p style={styles.subHeader}> Professional </p>
                       <p align='justify' style={styles.text}>
                           I currently work at Wycliffe associates as a software developer, I did my B.S. in Electrical
                           Engineering at the University of Texas at El Paso. I can develop web applications in React/Redux,
                           and mobile apps in React Native and Android. Skills:
                       </p>
                       <ul style={styles.text}>
                           <li>Javascript ES6</li>
                           <li>Python</li>
                           <li>React ( Redux, Router, Axios, Styled components, Animations)</li>
                           <li>Django( Websockets, REST API's) </li>
                           <li>React native</li>
                           <li>Agile methodology</li>
                       </ul>
                   </div>
                    <div style={styles.division}>
                        <p style={styles.subHeader}> Personal </p>
                        <p style={styles.text}> I am a believer of Jesus Christ and I want to glorify Him through my life. Currently
                            I serve at Nona Church helping leading a discussion group. I have been missionary in Different cities of Mexico like Oaxaca, Celaya and Juarez,
                            In U.S. I have served in Kenai, Alaska and South Padre Island in Texas. During college I was involved as a leader at the Baptist Student Ministry
                            in El paso, Texas. I enjoy being around people and teach them something new if I can.
                        </p>
                        <div style = {styles.video}>
                            <iframe
                                title="Mission"
                                width="518"
                                height="315"
                                src="https://www.youtube.com/embed/SBHoV-l60FA"
                                frameborder="0"
                                gesture="media"
                                allowfullscreen>
                            </iframe>
                        </div>
                   </div>
                </div>
            </Modal>
        );
    }
}

const styles = {
    container: {
        display:'flex',
        flexDirection:'row',
        width: '100%'

    },
    division:{
        width: '50%',
        display:'flex',
        flexDirection:'column'
    },
    header:{
        display: 'flex',
        justifyContent:'center',
        color: '#111',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'lighter',
        letterSpacing: 1,
        lineHeight: 1
    },
    subHeader:{
        alignSelf:'center',
        color: '#111',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'bold',
        letterSpacing: 1,
        lineHeight: 1,
        fontSize: '1.2vw',


    },
    text:{
        color: '#111',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'lighter',
        marginLeft: '2%',
        letterSpacing: 1,
        lineHeight: 2,
        width:'80%',
        alignSelf:'center',
        fontSize:'1.1vw'
    },
    video:{
        alignSelf:'center'
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
            overflowY       : 'scroll'
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

export default HistoryModal;