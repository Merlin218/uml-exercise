import { Message } from '@arco-design/web-vue';
import axios from 'axios';

// 请求配置
export function request(axiosConfig, custom) {
  const service = axios.create({
    // baseURL: configs.baseUrl, // 设置统一的请求前缀
    baseURL: custom.baseURL, // 设置统一的请求前缀
    timeout: 10000, // 设置统一的超时时长
  });

  service.interceptors.response.use(
    (res) => res.data,
    async (err) => {
      Message.error({
        content: err.response.data,
        duration: 1000,
      });
      return Promise.reject(err.response.data);
    },
  );

  return service(axiosConfig);
}

// 封装创建请求
export function createRequest(requestConfig) {
  return new Promise((resolve, reject) => {
    request(requestConfig, { baseURL: '/uml-exercise/api' })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// 封装创建请求
export function createRequest1(requestConfig) {
  return new Promise((resolve, reject) => {
    request(requestConfig, { baseURL: '/dev' })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
