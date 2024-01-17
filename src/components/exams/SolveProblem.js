import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/SolveProblem.css";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import ExamPhoto from "../../images/11.jpg";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { SolveProblemTitle } from "../tools/Constant";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";

const SolveProblem = () => {
  document.title = SolveProblemTitle;
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
    <div id="SolveProblem">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="SolveProblem">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img src={ExamPhoto} alt="Examphoto" />
              </div>
              <div className="examphares">
                <h1>تست مهارت حل مسئله </h1>
                <p>
                  مهارت حل مسئله یکی از مهارتهای دهگانه زندگی است. در این آزمون
                  شما به میزان توانایی و مهارت خود در حل مسئله پی خواهید برد.
                </p>
                <h5>آزمون خریداری شده</h5>

              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question9" : "/Login"}>
                <button>شروع آزمون</button>
              </NavLink>
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              >
                <div className="AboutExam">
                  <div className="HeadAbout">
                    <h2>مهارت های حل مسئله</h2>
                  </div>
                  <div className="TextAbout">
                    <p>
                      حل مسئله فرآیندی شناختی – رفتاری است که فرد به کمک آنها
                      سعی میکند راه حلهای موثر و مفیدی را برای مسائل روزمره
                      زندگی پیدا کند و تواناییهایی را که دارند ارتقاء دهند.
                      افرادی که در حل مسئله مهارت بالایی دارند و میدانند که چطور
                      باید مسائل زندگیشان را حل کنند اعتماد به نفس بیشتری دارند
                      و اضطراب کمتری را تجربه میکنند.
                    </p>
                  </div>
                </div>
              </Popup>
              <button className="button">اضافه به سبد خرید</button>

            </div>
          </div>
          <div className="examRoll">
            <div className="rolls">
              <table style={{ backgroundColor: "#FFEF82" }}>
                <tr>
                  <th>
                    <img src={Total} alt="photo1" className="stylePhoto" />{" "}
                    تعداد سوالات
                  </th>
                </tr>
                <tr>
                  <td>۳۰ تا</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#FFEF82" }}>
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
              <table style={{ backgroundColor: "#FFEF82" }}>
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

export default SolveProblem;
