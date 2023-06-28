import { request } from './../utils';

export const login = (data: unknown) => {
  return request.post('/signin', data, {
    baseURL: '/api/v1',
  });
};

export default {
  login,
};
