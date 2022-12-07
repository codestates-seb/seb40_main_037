import axios from 'axios';

const Api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

Api.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem('access_token');

  if (!accessToken) {
    config.headers['accessToken'] = null;
    return config;
  }
  if (config.headers && accessToken) {
    config.headers['Authorization'] = accessToken.replace(/\"/gi, '');
    return config;
  }
});

export const userLogin = async formData => {
  const result = await Api.post('/auth/login', formData);
  return result;
};

export const userJoin = async formData => {
  const result = await Api.post('/auth/signup', formData);
  return result;
};

export const userLogout = async () => {
  const result = await Api.delete('/auth/logout');
  return result;
};

export default Api;
