const axios = require("axios").default;

// const apiHost = "https://commondev.ru";
const apiHost = "http://localhost:4000";

const url = (method, version = "2.0") => {
  return `${apiHost}/api/v${version}/${method}/`;
};

const call = async (method, version, payload) => {
  try {
    const requestUrl = url(method, version);
    const response = await axios.post(requestUrl, payload);
    return response.data;
  } catch (err) {
    return {
      status: "error",
      data: err,
    };
  }
};

const methodsMap = new Map([
  ["getUserByToken", "User.read"],
  ["login", "User.login"],
  ["register", "User.register"],
  ["complete", "User.complete"],
]);

let methods = {};

methodsMap.forEach((value, key) => {
  methods[key] = (payload) => {
    return call(value, "2.0", payload);
  };
});

module.exports.v2 = methods;
