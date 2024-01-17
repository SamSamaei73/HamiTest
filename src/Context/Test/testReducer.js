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
  CAL_SCORE_OF_TEST116_FAIL,
  CAL_SCORE_OF_TEST116_SUCCESS,
  CAL_SCORE_OF_TEST116_JUST_FOR_SHOW_RESULT_FAIL,
  CAL_SCORE_OF_TEST116_JUST_FOR_SHOW_RESULT_SUCCESS,
  GET_CHECK_TEST_SELECT_SUCCESS,
  GET_CHECK_TEST_SELECT_FAIL,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
} from "../types";
export default (state, action) => {
  switch (action.type) {

    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePasswordCheck: action.payload,
      };
    case CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case GET_CHECK_TEST_SELECT_SUCCESS:
      return {
        ...state,
        selectTestsCheck: action.payload,
      };
    case GET_CHECK_TEST_SELECT_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case CAL_SCORE_OF_TEST116_JUST_FOR_SHOW_RESULT_SUCCESS:
      return {
        ...state,
        calscoreoftest116JustForShowResultData: action.payload,
      };
    case CAL_SCORE_OF_TEST116_JUST_FOR_SHOW_RESULT_FAIL:
      return {
        ...state,
        err: action.payload,
      };


    case CAL_SCORE_OF_TEST116_SUCCESS:
      return {
        ...state,
        calscoreoftest116Data: action.payload,
      };
    case CAL_SCORE_OF_TEST116_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case GET_CHECK_SELECT_SUCCESS:
      return {
        ...state,
        selectPackageCheck: action.payload,
      };
    case GET_CHECK_SELECT_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case CHECK_COMPANY_PACKAGE_SUCCESS:
      return {
        ...state,
        checkTestPackage: action.payload,
      };
    case CHECK_COMPANY_PACKAGE_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case GET_TESTS_NAMES_SUCCESS:
      return {
        ...state,
        otherTestNames: action.payload,
      };
    case GET_TESTS_NAMES_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case GET_COMPANY_EXAM_SUCCESS:
      return {
        ...state,
        companyExamNames: action.payload,
      };
    case GET_COMPANY_EXAM_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case CREATE_UPDATE_COMPANY_SUCCESS:
      return {
        ...state,
        updateCompanyData: action.payload,
      };
    case CREATE_UPDATE_COMPANY_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case DELETE_USER_BY_ID_SUCCESS:
      return {
        ...state,
        deleteUserData: action.payload,
      };
    case DELETE_USER_BY_ID_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case CREATE_USER_COMPANY_SUCCESS:
      return {
        ...state,
        addUserCompany: action.payload,
      };
    case CREATE_USER_COMPANY_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case CREATE_NEW_COMPANY_SUCCESS:
      return {
        ...state,
        newCompanyPost: action.payload,
      };
    case CREATE_NEW_COMPANY_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case UPDATE_IS_ADMIN_SUCCESS:
      return {
        ...state,
        updatedIsAdminData: action.payload,
      };
    case UPDATE_IS_ADMIN_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case SET_TEST_DATE_FOR_SHOWING_RESULT:
      return {
        ...state,
        testDateForShowingResult: action.payload,
      };

    case GET_ALL_COMPANY_SUCCESS:
      return {
        ...state,
        allCompanyData: action.payload,
      };
    case GET_ALL_COMPANY_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case CREATE_FORGET_PASSWORLD_SUCCESS:
      return {
        ...state,
        forgetPasswordData: action.payload,
      };
    case CREATE_FORGET_PASSWORD_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case CREATE_MOBILE_PASSWORLD_SUCCESS:
      return {
        ...state,
        updatePassworld: action.payload,
      };
    case CREATE_MOBILE_PASSWORD_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case CREATE_MOBILE_DATA_SUCCESS:
      return {
        ...state,
        itemMobileData: action.payload,
      };
    case CREATE_MOBILE_DATA_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case DOWNLOAD_TEST_FILE_BY_TYPE_DESC_SUCCESS:
      return {
        ...state,
        downloadTestFileByTypeDescData: action.payload,
      };
    case DOWNLOAD_TEST_FILE_BY_TYPE_DESC_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case SET_PACKAGE_DATA:
      return {
        ...state,
        packageData: action.payload,
      };
    case GET_USER_TESTS_SUCCESS:
      return {
        ...state,
        userTestData: action.payload,
      };
    case GET_USER_TESTS_FAIL:
      return {
        ...state,
        err: action.payload,
      };
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
        downloadTestFileByTypeDescData: null,
        // calscoreoftest5Data:null,
        // calscoreoftestData:null,
        // calscoreoftest117Data:null,
      };
    case GET_ALL_QUESTIONS_FAIL:
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
