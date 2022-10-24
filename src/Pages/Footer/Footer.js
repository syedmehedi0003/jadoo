import React from 'react';

import social from '../../images/Footer/Social.png';
import google from '../../images/Footer/Google Play.png';
import apple from '../../images/Footer/Play Store.png';


const Footer = () => {
    return (
        <div>


            <div className='footer'>

                <div className='jadoo'>
                    <h1>Jadoo.</h1>
                    <h5>Book your trip in minute, get full
                        Control for much longer.
                    </h5>
                </div>

                <div className='Company'>
                    <h2>Company</h2>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Mobile</p>
                </div>

                <div className='Company'>
                    <h2>Contact</h2>
                    <p>Help/FAQ</p>
                    <p>Press</p>
                    <p>Affilates</p>
                </div>

                <div className='Company'>
                    <h2>More</h2>
                    <p>Airlinefees</p>
                    <p>Airline</p>
                    <p>Low fare tips</p>
                </div>

                <div className='Company'>
                    <span className='footerIcon'></span>
                    <img src={social} alt="" />
                    <p className='fText'>Discover our app</p>

                    <div className='app'>
                        <img src={google} alt="" />
                        <img src={apple} alt="" />
                    </div>


                </div>

            </div>

            <div className='copyRight'>
                <p className='copyText'>All rights reserved@jadoo.co</p>
            </div>
        </div >
    );
};

export default Footer;