// pages/info/info.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    bottom: app.globalData.tabbarHeight,
    defaultImg: 'https://img02.hua.com/wxmp/hua/def_user_header.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3,
      });
      // this.setData({ bottom: this.getTabBar().data.tabbarHeight });
      // console.log('bottom', this.data.bottom);
    }
    this.setData({ info: wx.getStorageSync('info') });
  },

  /**
   * 跳转登陆
   */
  gotoLogin() {
    wx.navigateTo({
      url: '/pages/login/index',
    });
  },

  /**
   *
   */
  gotoOrderList() {
    wx.navigateTo({
      url: '/pages/order/list/index',
    });
  },
});
