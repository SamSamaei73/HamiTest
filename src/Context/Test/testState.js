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
} from "../types";

const TestState = (props) => {
  const initialState = {
    err: null,
    answersData: [],
    questionsData: [],
    calscoreoftestData: null,
    calscoreoftest5Data: null,
    calscoreoftest117Data: null,
    userInfoData: [],
    updatedUserData: null,
    uploaduserpicfileData: null,
    downloaduserpicData: null,
    downloadTestFileData: null,
    testForSpecificUserData: [],
    userIdForShowingResult: null,
    calscoreoftest5JustForShowResultData: null,
    calscoreoftest117JustForShowResultData: null,
    calscoreoftestJustForShowResultData: null,
    testIdForShowingResult: null,
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
  const SetUserIdForShowingResult = async (userId) => {
    dispatch({
      type: SET_USER_ID_FOR_SHOWING_RESULT,
      payload: userId,
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
  const CalScoreOfTest5JustShowResult = async (userId) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
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
  const CalScoreOfTest117JustShowResult = async (userId) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
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
  const CalScoreOfTestJustShowResult = async (userId, testId) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        TestId: testId,
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
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestState;
