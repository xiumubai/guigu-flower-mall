// pages/login/index.js
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

        wx.request({
          url: `https://gmall-prod.atguigu.cn/mall-api/weixin/wxLogin/${res.code}`,
          method: 'GET',
          success(res) {
            console.log(res);
          },
        });
      },
    });
  },
});
