// pages/order/list/index.js

import { orderList } from '../../../utils/api';
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: 1,
    limit: 10,
    loadStatus: 0,
    contentHeight: app.globalData.contentHeight,
    safeAreaHeight: app.globalData.safeAreaHeight,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getOrderList(true);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 还有数据，继续请求接口
    if (this.data.loadStatus === 0) {
      this.getOrderList();
    }
  },

  /**
   * 跳转订单详情
   */
  gotoOrderDetail(event) {
    const orderNo = event.currentTarget.dataset.orderno;
    wx.navigateTo({
      url: `/pages/order/detail/index?orderNo=${orderNo}`,
    });
  },
  /**
   * 获取订单列表
   */
  async getOrderList(fresh = false) {
    this.setData({ loadStatus: 1 });
    const { limit } = this.data;
    let page = fresh ? 1 : this.data.page + 1;
    const res = await orderList({ page, limit });
    const data = res.data.records;

    if (data.length > 0) {
      this.setData({
        list: fresh ? data : this.data.list.concat(data),
        loadStatus: data.length === limit ? 0 : 2,
        page,
      });
    } else {
      // 数据全部加载完毕
      this.setData({
        loadStatus: 2,
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

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
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
