import React, { useMemo, useRef, useState, useContext, useEffect } from "react";
import "../../css/Dashboard/SelectExams.css";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import Footer from "../tools/Footer";
import { Users } from "../column/Columns";
import CustomTable from "../column/TableUser";
import TestContext from "../../Context/Test/testContext";
import AuthContext from "../../Context/Auth/authContext";
import { useNavigate } from "react-router-dom";
import Humberger from "../tools/Humberger";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Addperson from "../../images/icons8-add-user-group-woman-man-100.png";
import Company from "../../images/icons8-company-64.png";
import PersonInfo from "./PersonInfo";
import CompanyInfo from "./CompanyInfo";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { UserAll } from "../tools/Constant";


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

const AllUsers = () => {
  document.title = UserAll;

  let navigate = useNavigate();
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);

  const { user, GetAllUserForSpecificGroup, allUserForSpecificGroupData } =
    authContext;

  const {
    GetTestForSpecificUser,
    testForSpecificUserData,
    allCompanyData,
    GetAllCompany,
    SetUserIdForShowingResult,
    newCompanyPost,
    CreateNewCompany,
    DeleteUserById,
    deleteUserData,
    err,
  } = testContext;

  const [Name, setName] = useState(null);
  const [Description, setDescription] = useState(null);
  const [Address, setAddress] = useState(null);
  const [ManagerName, setManagerName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Tel1, setTel1] = useState(null);
  const [Tel2, setTel2] = useState(null);
  const [Fax, setFax] = useState(null);
  const [PostCode, setPostCode] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    GetAllUserForSpecificGroup(1);
  }, []);

  useEffect(() => {
    GetAllCompany();
  }, []);

  // useEffect(() => {
  //   GetAllUserForSpecificGroup(1);
  // }, []);

  const kartableActionsAdmin = {
    Header: "عملیات",
    columns: [
      {
        Header: "امکانات",
        Cell: ({ row }) => (
          <div className="Operations">
            {row ? (
              row.original.userTypeid > 1 ? (
                <button
                  type="button"
                  className="editBtn"
                  id={row.original.id}
                  onClick={(e) => delteItem(row.original.id)}
                >
                  حذف
                </button>
              ) : null
            ) : null}
            <Popup
              trigger={
                <button
                  type="button"
                  className="editBtn"
                 
                >
                  مشخصات
                </button>
              }
              modal
            >
              <PersonInfo
                userData={row.original}
                userId={row.original.UserId}
              />
            </Popup>
            <Popup
              trigger={
                <button type="button" className="editBtn">
                  نقش
                </button>
              }
              modal
            >
              <CompanyInfo user={row.original} userId={row.original.UserId} />
            </Popup>

            <button
              type="button"
              className="editBtn"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
              onClick={(e) => {
                SetUserIdForShowingResult(null);
                SetUserIdForShowingResult(row.original.UserId);
                return navigate("/SelectExams/" + row.original.UserId);
              }}
            >
              نتایج
            </button>
          </div>
        ),
      },
    ],
  };

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
    GetAllUserForSpecificGroup(1);
  }, [deleteUserData]);

  const KartableColumnsForAdmin = useMemo(
    () => [kartableActionsAdmin, Users],

    []
  );

  const handleClick = () => {
    // 👇️ clear input value
    setMessage("");
  };

  return (
    <div id="Alluser">
      <Header />
      <Navbars />
      <div className="mainAlluser">
        <div className="humbergerAlluser">
          <Humberger />
        </div>
        <div className="tableAlluser">
          <h1> مدیریت اعضا</h1>
          <div className="columnSelect">
            <CustomTable
              columns={KartableColumnsForAdmin}
              data={
                allUserForSpecificGroupData ? allUserForSpecificGroupData : []
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllUsers;
