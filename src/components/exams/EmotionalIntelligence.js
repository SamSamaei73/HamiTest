import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/Intelligence.css";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import ExamPhoto from "../../images/81.webp";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Intelligence2 } from "../tools/Constant";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";

const EmotionalIntelligence = () => {
  document.title = Intelligence2;
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
    <div id="Intelligence">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="Intelligence">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img
                  src={ExamPhoto}
                  alt="Examphoto"
                  style={{ width: "25rem" }}
                />
              </div>
              <div className="examphares">
                <h1>تست هوش هیجانی بار-آن </h1>
                <p>
                  {" "}
                  ااز طریق این تست مولفه های مختلف ، مرتبط با هوش هیجانی شما
                  مورد ارزیابی قرار می‌گیرد. تست هوش هیجانی بارآن قابلیت سنجش
                  هوش عاطفی و هوش احساسی شما را دارد که این ارزیابی در موفقیت
                  شغلی و زندگی شما اهمیت خواهد داشت.
                </p>
                <h5>آزمون خریداری شده</h5>

              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question15" : "/Login"}>
                <button>شروع آزمون</button>
              </NavLink>
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              >
                <div className="AboutExam">
                  <div className="HeadAbout">
                    <h2>آزمون هوش هیجانی بار- آن</h2>
                  </div>
                  <div className="TextAbout">
                    <p>
                      تست هوش هیجانی به تستEQ و تست هوش هیجانی بار_آن معروف است.
                      بار-آن آزمونی برای سنجش هوش هیجانی، هوش عاطفی و هوش
                      ارتباطی در افراد است. هوش هیجانی در موفقیتهای شغلی و زندگی
                      شخصی افراد تأثیر خیلی مهمی دارد. هوش هیجانی یک مهارت
                      اجتماعی است که به ما یاد میدهد تا در روابط خود بتوانیم
                      احساسات و عواطف خود را مدیریت کنیم، همراه مردم باشیم و در
                      نهایت تواناییهایی که داریم را برای رهبری و مدیریت ارتقاء
                      دهیم.
                    </p>
                  </div>
                </div>
              </Popup>
              <button className="button">اضافه به سبد خرید</button>

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
                  <td>90 تا</td>
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
                  <td>۱۵ دقیقه</td>
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
                  <td>۸۰/۰۰۰ تومان</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmotionalIntelligence;
