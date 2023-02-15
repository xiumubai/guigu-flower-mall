// pages/goods/detail/index.js
import { findGoodsDetail, addToCart } from '../../../utils/api';
import { createStoreBindings } from 'mobx-miniprogram-bindings';
import { store } from '../../../store/index';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goods: {},
    show: false,
    count: 1,
    goodsId: '',
    flag: 1, // 区别加入购物车（1）和立即购买（0）
    blessing: '', //祝福语
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: [],
      actions: ['getCartListCount'],
    });
    this.setData({ goodsId: options.goodsId });
    this.getGoodsDetail(options.goodsId);
  },

  /**
   * 商品详情
   */
  async getGoodsDetail(goodsId) {
    const res = await findGoodsDetail(goodsId);
    this.setData({
      goods: res.data,
    });
  },

  /**
   * 事件：popup确定
   */
  async handleSubmit() {
    const { goodsId, count, flag, blessing } = this.data;
    if (flag) {
      // 加入购物车
      if (count > 0) {
        const res = await addToCart({
          goodsId,
          count,
          blessing,
        });
        // 更新购物车徽标的数量
        this.getCartListCount();
        if (res.code === 200) {
          wx.showToast({ title: '添加成功' });
          this.setData({
            show: false,
          });
        }
      }
    } else {
      // 立即购买，祝福语不能为空
      if (blessing) {
        wx.navigateTo({
          url: `/pages/order/pay/index?goodsId=${this.data.goodsId}&blessing=${blessing}`,
        });
      } else {
        wx.showToast({ title: '请填写祝福语', icon: 'error' });
      }
    }
  },

  /**
   * 事件：加入购物车
   */
  handleAddcart() {
    this.setData({
      show: true,
      flag: 1,
    });
  },

  /**
   * 事件，关闭action-sheet
   */
  onClose() {
    this.setData({ show: false, count: 1 });
  },

  /**
   * 事件：修改商品数量
   */
  onChangeGoodsCount(event) {
    this.setData({ count: event.detail });
  },

  /**
   * 事件：立即购买
   */
  handeGotoBuy() {
    this.setData({ show: true, flag: 0 });
  },
  /**
   * 事件：textarea发生改变时
   */
  onTextAreaChange(event) {
    this.setData({ blessing: event.detail.value });
  },
});
