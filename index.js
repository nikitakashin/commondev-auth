const axios = require("axios").default;

const apiHost = "https://commondev.ru/";
// const apiHost = "http://localhost:4000/";

// headers: {
//   Authorization: "Bearer " + payload.token,
// },

class ResultObject {
  constructor(err, data) {
    this.err = err;
    this.data = data;
  }

  get() {
    return {
      status: !!Object.entries(this.err).length,
      err: this.err,
      data: this.data,
    };
  }
}

module.exports.v2 = {
  apiVersion: "v2.0",

  getUserByToken: async (payload) => {
    const requestUrl = `${apiHost}/api/${this.apiVersion}/User.read/`;

    try {
      const response = await axios.post(requestUrl, {
        token: payload.token,
      });

      return new ResultObject({}, response).get();
    } catch (err) {
      return new ResultObject(err, {}).get();
    }
  },

  login: async (payload) => {
    const requestUrl = `${apiHost}/api/${this.apiVersion}/User.login`;

    try {
      const response = await axios.post(requestUrl, {
        phone: payload.phone,
      });

      return new ResultObject({}, response.data.data).get();
    } catch (err) {
      return new ResultObject(err, {}).get();
    }
  },

  register: async (payload) => {
    const requestUrl = `${apiHost}/api/${this.apiVersion}/User.register`;

    try {
      const response = await axios.post(requestUrl, {
        phone: payload.phone,
        firstname: payload.firstname,
        lastname: payload.lastname,
      });

      if (response.data.status === "fail") {
        return new ResultObject(response.data.data[0], {}).get();
      } else {
        return new ResultObject({}, response.data.data).get();
      }
    } catch (err) {
      return new ResultObject(err, {}).get();
    }
  },

  complete: async (payload) => {
    const requestUrl = `${apiHost}/api/${this.apiVersion}/User.complete`;

    try {
      const response = await axios.post(requestUrl, {
        code: payload.code,
        phone: payload.phone,
      });

      if (response.status === "success") {
        return new ResultObject({}, response?.data?.token).get();
      } else {
        return new ResultObject(response, {}).get();
      }
    } catch (err) {
      return new ResultObject(err, {}).get();
    }
  },
};
