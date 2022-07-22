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
} from "../types";

export default (state, action) => {
  switch (action.type) {
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
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        loading: false,
        user: null,
        error: action.payload,
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
