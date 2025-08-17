// src/apis/auth.js

import axiosInstance from './axiosInstance';

// 로그인 API
export const loginUser = async ({ id, password }) => {
  const res = await axiosInstance.post('/api/users/login', {
    id,
    password,
  });
  return res.data;
};

// 회원가입 API
export const signupUser = async ({ nickname, username, password, email, birthYear, gender }) => {
  const res = await axiosInstance.post('/api/users/signup', {
    nickname,
    username,
    password,
    email,
    birthYear,
    gender,
  });
  return res.data;
};
