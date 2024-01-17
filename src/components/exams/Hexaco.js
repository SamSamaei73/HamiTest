import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/Hexaco.css";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import ExamPhoto from "../../images/HEXACO_1.png";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { HexaTitle } from "../tools/Constant";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";

const Hexaco = () => {
  document.title = HexaTitle;
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
    <div id="Hexaco">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="Hexaco">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img src={ExamPhoto} alt="Examphoto" />
              </div>
              <div className="examphares">
                <h1>تست هگزاکو </h1>
                <p>
                  آزمون هگزاکو یک تست شخصیت شناسی است. این روش بر اساس صفت هایی
                  که در زبان است، رفتار و گرایشات بین افراد را توصیف میکند. در
                  طبقه بندیهای مبتنی بر زبان از ویژگیهای شخصیتی به عنوان روش
                  توسعه مدلهای شخصیتی استفاده میشود.
                </p>
              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question18" : "/Login"}>
                <button>شروع آزمون</button>
              </NavLink>
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              >
                <div className="AboutExam">
                  <div className="HeadAbout">
                    <h2>آزمون هگزاکو</h2>
                  </div>
                  <div className="TextAbout">
                    <p>
                      آزمون هگزاکو یک تست شخصیت شناسی است. این روش بر اساس صفت
                      هایی که در زبان است، رفتار و گرایشات بین افراد را توصیف
                      میکند. در طبقه بندیهای مبتنی بر زبان از ویژگیهای شخصیتی به
                      عنوان روش توسعه مدلهای شخصیتی استفاده میشود.
                    </p>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
          <div className="examRoll">
            <div className="rolls">
              <table style={{ backgroundColor: "#bbdee7" }}>
                <tr>
                  <th>
                    <img src={Total} alt="photo1" className="stylePhoto" />{" "}
                    تعداد سوالات
                  </th>
                </tr>
                <tr>
                  <td>۲۴ تا</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#bbdee7" }}>
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
              <table style={{ backgroundColor: "#bbdee7" }}>
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

export default Hexaco;
