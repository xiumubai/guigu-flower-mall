// pages/order/index.js
import { buy, trade } from '../../../utils/api';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    totoalPrice: 0,
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 从商品详情页跳转和购物车页面跳转到商品结算页面，获取商品的接口不一致，这里作为区分
    if (JSON.stringify(options) !== '{}') {
      this.getBuyGoodsDetail(options);
    } else {
      this.getTradeGoodsDetail();
    }
  },

  /**
   * 事件：去结算
   */
  handleGoToPay() {},
  /**
   * 事件：修改商品数量
   */
  onChangeCount(event) {
    // TODO:手动输入的数量，无法判断是增加还是减少
    // 手动输入商品数量以后如何计算商品的总价
    const newCount = event.detail;
    const goodsId = event.target.dataset.goodsid;
    console.log(event);
  },
  /**
   * 事件：增加商品数量
   */
  onPlusCount(event) {
    // 每次商品数量增加1
    const goodsId = event.target.dataset.goodsid;
    this.computedTotalPrice(goodsId, 1);
  },
  /**
   * 事件：减少商品数量
   */
  onMinusCount(event) {
    // 每次商品数量减1
    const goodsId = event.target.dataset.goodsid;
    this.computedTotalPrice(goodsId, -1);
  },

  /**
   * 计算总价
   */
  computedTotalPrice(goodsId, count) {
    const { list, totoalPrice } = this.data;
    let total = totoalPrice;
    list.forEach((e) => {
      if (e.goodsId === goodsId) {
        total = total + count * e.price;
      }
    });
    this.setData({ totoalPrice: total });
  },

  /**
   * 获取单个商品信息（从点击立即购买入口进来）
   */
  async getBuyGoodsDetail(options) {
    const res = await buy(options);
    if (res.code === 200) {
      console.log(res);
      this.setData({
        list: res.data.cartVoList,
        totoalPrice: res.data.totalAmount,
      });
    }
  },

  /**
   * 获取单个或多个商品信息（从购物车点击过来）
   */
  async getTradeGoodsDetail() {
    const res = await trade();
    if (res.code === 200) {
      this.setData({
        list: res.data.cartVoList,
        totoalPrice: res.data.totalAmount,
      });
    }
  },
});
