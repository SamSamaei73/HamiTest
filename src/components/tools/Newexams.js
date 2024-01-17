import React from "react";
import "../../css/Newexams.css";
import "use-slider/lib/slider.min.css";
import useSlider from "use-slider";
import Photo1 from "../../images/disc-500x394.jpg";
import Photo2 from "../../images/9.jpg";
import Photo3 from "../../images/3.jpg";
import Photo4 from "../../images/10.jpg";
import Photo5 from "../../images/5.jpg";
import { NavLink } from "react-router-dom";
import Click from "../../images/icons8-click-64.png";

const Newexams = () => {
  const { ref } = useSlider({
    autoPlay: true,
    loop: true,
    slidesPerView: 3,
    duration: 5000,
    speed: 1000,
    navigation: true,
  });

  return (
    <div id="Newexams">
      <div className="articleTitle">
        <h1>آزمون ها</h1>
      </div>
      <div className="articleStyle" ref={ref}>
        <div className="articleItem">
          <NavLink to="/Mbbc" className="articleInfo">
            <div className="imgForExam">
              <img src={Photo2} alt="photoMO" />
            </div>
            <div className="infoForExam">
              <h4> تست نگرش نسبت به پول </h4>
            </div>
          </NavLink>
        </div>

        <div className="articleItem">
          <NavLink to="/Multipleintelligence" className="articleInfo">
            <div className="imgForExam">
              <img src={Photo3} alt="photoMO" />
            </div>
            <div className="infoForExam">
              <h4>تست هوش چندگانه گاردنر</h4>
            </div>
          </NavLink>
        </div>

        <div className="articleItem">
          <NavLink to="/Leader" className="articleInfo">
            <div className="imgForExam">
              <img src={Photo4} alt="photoMO" />
            </div>
            <div className="infoForExam">
              <h4>تست توانایی رهبری</h4>
            </div>
          </NavLink>
        </div>

        <div className="articleItem">
          <NavLink to="/Disc" className="articleInfo">
            <div className="imgForExam">
              <img src={Photo1} alt="photoMO" style={{width:"19rem"}} />
            </div>
            <div className="infoForExam">
              <h4>DISC تست رفتارشناسی </h4>
            </div>
          </NavLink>
        </div>

        <div className="articleItem">
          <NavLink to="/MCI" className="articleInfo">
            <div className="imgForExam">
              <img src={Photo5} alt="photoMO" />
            </div>
            <div className="infoForExam">
              <h4> MCI تست هوش اخلاقی </h4>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="MoreExam">
        <img src={Click} alt="Click" />
        <NavLink to="/ListExams" className="clickHover">
          <h2>آزمون های بیشتر</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default Newexams;
