import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/JobStress.css";
import Header from "../../components/tools/Header";
import Navbars from "../../components/tools/Navbars";
import ExamPhoto from "../../images/18.jpeg";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { JobStressTitle } from "../tools/Constant";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";

const JobStress = () => {
  document.title = JobStressTitle;
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
    <div id="JobStress">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="JobStress">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img src={ExamPhoto} alt="Examphoto" />
              </div>
              <div className="examphares">
                <h1>تست استرس شغلی </h1>
                <p>
                  این تست میزان استرس شغلی شما را که متاثر از عوامل متعددی است
                  می سنجد. بدین ترتیب شما با میزان استرس خود در مواجهه با محیط
                  کار آشنا شده و به جهت بهبود شرایط و کاهش فرسودگی شغلی و روانی
                  گام بر می دارید.
                </p>
              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question8" : "/Login"}>
                {" "}
                <button>شروع آزمون</button>
              </NavLink>{" "}
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              >
                <div className="AboutExam">
                  <div className="HeadAbout">
                    <h2>آزمون استرس شغلی</h2>
                  </div>
                  <div className="TextAbout">
                    <p>
                      استرس شغلی به موقعیتی گفته میشود که از تعامل بین افراد و
                      مشاغل حاصل میشود و وجه مشخصۀ آن تغییراتی است که درون افراد
                      اتفاق میافتد و آنها را وادار میکند تا از نحوه عمل
                      بهنجارشان منحرف شوند. استرس شغلی بر سلامتی افراد تاثیر
                      خیلی زیادی میگذارد وکیفیت زندگی را کم میکند و احتمال وقوع
                      حوادث ناشی از کار را بیشتر میکند. تجربه کردن استرس می
                      تواند تأثیرات زیان باری را بر سلامت فیزیکی و روانی افراد
                      بگذارد و باعث بروز رفتارهایی مثل پرخاشگری شود.
                    </p>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
          <div className="examRoll">
            <div className="rolls">
              <table style={{ backgroundColor: "#F1E1A6" }}>
                <tr>
                  <th>
                    <img src={Total} alt="photo1" className="stylePhoto" />{" "}
                    تعداد سوالات
                  </th>
                </tr>
                <tr>
                  <td>۳۵ تا</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#F1E1A6" }}>
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
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#F1E1A6" }}>
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

export default JobStress;
