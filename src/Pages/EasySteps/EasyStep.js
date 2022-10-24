import React from 'react';
import { FaMap } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { BsSuitHeart } from "react-icons/bs";

import '../Header/Header.css';

import img1 from '../../images/EasySteps/Group 7.png';
import img2 from '../../images/EasySteps/Group 12.png';
import img3 from '../../images/EasySteps/Group 11.png';
import trip from '../../images/EasySteps/Rectangle 17.jpg';
import icon from '../../images/EasySteps/Group (1).png'
import cardImg from '../../images/EasySteps/Group 4 (1).png'

const EasyStep = () => {
    return (
        <div>
            <section className='easySteps'>

                <div>
                    <div className='nextTrip'>
                        <p>Easy and Fast</p>
                        <h2>Book your next trip <br />
                            in 3 easy steps</h2>
                    </div>

                    <div className='steps'>
                        <div>
                            <img src={img1} alt="" />
                        </div>

                        <div className='stepText'>
                            <h4>Choose Destination</h4>
                            <h5>Lorem ipsum dolor sit amet, consectetur <br />
                                adipiscing elit. Urna, tortor tempus. </h5>
                        </div>
                    </div>

                    <div className='steps'>
                        <div>
                            <img src={img2} alt="" />
                        </div>

                        <div className='stepText'>
                            <h4>Make Payment</h4>
                            <h5>Lorem ipsum dolor sit amet, consectetur <br />
                                adipiscing elit. Urna, tortor tempus. </h5>
                        </div>
                    </div>


                    <div className='steps'>
                        <div>
                            <img src={img3} alt="" />
                        </div>

                        <div className='stepText'>
                            <h4>Reach Airport on Selected Date</h4>
                            <h5>Lorem ipsum dolor sit amet, consectetur <br />
                                adipiscing elit. Urna, tortor tempus. </h5>
                        </div>
                    </div>

                </div>

                <div className='trip'>
                    <div className='trip-card'>
                        <img src={trip} alt="" />

                        <h3>Trip To Greece</h3>
                        <p>14-29 June | by Robbin joseph</p>

                        <p> <span className='stepIcon'><FaLeaf /></span >  <span className='stepIcon'><FaMap /></span>  <span className='stepIcon'><FaLocationArrow /></span> </p>

                        <p> <span><img src={icon} alt="" /></span> 24 people going
                            <span className='love'> <BsSuitHeart /></span></p>
                    </div>

                    <div className='card-img'>
                        <img src={cardImg} alt="" />
                    </div>

                </div>


            </section>
        </div>
    );
};

export default EasyStep;