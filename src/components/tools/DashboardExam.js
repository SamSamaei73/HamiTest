import React from "react";
import "../../css/DashboardExam.css";
import { NavLink } from "react-router-dom";

const DashboardExam = () => {
  return (
    <div id="DashboardExam">
      <section className="hero-section">
        <div className="TitleStyleExam">
          <h3>لیست پکیج ها</h3>
        </div>
        <div className="card-grid">
          <NavLink to="/CompanyPack" className="card Group-section">
            <div className="card__background PhotoBack1"></div>
            <div className="card__content">
              <p className="card__category">پکیج</p>
              <h3 className="card__heading">ارزیابی سازمانی</h3>
            </div>
          </NavLink>

          <NavLink to="/Identification" className="card">
            <div className="card__background PhotoBack2"></div>
            <div className="card__content">
              <p className="card__category">پکیج</p>
              <h3 className="card__heading"> استعدادیابی</h3>
            </div>
          </NavLink>
        </div>
      </section>
      <section className="hero-section">
      <div className="TitleStyleExam">
          <h3>  لیست تست ها</h3>
        </div>
        <div className="card-grid">
          <NavLink to="/NEO" className="card">
            <div className="card__background PhotoBack13"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">شخصیت شناسی NEO</h3>
            </div>
          </NavLink>

          <NavLink to="/Multipleintelligence" className="card">
            <div className="card__background PhotoBack7"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">هوش چندگانه گاردنر</h3>
            </div>
          </NavLink>

          <NavLink to="/Disc" className="card">
            <div className="card__background PhotoBack10"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">رفتارشناسی DISC</h3>
            </div>
          </NavLink>

          <NavLink to="/Mbbc" className="card">
            <div className="card__background PhotoBack6"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">نگرش نسبت به پولMBBS</h3>
            </div>
          </NavLink>

          

          <NavLink to="/Mbti" className="card">
            <div className="card__background PhotoBack9"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">شخصیت شناسی MBTI</h3>
            </div>
          </NavLink>


          <NavLink to="/ActiveWork" className="card">
            <div className="card__background PhotoBack4"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading"> ارزشهای فعال در عمل</h3>
            </div>
          </NavLink>


          <NavLink to="/Driving" className="card">
            <div className="card__background PhotoBack12"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">ادراک خطر در رانندگی</h3>
            </div>
          </NavLink>


          <NavLink to="/JobStress" className="card">
            <div className="card__background PhotoBack11"></div>
            <div className="freeCost"><h5>رایگان</h5></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">استرس شغلی</h3>
            </div>
          </NavLink>


          <NavLink to="/JobSatisfaction" className="card">
            <div className="card__background PhotoBack17"></div>
            <div className="freeCost"><h5>رایگان</h5></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">رضایت شغلی مینه سوتا</h3>
            </div>
          </NavLink>


          <NavLink to="/Leader" className="card">
            <div className="card__background PhotoBack3"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading"> توانایی رهبری</h3>
            </div>
          </NavLink>


          <NavLink to="/MCI" className="card">
            <div className="card__background PhotoBack5"></div>
            <div className="freeCost"><h5>رایگان</h5></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading"> تست هوش اخلاقی MCI</h3>
            </div>
          </NavLink>

          <NavLink to="/Jobburnout" className="card">
            <div className="card__background PhotoBack8"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">فرسودگی شغلی</h3>
            </div>
          </NavLink>


          <NavLink to="/PublicHealth" className="card">
            <div className="card__background PhotoBack14"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading"> سلامت عمومی</h3>
            </div>
          </NavLink>

          <NavLink to="/SolveProblem" className="card">
            <div className="card__background PhotoBack15"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading"> مهارت حل مسئله </h3>
            </div>
          </NavLink>

          <NavLink to="/Drugs" className="card">
            <div className="card__background PhotoBack16"></div>
            <div className="freeCost"><h5>رایگان</h5></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading"> غربالگری مصرف مواد </h3>
            </div>
          </NavLink>

          <NavLink to="/Haland" className="card">
            <div className="card__background PhotoBack19"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading"> رغبت سنج هالند </h3>
            </div>
          </NavLink>

          <NavLink to="/EmotionalIntelligence" className="card">
            <div className="card__background PhotoBack18"></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading"> هوش هیجانی</h3>
            </div>
          </NavLink>


          <NavLink to="/Hexaco" className="card">
            <div className="card__background PhotoBack20"></div>
            <div className="freeCost"><h5>رایگان</h5></div>
            <div className="card__content">
              <p className="card__category">تست</p>
              <h3 className="card__heading">هگزاکو</h3>
            </div>
          </NavLink>


        </div>
      </section>
    </div>
  );
};

export default DashboardExam;
