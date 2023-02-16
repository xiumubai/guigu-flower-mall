// pages/order/detail/index.js
import { orderDetail } from '../../../utils/api';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    order: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getOrderDetail(options.orderNo);
  },

  /**
   * 获取订单详情
   */
  async getOrderDetail(orderNo) {
    const res = await orderDetail(orderNo);
    if (res.code === 200) {
      this.setData({ order: res.data });
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
