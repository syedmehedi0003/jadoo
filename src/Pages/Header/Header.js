import React from 'react';

import '../CSS/style.css';
import '../CSS/mobile.css';


import logo from '../../images/Header/Logo.png';


import image1 from '../../images/Header/Traveller 1.png';
import play from '../../images/Header/play.png';
import group1 from '../../images/Header/Group.png';
import group2 from '../../images/Header/Group.png';

import { FaAngleDown } from 'react-icons/fa';


const Header = () => {
    return (
        <div>
            <section id='header'>


                <div class="navbar">

                    <div class="title">
                        <img src={logo} alt="" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="">Destinations</a></li>
                            <li><a href="">Hotels</a></li>
                            <li><a href="">Flights</a></li>
                            <li><a href="">Bookings</a></li>
                            <li><a href="">Login</a></li>
                            <li><a href="">Sign up</a></li>
                            <li><a href="">En <span className='rr'>< FaAngleDown /></span></a></li>

                            {/* <img className='rr' src={arrow} alt="" /> */}
                        </ul>

                    </nav>

                </div>

                <div className='banner'>
                    <div className='description'>
                        <p className='pera1'>Best Destinations around the world</p>

                        <p className='pera2'>Travel,
                            enjoy
                            <br />
                            and live a new <br />
                            and full life
                        </p>

                        <p className='pera3'>Built Wicket longer admire do barton vanity itself do in it. <br />
                            Preferred to sportsmen it engrossed listening. Park gate <br />
                            sell they west hard for the.</p>

                        <div className='more'>
                            <button>Find out more</button>
                            <img className='play' src={play} alt="" />
                            <p className='play-text'>Play Demo</p>
                        </div>

                    </div>

                    <div className='banner-pic'>
                        <img className='lady' src={image1} alt="" />
                        <img className='plane1' src={group1} alt="" />
                        <img className='plane2' src={group2} alt="" />

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;