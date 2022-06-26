const axios = require("axios").default;

const apiHost = "https://commondev.ru";
// const apiHost = "http://localhost:4000";

const url = (method, version = "2.0") => {
  return `${apiHost}/api/v${version}/${method}/`;
};

class ResultObject {
  constructor(err, data) {
    this.err = err;
    this.data = data;
  }

  get() {
    return {
      status: !Object.entries(this.err).length,
      err: this.err.hasOwnProperty("name")
        ? this.err.name === "AxiosError"
          ? this.err.message === "Request failed with status code 500"
            ? this.err.response.data.data
            : { type: this.err.message }
          : this.err
        : this.err,
      data: this.data.hasOwnProperty("data") ? this.data.data : this.data,
    };
  }
}

const call = async (method, version, payload) => {
  try {
    const requestUrl = url(method, version);
    const response = await axios.post(requestUrl, payload);
    return new ResultObject({}, response.data).get();
  } catch (err) {
    return new ResultObject(err, {}).get();
  }
};

const methodsMap = new Map([
  ["getUserByToken", "User.getUserByToken"],
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
