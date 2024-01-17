import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/Auth/authContext";
import "../../css/Header.css";
import Logo from "../../images/ht_1.png";
import { NavLink } from "react-router-dom";
import { useEffectSkipFirst } from "./useEffectSkipFirst";
import Store from "../../images/icons8-checkout-64.png";
import ExitS from "../../images/icons8-exit-64.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [name, setName] = useState(null);

  const { user, logout } = authContext;
  useEffect(() => {
    if (user) {
      setName(user.FirstName + " " + user.LastName);
    }
  }, []);

  useEffectSkipFirst(() => {
    if (user) {
      setName(user.FirstName + " " + user.LastName);
    }
  }, [user]);

  return (
    <div id="Header">
      <header>
        <div className="LeftInfo">
        <div className="loginTitle">
          {!name ? (
            <NavLink to="/Login">ورود/ عضویت</NavLink>
          ) : (
            <NavLink to="/Dashboard">{name}</NavLink>
          )}
          
        </div>
        <div className="storeExit">
            {user ? (
              <img
              title="Exit"
                src={ExitS}
                alt="ExitS"
                className="imgStore"
                onClick={(e) => {
                  logout();
                  navigate("/");
                }}
              />
            ) : null}
              <NavLink to="/Payment"><img title="Store" src={Store} alt="Store" className="imgStore" /></NavLink>
          </div>
        </div>
        <div className="rightInfoLogo">
          <div className="logo">
            <NavLink to="/" className="imageLogo">
              <img src={Logo} className="imageLogo" alt="logo" />
            </NavLink>
          </div>
          
        </div>
      </header>
    </div>
  );
};

export default Header;
