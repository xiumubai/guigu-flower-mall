// pages/info/info.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    systemInfo: {
      statusBarHeight: 0,
    },
    info: {},
    defaultImg: 'https://img02.hua.com/wxmp/hua/def_user_header.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          systemInfo: {
            ...this.data.systemInfo,
            statusBarHeight: result.statusBarHeight,
          },
        });
      },
    });
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3,
      });
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
