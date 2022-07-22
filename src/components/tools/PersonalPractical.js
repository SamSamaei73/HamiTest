import React from "react";
import "../../css/PersonalPractical.css";
import ImgPractical from "../../images/career-paths-school-counsellor.jpg";
import { NavLink } from "react-router-dom";


const PersonalPractical = () => {
  return (
    <div id="PersonalPractical">
      <div className="PersonalPracticalTitle">
        <h2>کاربردهای آزمونهای فردی</h2>
      </div>
      <div className="aboutPersonalPractical">
        <NavLink to="/ListExams"  className="imgPractical" ><img src={ImgPractical} alt="ImgPractical" className="imgpracticalStyle" /></NavLink>
        <div className="infoPractical">
          <p>
            کلیه آزمونهای "حامی تست" برای توسعه و توانمند سازی فردی مناسب هستند.
            کاربران می توانند در ابتدا در آزمونها شرکت نموده و با توجه به نتایج
            حاصل از ارزیابی به شناخت دقیقی از نقاط ضعف و قوت خود و همچنین ویژگی
            های شخصی خویش پی ببرند و سپس به بهبود و ارتقاء کمبودها ونقاط ضعف و
            استفاده و بهره برداری بهینه از پربودها و نقاط قوت در جهت توانمند
            سازی خویش گام بردارند. شناخت دقیق و درست اولین گام در جهت توسعه فردی
            است.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalPractical;
