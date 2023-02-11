import { backgroundList, banner } from '../../modal/swiper';
import { categorylist } from '../../modal/category';
import { findBanner } from '../../utils/api';
Page({
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
      });
    }
  },
  data: {
    bannerList: backgroundList,
    category: categorylist,
    banner: banner,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBannerList();
  },

  /**
   * 获取轮播图
   */

  async getBannerList() {
    const res = await findBanner();
    console.log(res);
    this.bannerList = res.data;
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
});
