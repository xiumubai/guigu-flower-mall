// pages/goods/list/index.js
import { findGoodsList } from '../../../utils/api';
const initFilters = {
  overall: 1,
  sorts: '',
  layout: 0,
};

Page({
  /**
   * 页面的初始数据
   */
  data: {
    layout: 0,
    sorts: '',
    overall: 1,
    show: false,
    page: 1,
    limit: 10,
    list: [],
  },

  showFilterPopup() {
    this.setData({
      show: true,
    });
  },

  showFilterPopupClose() {
    this.setData({
      show: false,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getGoodsList();
  },

  /**
   * 商品列表
   */
  async getGoodsList() {
    const params = {
      page: this.data.page,
      limit: this.data.limit,
    };
    const res = await findGoodsList(params);
    this.setData({
      list: res.data.records,
    });
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
