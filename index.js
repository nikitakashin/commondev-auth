const axios = require('axios').default;

// const apiHost = 'https://commondev.ru/v1.0/';
const apiHost = 'http://localhost:4000/v1.0/';

class ResultObject {
  constructor(err, data) {
    this.err = err;
    this.data = data;
  }

  get() {
    return {
      status: !!Object.entries(this.err).length,
      err: this.err,
      data: this.data
    };
  }
}

export const v1 = {
  getUserByToken: async (TOKEN) => {
    try {
      const response = await axios.get(apiHost + 'profile/', {
        headers: {
          Authorization: 'Bearer ' + TOKEN
        }
      });
      return new ResultObject({}, response).get();
    } catch (err) {
      return new ResultObject(err, {}).get();
    }
  },

  login: async (phone) => {
    try {
      const response = await axios.post(apiHost + 'users/login', {
        phone: phone
      });
      return new ResultObject({}, response.data.data).get();
    } catch (err) {
      return new ResultObject(err, {}).get();
    }
  },

  register: async (regData) => {
    try {
      const response = await axios.post(apiHost + 'users/register', {
        phone: regData.phone,
        firstname: regData.firstname,
        lastname: regData.lastname
      });
      if (response.data.status === 'fail') {
        return new ResultObject(response.data.data[0], {}).get();
      } else {
        return new ResultObject({}, response.data.data).get();
      }
    } catch (err) {
      return new ResultObject(err, {}).get();
    }
  },

  complete: async (completeData) => {
    try {
      const phone = completeData.phone;
      const code = completeData.code;
      const response = await axios.post(apiHost + "users/complete'", {
        code: code,
        phone: phone
      });
      if (response.status === 'success') {
        return new ResultObject({}, response?.data?.token).get();
      } else {
        return new ResultObject(response, {}).get();
      }
    } catch (err) {
      return new ResultObject(err, {}).get();
    }
  }
};
