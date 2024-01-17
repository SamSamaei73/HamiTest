import { useEffect, useState, React, useContext } from "react";
import "../css/Dashboard.css";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import Header from "../components/tools/Header";
import Navbars from "../components/tools/Navbars";
import Humberger from "./tools/Humberger";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from "react-bootstrap";
import Personal from "../images/download.png";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Profile } from "../components/tools/Constant";
import InfoPerson from "../components/tools/InfoPerson";
import Footer from "./tools/Footer";

const Dashboard = () => {
  document.title = Profile;

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
    <div id="Dashboard">
      <div id="Dashboard">
        <Header />
        <Navbars />
        <div className="dashboardStyl">
          <InfoPerson className="responsivBox" />
          <div className="navbarDash1">
            <Humberger/>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
