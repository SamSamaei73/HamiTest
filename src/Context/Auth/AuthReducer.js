import {
  REGISTER_SUCCESS,
  FIRST_STEP_REGISTER_FAIL,
  FIRST_STEP_REGISTER_SUCCESS,
  REGISTER_FAIL,
  FIRST_STEP,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  GET_ALL_USER_FOR_SPECIFIC_GROUP_SUCCESS,
  GET_ALL_USER_FOR_SPECIFIC_GROUP_FAIL,
  GET_USER_INFO_BY_ID_FAIL,
  GET_USER_INFO_BY_ID_SUCCESS,
  SET_ERROR,
  ISCOMPLETED_PROPS_SUCCESS,
  ISCOMPLETED_PROPS_FAIL,
  GET_ALL_USER_COMPANY_USER_SUCCESS,
  GET_ALL_USER_COMPANY_USER_FAIL,
  GET_ADMIN_INFORMATION_SUCCESS,
  GET_ADMIN_INFORMATION_FAIL,
} from "../types";

export default (state, action) => {
  switch (action.type) {

    case  GET_ADMIN_INFORMATION_SUCCESS:
      return {
        ...state,
        allInformationOfAdmin: action.payload,
      };
    case  GET_ADMIN_INFORMATION_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case  GET_ALL_USER_COMPANY_USER_SUCCESS:
      return {
        ...state,
        allCompanyUserData: action.payload,
      };
    case  GET_ALL_USER_COMPANY_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case  ISCOMPLETED_PROPS_SUCCESS:
      return {
        ...state,
        isCompletedPropsData: action.payload,
      };
    case  ISCOMPLETED_PROPS_FAIL:
      return {
        ...state,
        error: action.payload,
      };


    case  SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_USER_INFO_BY_ID_SUCCESS:
      return {
        ...state,
        userInfoByIdData: action.payload,
      };
    case GET_USER_INFO_BY_ID_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case GET_ALL_USER_FOR_SPECIFIC_GROUP_SUCCESS:
      return {
        ...state,
        allUserForSpecificGroupData: action.payload,
      };
    case GET_ALL_USER_FOR_SPECIFIC_GROUP_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case FIRST_STEP_REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case FIRST_STEP:
      return {
        ...state,
        firstStepId: action.payload,
      };
    case FIRST_STEP_REGISTER_SUCCESS:
      return {
        ...state,
        verifyNum: action.payload.user.VerifyNum,
        firstStepId: action.payload.user.id,
        isAuthenticated: false,
        loading: false,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAIL:
        localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          isAuthenticated: null,
          loading: false,
          user: null,
          error: true ,
        };
    case REGISTER_FAIL:
    case AUTH_ERROR:    
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        loading: false,
        user: null,
        error: action.payload,
        isCompletedPropsData:null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
