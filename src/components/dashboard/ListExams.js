import { useEffect, useState, React , useContext } from "react";
import "../../css/Dashboard/ListExams.css";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import Humberger from "../tools/Humberger";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import { ListExamss } from "../tools/Constant";
import DashboardExam from "../tools/DashboardExam";
import AuthContext from "../../Context/Auth/authContext";


const ListExams = () => {
  document.title = ListExamss;

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
    <div id="ListExams">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="ListExams">
          <Header />
          <Navbars />
          <div className="dashboardStyl">
            <div className="eXamStyle">
              <DashboardExam />
            </div>
           {(user) ? <div className="navbarDash">
              <Humberger/>
            </div> : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListExams;


