const axios = require("axios");

class HTTPSingleton {
  static config = {
    // baseURL: "http://192.168.1.56:8080/",
    // baseURL: "http://192.168.1.149:8080/",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    timeout: 1000000,
  };

  static instance;
  HTTP;

  constructor() {
    this.HTTP = axios.create(HTTPSingleton.config);
  }

  static getInstance() {
    if (!HTTPSingleton.instance) {
      HTTPSingleton.instance = new HTTPSingleton();
    }
    return HTTPSingleton.instance;
  }

  getHTTP() {
    return this.HTTP;
  }
}

const HTTP = HTTPSingleton.getInstance().getHTTP();

module.exports = {
  HTTP,
};
