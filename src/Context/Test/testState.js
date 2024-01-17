import React, { useReducer } from "react";
import axios from "axios";
import TestContext from "./testContext";
import TestReducer from "./testReducer";
import { SERVER_URL } from "../constant";
import setAuthToken from "../../components/tools/setAuthToken";
import {
  GET_ALL_ANSWERS_SUCCESS,
  GET_ALL_ANSWERS_FAIL,
  GET_ALL_QUESTIONS_FAIL,
  GET_ALL_QUESTIONS_SUCCESS,
  CAL_SCORE_OF_TEST_SUCCESS,
  CAL_SCORE_OF_TEST_FAIL,
  CAL_SCORE_OF_TEST5_SUCCESS,
  CAL_SCORE_OF_TEST5_FAIL,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
  UPDATE_ITEM_IN_USER_SUCCESS,
  UPDATE_ITEM_IN_USER_FAIL,
  UPLOAD_USER_PIC_FILE_SUCCESS,
  UPLOAD_USER_PIC_FILE_FAIL,
  DOWNLOAD_USER_PIC_BY_USER_ID_SUCCESS,
  DOWNLOAD_USER_PIC_BY_USER_ID_FAIL,
  GET_TEST_FOR_SPECIFIC_USER_SUCCESS,
  GET_TEST_FOR_SPECIFIC_USER_FAIL,
  CAL_SCORE_OF_TEST117_SUCCESS,
  CAL_SCORE_OF_TEST117_FAIL,
  DOWNLOAD_TEST_FILE_BY_ID_FAIL,
  DOWNLOAD_TEST_FILE_BY_ID_SUCCESS,
  SET_USER_ID_FOR_SHOWING_RESULT,
  CAL_SCORE_OF_TEST5_JUST_FOR_SHOW_RESULT_SUCCESS,
  CAL_SCORE_OF_TEST5_JUST_FOR_SHOW_RESULT_FAIL,
  SET_CAL_SCORE_FOR_TEST_5,
  SET_TEST_ID_FOR_SHOWING_RESULT,
  CAL_SCORE_OF_TEST117_JUST_FOR_SHOW_RESULT_SUCCESS,
  CAL_SCORE_OF_TEST117_JUST_FOR_SHOW_RESULT_FAIL,
  CAL_SCORE_OF_TEST_JUST_FOR_SHOW_RESULT_SUCCESS,
  CAL_SCORE_OF_TEST_JUST_FOR_SHOW_RESULT_FAIL,
  GET_USER_TESTS_SUCCESS,
  GET_USER_TESTS_FAIL,
  SET_PACKAGE_DATA,
  DOWNLOAD_TEST_FILE_BY_TYPE_DESC_SUCCESS,
  DOWNLOAD_TEST_FILE_BY_TYPE_DESC_FAIL,
  SET_TEST_DATE_FOR_SHOWING_RESULT,
  CREATE_MOBILE_DATA_SUCCESS,
  CREATE_MOBILE_DATA_FAIL,
  CREATE_MOBILE_PASSWORLD_SUCCESS,
  CREATE_MOBILE_PASSWORD_FAIL,
  CREATE_FORGET_PASSWORLD_SUCCESS,
  CREATE_FORGET_PASSWORD_FAIL,
  GET_ALL_COMPANY_SUCCESS,
  GET_ALL_COMPANY_FAIL,
  UPDATE_IS_ADMIN_FAIL,
  UPDATE_IS_ADMIN_SUCCESS,
  CREATE_NEW_COMPANY_SUCCESS,
  CREATE_NEW_COMPANY_FAIL,
  CREATE_USER_COMPANY_SUCCESS,
  CREATE_USER_COMPANY_FAIL,
  DELETE_USER_BY_ID_SUCCESS,
  DELETE_USER_BY_ID_FAIL,
  CREATE_UPDATE_COMPANY_SUCCESS,
  CREATE_UPDATE_COMPANY_FAIL,
  GET_COMPANY_EXAM_SUCCESS,
  GET_COMPANY_EXAM_FAIL,
  GET_TESTS_NAMES_SUCCESS,
  GET_TESTS_NAMES_FAIL,
  CHECK_COMPANY_PACKAGE_SUCCESS,
  CHECK_COMPANY_PACKAGE_FAIL,
  GET_CHECK_SELECT_SUCCESS,
  GET_CHECK_SELECT_FAIL,
  CAL_SCORE_OF_TEST116_SUCCESS,
  CAL_SCORE_OF_TEST116_FAIL,
  CAL_SCORE_OF_TEST116_JUST_FOR_SHOW_RESULT_SUCCESS,
  CAL_SCORE_OF_TEST116_JUST_FOR_SHOW_RESULT_FAIL,
  GET_CHECK_TEST_SELECT_SUCCESS,
  GET_CHECK_TEST_SELECT_FAIL,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
} from "../types";

