import React from 'react';

import '../Header/Header.css';
import img1 from '../../images/Rectangle 14.png';
import arrow from '../../images/navigation 1.png';

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
                                    <p> <span><img src={arrow} alt="" /></span> 10 Days Trip</p>
                                </div>
                                <div>
                                    <p>$5,42k</p>
                                </div>
                            </div>
                        </div>

                    </div>




                    <div className='card-box'>

                        <img src={img1} alt="" />

                        <div className='desc'>
                            <div>
                                <p>Rome, Italty</p>
                                <p> <span><img src={arrow} alt="" /></span> 10 Days Trip</p>
                            </div>
                            <div>
                                <p>$5,42k</p>
                            </div>
                        </div>

                    </div>

                    <div className='card-box'>

                        <img src={img1} alt="" />

                        <div className='desc'>
                            <div>
                                <p>Rome, Italty</p>
                                <p> <span><img src={arrow} alt="" /></span> 10 Days Trip</p>
                            </div>
                            <div>
                                <p>$5,42k</p>
                            </div>
                        </div>

                    </div>


                </div>







            </section >
        </div >
    );
};

export default Destination;