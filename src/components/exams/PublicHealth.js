import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/PublicHealth.css";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import ExamPhoto from "../../images/20.jpeg";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { PublicHelthTitle } from "../tools/Constant";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";

const PublicHealth = () => {
  document.title = PublicHelthTitle;
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
    <div id="PublicHealth">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="PublicHealth">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img src={ExamPhoto} alt="Examphoto" />
              </div>
              <div className="examphares">
                <h1>تست سلامت عمومی </h1>
                <p>
                  این پرسشنامه به بررسی مشکلات روان شناختی شما ، شناسایی علائم
                  مرضی و سلامت عمومی می پردازد. این پرسشنامه معتبرترین ابزار
                  غربالگری و تعیین مشکلات روان شناختی است.
                </p>
                <h5>آزمون خریداری شده</h5>

              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question12" : "/Login"}>
                <button>شروع آزمون</button>
              </NavLink>{" "}
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              >
                <div className="AboutExam">
                  <div className="HeadAbout">
                    <h2>آزمون سلامت عمومیGHQ</h2>
                  </div>
                  <div className="TextAbout">
                    <p>
                      سلامت روان بخش مهمی از نظام سلامتی است که بیشتر بر آسایش،
                      آرامش و امنیت روانی اجتماعی فرد تاکید دارد. سلامت روان سه
                      جنبه مهم یعنی تفکر، احساس و رفتار فرد را تحت تاثیر قرار
                      میدهد. سلامت روان به معنی سلامت هیجانی و روانشناختی است،
                      به شکلی که فرد بتواند از تفکر و تواناییهایی که دارد
                      استفاده کند و در جامعه عملکردی مفید داشته باشد و نیازهای
                      معمول زندگی روزمره را تامین کند. پیشگیری از پیدایش
                      بیماریهای روانی و سالم کردن محیط روانی از نیازهای اولیه
                      تامین بهداشت روانی محسوب میشود.
                    </p>
                  </div>
                </div>
              </Popup>
              <button className="button">اضافه به سبد خرید</button>

            </div>
          </div>
          <div className="examRoll">
            <div className="rolls">
              <table style={{ backgroundColor: "#83D8D0" }}>
                <tr>
                  <th>
                    <img src={Total} alt="photo1" className="stylePhoto" />{" "}
                    تعداد سوالات
                  </th>
                </tr>
                <tr>
                  <td>۲۸ تا</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#83D8D0" }}>
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
              <table style={{ backgroundColor: "#83D8D0" }}>
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

export default PublicHealth;
