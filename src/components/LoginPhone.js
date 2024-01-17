import React, { useState, useContext, useEffect, useRef } from "react";
import "../css/Login.css";
import Header from "./tools/Header";
import Navbar from "./tools/Navbars";
import { NavLink } from "react-router-dom";
import AuthContext from "../Context/Auth/authContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import { LoginPage } from "./tools/Constant";



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

const LoginPhone = (props) => {
  document.title = LoginPage;
  const authContext = useContext(AuthContext);
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
    errorDATA,
    setError,
    IsCompletedProps,
    isCompletedPropsData,
    err
  } = authContext;

  const navigate = useNavigate();
  const [passwordTxt, setpasswordTxt] = useState("");
  const [nationalIDTxt, setnationalIDTxt] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChanged = (e, Type, maxNum) => {
    setShowError(false);
    setErrorMsg("");
    setError(false);
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
      setShowError(true);

    } else {
      // setLoading(true);
      let frmData = { nationalID: nationalIDTxt, password: passwordTxt };
      login(frmData);
      setLoadingLog(true)

    }
  };

  const redirecttorequestpage = () => {
    if (isAuthenticated && isCompletedPropsData) {
      // if(isCompletedPropsData){
      //   navigate("/Dashboard");
      // }
      // else{
        navigate("/Dashboard");
       
      // }
    } else  if (isAuthenticated) {     
        navigate("/Dashboard");   
    } 
    
    
    else if (error) {
     // console.log("error");
      setShowError(true);
    } else {
      setLoading(false);
    }
  };

  const { state } = useLocation(props || null);
  let from = "/Editdashboard";
  if (state) {
    from = state.from;
  }

  // useEffectSkipFirst(() => {
  //   if (error) {
  //     setShowError(false);
  //     setTimeout(() => {
        
  //       setShowError(true);
  //     }, 12);
  //     console.log(error);
  //    // setShowError(true);
  //     // setErrorMsg(error);
  //   }
  // }, [error]); 

  useEffectSkipFirst(() => {
    if (isAuthenticated) {
     
    }
  }, [isAuthenticated]);
  useEffectSkipFirst(() => {
    if (error) {
      setShowError(true);
      setLoadingLog(false)

    }
  }, [error]);

  let [color, setColor] = useState("#ffffff");
  const [LoadingLog,setLoadingLog]=useState(false)

 

  return (
    <div id="LoginPhone">
      <div className={LoadingLog ?"SpinnerLogin" : "SpinnerLoginH"}>
      <PropagateLoader
        color={color}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>

      <Header />
      <Navbar />
    {!isAuthenticated ? (<div className="LoginSpace">
    <div className="titleLogin">
        <h3>ورود / عضویت</h3>
    </div>
    <div className="mainInputLogin">
        <div className="guideLogin">
        <p>
            جهت ورود به سایت شماره تلفن همراه یا نام کاربری خود را وارد نمایید
        </p>
        </div>
        <div className="inputPhone">
        <label>شماره تلفن همراه/نام کاربری</label>
        <input
            value={nationalIDTxt}
            onChange={(e) => {
            onChanged(e, "nationalIDTxt", 200);
            }}
            className="inputLogin"
            type="text"
        />
        <label>رمز عبور</label>
        <input
            value={passwordTxt}
            onChange={(e) => {
            onChanged(e, "passwordTxt", 300);
            }}
            className="inputLogin"
            type="password"
        />
        </div>
        <button
        onClick={(e) => {
            ContinueLogin(e);
        }}
        >
        {" "}
        ورود{" "}
        </button>
        <NavLink to="/SignUp">
        {" "}
        <button className="Signup">ثبت نام</button>
        </NavLink>
        <NavLink className="forgetpass" to="/ForgetPass">
        رمز عبور خود را فراموش کردم
        </NavLink>
        { error ? (
        <h5>نام کاربری ، شماره تلفن یا رمز عبور اشتباه میباشد *</h5>
        ) : null}
    </div>
    </div>) : (  redirecttorequestpage())}
    </div>
  );
};

export default LoginPhone;
