// pages/goods/detail/index.js
import { findGoodsDetail, addToCart } from '../../../utils/api';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goods: {},
    show: false,
    count: 1,
    goodsId: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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
   * 事件：加入购物车
   */
  async handleAddCart() {
    const { goodsId, count } = this.data;
    if (count > 0) {
      const res = await addToCart({
        goodsId,
        count,
      });

      console.log(res);

      if (res.code === 200) {
        wx.showToast({ title: '添加成功' });
        this.setData({
          show: false,
        });
      }
    }
  },

  /**
   * 事件 打开action-sheet
   */
  onSHowSheet() {
    this.setData({
      show: true,
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
    wx.navigateTo({
      url: `/pages/order/detail/index?goodsId=${this.data.goodsId}`,
    });
  },
});
