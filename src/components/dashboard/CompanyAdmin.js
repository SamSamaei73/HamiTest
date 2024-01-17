import React, { useMemo, useRef, useState, useContext, useEffect } from "react";
import "../../css/Dashboard/CompanyAdmin.css";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import Footer from "../tools/Footer";
import { CompanyUser } from "../column/Columns";
import CustomTable from "../column/CustomTable";
import TestContext from "../../Context/Test/testContext";
import AuthContext from "../../Context/Auth/authContext";
import { useNavigate } from "react-router-dom";
import Humberger from "../tools/Humberger";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Addperson from "../../images/icons8-add-user-group-woman-man-100.png";
import FormAddPerson from "./FormAddPerson";
import PersonInfo from "./PersonInfo";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { Companymanag } from "../tools/Constant";


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

const CompanyAdmin = () => {
  document.title = Companymanag;

  let navigate = useNavigate();
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);

  const { user, GetAllCompanyUser, allCompanyUserData ,allInformationOfAdmin,GetAdminInformation } = authContext;
  const {
    GetTestForSpecificUser,
    testForSpecificUserData,
    GetAllCompany,
    allCompanyData,
    SetUserIdForShowingResult,
    DeleteUserById,
    deleteUserData,
    err,
  } = testContext;
  const [companyName, setCompanyName] = useState(null);
  const [companyuserdata, setCompanyUserData] = useState([]);
  const [companiesData, setCompaniesData] = useState([]);
  const [AdminData, setAdminData] = useState([]);


  useEffect(() => {
    //GetAllCompanyUser(user.UserType);
  }, []);

  useEffect(() => {
    GetAllCompany(user.UserType);
    GetAdminInformation(user.UserType)
  }, []);

  useEffectSkipFirst(() => {
    if (allCompanyUserData) {
      setCompanyUserData(allCompanyUserData);
    }
  }, [allCompanyUserData]);
  useEffectSkipFirst(() => {
    if (allCompanyData) {
      setCompaniesData(allCompanyData);
      if (allCompanyData.length == 1) {
        GetAllCompanyUser(allCompanyData[0].id);
      }
    }
  }, [allCompanyData]);

  const kartableActionsAdmin = {
    Header: "عملیات",
    columns: [
      {
        Header: ".",
        Cell: ({ row }) => (
          <div className="Operations">
            {row ? (
              row.original.IsAdmin != 1 ? (
                <button
                  type="button"
                  className="editBtn"
                  id={row.original.id}
                  onClick={(e) => console.log("del", row.original)}
                >
                  حذف
                </button>
              ) : null
            ) : null}
            <Popup
              trigger={
                <button type="button" className="editBtn">
                  مشخصات
                </button>
              }
              modal
            >
              <PersonInfo userData={row.original} />
            </Popup>
            <button
              type="button"
              className="editBtn"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
              onClick={(e) => {
                console.log("userid:", row.original.UserId);
                SetUserIdForShowingResult(null);
                SetUserIdForShowingResult(row.original.UserId);
                return navigate("/SelectExams/" + row.original.UserId);
              }}
            >
              مشاهده آزمون ها
            </button>
          </div>
        ),
      },
    ],
  };

  const KartableColumnsForAdmin = useMemo(
    () => [kartableActionsAdmin, CompanyUser],

    []
  );

  const delteItem = (itemId) => {
    Swal.fire({
      title: "از حذف کاربر مورد نظر مطمئن هستید؟",
      text: "بعد از حذف کردن امکان بازیابی وجود ندارد!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله ",
      cancelButtonText: "خیر ",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteUserById(itemId);
      }
    });
  };

  useEffectSkipFirst(() => {
    if (deleteUserData) {
      Swal.fire({
        text: "کاربر  حذف شد",
        icon: "success",
        confirmButtonText: "باشه",
      }).then((result) => {});
    }
    GetAllCompany(user.UserType);
  }, [deleteUserData]);


  useEffectSkipFirst(() => {
    if (allInformationOfAdmin) {
      let newData = allInformationOfAdmin.map((item) => {
        let newItem = {};
        newItem.id = item.id;
        newItem.firstName = item.firstName;
        newItem.lastName = item.lastName;
        

        return newItem;
      });
      setAdminData(newData);
      
    }
  }, [allInformationOfAdmin]);

  return (
    <div id="CompanyAdmin">
      <Header />
      <Navbars />
      <div className="mainAlluser">
        <div className="humbergerAlluser">
          <Humberger />
          <Popup
            trigger={
              <div className="StyleImageAdd1">
                <img src={Addperson} alt="Addperson" />
              </div>
            }
            modal
          >
            <FormAddPerson />
          </Popup>
        </div>
        <div className="tableAlluser">
          <h1> مدیریت اعضا سازمانی</h1>
          <div className="SelectCompany">
            <div className="itemCompany">
              <label htmlFor=""> ادمین سازمان</label>
              {AdminData.map((item) => (
              <label htmlFor="" className="adminCom">
                {item.firstName} {item.lastName}
              </label>
              ))}
            </div>
            <div className="itemCompany">
              <label htmlFor="">انتخاب سازمان</label>
              <select
                onChange={(e) => {
                  setCompanyName(e.target.value);
                  GetAllCompanyUser(e.target.value);
                  GetAdminInformation(e.target.value)
                }}
                className="InputCompany"
              >
                {companiesData
                  ? companiesData.map((item) => {
                      return <option value={item.id}>{item.Name}</option>;
                    })
                  : []}
              </select>
            </div>
          </div>
          <div className="columnSelect">
            <CustomTable
              columns={KartableColumnsForAdmin}
              data={companyuserdata ? companyuserdata : []}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyAdmin;
