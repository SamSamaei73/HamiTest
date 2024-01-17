import React, { useState, useContext, useEffect, useRef } from "react";
import "../css/Login.css";
import Header from "./tools/Header";
import Navbar from "./tools/Navbars";
import TestContext from "../Context/Test/testContext";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

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

const SignUp = () => {
  const testContext = useContext(TestContext);
  const navigate = useNavigate();
  const {
    CreateItemForMobileNumber,
    itemMobileData,
    updatePassworld,
    UpdatePasswordForCreatedUser,
    err,
  } = testContext;

  const [MobileNum, setMobileNum] = useState(null);
  const [passWord, setpassWord] = useState(null);
  const [RepeadpassWord, setRepeadpassWord] = useState(null);
  const [VerifyNum, setVerifyNum] = useState(null);
  const [ErrorMobile, setErrorMobile] = useState(false);
  const [ShowVerify, setShowVerify] = useState(false);
  const [ShowRepeatErr, setShowRepeatErr] = useState(false);
  const [WrongSms, setWrongSms] = useState(false);

  useEffectSkipFirst(() => {
    if (RepeadpassWord === passWord) {
      setShowRepeatErr(false);
    } else {
      setShowRepeatErr(true);
    }
  }, [RepeadpassWord]);

  useEffectSkipFirst(() => {
    if (updatePassworld) {
      if (updatePassworld.msgText) {
        setWrongSms(true);
      } else {
        navigate("/Login");
      }
    }
  }, [updatePassworld]);

  const SendVerifyNumber = () => {
    let formdata = {};
    formdata.MobileNum = MobileNum;
    setLoading(true);
    CreateItemForMobileNumber(formdata);
  };
  const UpdatePassword = () => {
    let formdata = {};
    formdata.MobileNum = MobileNum;
    formdata.passWord = passWord;
    formdata.VerifyNum = VerifyNum;
    UpdatePasswordForCreatedUser(formdata);
  };

  useEffectSkipFirst(() => {
    if (itemMobileData) {
      console.log("itemMobileData", itemMobileData);
      setLoading(false);
      if (itemMobileData.msgText) {
        setErrorMobile(true);
      } else {
        setShowVerify(true);
      }
      //   setShowError(true);
      //   console.log(error);
      //   setShowError(true);
      //   setErrorMsg(" نام کاربری یا کلمه عبور را اشتباه وارد نموده اید");
      // setErrorMsg(error);
    }
  }, [itemMobileData]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, );
  }, []);

  const override = css`
    display: flex;
    position: absolute;
  `;

  return (
    <div id="LoginPhone">
      <Header />
      <Navbar />

      <div className={ShowVerify ? "LoginSignInH" : "LoginSignIn"}>
        <div className="titleLogin">
          <h3> عضویت</h3>
        </div>
        <div className="mainInputLogin">
          <div className="guideLogin">
            <p>جهت ورود یا عضویت در سایت شماره تلفن همراه خود را وارد نمایید</p>
          </div>
          <div className="inputPhone">
            <label>شماره تلفن همراه</label>
            <input
              onChange={(e) => {
                setErrorMobile(false);
                setMobileNum(e.target.value);
              }}
              className="inputLogin"
              type="text"
              maxLength={11}
            />
          </div>
          <button onClick={SendVerifyNumber}>مرحله بعد </button>
          {ErrorMobile ? <h5>شماره تلفن همراه قبلا ثبت شده است *</h5> : null}
          <div className="Loader">
            <FadeLoader
              color={"#790153"}
              loading={loading}
              css={override}
              size={150}
            />
          </div>
        </div>
      </div>

      <div className={ShowVerify ? "LoginSpaceVerify" : "LoginSpaceVerifyH"}>
        <div className="titleLogin">
          <h3> عضویت</h3>
        </div>
        <div className="mainInputLogin">
          <div className="guideLogin">
            <p>رمزعبور و کد تاییده ارسال شده را وارد</p>
          </div>
          <div className="inputPhone">
            <label>کد تاییده</label>
            <input
              value={VerifyNum}
              onChange={(e) => {
                setWrongSms(false);
                setVerifyNum(e.target.value);
              }}
              className="inputLogin"
              type="text"
            />
          </div>
          <div className="inputPhone">
            <label>رمزعبور</label>
            <input
              value={passWord}
              onChange={(e) => {
                setpassWord(e.target.value);
              }}
              className="inputLogin"
              type="password"
            />
          </div>
          <div className="inputPhone">
            <label>تکرار رمزعبور</label>
            <input
              value={RepeadpassWord}
              onChange={(e) => {
                setRepeadpassWord(e.target.value);
              }}
              className="inputLogin"
              type="password"
            />
          </div>

          <button onClick={UpdatePassword}>ثبت</button>
          {WrongSms ? <h5>کد ارسال شده اشتباه میباشد *</h5> : null}
          {ShowRepeatErr ? (
            <h5>رمزعبور با تکرار رمزعبور یکسان نمیباشد *</h5>
          ) : null}
          <div className="timer">
          <CountdownCircleTimer
            isPlaying
            duration={120}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[5, 5, 2, 0]}
            size={90}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
