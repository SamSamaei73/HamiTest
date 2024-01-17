import React, { useMemo, useRef, useState, useContext, useEffect } from "react";
import "../../css/Dashboard/ManageContact.css";
import TestContext from "../../Context/Test/testContext";
import AuthContext from "../../Context/Auth/authContext";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

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

const FormAddPerson = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { user,GetAllUserForSpecificGroup, GetAllCompanyUser } =
  authContext;
  const { addUserCompany, CreateUserCompany, err } = testContext;
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [passWord, setpassWord] = useState(null);
  const [nationalID, setnationalID] = useState(null);
  const [mobileNum, setmobileNum] = useState(null);
  const [userType, setuserType] = useState(null);

  useEffect(() => {
    GetAllUserForSpecificGroup(1);
  }, []);

  const sendNewCompanyData = (e) => {
    let newCompany = {};
    newCompany.firstName = firstName;
    newCompany.lastName = lastName;
    newCompany.nationalID = nationalID;
    newCompany.mobileNum = mobileNum;
    newCompany.userType = user.UserType;

    console.log("comp",newCompany , user);

    CreateUserCompany(newCompany);
  };

  useEffectSkipFirst(() => {
    if (addUserCompany) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "کاربر شرکتی جدید ثبت شد",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    GetAllCompanyUser(user.UserType)
  }, [addUserCompany]);

  return (
    <div id="formAddPerson">
        <div className="formPerson">
        <div className="titleForm">
          <h2>ثبت مشخصات پرسنل</h2>
        </div>
        <div className="mainForm">
          <div className="itemForm">
            <label>نام</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div className="itemForm">
            <label>نام خانوادگی</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>

          <div className="itemForm">
            <label>کد ملی</label>
            <input
              type="text"
              value={nationalID}
              onChange={(e) => setnationalID(e.target.value)}
            />
          </div>
          <div className="itemForm">
            <label>موبایل</label>
            <input
              type="text"
              value={mobileNum}
              onChange={(e) => setmobileNum(e.target.value)}
            />
          </div>
          
          
        </div>
        <div className="btmAddPerson">
          <button
            onClick={(e) => {
              sendNewCompanyData(e);
              // setLoading(true);
            }}
          >
            ثبت
          </button>
        </div>
        </div>
    </div>
  );
};

export default FormAddPerson;
