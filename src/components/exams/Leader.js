import { useEffect, useState, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/exams/Leader.css";
import Header from "../../components/tools/Header";
import Navbars from "../../components/tools/Navbars";
import ExamPhoto from "../../images/10.jpg";
import Money from "../../images/icons8-money-100.png";
import Time from "../../images/icons8-time-48.png";
import Total from "../../images/icons8-help-48.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { LeaderTitle } from "../tools/Constant";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";

const Leader = () => {
  document.title = LeaderTitle;
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
    <div id="Leader">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="Leader">
          <Header />
          <Navbars />
          <div className="aboutExam">
            <div className="examInfo">
              <div className="examPhoto">
                <img src={ExamPhoto} alt="Examphoto" />
              </div>
              <div className="examphares">
                <h1>تست توانایی رهبری</h1>
                <p>
                  این تست سبک رهبری شما شامل رهبری تحول، عدم مداخله و رفتار
                  متقابل را می سنجد.
                </p>
                <h5>آزمون خریداری شده</h5>

              </div>
            </div>
            <div className="examBtn">
              <NavLink to={user ? "/Question11" : "/Login"}>
                <button>شروع آزمون</button>
              </NavLink>
              <Popup
                trigger={<button className="button"> درباره آزمون </button>}
                modal
              ></Popup>
              <button className="button">اضافه به سبد خرید</button>

            </div>
          </div>
          <div className="examRoll">
            <div className="rolls">
              <table style={{ backgroundColor: "#FFEEEE" }}>
                <tr>
                  <th>
                    <img src={Total} alt="photo1" className="stylePhoto" />{" "}
                    تعداد سوالات
                  </th>
                </tr>
                <tr>
                  <td>۴۵ تا</td>
                </tr>
              </table>
            </div>
            <div className="rolls">
              <table style={{ backgroundColor: "#FFEEEE" }}>
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
              <table style={{ backgroundColor: "#FFEEEE" }}>
                <tr>
                  <th>
                    <img src={Money} alt="photo1" className="stylePhoto" /> مبلغ
                    آزمون{" "}
                  </th>
                </tr>
                <tr>
                  <td>۶۰/۰۰۰ تومان</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leader;
