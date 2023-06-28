import axios from 'axios';
import router from '../router';

const request = axios.create({
  baseURL: '/api/v2',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'poc-web' },
});

// Add a request interceptor
request.interceptors.request.use((config) => {
  // Do something before request is sent
  console.log('request', config);

  // Add token
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    // Redirect to login
    router.navigate('/login');
  }

  return config;
});

// Add a response interceptor
request.interceptors.response.use(
  (response) => {
    // Do something with response data
    console.log('response', response);

    const { data } = response;

    switch (data.code) {
      case 401:
        // Redirect to login
        router.navigate('/login');
        break;
      case 200:
        return data;
      default:
        return Promise.reject(data);
    }

    return response;
  },
  (error) => {
    // Do something with response error
    console.log('error', error);
    return Promise.reject(error);
  }
);

export default request;
