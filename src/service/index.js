import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
    baseURL: 'http://localhost:8080', // API 的 base URL
    timeout: 5000 // 请求超时时间
  });

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    // 响应错误处理
    console.error(error);
    return Promise.reject(error);
  }
);

export default service;