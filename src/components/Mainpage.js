import React from 'react';
import Header from './tools/Header';
import Navbars from './tools/Navbars';
import Slider from './tools/Slider';
import Articles from './tools/Articles';
import Footer from './tools/Footer';
import EffectPage from './tools/EffectPage';
import Newexams from './tools/Newexams';
import ArticlesHamitest from './tools/ArticlesHamitest';
import PersonalPractical from './tools/PersonalPractical';
import '../css/Mainpage.css';
import {Firstpage} from '../components/tools/Constant';



const Mainpage = () => {
  document.title=Firstpage;
  return (
    <div id='Mainpage'>
        <Header/>
        <Navbars/>
        <Slider/>
        <Newexams/>
        <EffectPage/>
        <PersonalPractical/>
        <Articles/>
        <ArticlesHamitest/>
        <Footer/>
    </div>
  )
}

export default Mainpage