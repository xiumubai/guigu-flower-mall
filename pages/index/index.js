import { backgroundList, banner } from '../../modal/swiper';
import {
  findBanner,
  findCategoryFirstLevel,
  findListGoods,
  findRecommendGoods,
} from '../../utils/api';
const app = getApp();
Page({
  data: {
    bannerList: backgroundList,
    categoryList: [],
    banner: banner,
    loveList: [],
    recommendList: [],
    bottom: app.globalData.tabbarHeight,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBannerList();
    this.getCategoryFirstLevel();
    this.getListGoods();
    this.getRecommendGoods();
  },

  /**
   * 获取轮播图
   */
  async getBannerList() {
    const res = await findBanner();
    this.setData({
      bannerList: res.data,
    });
  },

  /**
   * 获取一级分类
   */
  async getCategoryFirstLevel() {
    this.categoryList = [1, 2, 3];
    const res = await findCategoryFirstLevel();
    const list = res.data.map((item, index) => {
      // 分类前五个和后五个样式不一样，区别处理
      if (index > 4) {
        item['small'] = true;
      }
      return item;
    });

    this.setData({
      categoryList: list,
    });
  },

  /**
   * 获取猜你喜欢
   */
  async getListGoods() {
    const res = await findListGoods();
    this.setData({
      loveList: res.data,
    });
  },

  /**
   * 获取人气推荐
   */
  async getRecommendGoods() {
    const res = await findRecommendGoods();
    this.setData({
      recommendList: res.data,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
      });
      // this.setData({ bottom: this.getTabBar().data.tabbarHeight });
    }
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
});
