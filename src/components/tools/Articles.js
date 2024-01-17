import React from "react";
import "../../css/Articles.css";
import "use-slider/lib/slider.min.css";
import { NavLink } from "react-router-dom";
import Book from '../../images/80.jpg';




const Articles = () => {

  return (
    <div id="Articles">
      <div className="articleTitle">
        <h2>کتاب ها</h2>
      </div>
      <section>
      <NavLink to="/Store" className="sectionArt BigArt" >
        <img src={Book} alt="Book"></img>
      </NavLink>
        <div className="sectionArt spectioal">
          <div className="sectionArtInfo">
            <h5>
              کتاب اوج پرواز با نثری شیوا و روان و داستان گونه به معرفی مدل
              رفتار شناسی دیسک می پردازد. در مدل رفتار شناسی دیسک شما به انگیزه
              رفتاری افراد پی خواهید برد. با شناخت مدل رفتار شناسی دیسک روابط
              خود را با محیط پیرامونتان اعم از اعضای خانواده، همکاران و محیط
              اطرافتان و همچنین با خودتان تنظیم خواهید کرد.
            </h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
