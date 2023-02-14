// pages/login/index.js
import { login, getUserInfo } from '../../utils/api';
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad() {},
  getUserProfile(e) {
    const that = this;
    wx.login({
      success: (res) => {
        const { code } = res;
        login(code).then((res) => {
          wx.setStorageSync('token', res.data.token);
          that.getUseMessage();
        });
      },
    });
  },
  getUseMessage() {
    getUserInfo().then((res) => {
      wx.showToast({
        title: '登陆成功',
        success() {
          wx.setStorageSync('info', res.data);
          wx.navigateBack();
        },
      });
    });
  },
});
