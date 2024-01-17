import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/JobSatisfaction.css";
import Header from "../../components/tools/Header";
import Navbars from "../../components/tools/Navbars";
import ExamPhoto from "../../images/28.jpeg";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";
import { Minesota } from "../tools/Constant";


const JobSatisfaction = () => {
  document.title = Minesota;
  const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const { user } = authContext;
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
    <div id="JobSatisfaction">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="JobSatisfaction">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img src={ExamPhoto} alt="Examphoto" />
              </div>
              <div className="examphares">
                <h1>تست رضایت شغلی مینه سوتا</h1>
                <p>
                  این تست احساسات و نگرش شما را نسبت به شغل و محیط کارتان می
                  سنجد. بدین ترتیب میزان رضایتمندی شغلی شما مشخص می شود.
                </p>
              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question10" : "/Login"}>
                {" "}
                <button>شروع آزمون</button>
              </NavLink>{" "}
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              >
                <div className="AboutExam">
                  <div className="HeadAbout">
                    <h2>آزمون رضایت شغلی مینه سوتا</h2>
                  </div>
                  <div className="TextAbout">
                    <p>
                      رضایت شغلی یعنی احساس رضایتی که فرد برای کار خود در سازمان
                      دارد طوری که افراد از کارشان لذت میبرند و آن را یک بخش مهم
                      از زندگی میدانند. رضایت شغلی، یک حس مثبت و مطبوع و پیامد
                      ارزیابی شغلی یا تجربه فردی به حساب میآید و از نظر سازمانی،
                      سطح بالای رضایت شغلی، منعکس کننده جو سازمانی بسیار مطلوبی
                      است که باعث میشود کارکنان جذب کار شوند.
                    </p>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
          <div className="examRoll">
            <div className="rolls">
              <table style={{ backgroundColor: "#98D1DF" }}>
                <tr>
                  <th>
                    <img src={Total} alt="photo1" className="stylePhoto" />{" "}
                    تعداد سوالات
                  </th>
                </tr>
                <tr>
                  <td>100 تا</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#98D1DF" }}>
                <tr>
                  <th>
                    <img src={Time} alt="photo1" className="stylePhoto" /> مدت
                    زمان پاسخ{" "}
                  </th>
                </tr>
                <tr>
                  <td>15 دقیقه</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#98D1DF" }}>
                <tr>
                  <th>
                    <img src={Money} alt="photo1" className="stylePhoto" /> مبلغ
                    آزمون{" "}
                  </th>
                </tr>
                <tr>
                  <td>رایگان</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobSatisfaction;
