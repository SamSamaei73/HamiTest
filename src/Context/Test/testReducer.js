import {
  GET_ALL_ANSWERS_FAIL,
  GET_ALL_ANSWERS_SUCCESS,
  GET_ALL_QUESTIONS_SUCCESS,
  GET_ALL_QUESTIONS_FAIL,
  CAL_SCORE_OF_TEST_SUCCESS,
  CAL_SCORE_OF_TEST_FAIL,
  CAL_SCORE_OF_TEST5_FAIL,
  CAL_SCORE_OF_TEST5_SUCCESS,
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
  DOWNLOAD_TEST_FILE_BY_ID_SUCCESS,
  DOWNLOAD_TEST_FILE_BY_ID_FAIL,
  SET_USER_ID_FOR_SHOWING_RESULT,
  CAL_SCORE_OF_TEST5_JUST_FOR_SHOW_RESULT_SUCCESS,
  CAL_SCORE_OF_TEST5_JUST_FOR_SHOW_RESULT_FAIL,
  SET_CAL_SCORE_FOR_TEST_5,
  SET_TEST_ID_FOR_SHOWING_RESULT,
  CAL_SCORE_OF_TEST117_JUST_FOR_SHOW_RESULT_FAIL,
  CAL_SCORE_OF_TEST117_JUST_FOR_SHOW_RESULT_SUCCESS,
  CAL_SCORE_OF_TEST_JUST_FOR_SHOW_RESULT_FAIL,
  CAL_SCORE_OF_TEST_JUST_FOR_SHOW_RESULT_SUCCESS,
} from "../types";
export default (state, action) => {
  switch (action.type) {
    case CAL_SCORE_OF_TEST_JUST_FOR_SHOW_RESULT_SUCCESS:
      return {
        ...state,
        calscoreoftestJustForShowResultData: action.payload,
      };
    case CAL_SCORE_OF_TEST_JUST_FOR_SHOW_RESULT_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case CAL_SCORE_OF_TEST117_JUST_FOR_SHOW_RESULT_SUCCESS:
      return {
        ...state,
        calscoreoftest117JustForShowResultData: action.payload,
      };
    case CAL_SCORE_OF_TEST117_JUST_FOR_SHOW_RESULT_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case SET_TEST_ID_FOR_SHOWING_RESULT:
      return {
        ...state,
        testIdForShowingResult: action.payload,
      };
    case SET_CAL_SCORE_FOR_TEST_5:
      return {
        ...state,
        calscoreoftest5Data: action.payload,
      };
    case CAL_SCORE_OF_TEST5_JUST_FOR_SHOW_RESULT_SUCCESS:
      return {
        ...state,
        calscoreoftest5JustForShowResultData: action.payload,
      };
    case CAL_SCORE_OF_TEST5_JUST_FOR_SHOW_RESULT_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case SET_USER_ID_FOR_SHOWING_RESULT:
      return {
        ...state,
        userIdForShowingResult: action.payload,
      };
    case DOWNLOAD_TEST_FILE_BY_ID_SUCCESS:
      return {
        ...state,
        downloadTestFileData: action.payload,
      };
    case DOWNLOAD_TEST_FILE_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CAL_SCORE_OF_TEST117_SUCCESS:
      return {
        ...state,
        calscoreoftest117Data: action.payload,
      };
    case CAL_SCORE_OF_TEST117_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_TEST_FOR_SPECIFIC_USER_SUCCESS:
      return {
        ...state,
        testForSpecificUserData: action.payload,
      };
    case GET_TEST_FOR_SPECIFIC_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case DOWNLOAD_USER_PIC_BY_USER_ID_SUCCESS:
      return {
        ...state,
        downloaduserpicData: action.payload,
      };
    case DOWNLOAD_USER_PIC_BY_USER_ID_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case UPLOAD_USER_PIC_FILE_SUCCESS:
      return {
        ...state,
        uploaduserpicfileData: action.payload,
      };
    case UPLOAD_USER_PIC_FILE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_ITEM_IN_USER_SUCCESS:
      return {
        ...state,
        updatedUserData: action.payload,
      };
    case UPDATE_ITEM_IN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfoData: action.payload,
      };
    case GET_USER_INFO_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CAL_SCORE_OF_TEST5_SUCCESS:
      return {
        ...state,
        calscoreoftest5Data: action.payload,
      };
    case CAL_SCORE_OF_TEST5_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case CAL_SCORE_OF_TEST_SUCCESS:
      return {
        ...state,
        calscoreoftestData: action.payload,
      };
    case CAL_SCORE_OF_TEST_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case GET_ALL_QUESTIONS_SUCCESS:
      return {
        ...state,
        questionsData: action.payload,
      };
    case GET_ALL_QUESTIONS_SUCCESS:
      return {
        ...state,
        err: action.payload,
      };
    case GET_ALL_ANSWERS_SUCCESS:
      return {
        ...state,
        answersData: action.payload,
      };
    case GET_ALL_ANSWERS_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    default:
      return state;
  }
};
