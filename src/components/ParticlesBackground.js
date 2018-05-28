import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

const ParticlesBackground = ({height, width, color, backgroundColor}) =>{
    if(color === '#fff'){
        height = '80vw';
    }


    return(
        <Container height={height} backgroundColor={backgroundColor}>
            <Particles
                params={{
                    particles: {
                        color: {
                            value: color
                        },
                        number:{
                            value:60
                        },
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: color,
                            }
                        }
                    }
                }}
                style={{
                    width: {width},
                    height: {height}
                }}
            />


        </Container>


    );

};

const Container = styled.div`
    background-color:${props=>props.backgroundColor}
    overflow:scroll;
    z-index: -1;
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
`;

export default ParticlesBackground;
