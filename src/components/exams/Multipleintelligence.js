import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/Multipleintelligence.css";
import Header from "../../components/tools/Header";
import Navbars from "../../components/tools/Navbars";
import ExamPhoto from "../../images/3.jpg";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";
import { MultiInte } from "../tools/Constant";


const Multipleintelligence = () => {
  document.title = MultiInte
  const [loading, setLoading] = useState(false);
  // import AuthContext from "../../Context/Auth/authContext";
  // to={user ? "/Question15" : "/Login"}
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
    <div id="Multipleintelligence">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="Multipleintelligence">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img src={ExamPhoto} alt="Examphoto" />
              </div>
              <div className="examphares">
                <h1>تست هوش چندگانه گاردنر</h1>
                <p>
                  توسط این آزمون با هوش های خود و ترتیب و توالی آن آشنا می شوید.
                  سپس می توانید زندگی تحصیلی و حرفه ای خود را به نحوی سازماندهی
                  کنید که در حداقل زمان، با صرف کمترین انرژی و هزینه بیشترین
                  کارآیی را به دست آورید. بدین ترتیب در زندگی خود آزمون و خطا
                  نخواهید کرد و با انتخابهای درست و هدفمند مسیر موفقیت خود را
                  تضمین خواهید کرد.
                </p>
                <h5>آزمون خریداری شده</h5>

              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question2" : "/Login"}>
                {" "}
                <button>شروع آزمون</button>
              </NavLink>
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              >
                <div className="AboutExam">
                  <div className="HeadAbout">
                    <h2>آزمون گاردنر</h2>
                  </div>
                  <div className="TextAbout">
                    <p>
                      تست هوش گاردنر یا همان تست هوش چندگانه، آزمونی بسیار جالبی
                      است که برای سنجش استعداد و تواناییهای فرد در زمینه های
                      مختلف به کار میرود. طبق این آزمون همه انسانها دارای هوش
                      های متفاوتی هستند. این آزمون برای مشاوره شغلی و مشاوره
                      تحصیلی و برنامه ریزی آموزشی و استعدایابی هم کاربرد دارد.
                      تست هوش چندگانه گاردنر به افراد کمک میکند تا زمینه اصلی
                      استعدادی که دارند را بشناسند.
                    </p>
                  </div>
                </div>
              </Popup>
              <button className="button">اضافه به سبد خرید</button>

            </div>
          </div>
          <div className="examRoll">
            <div className="rolls">
              <table style={{ backgroundColor: "#E8FFC2" }}>
                <tr>
                  <th>
                    <img src={Total} alt="photo1" className="stylePhoto" />{" "}
                    تعداد سوالات
                  </th>
                </tr>
                <tr>
                  <td>۸۰ تا</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#E8FFC2" }}>
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
              <table style={{ backgroundColor: "#E8FFC2" }}>
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

export default Multipleintelligence;
