import React from 'react';
// import { BsFillCursorFill } from 'react-icons/fa';
import { BsFillCursorFill } from "react-icons/bs";


import '../CSS/style.css';

import img1 from '../../images/Destination/Rectangle 14.png';
import img2 from '../../images/Destination/Rectangle 14.jpg';
import img3 from '../../images/Destination/Rectangle 14 (1).png';

import arrow from '../../images/Destination/navigation 1.png';

const Destination = () => {
    return (
        <div>
            <section className='destination'>
                <p>Top Selling</p>
                <h2>Top Destinations</h2>

                <div className='desc-card'>

                    <div className='card-box'>

                        <div>
                            <img src={img1} alt="" />

                            <div className='desc'>
                                <div>
                                    <p>Rome, Italty</p>
                                    <p> <span><BsFillCursorFill /></span> 10 Days Trip</p>
                                </div>
                                <div>
                                    <p>$5,42k</p>
                                </div>
                            </div>
                        </div>

                    </div>




                    <div className='card-box'>

                        <img src={img2} alt="" />

                        <div className='desc'>
                            <div>
                                <p>London, UK</p>
                                <p> <span><BsFillCursorFill /></span> 12 Days Trip</p>
                            </div>
                            <div>
                                <p>$4.2k</p>
                            </div>
                        </div>

                    </div>

                    <div className='card-box'>

                        <img src={img3} alt="" />

                        <div className='desc'>
                            <div>
                                <p>Full Europe</p>
                                <p> <span><BsFillCursorFill /></span> 28 Days Trip</p>
                            </div>
                            <div>
                                <p>$15k</p>
                            </div>
                        </div>

                    </div>


                </div>







            </section >
        </div >
    );
};

export default Destination;