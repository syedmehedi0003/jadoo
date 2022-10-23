import React from 'react';

import image1 from '../../images/Traveller 1.png';
import '../Banner/Banner.css';

const Banner = () => {
    return (
        <div>
            <section className='banner'>
                <div className='description'>
                    <p>Best Destinations around the world</p>

                    <h1>Travel, enjoy <br />
                        and live a new <br />
                        and full life
                    </h1>

                    <p>Built Wicket longer admire do barton vanity itself do in it. <br />
                        Preferred to sportsmen it engrossed listening. Park gate <br />
                        sell they west hard for the.</p>

                    <div>
                        <button>Find out more</button>

                        <p>Play Demo</p>
                    </div>

                </div>

                <div className='banner-pic'>
                    <img src={image1} alt="" />

                </div>
            </section>
        </div>
    );
};

export default Banner;