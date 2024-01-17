import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/ActiveWork.css";
import Header from "../../components/tools/Header";
import Navbars from "../../components/tools/Navbars";
import ExamPhoto from "../../images/13.jpg";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ActiveTitle } from "../tools/Constant";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";

const ActiveWork = () => {
  document.title = ActiveTitle;
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
    <div id="ActiveWork">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="ActiveWork">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img src={ExamPhoto} alt="Examphoto" />
              </div>
              <div className="examphares">
                <h1>تست ارزش های فعال در عمل</h1>
                <p>
                  این پرسشنامه فضیلتها و ارزشهای اخلاقی شما را به منظور سنجش
                  توانمندی های شخصیتی شما مورد ارزیابی قرار می دهد. در حقیقت
                  توسط این پرسشنامه شما متوجه خواهید شد که چه ارزشهایی در زندگی
                  شما نقش فعالتری دارند و چه ارزشهایی نقش کمتری دارند و در نهایت
                  تاثیر هر یک چیست.
                </p>
                <span id="alertColor">
                  این آزمون برای افراد بالای 17 سال قابل اجراست.{" "}
                </span>
                <h5>آزمون خریداری شده</h5>

              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question7" : "/Login"}>
                {" "}
                <button>شروع آزمون</button>
              </NavLink>{" "}
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              >
                
                {/* <div className="AboutExam">
                  <div className="HeadAbout">
                    <h2>آزمون MBTI (مایرز بریگز)</h2>
                  </div>
                  <div className="TextAbout">
                    <p>
                      این تست یک پرسشنامه روان سنجی فردی است که برای شناسایی نوع
                      شخصیت، نقاط قوت و اولویتهای افراد طراحی شده. همچنین
                      رایجترین تست شخصیت شناسی در دنیا محسوب میشود که طیف وسیع
                      کاربرد آن از خودشناسی شروع میشود. این تست میتواند در زمینۀ
                      خودشناسی،کشف استعدادها و توانمندیها، انتخاب شغلی خوب، پیدا
                      کردن همسری مناسب و پیشرفت کاری به افراد کمک کند.
                    </p>
                  </div>
                </div> */}
              </Popup>
              <button className="button">اضافه به سبد خرید</button>

            </div>
          </div>
          <div className="examRoll">
            <div className="rolls">
              <table style={{ backgroundColor: "#f4bbbb" }}>
                <tr>
                  <th>
                    <img src={Total} alt="photo1" className="stylePhoto" />{" "}
                    تعداد سوالات
                  </th>
                </tr>
                <tr>
                  <td>۱۲۰ تا</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#f4bbbb" }}>
                <tr>
                  <th>
                    <img src={Time} alt="photo1" className="stylePhoto" /> مدت
                    زمان پاسخ{" "}
                  </th>
                </tr>
                <tr>
                  <td>۱۵ دقیقه</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#f4bbbb" }}>
                <tr>
                  <th>
                    <img src={Money} alt="photo1" className="stylePhoto" /> مبلغ
                    آزمون{" "}
                  </th>
                </tr>
                <tr>
                  <td>۵۰/۰۰۰ تومان</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveWork;
