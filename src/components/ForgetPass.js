import React, { useState, useContext, useEffect, useRef } from "react";
import "../css/Login.css";
import Header from "./tools/Header";
import Navbar from "./tools/Navbars";
import TestContext from "../Context/Test/testContext";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { CountdownCircleTimer } from "react-countdown-circle-timer";


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

const ForgetPass = () => {
  const testContext = useContext(TestContext);
  const navigate = useNavigate();
  const {
    CreateItemForMobileNumber,
    itemMobileData,
    updatePassworld,
    UpdatePasswordForCreatedUser,
    forgetPasswordData,
    SendVerificationForForgetPassword,
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
  const [loading, setLoading] = useState(false);

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
    SendVerificationForForgetPassword(formdata);
  };
  
  const UpdatePassword = () => {
    let formdata = {};
    formdata.MobileNum = MobileNum;
    formdata.passWord = passWord;
    formdata.VerifyNum = VerifyNum;
    UpdatePasswordForCreatedUser(formdata);
  };

  useEffectSkipFirst(() => {
    if (forgetPasswordData) {
      setLoading(false);
      if (forgetPasswordData.msgText) {
        setErrorMobile(true);
      } else {
        setShowVerify(true);
      }
    }
  }, [forgetPasswordData]);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
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
          <h3>فراموشی رمزعبور</h3>
        </div>
        <div className="mainInputLogin">
          <div className="guideLogin">
            <p>شماره تلفن خود را وارد کنید</p>
          </div>
          <div className="inputPhone">
            <label>شماره همراه</label>
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
          <button onClick={SendVerifyNumber}>ارسال کد بازیابی </button>
          {ErrorMobile ? (
            <h5> شماره تلفن همراه اشتباه میباشد یا در سامانه وجود ندارد *</h5>
          ) : null}

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
          <h3>فراموشی رمزعبور</h3>
        </div>
        <div className="mainInputLogin">
          <div className="guideLogin">
            <p>کد ارسال شده و رمزعبور جدید را وارد کنید</p>
          </div>
          <div className="inputPhone">
            <label>کد ارسال شده</label>

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
            <label>رمزعبور جدید</label>
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
            <label>تکرار رمزعبور جدید</label>
            <input
              value={RepeadpassWord}
              onChange={(e) => {
                setRepeadpassWord(e.target.value);
              }}
              className="inputLogin"
              type="password"
            />
          </div>
          <button onClick={UpdatePassword}>تغییر رمزعبور</button>
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

export default ForgetPass;
