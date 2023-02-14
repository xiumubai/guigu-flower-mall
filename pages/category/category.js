import { findCategoryTree } from '../../utils/api';
Page({
  data: {
    list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getCategoryTree();
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
      });
    }
  },

  /**
   * 分类层级
   */
  async getCategoryTree() {
    const res = await findCategoryTree();
    this.setData({
      list: res.data,
    });
  },
  onChange() {
    wx.navigateTo({
      url: '/pages/goods/list/index',
    });
  },
});
