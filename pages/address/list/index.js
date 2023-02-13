// pages/address/list/index.js
import {
  findUserAddress,
  userAddressDelete,
  selectAddressById,
} from '../../../utils/api';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    isBack: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({ isBack: options.isBack });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getAddreassList();
  },

  /**
   * 获取地址
   */
  async getAddreassList() {
    const res = await findUserAddress();
    this.setData({ list: res.data });
  },

  /**
   * 事件：选择地址
   */
  async handleSlelectAddress(event) {
    if (this.data.isBack) {
      const { addressid } = event.target.dataset;
      const res = await selectAddressById(addressid);
      if (res.code === 200) {
        wx.navigateBack();
      }
    }
  },

  /**
   * 编辑地址
   */
  handleEditAddress(event) {
    const { id } = event.target.dataset;
    wx.navigateTo({
      url: `/pages/address/add/index?id=${id}`,
    });
  },
  /**
   * 删除地址
   */
  handleDelAddress(event) {
    const { id } = event.target.dataset;
    const that = this;
    wx.showModal({
      title: '提示',
      content: '确认删除该用户地址吗？',
      async success(res) {
        if (res.confirm) {
          const res = await userAddressDelete(id);
          if (res.code === 200) {
            wx.showToast({ title: '删除成功' });
            that.getAddreassList();
          }
        }
      },
    });
  },
});
