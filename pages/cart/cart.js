import {
  findCartList,
  deleteCart,
  checkCart,
  addToCart,
  checkAllCart,
} from '../../utils/api';

import { createStoreBindings } from 'mobx-miniprogram-bindings';
import { store } from '../../store/index';
import { getCartTotalCount } from '../../store/cart';
const app = getApp();
Page({
  data: {
    checked: true,
    price: 0,
    list: [],
    totalCount: 0,
    totalPrice: 0,
    isCheckedAll: false,
    bottom: app.globalData.tabbarHeight,
    contentHeight: app.globalData.contentHeight,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['count'],
      actions: ['updateCount'],
    });
  },

  /**
   * 声明周期函数--监听页面卸载
   */
  onUnload() {
    this.storeBindings.destroyStoreBindings();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2,
      });
    }
    this.getCartList();
  },

  /**
   * 事件：去结算
   */
  async handleGotoBy() {
    wx.navigateTo({ url: '/pages/order/pay/index' });
  },

  /**
   * 获取购物车列表
   */
  async getCartList() {
    const res = await findCartList();
    this.setData({
      list: res.data,
    });
    this.computedTotalCount(res.data);
    this.computedTotalPrice();
    this.getCheckAllStatus();
  },

  /**
   * 修改选中状态
   */
  async onChangeCheck(event) {
    const isChecked = event.detail ? 1 : 0;
    const goodsId = event.target.dataset.goodsid;
    await checkCart({
      goodsId,
      isChecked,
    });
    this.getCartList();
  },
  /**
   * 修改购物车数量
   */
  async onChangeCount(event) {
    const newCount = event.detail;
    const goodsId = event.target.dataset.goodsid;
    const originCount = event.target.dataset.count;
    // 这里如果直接拿+以后的数量，接口的处理方式是直接在上次的基础累加的，
    // 所以传给接口的购物车数量的计算方式如下：
    // 购物车添加的数量=本次的数量-上次的数量
    const count = newCount - originCount;
    const res = await addToCart({
      goodsId,
      count,
    });
    if (res.code === 200) {
      this.getCartList();
    }
  },
  /**
   * 删除购物车
   */
  async handleDelCart(event) {
    const goodsId = event.target.dataset.goodsid;
    const res = await deleteCart(goodsId);
    if (res.code == 200) {
      wx.showToast({ title: '删除成功' });
      this.getCartList();
    }
  },

  /**
   * 计算购物车总数量
   */
  computedTotalCount(list) {
    // 获取购物车选中数量
    const total = getCartTotalCount(list);
    // 设置购物车徽标数量
    this.updateCount(total);
  },
  /**
   * 计算购物车商品总价
   */
  computedTotalPrice() {
    let s = 0;
    const { list } = this.data;
    list.forEach((e) => {
      if (e.isChecked) {
        const n = e.price * e.count;
        s = n + s;
      }
    });
    this.setData({ totalPrice: s });
  },
  /**
   * 判断是不是全选
   */

  /**
   * 全选
   */
  async onChangeCheckAll(event) {
    const status = event.detail;
    const res = await checkAllCart(status ? 1 : 0);
    if (res.code === 200) {
      this.setData({
        isCheckedAll: status,
      });
      this.getCartList();
    }
  },

  /**
   * 获取全选状态
   */
  getCheckAllStatus() {
    if (!this.data.list.length) {
      this.setData({ isCheckedAll: false });
      return;
    }
    this.setData({ isCheckedAll: true });
    this.data.list.map((item) => {
      if (!item.isChecked) {
        this.setData({ isCheckedAll: false });
        return;
      }
    });
  },
});