const TestState = (props) => {
  const initialState = {
    err: null,
    answersData: [],
    questionsData: [],
    calscoreoftestData: null,
    calscoreoftest5Data: null,
    calscoreoftest117Data: null,
    calscoreoftest116Data: null,
    userInfoData: [],
    updatedUserData: null,
    uploaduserpicfileData: null,
    downloaduserpicData: null,
    downloadTestFileData: null,
    testForSpecificUserData: [],
    userIdForShowingResult: null,
    testDateForShowingResult: null,
    calscoreoftest5JustForShowResultData: null,
    calscoreoftest117JustForShowResultData: null,
    calscoreoftest116JustForShowResultData: null,
    calscoreoftestJustForShowResultData: null,
    testIdForShowingResult: null,
    userTestData: null,
    packageData: null,
    downloadTestFileByTypeDescData: null,
    itemMobileData: null,
    updatePassworld: null,
    forgetPasswordData: null,
    allCompanyData: null,
    updatedIsAdminData: null,
    newCompanyPost: null,
    addUserCompany: null,
    deleteUserData: null,
    updateCompanyData: null,
    companyExamNames: null,
    otherTestNames: null,
    checkTestPackage: null,
    selectPackageCheck: null,
    selectTestsCheck: null,
    changePasswordCheck: null,
  };

  const [state, dispatch] = useReducer(TestReducer, initialState);

  const GetAllQuestions = async (testId) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetQuestions/" + testId,
        config
      );
      // //console.log("questions:", res.data);
      dispatch({
        type: GET_ALL_QUESTIONS_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: GET_ALL_QUESTIONS_FAIL,
        payload: err,
      });
    }
  };
  const GetOthersTestName = async () => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(SERVER_URL + "/GetTests", config);
      console.log("Rolles:", res.data);
      dispatch({
        type: GET_TESTS_NAMES_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: GET_TESTS_NAMES_FAIL,
        payload: err,
      });
    }
  };
  const GetCompanyTest = async () => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(SERVER_URL + "/GetPackages", config);
      console.log("Rolles:", res.data);
      dispatch({
        type: GET_COMPANY_EXAM_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: GET_COMPANY_EXAM_FAIL,
        payload: err,
      });
    }
  };
  const GetAllCompany = async () => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(SERVER_URL + "/GetAllRoles", config);
      console.log("Rolles:", res.data);
      dispatch({
        type: GET_ALL_COMPANY_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: GET_ALL_COMPANY_FAIL,
        payload: err,
      });
    }
  };
  const GetUserTestByUserId = async (userId) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetUserTests/" + userId,
        config
      );
      // //console.log("questions:", res.data);
      dispatch({
        type: GET_USER_TESTS_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: GET_USER_TESTS_FAIL,
        payload: err,
      });
    }
  };
  const SetTestDateForShowingResult = async (testDate) => {
    dispatch({
      type: SET_TEST_DATE_FOR_SHOWING_RESULT,
      payload: testDate,
    });
  };
  const SetUserIdForShowingResult = async (userId) => {
    dispatch({
      type: SET_USER_ID_FOR_SHOWING_RESULT,
      payload: userId,
    });
  };
  const SetPackageData = async (data) => {
    dispatch({
      type: SET_PACKAGE_DATA,
      payload: data,
    });
  };
  const SetTestIdForShowingResult = async (testId) => {
    dispatch({
      type: SET_TEST_ID_FOR_SHOWING_RESULT,
      payload: testId,
    });
  };
  const SetCalScoreForTest5 = async (data) => {
    dispatch({
      type: SET_CAL_SCORE_FOR_TEST_5,
      payload: data,
    });
  };

  const GetAllAnswers = async (testId) => {
    //setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        //usertypeid: reqId,
      },
    };

    try {
      const res = await axios.get(SERVER_URL + "/GetAnswers", config);
      dispatch({
        type: GET_ALL_ANSWERS_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: GET_ALL_ANSWERS_FAIL,
        payload: err,
      });
    }
  };
  const GetCeckSelectTests = async (typeId) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetTestsForThisUserTypeId/" + typeId,
        config
      );
      //console.log("data:", res.data);
      dispatch({
        type: GET_CHECK_TEST_SELECT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: GET_CHECK_TEST_SELECT_FAIL,
        payload: err,
      });
    }
  };
  const GetCeckSelectPackage = async (typeId) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetPackagesForThisUserTypeId/" + typeId,
        config
      );
      //console.log("data:", res.data);
      dispatch({
        type: GET_CHECK_SELECT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: GET_CHECK_SELECT_FAIL,
        payload: err,
      });
    }
  };
  const GetTestForSpecificUser = async (userId) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetTestForSpecificUser/" + userId,
        config
      );
      //console.log("data:", res.data);
      dispatch({
        type: GET_TEST_FOR_SPECIFIC_USER_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: GET_TEST_FOR_SPECIFIC_USER_FAIL,
        payload: err,
      });
    }
  };

  const GetUserInfo = async (testId) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(SERVER_URL + "/GetUserInfo", config);
      console.log("userinfo", res);
      dispatch({
        type: GET_USER_INFO_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: GET_USER_INFO_FAIL,
        payload: err,
      });
    }
  };
  const DownloadTestFileById = async (Id) => {
    setAuthToken(localStorage.token);
    const config = {
      responseType: "arraybuffer",
      headers: {
        Accept: "application/pdf",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/DownloadTestFileById/" + Id,
        config
      );
      dispatch({
        type: DOWNLOAD_TEST_FILE_BY_ID_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      await dispatch({
        type: DOWNLOAD_TEST_FILE_BY_ID_FAIL,
        payload: err.data,
      });
    }
  };

  const DownloadVoiceFile = async (Id) => {
    setAuthToken(localStorage.token);
    const config = {
      responseType: "arraybuffer",
      headers: {
        Accept: "video/mp4",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/DownloadTestFileById/" + Id,
        config
      );
      dispatch({
        type: DOWNLOAD_TEST_FILE_BY_TYPE_DESC_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      await dispatch({
        type: DOWNLOAD_TEST_FILE_BY_TYPE_DESC_FAIL,
        payload: err.data,
      });
    }
  };

  const CalScoreOfTest = async (frmData) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CalScoreOfTest2",
        frmData,
        config
      );
      //console.log("resdataquestion2111", res.data);
      dispatch({
        type: CAL_SCORE_OF_TEST_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: CAL_SCORE_OF_TEST_FAIL,
        payload: err,
      });
    }
  };
  const CalScoreOfTest117 = async (frmData) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CalScoreOfTest117",
        frmData,
        config
      );
      //console.log("resdataquestion117", res.data);
      dispatch({
        type: CAL_SCORE_OF_TEST117_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: CAL_SCORE_OF_TEST117_FAIL,
        payload: err,
      });
    }
  };
  const CalScoreOfTest116 = async (frmData) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CalScoreOfTest116",
        frmData,
        config
      );
      //console.log("resdataquestion117", res.data);
      dispatch({
        type: CAL_SCORE_OF_TEST116_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: CAL_SCORE_OF_TEST116_FAIL,
        payload: err,
      });
    }
  };
  const CalScoreOfTest5 = async (frmData) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CalScoreOfTest5",
        frmData,
        config
      );
      //console.log("resdataquestion5", res.data);
      dispatch({
        type: CAL_SCORE_OF_TEST5_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: CAL_SCORE_OF_TEST5_FAIL,
        payload: err,
      });
    }
  };
  const CalScoreOfTest5JustShowResult = async (userId, createdAt) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        createdAt: createdAt,
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/CalScoreOfTest5JustShowResult/" + userId,
        config
      );
      dispatch({
        type: CAL_SCORE_OF_TEST5_JUST_FOR_SHOW_RESULT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: CAL_SCORE_OF_TEST5_JUST_FOR_SHOW_RESULT_FAIL,
        payload: err,
      });
    }
  };
  const CalScoreOfTest117JustShowResult = async (userId, createdAt) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        createdAt: createdAt,
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/CalScoreOfTest117JustShowResult/" + userId,
        config
      );
      dispatch({
        type: CAL_SCORE_OF_TEST117_JUST_FOR_SHOW_RESULT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: CAL_SCORE_OF_TEST117_JUST_FOR_SHOW_RESULT_FAIL,
        payload: err,
      });
    }
  };
  const CalScoreOfTest116JustShowResult = async (userId, createdAt) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        createdAt: createdAt,
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/CalScoreOfTest116JustShowResult/" + userId,
        config
      );
      dispatch({
        type: CAL_SCORE_OF_TEST116_JUST_FOR_SHOW_RESULT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: CAL_SCORE_OF_TEST116_JUST_FOR_SHOW_RESULT_FAIL,
        payload: err,
      });
    }
  };
  const CalScoreOfTestJustShowResult = async (userId, testId, createdAt) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        TestId: testId,
        createdAt: createdAt,
      },
    };
    console.log("userand test id:", userId, testId);
    try {
      const res = await axios.get(
        SERVER_URL + "/CalScoreOfTestJustShowResult/" + userId,
        config
      );
      dispatch({
        type: CAL_SCORE_OF_TEST_JUST_FOR_SHOW_RESULT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: CAL_SCORE_OF_TEST_JUST_FOR_SHOW_RESULT_FAIL,
        payload: err,
      });
    }
  };
  const SendVerificationForForgetPassword = async (frmData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/SendVerificationForForgetPassword",
        frmData,
        config
      );
      dispatch({
        type: CREATE_FORGET_PASSWORLD_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: CREATE_FORGET_PASSWORD_FAIL,
        payload: err,
      });
    }
  };
  const UpdatePasswordForCreatedUser = async (frmData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/UpdatePasswordForCreatedUser",
        frmData,
        config
      );
      dispatch({
        type: CREATE_MOBILE_PASSWORLD_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: CREATE_MOBILE_PASSWORD_FAIL,
        payload: err,
      });
    }
  };
  const UpdateCompanyInfo = async (frmData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/UpdateItemInUserType",
        frmData,
        config
      );
      console.log("javab", res.data);
      dispatch({
        type: CREATE_UPDATE_COMPANY_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: CREATE_UPDATE_COMPANY_FAIL,
        payload: err,
      });
    }
  };
  const CreateUserCompany = async (frmData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CreateItemInUser",
        frmData,
        config
      );
      console.log("javab", res.data);
      dispatch({
        type: CREATE_USER_COMPANY_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: CREATE_USER_COMPANY_FAIL,
        payload: err,
      });
    }
  };
  const CheckCompanyPackage = async (frmData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CreateItemInUserTest",
        frmData,
        config
      );
      dispatch({
        type: CHECK_COMPANY_PACKAGE_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: CHECK_COMPANY_PACKAGE_FAIL,
        payload: err,
      });
    }
  };
  const ChangePassword = async (frmData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/ChangePasswordByOwnerUser",
        frmData,
        config
      );
      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: CHANGE_PASSWORD_FAIL,
        payload: err,
      });
    }
  };
  const CreateNewCompany = async (frmData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CreateItemInUserType",
        frmData,
        config
      );
      dispatch({
        type: CREATE_NEW_COMPANY_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: CREATE_NEW_COMPANY_FAIL,
        payload: err,
      });
    }
  };
  const DeleteUserById = async (itemId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        id: itemId,
      },
    };

    try {
      // var fm = new FormData();
      // fm.append("Id", formData);

      const res = await axios.get(SERVER_URL + "/DeleteItemInUser ", config);

      dispatch({
        type: DELETE_USER_BY_ID_SUCCESS,

        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: DELETE_USER_BY_ID_FAIL,
        payload: err.response,
      });
    }
  };

  const CreateItemForMobileNumber = async (frmData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CreateItemForMobileNumber",
        frmData,
        config
      );
      dispatch({
        type: CREATE_MOBILE_DATA_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: CREATE_MOBILE_DATA_FAIL,
        payload: err,
      });
    }
  };
  const UpdateItemInUser = async (frmData) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/UpdateItemInUser",
        frmData,
        config
      );
      dispatch({
        type: UPDATE_ITEM_IN_USER_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: UPDATE_ITEM_IN_USER_FAIL,
        payload: err,
      });
    }
  };

  const UploadUserPicFile = async (formData) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/uploadUserPicFile",
        formData,
        config
      );
      dispatch({
        type: UPLOAD_USER_PIC_FILE_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      await dispatch({
        type: UPLOAD_USER_PIC_FILE_FAIL,
        payload: err.response.data,
      });
    }
  };
  const DownloadUserPicByuserId = async (Id) => {
    setAuthToken(localStorage.token);
    const config = {
      //responseType: "blob",
      responseType: "arraybuffer",
      // headers: {
      //   Accept: "application/iamge",
      // },
    };
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    try {
      const res = await axios.get(
        SERVER_URL + "/DownloadUserPicByuserId/" + Id,
        config
      );

      dispatch({
        type: DOWNLOAD_USER_PIC_BY_USER_ID_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      await dispatch({
        type: DOWNLOAD_USER_PIC_BY_USER_ID_FAIL,
        payload: err.data,
      });
    }
  };
  const UpdateIsAdminProp = async (frmData) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/UpdateIsAdminProp",
        frmData,
        config
      );
      dispatch({
        type: UPDATE_IS_ADMIN_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      let error = err;
      dispatch({
        type: UPDATE_IS_ADMIN_FAIL,
        payload: err,
      });
    }
  };

  return (
    <TestContext.Provider
      value={{
        err: state.err,
        answersData: state.answersData,
        questionsData: state.questionsData,
        calscoreoftestData: state.calscoreoftestData,
        calscoreoftest5Data: state.calscoreoftest5Data,
        userInfoData: state.userInfoData,
        updatedUserData: state.updatedUserData,
        uploaduserpicfileData: state.uploaduserpicfileData,
        downloaduserpicData: state.downloaduserpicData,
        testForSpecificUserData: state.testForSpecificUserData,
        calscoreoftest117Data: state.calscoreoftest117Data,
        downloadTestFileData: state.downloadTestFileData,
        userIdForShowingResult: state.userIdForShowingResult,
        calscoreoftest5JustForShowResultData:
          state.calscoreoftest5JustForShowResultData,
        testIdForShowingResult: state.testIdForShowingResult,
        calscoreoftest117JustForShowResultData:
          state.calscoreoftest117JustForShowResultData,
        calscoreoftestJustForShowResultData:
          state.calscoreoftestJustForShowResultData,
        userTestData: state.userTestData,
        packageData: state.packageData,
        downloadTestFileByTypeDescData: state.downloadTestFileByTypeDescData,
        testDateForShowingResult: state.testDateForShowingResult,
        itemMobileData: state.itemMobileData,
        updatePassworld: state.updatePassworld,
        forgetPasswordData: state.forgetPasswordData,
        allCompanyData: state.allCompanyData,
        updatedIsAdminData: state.updatedIsAdminData,
        newCompanyPost: state.newCompanyPost,
        addUserCompany: state.addUserCompany,
        deleteUserData: state.deleteUserData,
        updateCompanyData: state.updateCompanyData,
        companyExamNames: state.companyExamNames,
        otherTestNames: state.otherTestNames,
        checkTestPackage: state.checkTestPackage,
        selectPackageCheck: state.selectPackageCheck,
        selectTestsCheck: state.selectTestsCheck,
        calscoreoftest116Data: state.calscoreoftest116Data,
        calscoreoftest116JustForShowResultData:
          state.calscoreoftest116JustForShowResultData,
        changePasswordCheck: state.changePasswordCheck,


        CreateItemForMobileNumber,
        GetAllAnswers,
        GetAllQuestions,
        CalScoreOfTest,
        CalScoreOfTest5,
        GetUserInfo,
        UpdateItemInUser,
        UploadUserPicFile,
        DownloadUserPicByuserId,
        GetTestForSpecificUser,
        CalScoreOfTest117,
        DownloadTestFileById,
        SetUserIdForShowingResult,
        CalScoreOfTest5JustShowResult,
        SetCalScoreForTest5,
        SetTestIdForShowingResult,
        CalScoreOfTest117JustShowResult,
        CalScoreOfTestJustShowResult,
        GetUserTestByUserId,
        SetPackageData,
        DownloadVoiceFile,
        SetTestDateForShowingResult,
        UpdatePasswordForCreatedUser,
        SendVerificationForForgetPassword,
        GetAllCompany,
        UpdateIsAdminProp,
        CreateNewCompany,
        CreateUserCompany,
        DeleteUserById,
        UpdateCompanyInfo,
        GetCompanyTest,
        GetOthersTestName,
        CheckCompanyPackage,
        GetCeckSelectPackage,
        CalScoreOfTest116,
        CalScoreOfTest116JustShowResult,
        GetCeckSelectTests,
        ChangePassword,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestState;
