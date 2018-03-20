import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

const ParticlesBackground = ({height, width, color, backgroundColor}) =>{
    if(color === '#fff'){
        height = '120vw';

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
                    height: '120vw'
                }}
            />


        </Container>


    );

};

const Container = styled.div`
    background-color:${props=>props.backgroundColor}
    position: absolute;
    overflow:scroll;
    width:100%;
    height: ${props => props.height};
    z-index: -1;
`;

export default ParticlesBackground;