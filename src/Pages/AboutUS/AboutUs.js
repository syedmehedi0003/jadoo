import React from 'react';


import '../CSS/style.css';


import img1 from '../../images/AboutUs/Group 61.png';
import man from '../../images/AboutUs/Image.png';

const AboutUs = () => {
    return (
        <div>
            <section className='aboutUs'>

                <div className='aboutText'>
                    <p className='about-p'>Testimonials</p>

                    <h2>What people say
                        about Us.</h2>

                    <img src={img1} alt="" />
                </div>

                <div className='about-card'>
                    <img src={man} alt="" />
                    <div className='about-desc'>
                        <h5>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</h5>
                        <p className='about-p'>Mike taylor</p>
                    </div>

                    <div className='ceo'>
                        <p className='about-p'>Chris Thomas</p>
                        <h5>CEO of Red Button</h5>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default AboutUs;