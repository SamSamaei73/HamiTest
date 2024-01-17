import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/Jobburnout.css";
import Header from "../../components/tools/Header";
import Navbars from "../../components/tools/Navbars";
import ExamPhoto from "../../images/25.png";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";
import { JobB } from "../tools/Constant";


const Jobburnout = () => {
  document.title = JobB;
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
    <div id="Jobburnout">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="Jobburnout">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img src={ExamPhoto} alt="Examphoto" />
              </div>
              <div className="examphares">
                <h1>تست فرسودگی شغلی</h1>
                <p>
                  در این تست میزان فرسودگی شغلی شما اندازه گیری می شود. در این
                  سنجش میزان احساس ها ونگرشهای شما که شامل جنبه های مختلف
                  فرسودگی شغلی است ارزیابی می شود.
                </p>
                <h5>آزمون خریداری شده</h5>
              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question16" : "/Login"}>
                <button>شروع آزمون</button>
              </NavLink>
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              >
                <div className="AboutExam">
                  <div className="HeadAbout">
                    <h2>آزمون فرسودگی شغلی</h2>
                  </div>
                  <div className="TextAbout">
                    <p>
                      فرسودگی شغلی، خستگی عاطفی است که بعد از سالها درگیری و
                      تعهد نسبت به خدمت کردن به دیگران در فرد دیده میشود و زمانی
                      اتفاق میافتد که افراد دیگر شور و شوقی برای ادامه کارشان
                      ندارند. از مهمترین عوامل بروز فرسودگی شغلی روشی است که
                      سرپرستان و مدیران سازمان به عنوان سبک رهبری و کنترل افراد
                      و سازمان برای خودشان ایجاد میکنند و درمان آن فراهم آوردن
                      محیطی آرام، عاطفی و گرم در محیط کار است.
                    </p>
                  </div>
                </div>
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
                  <td>۲۲ تا</td>
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
                  <td>۸ دقیقه</td>
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

export default Jobburnout;
