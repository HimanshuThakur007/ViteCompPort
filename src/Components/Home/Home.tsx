import React from 'react';
import Header from '../../CustomComponents/Header';
import { CardComp } from '../../CustomComponents/CardComp';
import { InputField } from '../../CustomComponents/InputField';
import { Button } from '../../CustomComponents/Button';
import NavBar from '../NavBar/NavBar';
import {Container,Row,Col} from 'react-bootstrap';
import { InputField2 } from '../../CustomComponents/InputField';
import HeroImage from '../HeroImage/HeroImage';
import ClientSection from '../CllientSection/ClientSection';
import WhyUs from '../WhyUs/WhyUs';
import SkillSection from '../SkillSections/SkillSection';



const Home = () => {
    return (
        <>
         <NavBar/>
         <HeroImage/>
         <ClientSection/>
         <WhyUs/>
         <SkillSection/>
            
        </>
    )
}

export default Home