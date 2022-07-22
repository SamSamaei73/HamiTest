import React from 'react';
import Header from '../tools/Header';
import Navbars from '../tools/Navbars';
import '../../sass/Store.scss';
import ItemStore from './ItemStore';
import Footer from '../tools/Footer';
import Book from '../../images/book.png';

const Store = () => {
  return (
    <div id='Store'>
        <Header/>
        <Navbars/>
        <div className="mainStore">
            <ItemStore color={{backgroundColor:"rgba(217, 212, 103, 0.692)"}} bookPhoto={Book} title={'کتاب اوج پرواز'} price={"۱۰۰/۰۰۰"}/>
            <ItemStore />
            <ItemStore/>
            <ItemStore/>
        </div>
     <Footer/>
    </div>
  )
}

export default Store