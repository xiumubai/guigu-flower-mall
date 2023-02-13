// pages/address/add/index.js
import { findUserAddress, userAddressSave } from '../../../utils/api';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    // 姓名
    name: '',
    // 电话
    phone: '',
    // 标签
    tagName: '家',
    address: '',
    // 省
    provinceCode: '',
    // 市
    cityCode: '',
    // 区
    districtCode: '',
    // 是否是默认地址
    isDefault: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (JSON.stringify(options) !== '{}') {
    }
  },
  /**
   * 请求地址列表，获取要修改的地址
   */
  getAddressList() {},

  /**
   * 切换地址
   */
  onRegionChange({ detail }) {
    const { code, value } = detail;
    this.setData({
      provinceCode: code[0],
      cityCode: code[1],
      districtCode: code[2],
      fullAddress: value.join('/'),
    });
  },

  /**
   * 保存
   */
  async handleSubmit() {
    const res = await userAddressSave(this.data);
    if (res.code === 200) {
      wx.showToast({
        title: '添加成功',
        success() {
          // 返回地址列表
          wx.navigateBack();
        },
      });
    } else {
      wx.showToast({
        title: res.message || '添加失败',
        icon: 'error',
      });
    }
  },

  /**
   * 事件：改变默认地址的状态
   */
  onChangeDefalut({ detail }) {
    this.setData({ isDefault: detail.value ? 1 : 0 });
  },
  /**
   * 事件：打开popup
   */
  onShowPopup() {
    this.setData({ show: true });
  },
  /**
   * 事件：关闭popup
   */
  onClose() {
    this.setData({ show: false });
  },

  /**
   * 选择地址-确认
   */
  onConfirm() {
    this.setData({ show: false });
  },

  /**
   * 选择地址-取消
   */
  onCancel() {
    this.setData({ show: false });
  },
});
