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
    // 获取tabbar+安全区域的高度
    const res = wx.getSystemInfoSync();
    const {
      screenHeight,
      safeArea: { bottom },
    } = res;
    console.log('resHeight', res);
    if (screenHeight && bottom) {
      let safeBottom = screenHeight - bottom;
      console.log(safeBottom);
      this.globalData.tabbarHeight = 48 + safeBottom;
    }
  },
  globalData: {
    // 购物车数量
    cartCount: 0,
    tabbarHeight: 0,
  },
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
        // 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.name的时候，这里就会执行。
        return this._hasToken;
      },
    });
  },
});
