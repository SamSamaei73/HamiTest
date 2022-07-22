import { useEffect, useState, useRef, React, useContext } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import "../../css/Editdashboard.css";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { EditProfile } from "../tools/Constant";
import TestContext from "../../Context/Test/testContext";
import AuthContext from "../../Context/Auth/authContext";
import { useEffectSkipFirst } from "../tools/useEffectSkipFirst";
import { useNavigate } from "react-router-dom";

const Editdashboard = () => {
  document.title = EditProfile;
  const navigate = useNavigate();

  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");

  //
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

  const [file, setFile] = useState("");

  const el1 = useRef(); // accesing input element
  const handleChange = (e) => {
    const file = e.target.files[0]; // accesing file
    setFile(file); // storing file
  };
  const { user } = authContext;

  const uploadUserPic = (e) => {
    if (user) {
      const formData = new FormData();
      formData.append("avatar", file);
      // //console.log("userid", user.id, user);
      formData.append("userId", user.id);

      UploadUserPicFile(formData);
    }
  };

  useEffect(() => {
    if (userInfoData) {
      setRequiredStates(userInfoData);
    }
  }, []);

  const {
    UploadUserPicFile,
    updatedUserData,
    userInfoData,
    UpdateItemInUser,
    GetUserInfo,
  } = testContext;
  useEffectSkipFirst(() => {
    if (updatedUserData) {
      setLoading(false);
      GetUserInfo();
      navigate("/Dashboard");
    }
  }, [updatedUserData]);
  useEffectSkipFirst(() => {
    if (userInfoData) {
      //console.log("userinfodata:", userInfoData);
      setRequiredStates(userInfoData);
    }
  }, [userInfoData]);
  const setRequiredStates = (userInfoData) => {
    if (userInfoData.user) {
      // console.log("edituser:", userInfoData.user);
      setFirstName(userInfoData.user[0].firstName);
      setLastName(userInfoData.user[0].lastName);
      setMobileNumber(userInfoData.user[0].mobileNum);
      setNationalID(userInfoData.user[0].NationalIDReal);
      setSexuality(userInfoData.user[0].Sexuality);
      setMarriedStatus(userInfoData.user[0].MarriedStatus);
      setAddress(userInfoData.user[0].Address);
      setBirthday(userInfoData.user[0].Birthday);
      setEducation(userInfoData.user[0].Education);
      if (userInfoData.user[0].Birthday) {
        var birthdata = userInfoData.user[0].Birthday;
        var year1 = birthdata.split("/")[0];
        var month1 = birthdata.split("/")[1];
        var day1 = birthdata.split("/")[2];
        //console.log("splityearmonthday:", year, month, day);
        setSelectedDay({
          day: parseInt(day1),
          month: parseInt(month1),
          year: parseInt(year1),
        });
      }
      setJob(userInfoData.user[0].Job);
      setJobTitle(userInfoData.user[0].JobTitle);
    }
  };
  //

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

  const [selectedDay, setSelectedDay] = useState(null);
  const updateProfileInfo = () => {
    if (nationalID.length > 0) {
      setLoading(true);
      let profileData = {};
      profileData.Sexuality = Sexuality;
      profileData.Education = Education;
      profileData.MarriedStatus = MarriedStatus;
      profileData.firstName = firstName;
      profileData.lastName = lastName;
      profileData.mobileNumber = mobileNumber;
      profileData.nationalIDReal = nationalID;
      profileData.Job = Job;
      profileData.JobTitle = JobTitle;
      profileData.Address = Address;
      profileData.Birthday = selectedDay;
      profileData.id = user.id;
      profileData.day = selectedDay.day;
      profileData.month = selectedDay.month;
      profileData.year = selectedDay.year;
      //console.log("profileInfoData:", profileData);
      UpdateItemInUser(profileData);
      uploadUserPic();
    } else {
      setErrorMsg("لطفاً نام کاربری و کلمه عبور را وارد نمایید");
    }
  };

  const onChanged = (e, Type, maxNum) => {
    switch (Type) {
      case "firstName":
        // setisShowPasswordError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setFirstName(e.target.value);
        break;

      case "lastName":
        //setisShowPasswordError(false);
        if (e.target.value.length >= maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setLastName(e.target.value);

        break;
      case "nationalID":
        //setisShowBirthdayError(false);
        if (e.target.value.length >= maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setNationalID(e.target.value);

        break;
      case "mobileNumber":
        // setisShowNationalIDError(false);
        if (e.target.value.length >= maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setMobileNumber(e.target.value);
        break;
      case "Job":
        //setisShowMobileNumError(false);
        if (e.target.value.length >= maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setJob(e.target.value);
        break;
      case "JobTitle":
        //setisShowFirstNameError(false);
        if (e.target.value.length >= maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setJobTitle(e.target.value);

        break;
      case "Address":
        //setisShowLastNameError(false);
        if (e.target.value.length >= maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setAddress(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div id="Editdashboard">
      {loading ? (
        <CircleLoader
          color={"#F1E1A6"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="Editdashboard">
          <Header />
          <Navbars />
          <div className="itemInfo">
            <div className="personal">
              <label>نام : </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  onChanged(e, "firstName", 200);
                }}
              ></input>
            </div>
            <div className="personal">
              <label>نام خانوادگی : </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => {
                  onChanged(e, "lastName", 200);
                }}
              ></input>
            </div>
            <div className="personal">
              <label>جنسیت : </label>
              <select
                value={Sexuality}
                onChange={(e) => {
                  setSexuality(e.target.value);
                  ////console.log(Sexuality);
                }}
              >
                <option value={1}>مرد</option>
                <option value={0}>زن</option>
              </select>
            </div>
            <div className="personal">
              <label>تاریخ تولد : </label>
              <DatePicker
                value={selectedDay}
                onChange={setSelectedDay}
                shouldHighlightWeekends
                locale="fa" // add this
              />{" "}
            </div>
            <div className="personal">
              <label className="topStyle">وضعیت تاهل : </label>
              <select
                value={MarriedStatus}
                onChange={(e) => {
                  setMarriedStatus(e.target.value);
                  ////console.log(Sexuality);
                }}
              >
                <option value={0}>مجرد</option>
                <option value={1}>متاهل</option>
              </select>
            </div>
            <div className="personal">
              <label>تحصیلات : </label>
              <select
                value={Education}
                onChange={(e) => {
                  setEducation(e.target.value);
                  ////console.log(Sexuality);
                }}
              >
                <option value={0}>زیر دیپلم</option>
                <option value={1}>دیپلم</option>
                <option value={2}>کاردانی</option>
                <option value={3}>کارشناسی</option>
                <option value={4}>کارشناسی ارشد </option>
                <option value={5}>دکتری</option>
              </select>
            </div>
            <div className="personal">
              <label>کدملی : </label>
              <input
                type="text"
                value={nationalID}
                onChange={(e) => {
                  onChanged(e, "nationalID", 10);
                }}
              ></input>
            </div>
            <div className="personal">
              <label>تلفن تماس : </label>
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => {
                  onChanged(e, "mobileNumber", 12);
                }}
              ></input>
            </div>
            <div className="personal ">
              <label className="topStyle">ایمیل : </label>
              <input
                type="text"
                value={JobTitle}
                onChange={(e) => {
                  onChanged(e, "JobTitle", 200);
                }}
              ></input>
            </div>
            <div className="personal">
              <label>شغل : </label>
              <input
                type="text"
                value={Job}
                onChange={(e) => {
                  onChanged(e, "Job", 200);
                }}
              ></input>
            </div>

            <div className="personal ">
              <label className="topStyle">شغل سمت : </label>
              <input
                type="text"
                value={JobTitle}
                onChange={(e) => {
                  onChanged(e, "JobTitle", 200);
                }}
              ></input>
            </div>

            <div className="personal special">
              <label>آدرس : </label>
              <input
                type="text"
                value={Address}
                onChange={(e) => {
                  onChanged(e, "Address", 200);
                }}
              ></input>
            </div>
            <div className="personal special">
              <label>تصویر : </label>
              <input type="file" ref={el1} onChange={handleChange}></input>
            </div>
            <div className="btn">
              <button onClick={(e) => updateProfileInfo()}>ثبت</button>
              <button onClick={(e) => navigate("/Dashboard")}>انصراف </button>
              {/* <button onClick={(e) => }>انصراف </button> */}
            </div>
          </div>
          <h1>{errorMsg}</h1>
        </div>
      )}
    </div>
  );
};

export default Editdashboard;
