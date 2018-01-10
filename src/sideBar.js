import React from 'react'
import phone from './img/phone.png'
import linkedin from './img/linkedin.png'
import location from './img/location.png'
import './css/image.css';


const SideBar = ()=>{


    return(
        <div className="fadeIn" style = {{display:'flex', flexDirection:'column', flex: 1, alignItems: 'center'}}>
           <div>
                <div style={styles.linkedin}>
                    <img alt="linkedin" src={linkedin} style={{height: 25, width: 25}} />
                    <a style={styles.marginLeft} href="https://www.linkedin.com/in/antonio-lopez-01383012a">Linkedin</a>

                </div>
               <div style={styles.phone}>
                   <img alt="phone" src={phone} style={{height: 25, width: 25}}   />
                   <p> +1 915 704 71 16</p>
               </div>
                <div style={styles.location}>
                    <img alt="location" src={location} style={{height: 24, width:15 }}  />
                    <p style={styles.marginLeft}> Orlando, Florida</p>
                </div>
           </div>
        </div>




    );

};

const styles = {
    phone:{
        color: '#111',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'lighter',
        alignSelf:'center',
        fontSize:12,
        justifyContent:'space-between',
        display:'flex',
        alignItems:'center'
    },
    location:{
        color: '#111',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'lighter',
        alignSelf:'center',
        fontSize:12,
        display:'flex',
        marginLeft: '4%'

    },
    linkedin:{
        color: '#111',
        fontFamily: 'Helvetica Neue, sans-serif',
        fontWeight: 'lighter',
        alignSelf:'center',
        fontSize:12,
        display:'flex'

    },
    marginLeft:{
        marginLeft:'10%',
        display:'flex',
        alignItems:'center'
    }

};

export default SideBar;