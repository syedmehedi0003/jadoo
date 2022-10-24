import React from 'react';

import '../Header/Header.css';

import img1 from '../../images/Partner/image 27.png';
import img2 from '../../images/Partner/image 28.png';
import img3 from '../../images/Partner/image 29.png';
import img4 from '../../images/Partner/image 30.png';
import img5 from '../../images/Partner/image 31.png';


const Partner = () => {
    return (
        <div>
            <section className='partner'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
            </section>
        </div>
    );
};

export default Partner;