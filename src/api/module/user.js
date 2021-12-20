import { createRequest } from '../axios';

export const login = (username, password) => createRequest({
  url: '/login',
  method: 'post',
  data: {
    username,
    password,
  },
});

export const register = (username, password, repassword, authority) => createRequest({
  url: '/register',
  method: 'post',
  data: {
    username,
    password,
    repassword,
    authority,
  },
});

export const getAdminList = (authority) => createRequest({
  url: '/admin',
  method: 'get',
  params: {
    authority,
  },
});

export const deleteAdmin = (id) => createRequest({
  url: '/admin',
  method: 'delete',
  params: {
    id,
  },
});
