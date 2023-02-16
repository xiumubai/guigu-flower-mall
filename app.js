// app.js
import { createStoreBindings } from 'mobx-miniprogram-bindings';
import { store } from './store/index';
App({
  onLaunch() {
    // 获取高度
    this.getHeight();
  },
  onShow() {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: [],
      actions: ['getCartListCount'],
    });
    // 在页面初始化的时候，更新购物车徽标的数量
    this.getCartListCount();
  },
  globalData: {
    // 购物车数量
    cartCount: 0,
    // tabber+安全区域高度
    tabbarHeight: 0,
    // 安全区域的高度
    safeAreaHeight: 0,
    // 内容区域高度
    contentHeight: 0,
  },
  getHeight() {
    const res = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    const {
      screenHeight,
      statusBarHeight,
      safeArea: { bottom },
    } = res;
    // console.log('resHeight', res);

    if (screenHeight && bottom) {
      // 安全区域高度
      const safeBottom = screenHeight - bottom;
      // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
      const navBarHeight =
        (menuButtonInfo.top - statusBarHeight) * 2 +
        menuButtonInfo.height +
        statusBarHeight;
      // tabbar高度+安全区域高度
      this.globalData.tabbarHeight = 48 + safeBottom;
      this.globalData.safeAreaHeight = safeBottom;
      // 内容区域高度，用来设置内容区域最小高度
      this.globalData.contentHeight = screenHeight - navBarHeight;
    }
  },
});
