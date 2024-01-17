import React, { useMemo, useRef, useState, useContext, useEffect } from "react";
import "../../css/Dashboard/SelectExams.css";
import TestContext from "../../Context/Test/testContext";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import AuthContext from "../../Context/Auth/authContext";

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

const CompanyInfo = ({ userId, user }) => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);

  const { GetAllUserForSpecificGroup, allUserForSpecificGroupData } =
    authContext;
  const {
    allCompanyData,
    GetAllCompany,
    UpdateIsAdminProp,
    updatedIsAdminData,
    err,
  } = testContext;
  const [CompanyData, setCompanyData] = useState([]);
  const [SelectCompany, setSelectCompany] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    console.log("userId", user);
    if (user.IsAdmin == 1) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    GetAllCompany();
  }, []);

  useEffectSkipFirst(() => {
    if (allCompanyData) {
      let newData = allCompanyData.map((item) => {
        let newItem = {};
        newItem.value = item.id;
        newItem.label = item.Name;
        newItem.Description = item.Description;

        return newItem;
      });
      setCompanyData(newData);
    }
  }, [allCompanyData]);

  const SendUpdateData = () => {
    console.log("clicked", isAdmin, SelectCompany);
    let frmData = {};
    frmData.UserId = userId;
    frmData.IsAdmin = isAdmin;
    if (SelectCompany) {
      frmData.CompanyId = parseInt(SelectCompany);
    }
    // console.log("frmdata", frmData);
    UpdateIsAdminProp(frmData);
  };

  useEffectSkipFirst(() => {
    if (updatedIsAdminData) {
      Swal.fire({
        text: "  ادمین سازمانی جدید ثبت شد ",
        icon: "success",
        confirmButtonText: "باشه",
      }).then((result) => {});
    }
    GetAllUserForSpecificGroup(1);
  }, [updatedIsAdminData]);

  return (
    <div className="PersonInfo">
      <div className="itemInfo">
        <label className="infoLabel" htmlFor="">
          وضعیت کاربر
        </label>
        <input
          className="infoInput"
          type="checkbox"
          value={isAdmin}
          checked={isAdmin}
          onChange={(e) => {
            // console.log(e.target.checked);
            setIsAdmin(e.target.checked);
          }}
        />
      </div>

      <div className="itemInfo">
        <label className="infoLabel" htmlFor="">
          سازمان{" "}
        </label>
        <select
          className="infoInput"
          onChange={(e) => {
            setSelectCompany(e.target.value);
          }}
        >
          {CompanyData
            ? CompanyData.map((item) => {
                return (
                  <option
                    value={item.value}
                    selected={item.value == user.userTypeid ? "selected" : 0}
                  >
                    {item.label}{" "}
                  </option>
                );
              })
            : []}
        </select>
      </div>
      <div className="BtnCompany">
        <button className="buttonCompany" onClick={(e) => SendUpdateData()}>
          ثبت
        </button>
      </div>
    </div>
  );
};

export default CompanyInfo;
