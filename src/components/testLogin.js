import React, { useState, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../Context/Auth/authContext";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../css/Login.css";
import Logo from "../images/educational-logo-png-4-Transparent-Images-Free.png";
import { NavLink } from "react-router-dom";
import { LoginPage } from "../components/tools/Constant";

function useEffectSkipFirst(fn, arr) {
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    fn();
  }, arr);
}

const Login = (props) => {
  document.title = LoginPage;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (error === "User already exists") {
      // setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, []);

  const override = css`
    display: flex;
    margin: 20rem auto;
  `;

  const { state } = useLocation(props || null);
  let from = "/";
  if (state) {
    from = state.from;
  }
  //Start Login State
  const authContext = useContext(AuthContext);
  const [nationalIDTxt, setnationalIDTxt] = useState("");
  const [passwordTxt, setpasswordTxt] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const {
    user,
    login,
    error,
    isAuthenticated,
    firstStepId,
    firstStep,
    verifyNum,
    firstStepOfRegister,
    clearErrors,
  } = authContext;
  //Start Login State
  //Start Register States
  const [isShow, setIsShow] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [isShowFirstNameError, setisShowFirstNameError] = useState(false);
  const [lastName, setlastName] = useState("");
  const [isShowLastNameError, setisShowLastNameError] = useState(false);
  const [nationalID, setnationalID] = useState("");
  const [isShowNationalIDError, setisShowNationalIDError] = useState(false);
  const [mobileNum, setmobileNum] = useState(null);
  const [isShowMobileNumError, setisShowMobileNumError] = useState(false);
  const [userCaptcha, setuserCaptcha] = useState("");
  const [Day, setDay] = useState(null);
  const [Month, setMonth] = useState(null);
  const [Year, setYear] = useState(null);
  const [isShowBirthdayError, setisShowBirthdayError] = useState(false);
  const [passWord, setpassWord] = useState("");
  const [isShowPasswordError, setisShowPasswordError] = useState(false);
  const [repeatPassWord, setrepeatPassword] = useState("");

  //End Register States
  const navigate = useNavigate();
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
      //Start of Register inputs
      case "NationalID":
        setisShowNationalIDError(false);
        if (e.target.value.length >= maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setnationalID(e.target.value);
        break;
      case "FirstName":
        setisShowFirstNameError(false);
        setfirstName(e.target.value);
        break;
      default:
        break;
    }
  };
  const ContinueLogin = (e) => {
    e.preventDefault();
    if (nationalIDTxt === "" || passwordTxt === "") {
      setErrorMsg("لطفاً نام کاربری و کلمه عبور را وارد نمایید");
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
  //Start of Register

  useEffectSkipFirst(() => {
    if (repeatPassWord === passWord) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [repeatPassWord]);

  const RepeatPassWordError = "کلمه عبور با تکرار آن یکسان نمی باشد";
  const FirstNameError = "*";
  const LastNameError = "*";
  const NationalIdError = "*";
  const PassworError = "*";

  const passWordChanged = (e) => {
    setpassWord(e.target.value);
  };

  const createItemInUser = async (user) => {
    await firstStepOfRegister(user);
  };
  const validateAndSend = async (e) => {
    e.preventDefault();
    let user = {
      firstName,
      lastName,
      nationalID,
      passWord,
    };
    //console.log("user before validation:", user);
    if (
      // firstName &&
      // lastName &&
      // nationalID &&
      // mobileNum &&
      // Day &&
      // Month &&
      // Year &&
      // passWord &&
      repeatPassWord
    ) {
      if (
        // firstName.length > 1 &&
        // lastName.length > 1 &&
        // nationalID.length > 8 &&
        // mobileNum.length > 8 &&
        // Day.length > 1 &&
        // Month.length > 1 &&
        // Year.length > 3 &&
        passWord === repeatPassWord
      ) {
        //console.log("newuser:", user);
        createItemInUser(user);
      }
    } else {
      if (firstName === null || firstName === "") {
        setisShowFirstNameError(true);
      }
      if (lastName === null || lastName === "") {
        setisShowLastNameError(true);
      }
      if (passWord === null || passWord === "") {
        setisShowPasswordError(true);
      }
      if (nationalID === null || userCaptcha === "") {
        setisShowNationalIDError(true);
      }

      if (mobileNum === null) {
        setisShowMobileNumError(true);
      }
      if (Day === null || Month === null || Year === null) {
        setisShowBirthdayError(true);
      }
    }
  };
  const repeatPassWordChanged = async (e) => {
    setrepeatPassword(e.target.value);
  };

  function navigateToVerifyMobile() {
    if (firstStepId != null) {
      if (parseInt(firstStepId) > 0) {
        navigate("/");
      }
    }
  }
  //End of Register

  return (
    <div id="Login">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : !isAuthenticated ? (
        <div className="LoginBox">
          <div className="LoginLogo">
            <NavLink to="/" className="logoLogin">
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
          <div class="login-wrap">
            <div class="login-html">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked
                onChange={(e) => {}}
              />
              <label for="tab-1" className="tab">
                ورود
              </label>
              <input
                id="tab-2"
                type="radio"
                onChange={(e) => {}}
                name="tab"
                className="sign-up"
              />
              <label for="tab-2" className="tab">
                ثبت نام
              </label>
              <div className="login-form">
                <div className="sign-in-htm">
                  <div className="group">
                    <label for="user" className="label">
                      نام کاربری
                    </label>
                    <input
                      id="user"
                      type="text"
                      className="input"
                      value={nationalIDTxt}
                      onChange={(e) => {
                        onChanged(e, "nationalIDTxt", 200);
                      }}
                    />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      گذرواژه
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      value={passwordTxt}
                      onChange={(e) => {
                        onChanged(e, "passwordTxt", 300);
                      }}
                    />
                  </div>
                  <div className="group">
                    <input
                      id="check"
                      type="checkbox"
                      className="check"
                      checked
                    />
                    <label for="check">
                      <span className="icon"></span> مرا به خاطر بسپار
                    </label>
                  </div>
                  <div className="group">
                    <input
                      type="button"
                      className="button"
                      value="ورود"
                      onClick={(e) => {
                        // ////console.log('verifyText', { VerifyText });
                        ContinueLogin(e);
                      }}
                    />
                  </div>
                  <div className="hr">
                    {showError && (
                      <label key="1" style={{ color: "red" }}>
                        {errorMsg}
                      </label>
                    )}
                  </div>
                  <div className="foot-lnk">
                    <a href="#forgot">فراموش کردن گذرواژه</a>
                  </div>
                </div>
                <div className="sign-up-htm1">
                  <div className="group">
                    <label for="user" className="label">
                      نام کاربری
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder="نام کاربری"
                      value={nationalID}
                      onChange={(e) => {
                        onChanged(e, "NationalID", 200);
                      }}
                    />
                    {isShowNationalIDError && (
                      <label key="9">{NationalIdError}</label>
                    )}
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      گذرواژه
                    </label>
                    <input
                      type="password"
                      className="input"
                      placeholder="کلمه عبور "
                      value={passWord}
                      onChange={(e) => passWordChanged(e)}
                    />
                    {isShowPasswordError && (
                      <label key="6">{PassworError}</label>
                    )}
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      تکرار گذرواژه
                    </label>
                    <input
                      type="password"
                      className="input"
                      placeholder="تکرار کلمه عبور"
                      value={repeatPassWord}
                      onChange={(e) => {
                        repeatPassWordChanged(e);
                      }}
                    />

                    {isShow && <label key="1">{RepeatPassWordError}</label>}
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      آدرس ایمیل
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder="نام خانوادگی"
                      value={lastName}
                      onChange={(e) => {
                        onChanged(e, "LastName", 2);
                      }}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="submit"
                      className="button buttonSign"
                      value="ثبت نام"
                      onClick={(e) => {
                        validateAndSend(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        redirecttorequestpage()
      )}
    </div>
  );
};

export default Login;
