import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./AuthReducer";
import setAuthToken from "../../components/tools/setAuthToken";
import axios from "axios";
import { SERVER_URL } from "../constant";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  FIRST_STEP_REGISTER_FAIL,
  FIRST_STEP_REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FIRST_STEP,
  LOGOUT,
  CLEAR_ERRORS,
  GET_ALL_USER_FOR_SPECIFIC_GROUP_SUCCESS,
  GET_ALL_USER_FOR_SPECIFIC_GROUP_FAIL,
  GET_USER_INFO_BY_ID_SUCCESS,
  GET_USER_INFO_BY_ID_FAIL,
  SET_ERROR,
  ISCOMPLETED_PROPS_SUCCESS,
  ISCOMPLETED_PROPS_FAIL,
  GET_ALL_USER_COMPANY_USER_SUCCESS,
  GET_ALL_USER_COMPANY_USER_FAIL,
  GET_ADMIN_INFORMATION_SUCCESS,
  GET_ADMIN_INFORMATION_FAIL,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    verifyNum: null,
    firstStepId: null,
    loading: false,
    user: null,
    error: null,
    errorDATA: null,
    allUserForSpecificGroupData: null,
    userInfoByIdData: null,
    isCompletedPropsData: null,
    allCompanyUserData: null,
    allInformationOfAdmin: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get(SERVER_URL + "/auth");
      console.log("auth data res", res.data);
      IsCompletedProps();
      await dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };
  const loadUser2 = async (user) => {
    try {
      await dispatch({
        type: USER_LOADED,
        payload: user,
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };
  // FIRST_STEP
  const setError = (errordata) => {
    dispatch({
      type: SET_ERROR,
      payload: errordata,
    });
  };
  // FIRST_STEP
  const firstStep = (id) => {
    dispatch({
      type: FIRST_STEP,
      payload: id,
    });
  };

  // Register User
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CreatTokenByIdAndVerifyNum",
        formData,
        config
      );
      ////console.log('register data:', res.data);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msgText,
      });
    }
  };
  // first Step Register
  const firstStepOfRegister = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/createItemInUser",
        formData,
        config
      );
      //.then(async (data)=>{

      //console.log("firstStep", res.data);
      firstStep(res.data.user.id);

      dispatch({
        type: FIRST_STEP_REGISTER_SUCCESS,
        payload: res.data,
      });
      const { nationalID, passWord } = formData;
      login({ nationalID: nationalID, password: passWord });
      //console.log("formData:", formData);
      // })
    } catch (err) {
      ////console.log('firstStep err:', err.response.data.msgText);
      let error = err;
      await dispatch({
        type: FIRST_STEP_REGISTER_FAIL,
        payload: err.response.data,
      });
    }
  };

  // Login User
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(SERVER_URL + "/login", formData, config);
      ////console.log('login:', res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      if (res.data.msgText) {
        console.log("loginfail1:", res.data);
        dispatch({
          type: LOGIN_FAIL,
          payload: res.data.msgText,
        });
      } else {
        console.log("loginsuccess:", res.data);
        loadUser();
      }
    } catch (err) {
      console.log("loginerror:", err);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msgText,
      });
    }
  };
  // Login User
  const GetAllCompanyUser = async (groupId) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetAllUsersForThisGroup/" + groupId,
        config
      );
      //console.log("allusers:", res.data);
      dispatch({
        type: GET_ALL_USER_COMPANY_USER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      //console.log("loginerror:", err);
      dispatch({
        type: GET_ALL_USER_COMPANY_USER_FAIL,
        payload: err.response.data.msgText,
      });
    }
  };
  const GetAdminInformation = async (groupId) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/AdminUserForThisGroupId/" + groupId,
        config
      );
      //console.log("allusers:", res.data);
      dispatch({
        type: GET_ADMIN_INFORMATION_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      //console.log("loginerror:", err);
      dispatch({
        type: GET_ADMIN_INFORMATION_FAIL,
        payload: err.response.data.msgText,
      });
    }
  };
  const GetAllUserForSpecificGroup = async (groupId) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetAllUsersForThisGroup/" + groupId,
        config
      );
      //console.log("allusers:", res.data);
      dispatch({
        type: GET_ALL_USER_FOR_SPECIFIC_GROUP_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      //console.log("loginerror:", err);
      dispatch({
        type: GET_ALL_USER_FOR_SPECIFIC_GROUP_FAIL,
        payload: err.response.data.msgText,
      });
    }
  };
  const GetUserInfoById = async (userId) => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetUserInfoById/" ,
        config
      );
      //console.log("allusers:", res.data);
      dispatch({
        type: GET_USER_INFO_BY_ID_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_USER_INFO_BY_ID_FAIL,
        payload: err.response.data.msgText,
      });
    }
  };
  const IsCompletedProps = async () => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/IsCompletedProps/"  ,
        config
      );
      //console.log("allusers:", res.data);
      dispatch({
        type: ISCOMPLETED_PROPS_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ISCOMPLETED_PROPS_FAIL,
        payload: err.response.data.msgText,
      });
    }
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        firstStepId: state.firstStepId,
        verifyNum: state.verifyNum,
        allUserForSpecificGroupData: state.allUserForSpecificGroupData,
        userInfoByIdData: state.userInfoByIdData,
        errorDATA: state.errorDATA,
        isCompletedPropsData:state.isCompletedPropsData,
        allCompanyUserData:state.allCompanyUserData,
        allInformationOfAdmin:state.allInformationOfAdmin,


        register,
        loadUser,
        loadUser2,
        firstStepOfRegister,
        login,
        logout,
        clearErrors,
        firstStep,
        GetAllUserForSpecificGroup,
        GetUserInfoById,
        setError,
        IsCompletedProps,
        GetAllCompanyUser,
        GetAdminInformation,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
