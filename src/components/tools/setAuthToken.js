import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["X-Access-Token"] = token;
  } else {
    delete axios.defaults.headers.common["X-Access-Token"];
  }
};

export default setAuthToken;
