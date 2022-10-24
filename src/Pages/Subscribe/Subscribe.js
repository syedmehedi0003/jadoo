import React from 'react';

import '../CSS/style.css';

import imgarrow from '../../images/Subscribe/Group 77.png';
import bgimg1 from '../../images/Subscribe/Group 42.png';
import bgimg2 from '../../images/Subscribe/Group 42.png';

// import { BsEnvelope } from "react-icons/bs";

const Subscribe = () => {
    return (
        <div>
            <section className='subscribe'>
                <div>
                    <img src={imgarrow} alt="" />

                    <div>
                        <img className='bfImg' src={bgimg1} alt="" />
                        <img className='bfImg2' src={bgimg2} alt="" />
                    </div>

                    <h1>Subscribe to get information, latest news and other
                        interesting offers about Cobham</h1>
                    <div className='input'>
                        <input type="email" className='input-box'
                            placeholder='Your email' /> <button>Subscribe</button>
                    </div></div>
            </section>
        </div>
    );
};

export default Subscribe;