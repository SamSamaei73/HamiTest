import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import AuthContext from "../Context/Auth/authContext";

import { useNavigate } from "react-router-dom";

const NewLogin = (props) => {
  const { state } = useLocation(props || null);
  let from = "/";
  if (state) {
    from = state.from;
  }
  const authContext = useContext(AuthContext);
  const [nationalIDTxt, setnationalIDTxt] = useState("");
  const [passwordTxt, setpasswordTxt] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { user, login, error, isAuthenticated } = authContext;
  const navigate = useNavigate();

  useEffect(() => {
    // if (isAuthenticated) {
    //   setRedirectToReferrer(true);
    //   redirecttorequestpage();
    // }
    if (error) {
      setShowError(true);
      setErrorMsg(error);
    }
  });

  const onChanged = (e, Type, maxNum) => {
    setShowError(false);
    setErrorMsg("");
    switch (Type) {
      case "nationalIDTxt":
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setnationalIDTxt(e.target.value);
        break;
      case "passwordTxt":
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setpasswordTxt(e.target.value);
        break;
      default:
        break;
    }
  };
  const ContinueLogin = (e) => {
    e.preventDefault();
    if (nationalIDTxt === "" || passwordTxt === "") {
      setErrorMsg("لطفاً کدملی و کلمه عبور را وارد نمایید");
      setShowError(true);
    } else {
      // let frmData = { nationalID: '1234567890', password: '123456789' };
      let frmData = { nationalID: nationalIDTxt, password: passwordTxt };
      //console.log("formdata", frmData);
      login(frmData);
    }
  };

  const redirecttorequestpage = () => {
    navigate(from);
  };

  if (error) {
    setShowError(true);
    setErrorMsg(error);
  }

  return (
    <div className="loginBack">
      {!isAuthenticated ? (
        <div>
          <section id="login" className="panel-transparent">
            <div className="container">
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="card">
                    <div className="card-header text-center">
                      <h3 style={{ fontSize: "2rem" }}>ورود به سامانه</h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form-group loginForm">
                          <label htmlFor="nationalID" className="pr-3 ">
                            کدملی
                          </label>
                          <input
                            type="text"
                            className="form-control w-50 mr-4 "
                            style={{ fontSize: "1.7rem" }}
                            value={nationalIDTxt}
                            onChange={(e) => {
                              onChanged(e, "nationalIDTxt", 200);
                            }}
                          />
                        </div>
                        <div className="form-group loginForm">
                          <label htmlFor="password" className="pr-1">
                            {" "}
                            کلمه عبور
                          </label>
                          <input
                            type="password"
                            className="form-control w-50 mr-2"
                            style={{ fontSize: "1.7rem" }}
                            value={passwordTxt}
                            onChange={(e) => {
                              onChanged(e, "passwordTxt", 300);
                            }}
                          />
                        </div>
                        <div className="text-center">
                          <input
                            type="button"
                            className="btn btn-info  w-50"
                            style={{ fontSize: "1.7rem" }}
                            value="ورود"
                            onClick={(e) => {
                              // ////console.log('verifyText', { VerifyText });
                              ContinueLogin(e);
                            }}
                          />
                        </div>

                        {showError && (
                          <label key="1" style={{ color: "red" }}>
                            {errorMsg}
                          </label>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        redirecttorequestpage()
      )}
    </div>
  );
};

export default NewLogin;
