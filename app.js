// app.js
// 获取购物车的数量
import { findCartList } from './utils/api';

App({
  onLaunch() {
    // findCartList().then((res) => {
    //   let s = 0;
    //   res.data.map((item) => {
    //     return (s += item.count);
    //   });
    //   // 设置购物车徽标数量
    //   this.globalData.cartCount = s;
    // });
    // 获取高度
    this.getHeight();
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
  /** 全局监听cartCount的响应式变化 */
  watch: function (method) {
    var obj = this.globalData;
    Object.defineProperty(obj, 'cartCount', {
      configurable: true,
      enumerable: true,
      set: function (value) {
        this._hasToken = value;
        method(value);
      },
      get: function () {
        // 调用getApp().globalData.name的时候，这里就会执行。
        return this._hasToken;
      },
    });
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
    console.log('resHeight', res);

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
