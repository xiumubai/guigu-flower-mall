import { getCategoryList } from '../..//modal/category';
Page({
  data: {
    list: getCategoryList,
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
      });
    }
  },
  onChange() {
    wx.navigateTo({
      url: '/pages/goods/list/index',
    });
  },
});
