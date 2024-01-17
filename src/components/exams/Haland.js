import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/Haland.css";
import Header from "../../components/tools/Header";
import Navbars from "../../components/tools/Navbars";
import ExamPhoto from "../../images/82.png";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";
import { HalandTitle } from "../tools/Constant";


const Haland = () => {
  document.title = HalandTitle;
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
    <div id="Haland">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="Haland">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img src={ExamPhoto} alt="Examphoto" />
              </div>
              <div className="examphares">
                <h1>تست رغبت سنج هالند</h1>
                <p>
                  بوسیله این آزمون شما زمینه هایی که در آن به شغل خاصی علاقمند
                  هستید و توانایی دارید مشخص می شود و در نتیجه گرایش تحصیلی آن ،
                  گرایش تحصیلی شما مشخص می شود این آزمون کاربرد وسیعی در هدایت
                  تحصیلی و شغلی شما دارد. .{" "}
                </p>
                <h5>آزمون خریداری شده</h5>

              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question17" : "/Login"}>
                {" "}
                <button>شروع آزمون</button>
              </NavLink>{" "}
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              >
                <div className="AboutExam">
                  <div className="HeadAbout">
                    <h2>آزمون رغبت سنج هالند</h2>
                  </div>
                  <div className="TextAbout">
                    <p>
                      رغبت زمانی ایجاد میشود که انسان چیزی را دوست دارد و آن را
                      مورد توجه قرار میدهد، مشاهده میکند و درباره آن فکر میکند و
                      در آخر از آن لذت میبرد. نظریات مهم در زمینهی رغبت ، نظریهی
                      شغلی- شخصیتی هالند است. انتخاب شغل و حرفه به نوع شخصیت فرد
                      بستگی دارد و راهی برای ابراز وجود فرد به حساب میآید.
                      همچنین انتخاب شغل و حرفه رابطهی مستقیمی با گرایش فرد دارد.
                    </p>
                  </div>
                </div>
              </Popup>
              <button className="button">اضافه به سبد خرید</button>

            </div>
          </div>
          <div className="examRoll">
            <div className="rolls">
              <table style={{ backgroundColor: "#F68C42" }}>
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
              <table style={{ backgroundColor: "#F68C42" }}>
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
              <table style={{ backgroundColor: "#F68C42" }}>
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

export default Haland;
