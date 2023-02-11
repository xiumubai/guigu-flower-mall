// pages/login/index.js
import { login } from '../../utils/api';
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad() {},
  getUserProfile(e) {
    wx.login({
      success: (res) => {
        console.log(res.code);
        const { code } = res;
        login(code).then((res) => {
          console.log(res);
          wx.showToast({
            title: '登陆成功',
          });
          wx.setStorageSync('token', res.data.token);
          wx.switchTab({ url: '/pages/login/index' });
        });
      },
    });
  },
});
