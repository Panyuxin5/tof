/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import router from '@/router'

import { Message } from 'element-ui';
// 环境的切换
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = '/';
} else if (process.env.NODE_ENV == 'debug') {
  axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = '';
}
// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = sessionStorage.getItem('token');
    token && (config.headers['Authorization'] = 'Bearer ' + token + '');
    return config;
  },
  error => {
    return Promise.error(error);
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.data.type||response.data.type==0){
        return Promise.resolve(response);
      }else{
        switch (+response.data.code) {
          //正常情况
          case 200:
            break;
          case 0:
            break;
          //特殊错误
          case 401:
            Message.warning(response.data.msg);
            break;
          // 其他错误
          default:
            Message.warning(response.data.message || response.data.msg);
        }
        return Promise.resolve(response);
      }
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // case 401:
        //   router.replace({
        //     path: '/login',
        //     query: { redirect: router.currentRoute.fullPath }
        //   });
        //   break;
        // 401 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 401:
          Message.error('登录过期，请重新登录');
          // 清除token
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('refreshToken');
          sessionStorage.removeItem('routerKey');
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
            });
          }, 1000);
          break;
        // 404请求不存在
        case 404:
          Message({
            message: '网络请求不存在',
            type: 'warning'
          });
          break;
        case 500:
          Message({
            message: '系统繁忙，请稍后再试',
            type: 'warning'
          });
          break;
        case 503:
          Message({
            message: '服务不可用，请稍后再试',
            type: 'warning'
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          Message(error.response.data.message||error.response.data.msg);
      }
      return Promise.reject(error.response);
    }
  }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: "get",
      params: params,
      paramsSerializer: function (params) {
          return QS.stringify(params, { arrayFormat: "indices" });
      },
  }).then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params,header={}) {
  return new Promise((resolve, reject) => {
    //header 默认Content-Type 是application/x-www-form-urlencoded
    axios.post(url, QS.stringify(params),{
      headers: header
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

/**
 * post方法(Json格式)，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function postJson(url, params,header={}) {
  return new Promise((resolve, reject) => {
    //header 默认Content-Type 是application/x-www-form-urlencoded
    axios.post(url, params,{
      headers: {"Content-Type":"application/json"}
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

/**
 * post方法(Img(binary)格式)，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function postImg(url, params,header={}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params,{
      headers: {'Content-Type': 'multipart/form-data'}
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}


/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function put(url, params,header={}) {
  return new Promise((resolve, reject) => {
    console.log(params)
    //header 默认Content-Type 是application/x-www-form-urlencoded
    axios.put(url,QS.stringify(params),{
      headers: header
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

/**
 * put方法(Json格式)，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function putJson(url, params,header={}) {
  return new Promise((resolve, reject) => {
    //header 默认Content-Type 是application/x-www-form-urlencoded
    axios.put(url, params,{
      headers: {"Content-Type":"application/json"}
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

/**
 * delete方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function Delete(url,params,header={}) {
  return new Promise((resolve, reject) => {
    //header 默认Content-Type 是application/x-www-form-urlencoded
    axios.delete(url,{
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

/**
 * patch方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function Patch(url,params,header={}) {
  return new Promise((resolve, reject) => {
    //header 默认Content-Type 是application/x-www-form-urlencoded
    axios.patch(url,{
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
