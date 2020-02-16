import _ from 'lodash';
import axios from 'axios';
import { getStore } from 'store/configureStore';
import Actions from 'actions';
import RNConfig from 'react-native-config';

const { API_URL } = RNConfig;

export const fullUrlFrom = (endpoint) => {
  const baseUrl = API_URL;
  const fullUrl = baseUrl + endpoint;
  return fullUrl;
};

export const configureInterceptor = () => {
  axios.interceptors.request.use((config) => {
    const defaultConfig = config;

    const store = getStore();
    const state = store.getState();
    const token = Actions.getToken(state);

    if (token) {
      const tokenString = `Bearer ${token}`;
      defaultConfig.headers.Authorization = tokenString;
    }

    return defaultConfig;
  }, error => Promise.reject(error));

  axios.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    if (error.response) {
      return Promise.reject(error.response);
    }
    // eslint-disable-next-line
    return Promise.reject('Please check your internet connection or try again later');
  });
};

const fetchUrl = (method, endpoint, params = {}, options = {}) => {
  if (_.toUpper(method) === 'GET') {
    return axios({
      method,
      params,
      url: fullUrlFrom(endpoint, options),
      headers: { ...(options.headers || {}) },
    });
  }

  return axios({
    method,
    data: params,
    url: fullUrlFrom(endpoint, options),
    headers: { ...(options.headers || {}) },
  });
};

const api = {
  get(endpoint, params) {
    return fetchUrl('get', endpoint, params);
  },
  post(endpoint, params, options) {
    return fetchUrl('post', endpoint, params, options);
  },
  put(endpoint, params, options) {
    return fetchUrl('put', endpoint, params, options);
  },
  patch(endpoint, params) {
    return fetchUrl('patch', endpoint, params);
  },
  delete(endpoint, params) {
    return fetchUrl('delete', endpoint, params);
  },
  getToken(endpoint, params) {
    return fetchUrl('post', endpoint, params);
  },
};

export default api;
