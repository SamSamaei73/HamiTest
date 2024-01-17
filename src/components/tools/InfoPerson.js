import React, { useEffect, useContext, useState } from "react";
import "../../css/Dashboard/InfoPerson.css";
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";
import Personal from "../../images/download.png";
import TestContext from "../../Context/Test/testContext";
import { useEffectSkipFirst } from "./useEffectSkipFirst";
import AuthContext from "../../Context/Auth/authContext";

const InfoPerson = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { changePasswordCheck, ChangePassword } = testContext;
  const { user } = authContext;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [Sexuality, setSexuality] = useState(null);
  const [MarriedStatus, setMarriedStatus] = useState(null);
  const [Address, setAddress] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [Education, setEducation] = useState("");
  const [Job, setJob] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const [UserPic, setUserPic] = useState(null);
  const [ErrorEpty, setErrorEpty] = useState(false);
  const [ErrorLength, setErrorLength] = useState(false);
  const [NewPassword, setNewPassword] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ErrorInput, setErrorInput] = useState(false);
  const [AcceptPass, setAcceptPass] = useState(false);

  const sendUserPassData = () => {
    let newUser = {};
    newUser.NewPassword = NewPassword;
    newUser.PassWord = PassWord;
    if (NewPassword.length < 1 && PassWord.length < 1) {
      setErrorEpty(true);
    } else if (PassWord.length < 8) {
      setErrorLength(true);
    } else {
      ChangePassword(newUser);
      setAcceptPass(true)
    }
  };

  useEffectSkipFirst(() => {
    setErrorEpty(false);
    if (ConfirmPassword != NewPassword) {
      setErrorInput(true);
    } else {
      setErrorInput(false);
    }
  }, [ConfirmPassword]);

  useEffect(() => {
    GetUserInfo();
    if (user) {
      DownloadUserPicByuserId(user.id);
    }
  }, []);

  const {
    GetUserInfo,
    userInfoData,
    DownloadUserPicByuserId,
    downloaduserpicData,
  } = testContext;
  useEffectSkipFirst(() => {
    if (userInfoData) {
      //console.log("userinfodata:", userInfoData);
      setFirstName(userInfoData.user[0].firstName);
      setLastName(userInfoData.user[0].lastName);
      setMobileNumber(userInfoData.user[0].mobileNum);
      setNationalID(userInfoData.user[0].NationalIDReal);
      let sexulaityBoolean = parseInt(userInfoData.user[0].Sexuality);
      let marriedBoolean = parseInt(userInfoData.user[0].MarriedStatus);
      let EducationNumber = parseInt(userInfoData.user[0].Education);
      sexulaityBoolean == 1 ? setSexuality("مرد") : setSexuality("زن");
      marriedBoolean == 1
        ? setMarriedStatus("متاهل")
        : setMarriedStatus("مجرد");
      // setMarriedStatus(userInfoData.user[0].MarriedStatus);
      switch (EducationNumber) {
        case 0:
          setEducation("زیردیپلم");
          break;
        case 1:
          setEducation("دیپلم");
          break;
        case 2:
          setEducation("کاردانی");
          break;
        case 3:
          setEducation("کارشناسی");
          break;
        case 4:
          setEducation("کارشناسی ارشد");
          break;
        case 5:
          setEducation("دکتری");
          break;

        default:
          break;
      }
      setAddress(userInfoData.user[0].Address);
      setBirthday(userInfoData.user[0].Birthday);
      setJob(userInfoData.user[0].Job);
      setJobTitle(userInfoData.user[0].JobTitle);
    }
  }, [userInfoData]);
  useEffectSkipFirst(() => {
    if (downloaduserpicData) {
      const base64 = btoa(
        new Uint8Array(downloaduserpicData).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );

      console.log("userpic", "file is okay");

      setUserPic(base64);
    }
  }, [downloaduserpicData]);
  useEffectSkipFirst(() => {
    if (user) {
      DownloadUserPicByuserId(user.id);
    }
  }, [user]);
  return (
    <div id="InfoPerson">
      <div className="mainInfo">
        <div className="itemDashboard">
          <img src={`data:;base64,${UserPic}`} />
          {/* <img src={UserPic} /> */}
          {/* <img
            // src={`data:image/jpeg;charset=utf-8;base64,${UserPic}`}
            src={UserPic}
            alt="personal"
          /> */}
        </div>
        <div className="itemInfo">
          <div className="personal">
            <label>نام : </label>
            <input
              readOnly
              type="text"
              placeholder="-"
              value={firstName}
            ></input>
          </div>
          <div className="personal">
            <label>نام خانوادگی : </label>
            <input
              readOnly
              type="text"
              placeholder="-"
              value={lastName}
            ></input>
          </div>
          <div className="personal">
            <label>جنسیت : </label>
            <input
              readOnly
              type="text"
              placeholder="-"
              value={Sexuality}
            ></input>
          </div>
          <div className="personal">
            <label>تاریخ تولد : </label>
            <input
              readOnly
              type="text"
              placeholder="-"
              value={Birthday}
            ></input>
          </div>
          <div className="personal">
            <label className="topStyle">وضعیت تاهل : </label>
            <input
              readOnly
              type="text"
              placeholder="-"
              value={MarriedStatus}
            ></input>
          </div>
          <div className="personal">
            <label>تحصیلات : </label>
            <input
              readOnly
              type="text"
              placeholder="-"
              value={Education}
            ></input>
          </div>
          <div className="personal">
            <label>کدملی : </label>
            <input
              readOnly
              type="text"
              placeholder="-"
              value={nationalID}
            ></input>
          </div>
          <div className="personal">
            <label>تلفن تماس : </label>
            <input
              readOnly
              type="text"
              placeholder="-"
              value={mobileNumber}
            ></input>
          </div>
          <div className="personal">
            <label>شغل : </label>
            <input readOnly type="text" placeholder="-" value={Job}></input>
          </div>
          <div className="personal special">
            <label className="topStyle">شغل سمت : </label>
            <input
              readOnly
              type="text"
              placeholder="-"
              value={JobTitle}
            ></input>
          </div>
          <div className="personal special">
            <label>آدرس : </label>
            <input readOnly type="text" placeholder="-" value={Address}></input>
          </div>
          <div className="btn">
            <NavLink to="/Editdashboard">
              {" "}
              <button>ویرایش</button>
            </NavLink>
            <Popup
              trigger={<button className="button"> تغییر گذرواژه </button>}
              modal
            >
              <div className="popupChange">
                <div className="personal">
                  <label>گذرواژه قدیم : </label>
                  <input
                    type="password"
                    value={PassWord}
                    onChange={(e) => {
                      setPassWord(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="personal">
                  <label>گذرواژه جدید : </label>
                  <input
                    type="password"
                    value={NewPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="personal">
                  <label>تکرار گذرواژه : </label>
                  <input
                    type="password"
                    value={ConfirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="btn">
                  <button
                    onClick={(e) => {
                      sendUserPassData();
                    }}
                  >
                    ویرایش
                  </button>
                  {ErrorInput ? <h6 className="equalPass">گذرواژه قدیم درست وارد نشده است</h6>: null
                  }
                  {ErrorEpty ? (
                    <h6 className="equalPass">تمامی فیلد ها باید پر شوند</h6>
                  ) : null}
                  {ErrorLength ? (
                    <h6 className="equalPass">گذرواژه باید بیشتر از ۷ کاراکتر باشد</h6>
                  ) : null}
                  {AcceptPass ? (
                    <h6 className="acceptChange">گذرواژه با موفقیت تغییر پیدا کرد</h6>
                  ) : null}
                </div>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPerson;
