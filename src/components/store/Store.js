import React from 'react';
import Header from '../tools/Header';
import Navbars from '../tools/Navbars';
import '../../sass/Store.scss';
import ItemStore from './ItemStore';
import Footer from '../tools/Footer';
import Book from '../../images/book.png';
import Disc from '../../images/155.png';

const Store = () => {
  return (
    <div id='Store'>
        <Header/>
        <Navbars/>
        <div className="mainStore">
            <ItemStore color={{backgroundColor:"rgba(217, 212, 103, 0.692)"}} bookPhoto={Book} title={'کتاب اوج پرواز'} price={"۱۰۰/۰۰۰"}/>
            <ItemStore color={{backgroundColor:"#FFB3B3"}} bookPhoto={Disc} title={'DISC دوره رفتارشناسی '} price={"۱۰۰/۰۰۰"}/>
            <ItemStore/>
            <ItemStore/>
        </div>
     <Footer/>
    </div>
  )
}

export default Store