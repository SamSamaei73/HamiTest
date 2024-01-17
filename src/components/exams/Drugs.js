import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/Drugs.css";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import ExamPhoto from "../../images/14.jpg";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { DrugsTitle } from "../tools/Constant";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";

const Drugs = () => {
  document.title = DrugsTitle;
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
    <div id="Drugs">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="Drugs">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img src={ExamPhoto} alt="Examphoto" />
              </div>
              <div className="examphares">
                <h1>تست غربالگری مصرف مواد </h1>
                <p>
                  این پرسشنامه میزان درگیری شما با داروهای مخدر (به غیر از
                  نوشیدنی های الکلی ) را طی 12 ماه گذشته مورد سنجش قرار می دهد.
                </p>
              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question13" : "/Login"}>
                <button>شروع آزمون</button>
              </NavLink>
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              >
                <div className="AboutExam">
                  <div className="HeadAbout">
                    <h2>آزمون غربالگری مصرف مواد</h2>
                  </div>
                  <div className="TextAbout">
                    <p>
                      غربالگری دامنهای از رویه ها و تکنیکهای ارزیابی است و شامل
                      یک واقعه منفرده میباشد و نشان میدهد که آیا وضعیتی که مورد
                      جستجو هست وجود دارد یا خیر. غربالگری فرصتی برای آموزش و
                      مداخله مختصر است. همچنین افراد را از خطرات تداخلات دارویی
                      با سایر جنبه ها آگاه میکند. افرادی که مواد مصرف میکنند،
                      اما مصرف آنها به حد وابستگی نرسیده ، غربالگری میتواند
                      اثراتی را که در رفتارهای پرخطر است را کمتر کند.
                    </p>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
          <div className="examRoll">
            <div className="rolls">
              <table style={{ backgroundColor: "#f06c60" }}>
                <tr>
                  <th>
                    <img src={Total} alt="photo1" className="stylePhoto" />{" "}
                    تعداد سوالات
                  </th>
                </tr>
                <tr>
                  <td>۲۰ تا</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#f06c60" }}>
                <tr>
                  <th>
                    <img src={Time} alt="photo1" className="stylePhoto" /> مدت
                    زمان پاسخ{" "}
                  </th>
                </tr>
                <tr>
                  <td>۵ دقیقه</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#f06c60" }}>
                <tr>
                  <th>
                    <img src={Money} alt="photo1" className="stylePhoto" /> مبلغ
                    آزمون{" "}
                  </th>
                </tr>
                <tr>
                  <td>رایگان</td>
                  {/* <td>۵۰/۰۰۰ تومان</td> */}
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drugs;
