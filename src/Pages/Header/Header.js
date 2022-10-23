import React from 'react';
import '../Header/Header.css';
import logo from '../../images/Logo.png';

const Header = () => {
    return (
        <div>
            <section class="navbar">

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
                        <li><a href="">En</a></li>
                    </ul>

                </nav>

            </section>
        </div>
    );
};

export default Header;