// pages/order/index.js
import {
  buy,
  trade,
  submitOrder,
  createJsapi,
  queryPayStatus,
  getOrderAddress,
} from '../../../utils/api';
import { formatDate } from '../../../utils/index';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    totoalPrice: 0,
    // 收货人地址
    address: {},
    show: false,
    // 用户是否有默认地址
    hasAddress: false,
    // 购买人名称
    buyName: '',
    // buyPhone
    buyPhone: null,
    // 备注
    remarks: '',
    // 送货地址id
    userAddressId: '',
    // 期望送达日期
    deliveryDate: '请选择配送时间',
    // 订单编号
    orderNo: '',
    minDate: new Date().getTime(),
    currentDate: new Date().getTime(),
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getUserDefaultAddress();
  },

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
   * 事件：展示时间选择器
   */
  onShowDateTimerPopUp() {
    this.setData({ show: true });
  },

  /**
   * 事件：关闭时间选择器
   */
  onClose() {
    this.setData({ show: false });
  },

  /**
   * 事件：修改时间
   */
  onChangeDateTime(event) {
    this.setData({
      currentDate: event.detail,
    });
  },

  /**
   * 事件：timerpicker点击确定
   */
  onConfirmTimerPicker(event) {
    const time = formatDate(new Date(event.detail), 'YYYY-MM-DD');
    this.setData({ show: false, deliveryDate: time });
  },

  /**
   * 事件：timerpicker点击取消
   */
  onCancelTimePicker() {
    this.setData({ show: false });
  },

  /**
   * 事件：去结算
   */
  async handleGoToPay() {
    const { buyName, buyPhone, deliveryDate, remarks, userAddressId, list } =
      this.data;
    const params = {
      buyName,
      buyPhone,
      deliveryDate,
      remarks,
      userAddressId,
      cartList: list,
    };

    // 支付成功，跳转到支付成功页面
    if (
      buyName &&
      buyPhone &&
      deliveryDate &&
      userAddressId &&
      list.length > 0
    ) {
      const res = await submitOrder(params);
      if (res.code === 200) {
        const orderNo = res.data;
        this.setData({ orderNo });
        this.createPay(orderNo);
      }
    } else {
      wx.showToast({
        icon: 'error',
        title: '请填写完整信息~',
      });
    }
  },
  /**
   * 请求微信下单接口
   */
  async createPay(orderNo) {
    const res = await createJsapi(orderNo);
    if (res.code === 200) {
      this.createWxPay(res.data);
    }
  },

  /**
   * 请求微信支付接口
   */
  async createWxPay(data) {
    const that = this;
    wx.requestPayment({
      timeStamp: data.timeStamp,
      nonceStr: data.nonceStr,
      package: data.package,
      signType: data.signType,
      paySign: data.paySign,
      success(data) {
        that.queryPayResult();
      },
      fail(e) {
        wx.showToast({
          icon: 'error',
          title: '支付失败',
        });
      },
    });
  },

  /**
   * 查询支付结果
   */
  async queryPayResult() {
    const res = await queryPayStatus(this.data.orderNo);
    // 支付成功，跳转到支付成功页面
    if (res.code === 200) {
      wx.showToast({
        title: '支付成功',
        success() {
          wx.navigateTo({
            url: '/pages/order/result/index',
          });
        },
      });
    }
  },

  /**
   * 事件：修改商品数量
   */
  onChangeCount(event) {
    // 手动输入的数量，无法判断是增加还是减少
    // 手动输入商品数量以后如何计算商品的总价，完善中，敬请期待。。。
    const newCount = event.detail;
    const goodsId = event.target.dataset.goodsid;
    // console.log(event);
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

  /**
   * 获取用户默认地址
   */
  async getUserDefaultAddress() {
    const res = await getOrderAddress();
    const data = res.data;
    if (res.code === 200 && JSON.stringify(data) !== '{}') {
      this.setData({
        address: data,
        hasAddress: true,
        userAddressId: data.id,
      });
    } else {
      this.setData({ address: {}, hasAddress: false });
    }
  },
});
