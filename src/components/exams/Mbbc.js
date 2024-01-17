import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/Mbbc.css";
import Header from "../../components/tools/Header";
import Navbars from "../../components/tools/Navbars";
import ExamPhoto from "../../images/9.jpg";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { NavLink } from "react-router-dom";
import { MbbcTest } from "../tools/Constant";
import AuthContext from "../../Context/Auth/authContext";

const Mbbc = () => {
  document.title = MbbcTest;
  // import AuthContext from "../../Context/Auth/authContext";
  // to={user ? "/Question15" : "/Login"}
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const override = css`
    display: flex;
    margin: 20rem auto;
  `;

  return (
    <div id="Mbbc">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="Mbbc">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img src={ExamPhoto} alt="Examphoto" />
              </div>
              <div className="examphares">
                <h1>تست نگرش نسبت به پول MBBS</h1>
                <p>
                  آزمونی است که نگرشها و باورهای مالی و پولی شما را می سنجد. در
                  این آزمون نوع تعامل خود با پول و مسائل مالی را کشف خواهید کرد.
                  این تست شامل 60 سوال می باشد و زمان تقریبی جهت پاسخگویی به
                  سوالات 8 الی 10 دقیقه می باشد.
                </p>
                <h5>آزمون خریداری شده</h5>
              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question1" : "/Login"}>
                <button>شروع آزمون</button>
              </NavLink>
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              >
                <div className="AboutExam">
                  <div className="HeadAbout">
                    <h2>MBBS</h2>
                  </div>
                  <div className="TextAbout">
                    <p>
                      این تست برای سنجش نگرش و رفتارهای پولی مورد استفاده قرار
                      میگیرد. رفع مسائل مالی و تغییر در نحوهی نگرش افراد به
                      مسائل مالی به درمان بسیاری از مشکلات روانی آنان کمک میکند.
                    </p>
                  </div>
                </div>
              </Popup>
              <button className="button">اضافه به سبد خرید</button>

            </div>
          </div>
          <div className="examRoll">
            <div className="rolls">
              <table style={{ backgroundColor: "#F582A7" }}>
                <tr>
                  <th>
                    <img src={Total} alt="photo1" className="stylePhoto" />{" "}
                    تعداد سوالات
                  </th>
                </tr>
                <tr>
                  <td>۶۰ تا</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#F582A7" }}>
                <tr>
                  <th>
                    <img src={Time} alt="photo1" className="stylePhoto" /> مدت
                    زمان پاسخ{" "}
                  </th>
                </tr>
                <tr>
                  <td>۱۰ دقیقه</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#F582A7" }}>
                <tr>
                  <th>
                    <img src={Money} alt="photo1" className="stylePhoto" /> مبلغ
                    آزمون{" "}
                  </th>
                </tr>
                <tr>
                  <td>۷۰/۰۰۰ تومان</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mbbc;
