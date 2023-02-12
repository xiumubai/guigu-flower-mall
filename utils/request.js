/*
 * @Author: 朽木白
 * @Date: 2023-02-10 23:11:51
 * @LastEditors: 1547702880@@qq.com
 * @LastEditTime: 2023-02-12 17:31:39
 * @Description: wx.request
 * @docs: https://blog.csdn.net/qq_23073811/article/details/127387089
 */

// 公共的请求地址
const apiUrl = 'https://gmall-prod.atguigu.cn';

/**
 * @description: 封装微信请求方法
 * @param {*} params
 * @returns {*}
 */
export const request = (params) => {
  let url = params.url;
  let data = params.data;
  let method = params.method;
  let header = {
    'Content-Type': 'application/json',
  };

  // 鉴权验证，获取登录之后后端返回的token，存在即在头部Authorization写token
  if (wx.getStorageSync('token')) {
    header.token = wx.getStorageSync('token');
    // header.token = wx.getStorageSync('token');
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: apiUrl + url,
      method: method,
      data: data, // 请求参数
      header: header, // 头部
      success(res) {
        // 请求成功
        // 判断状态码---errCode状态根据后端定义来判断
        if (res.statusCode < 399) {
          if (res.data.code === 208) {
            wx.showModal({
              title: '提示',
              content: '请登录',
              showCancel: false,
              success(res) {
                wx.navigateTo({
                  url: '/pages/login/index',
                });
              },
            });
            reject(res.data);
          }
          resolve(res.data);
        } else {
          // 其他异常
          switch (res.statusCode) {
            case 404:
              wx.showToast({
                title: '未知异常',
                duration: 2000,
              });
              break;
            default:
              wx.showToast({
                title: '请重试...',
                duration: 2000,
              });
              break;
          }
          reject('未知错误,请稍后再试');
        }
      },
      fail(err) {
        if (err.errMsg.indexOf('request:fail') !== -1) {
          wx.showToast({
            title: '网络异常',
            icon: 'error',
            duration: 2000,
          });
        } else {
          wx.showToast({
            title: '未知异常',
            duration: 2000,
          });
        }
        reject(err);
      },
      complete() {
        wx.hideLoading();
      },
    });
  });
};
