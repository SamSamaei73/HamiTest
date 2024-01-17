import React, { useMemo, useRef, useState, useContext, useEffect } from "react";
import "../../css/Dashboard/SelectExams.css";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import Footer from "../tools/Footer";
import { SelectExamColum } from "../column/Columns";
import CustomTable from "../column/CustomTable";
import AuthContext from "../../Context/Auth/authContext";
import { useNavigate } from "react-router-dom";
import TestContext from "../../Context/Test/testContext";
import { useEffectSkipFirst } from "../tools/useEffectSkipFirst";
import Humberger from "../tools/Humberger";
import { ResultTitle } from "../tools/Constant";


const SelectExams = () => {
  document.title = ResultTitle;
  let navigate = useNavigate();
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const [show, setShow] = useState(true);
  const [showResultExams, setShowResultExams] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const {
    GetTestForSpecificUser,
    testForSpecificUserData,
    SetUserIdForShowingResult,
    userIdForShowingResult,
    SetTestIdForShowingResult,
    SetTestDateForShowingResult,
    testIdForShowingResult,
    testDateForShowingResult,
    CalScoreOfTest5JustShowResult,
    CalScoreOfTest117JustShowResult,
    CalScoreOfTest116JustShowResult,
    err,
  } = testContext;
  const { user, GetUserInfoById, userInfoByIdData } = authContext;

  useEffect(() => {
    if (userIdForShowingResult) {
      setShow(false);
      // console.log("useeffect userid:", userIdForShowingResult);
      GetTestForSpecificUser(userIdForShowingResult);
      GetUserInfoById(userIdForShowingResult);
      SetUserIdForShowingResult(0);
    } else {
      // GetUserInfoById(userIdForShowingResult);
      setUserInfo(user);
      GetTestForSpecificUser(0);
    }
  }, []);

  useEffectSkipFirst(() => {
    if (userIdForShowingResult) {
      setShow(false);
      //  console.log("useeffectskipfirst userid:", userIdForShowingResult);
      GetTestForSpecificUser(userIdForShowingResult);
      SetUserIdForShowingResult(0);
    }
  }, [userIdForShowingResult]);
  useEffectSkipFirst(() => {
    if (userInfoByIdData) {
      // console.log("userinfobyiddata:", userInfoByIdData);
      setUserInfo(userInfoByIdData);
    }
  }, [userInfoByIdData]);
  useEffectSkipFirst(() => {
    if (testForSpecificUserData) {
      setShow(true);
      setShowResultExams(testForSpecificUserData);
    }
  }, [testForSpecificUserData]);
  useEffectSkipFirst(() => {
    if (testIdForShowingResult) {
      console.log("testidforshowingresult:", testIdForShowingResult);
    }
  }, [testIdForShowingResult]);
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
                SetUserIdForShowingResult(row.original.UserId);
                SetTestDateForShowingResult(row.original.createdAt);
                // console.log(
                //   "testdata:",
                //   row.original.UserId,
                //   row.original.TestId
                // );
                SetTestIdForShowingResult(row.original.TestId);
                if (row.original.TestId == 5) {
                  CalScoreOfTest5JustShowResult(
                    row.original.UserId,
                    row.original.createdAt
                  );
                  return navigate("/ResultexamForDisc");
                } else if (row.original.TestId == 117) {
                  CalScoreOfTest117JustShowResult(
                    row.original.UserId,
                    row.original.createdAt
                  );
                  return navigate("/ResultexamForDisc");
                } else if (row.original.TestId == 116) {
                  CalScoreOfTest116JustShowResult(
                    row.original.UserId,
                    row.original.createdAt
                  );

                  return navigate("/ResultexamForDisc");
                } else {
                  return navigate("/ResultexamForDisc");
                }
              }}
            >
              مشاهده نتیجه
            </button>
          </div>
        ),
      },
    ],
  };

  const KartableColumnsForAdmin = useMemo(
    () => [kartableActionsAdmin, SelectExamColum],

    []
  );

  return (
    <div id="SelectExams">
      <Header />
      <Navbars />
      <div className="MainSelect">
        <div className="calumBar">
          <Humberger />
        </div>
        <div className="tableSelect">
          <h1>
            آزمون های پاسخ داده شده : {userInfo ? userInfo.FirstName : null}{" "}
            {userInfo ? userInfo.LastName : null}
          </h1>
          <div className="columnSelect">
            {show ? (
              <CustomTable
                columns={KartableColumnsForAdmin}
                data={showResultExams ? showResultExams : []}
              />
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectExams;
