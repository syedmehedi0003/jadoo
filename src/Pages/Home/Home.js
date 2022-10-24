import React from 'react';

import Header from '../../Pages/Header/Header';
import Services from '../../Pages/Services/Services'
import Destination from '../../Pages/Destination/Destination';
import EasyStep from '../EasySteps/EasyStep';
import AboutUs from '../AboutUS/AboutUs';
import Partner from '../Partner/Partner';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div >
            <Header></Header>
            <Services></Services>
            <Destination></Destination>
            <EasyStep></EasyStep>
            <AboutUs></AboutUs>
            <Partner></Partner>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;