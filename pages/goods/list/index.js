// pages/goods/list/index.js
import { findGoodsList } from '../../../utils/api';
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    limit: 10,
    list: [],
    options: {},
    loadStatus: 0,
    contentHeight: app.globalData.contentHeight,
    safeAreaHeight: app.globalData.safeAreaHeight,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({ options });
    this.loadGoodsList(true);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 还有数据，继续请求接口
    if (this.data.loadStatus === 0) {
      this.loadGoodsList();
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // this.loadGoodsList();
  },

  /**
   * 商品列表
   */
  async loadGoodsList(fresh = false) {
    // wx.stopPullDownRefresh();
    this.setData({ loadStatus: 1 });
    let page = fresh ? 1 : this.data.page + 1;
    // 组装查询参数
    const params = {
      page,
      limit: this.data.limit,
      ...this.data.options,
    };
    try {
      // loadstatus说明： 0-加载完毕，隐藏加载状态 1-正在加载 2-全部加载 3-加载失败
      const res = await findGoodsList(params);
      const data = res.data.records;
      if (data.length > 0) {
        this.setData({
          list: fresh ? data : this.data.list.concat(data),
          loadStatus: data.length === this.data.limit ? 0 : 2,
          page,
        });
      } else {
        // 数据全部加载完毕
        this.setData({
          loadStatus: 2,
        });
      }
    } catch {
      // 错误请求
      this.setData({
        loadStatus: 3,
      });
    }
  },

  /**
   * 返回
   */
  gotoBack() {
    wx.navigateBack();
  },
});
