// pages/address/add/index.js
import {
  findUserAddressById,
  userAddressSave,
  userAddressUpdate,
} from '../../../utils/api';

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
    region: '',
    id: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // id不为空修改地址，为空添加地址
    if (JSON.stringify(options) !== '{}') {
      const id = options.id;
      this.setData({ id });
      this.getUserAddressById(id);
    }
  },
  /**
   * 请求地址列表，获取要修改的地址
   */
  async getUserAddressById(id) {
    const res = await findUserAddressById(id);
    if (res.code === 200) {
      console.log('res', res.data);
      const data = res.data;
      const region = data.fullAddress.split(data.address)[0];
      this.setData({
        name: data.name,
        // 电话
        phone: data.phone,
        // 标签
        tagName: data.tagName,
        // 详情地址
        address: data.address,
        // 省
        provinceCode: data.provinceCode,
        // 市
        cityCode: data.cityCode,
        // 区
        districtCode: data.districtCode,
        // 是否是默认地址
        isDefault: data.isDefault,
        region,
      });
    }
  },

  /**
   * 切换地址
   */
  onRegionChange({ detail }) {
    const { code, value } = detail;
    this.setData({
      provinceCode: code[0],
      cityCode: code[1],
      districtCode: code[2],
      region: value.join('/'),
    });
  },

  /**
   * 保存
   */
  handleSubmit() {
    if (this.data.id) {
      this.editAddress();
    } else {
      this.addAddress();
    }
  },

  /**
   * 接口：添加地址
   */
  async addAddress() {
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
   * 接口：修改地址
   */
  async editAddress() {
    const res = await userAddressUpdate(this.data);
    if (res.code === 200) {
      wx.showToast({
        title: '修改成功',
        success() {
          // 返回地址列表
          wx.navigateBack();
        },
      });
    } else {
      wx.showToast({
        title: res.message || '修改失败',
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
