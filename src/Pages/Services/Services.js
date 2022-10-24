import React from 'react';

import '../Header/Header.css';
import img1 from '../../images/Services/Group48.png';
import img2 from '../../images/Services/Group51.png';
import img3 from '../../images/Services/Group50.png';
import img4 from '../../images/Services/power-supply 1.png';
import bgimg from '../../images/Services/Rectangle 157.png';

const Services = () => {
    return (
        <div>
            <section className='services'>
                <p>CATEGORY</p>
                <h2>We Offer Best Services</h2>

                <div className='service'>
                    <div className='service-box'>

                        <img src={img1} alt="" />
                        <div className='text'>
                            <h3>Calculated Weather</h3>
                            <p>Built Wicket longer <br /> admire do barton <br /> vanity itself do in it.</p>
                        </div>
                    </div>

                    <div id='bgimg'>
                        <div className='service-box' id='box'>

                            <img className='img2' src={img2} alt="" />
                            <div className='text'>
                                <h3>Best Flights</h3>
                                <p>Engrossed listening. <br /> Park gate sell they <br /> west hard for the.</p>

                            </div>


                            {/* <img src={bgimg} alt="" /> */}
                        </div>

                    </div>


                    <div className='service-box'>

                        <img src={img3} alt="" />
                        <div className='text'>
                            <h3>Local Events</h3>
                            <p>Barton vanity itself do <br /> in it. Preferd to men it <br /> engrossed listening. </p>

                        </div>

                    </div>


                    <div className='service-box'>

                        <img src={img4} alt="" />
                        <div className='text'>
                            <h3>Customization</h3>
                            <p>We deliver outsourced <br />
                                aviation services for <br />
                                military customers</p>

                        </div>

                    </div>



                </div>
            </section>
        </div>
    );
};

export default Services;