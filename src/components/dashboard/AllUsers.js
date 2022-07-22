import React, { useMemo, useRef, useState, useContext, useEffect } from "react";
import "../../css/Dashboard/SelectExams.css";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import Footer from "../tools/Footer";
import { Users } from "../column/Columns";
import CustomTable from "../column/CustomTable";
import TestContext from "../../Context/Test/testContext";
import AuthContext from "../../Context/Auth/authContext";
import { useNavigate } from "react-router-dom";
import Humberger from "../tools/Humberger";

const AllUsers = () => {
  let navigate = useNavigate();
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);

  const { GetAllUserForSpecificGroup, allUserForSpecificGroupData } =
    authContext;
  const {
    GetTestForSpecificUser,
    testForSpecificUserData,
    SetUserIdForShowingResult,
    err,
  } = testContext;

  useEffect(() => {
    GetAllUserForSpecificGroup(1);
  }, []);

  const kartableActionsAdmin = {
    Header: "عملیات",
    columns: [
      {
        Header: ".",
        Cell: ({ row }) => (
          <div className="Operations">
            {/* <button
              type="button"
              className="editBtn"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
              onClick={(e) => {
                return navigate("/" + row.original.Page);
              }}
            >
              ویرایش
            </button> */}
            <button
              type="button"
              className="editBtn"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
              onClick={(e) => {
                // console.log("userid:", row.original.UserId);
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
    () => [kartableActionsAdmin, Users],

    []
  );

  return (
    <div id="Alluser">
      <Header />
      <Navbars />
      <div className="mainAlluser">
        <div className="humbergerAlluser">
          <Humberger/>
        </div>
        <div className="tableAlluser">
          <h1>آزمون های انتخاب شده</h1>
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
