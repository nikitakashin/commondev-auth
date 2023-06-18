const axios = require("axios").default;

const apiHost = "http://commondev.ru";

const url = (method) => {
  return `${apiHost}/api/user/${method}`;
};

const call = async (method, payload) => {
  try {
    const requestUrl = url(method);
    const response = await axios.post(requestUrl, payload);

    return response.data;
  } catch (err) {
    let errorText;
    if (err.code === "ECONNREFUSED") {
      errorText = "Commondev Auth server is not available";
    } else {
      errorText = `${err.response.status} - ${err.response.statusText}`;
    }

    return {
      data: null,
      error: errorText,
    };
  }
};

const methodsMap = {
  getUserByToken: "getUserByToken",
  resendCode: "resendCode",
  register: "register",
  complete: "complete",
  login: "resendCode",
};

let methods = {};

Object.keys(methodsMap).forEach((methodName) => {
  methods[methodName] = (payload) => {
    return call(methodsMap[methodName], payload);
  };
});

module.exports.CommondevAuth = methods;
