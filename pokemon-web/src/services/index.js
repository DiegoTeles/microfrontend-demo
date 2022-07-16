import axios from 'axios';

class Service {
  service;
  constructor(baseURL) {
    const service = axios.create({
      ...(baseURL && { baseURL }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: '580a9105-d5cd-4fa9-8a76-fb7931cfa40c',
      },
    });
    this.service = service;
  }

  head(path, conf = {}) {
    return this.service
      .head(path, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  get(path, conf = {}) {
    return this.service
      .get(path, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => {
        Promise.reject(error);
      });
  }

  post(path, data = {}, conf = {}) {
    return this.service
      .post(path, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  put(path, data = {}, conf = {}) {
    return this.service
      .put(path, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  patch(path, data = {}, conf = {}) {
    return this.service
      .patch(path, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  delete(path, conf = {}) {
    return this.service
      .delete(path, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }
}

export default Service;
