import React from 'react';
import '../../../sass/Package/CompanyPack.scss';
import "../../../css/DashboardExam.css";
import Header from '../../tools/Header';
import Navbars from '../../tools/Navbars';
import Footer from '../../tools/Footer';
import Money from "../../../images/icons8-money-100.png";
import Time from "../../../images/icons8-time-48.png";
import Total from "../../../images/icons8-help-48.png";
import { NavLink } from "react-router-dom";


const CompanyPack = () => {
  return (
    <div id='CompanyPack'>
        <Header/>
        <Navbars/>
     
        <div className="selectExams">
          <div className="packageTitle">
            <h3>آزمون های پکیج سازمانی</h3>
          </div>
          <div className="examRoll">
            <div className="rolls">
              <table style={{ backgroundColor: "#FFEEEE" }}>
                <tr>
                  <th>
                    <img src={Total} alt="photo1" className="stylePhoto" />{" "}
                    مجموع تعداد سوالات
                  </th>
                </tr>
                <tr>
                  <td>۲۳۷ تا</td>
                </tr>
              </table>
            </div>
            {/* <div className="rolls">
              <table style={{ backgroundColor: "#FFEEEE" }}>
                <tr>
                  <th>
                    <img src={Time} alt="photo1" className="stylePhoto" /> مدت
                    زمان پاسخ{" "}
                  </th>
                </tr>
                <tr>
                  <td>۸ دقیقه</td>
                </tr>
              </table>
            </div> */}
            <div className="rolls">
              <table style={{ backgroundColor: "#FFEEEE" }}>
                <tr>
                  <th>
                    <img src={Money} alt="photo1" className="stylePhoto" /> مبلغ
                    آزمون{" "}
                  </th>
                </tr>
                <tr>
                  <td>۱۸۰/۰۰۰ تومان</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="aboutCompTest">
            <p>برای تکمیل پکیج سازمانی پس از اتمام آزمون اول ، آزمون های دیگر به ترتیب باز میشود</p>
          </div>
          <div className="card-grid">



          <NavLink to="/Question4" className="card">
            <div className="card__background PhotoBack13"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">شخصیت شناسی NEO</h3>
            </div>
          </NavLink>


          <NavLink to="/Question5" className="card lockCard">
            <div className="card__background PhotoBack10"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">رفتارشناسی DISC</h3>
            </div>
          </NavLink>

          <NavLink to="/Question1" className="card lockCard">
            <div className="card__background PhotoBack6"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">نگرش نسبت به پولMBBC</h3>
            </div>
          </NavLink>

          <NavLink to="/Question3" className="card lockCard">
            <div className="card__background PhotoBack9"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">شخصیت شناسی MBTI</h3>
            </div>
          </NavLink>



          </div>
        </div>
       
        <Footer/>
    </div>
  )
}

export default CompanyPack