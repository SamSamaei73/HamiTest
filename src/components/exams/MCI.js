import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/MCI.css";
import Header from "../../components/tools/Header";
import Navbars from "../../components/tools/Navbars";
import ExamPhoto from "../../images/5.jpg";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { MCItitle } from "../tools/Constant";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";

const MCI = () => {
  document.title = MCItitle;
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
    <div id="MCI">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="MCI">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img src={ExamPhoto} alt="Examphoto" />
              </div>
              <div className="examphares">
                <h1> تست هوش اخلاقی MCI </h1>
                <p>
                  این تست توانایی شما در کاربرد اصول اخلاق در مراودات و روابط
                  اجتماعی شما را مورد سنجش قرار می دهد.
                </p>
              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question14" : "/Login"}>
                {" "}
                <button>شروع آزمون</button>
              </NavLink>{" "}
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              >
                <div className="AboutExam">
                  <div className="HeadAbout">
                    <h2>آزمون هوش اخلاقی</h2>
                  </div>
                  <div className="TextAbout">
                    <p>
                      هوش اخلاقی را ظرفیت و توانایی درک درست از داشتن اعتقادات
                      اخلاقی قوی و عمل به آنها و رفتار در جهت صحیح و درست تعریف
                      میکنند. هوش اخلاقی، به معنی توجه به زندگی انسان و طبیعت،
                      رفاه اقتصادی و اجتماعی، ارتباطات باز و صادقانه و حقوق
                      شهروندی است. هوش اخلاقی برای همه انسانها حیاتی و سرنوشتساز
                      است زیرا این نوع هوش سایر انواع هوش در انسان را تحت تاثیر
                      قرار داده و آنها را به انجام کارهای ارزشمند هدایت میکند.
                    </p>
                  </div>
                </div>
              </Popup>
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
                  <td>۴۰ تا</td>
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
                  <td>۱۰ دقیقه</td>
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

export default MCI;
