// pages/address/add/index.js
import {
  findUserAddressById,
  userAddressSave,
  userAddressUpdate,
} from '../../../utils/api';
import Toast from '@vant/weapp/toast/toast';

// 验证手机号
const innerPhoneReg =
  '^1(?:3\\d|4[4-9]|5[0-35-9]|6[67]|7[0-8]|8\\d|9\\d)\\d{8}$';
// 验证用户名，收货人仅支持输入中文、英文（区分大小写）、数字
const innerNameRegExp = '^[a-zA-Z\\d\\u4e00-\\u9fa5]+$';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 是否展示地选选择
    show: false,
    locationState: {
      // 姓名
      name: '',
      // 电话
      phone: '',
      // 标签
      tagName: '家',
      // 详细地址
      address: '',
      // 省
      provinceCode: '',
      provinceName: '',
      // 市
      cityCode: '',
      cityName: '',
      // 区
      districtCode: '',
      districtName: '',
      // 是否是默认地址
      isDefault: 0,
    },
    // 省区市地址
    region: '',
    regionName: '',
    // 编辑地址id
    id: '',
    // 是否允许保存
    submitActive: false,
    // 表单验证Toast提示信息,不需要响应式
    verifyTips: '默认提示',
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
   * 表单change事件
   */
  onInputValue(e) {
    const { type } = e.currentTarget.dataset;
    if (type === 'region') {
      // 修改省市区地址,需要单独处理数据
      const { code, value } = e.detail;
      this.setData(
        {
          'locationState.provinceCode': code[0],
          'locationState.provinceName': value[0],
          'locationState.cityName': code[1],
          'locationState.cityCode': value[1],
          'locationState.districtCode': code[2],
          'locationState.districtName': value[2],
          // picker回显，处理成['北京市', '北京市', '昌平区']的格式
          region: code,
          // 表单回显，处理成'北京市/北京市/昌平区'的各式
          regionName: value.join('/'),
        },
        () => {
          const { isLegal, tips } = this.onVerifyInputLegal();
          this.setData({
            submitActive: isLegal,
            verifyTips: tips,
          });
        },
      );
    } else {
      const value = e.detail;
      this.setData(
        {
          [`locationState.${type}`]: value,
        },
        // 此回调函数会在设置值以执行，用来做表单的验证
        () => {
          const { isLegal, tips } = this.onVerifyInputLegal();
          this.setData({
            submitActive: isLegal,
            verifyTips: tips,
          });
        },
      );
    }
  },

  /**
   * 表单校验
   */
  onVerifyInputLegal() {
    const { name, phone, address, districtName } = this.data.locationState;
    const nameRegExp = new RegExp(innerNameRegExp);
    const phoneRegExp = new RegExp(innerPhoneReg);

    if (!name || !name.trim()) {
      return {
        isLegal: false,
        tips: '请填写收货人',
      };
    }

    // 正则验证收货人
    if (!nameRegExp.test(name)) {
      return {
        isLegal: false,
        tips: '收货人仅支持输入中文、英文（区分大小写）、数字',
      };
    }

    if (!phone || !phone.trim()) {
      return {
        isLegal: false,
        tips: '请填写手机号',
      };
    }

    // 正则验证手机号
    if (!phoneRegExp.test(phone)) {
      return {
        isLegal: false,
        tips: '请填写正确的手机号',
      };
    }

    if (!districtName || !districtName.trim()) {
      return {
        isLegal: false,
        tips: '请选择省市区信息',
      };
    }

    if (!address || !address.trim()) {
      return {
        isLegal: false,
        tips: '请填写详细地址',
      };
    }

    if (address && address.trim().length > 30) {
      return {
        isLegal: false,
        tips: '详细地址不能超过50个字符',
      };
    }

    return {
      isLegal: true,
      tips: '添加成功',
    };
  },
  /**
   * 请求地址列表，获取要修改的地址
   */
  async getUserAddressById(id) {
    const res = await findUserAddressById(id);
    if (res.code === 200) {
      const data = res.data;
      const regionName = data.fullAddress.split(data.address)[0];
      const region = new Array(
        data.provinceCode,
        data.cityCode,
        data.districtCode,
      );
      this.setData({
        // 直接把整个data赋值给了locationState，里面会有数据冗余，不推荐这么做
        locationState: data,
        region,
        regionName,
        // name: data.name,
        // // 电话
        // phone: data.phone,
        // // 标签
        // tagName: data.tagName,
        // // 详情地址
        // address: data.address,
        // // 省
        // provinceCode: data.provinceCode,
        // // 市
        // cityCode: data.cityCode,
        // // 区
        // districtCode: data.districtCode,
        // // 是否是默认地址
        // isDefault: data.isDefault,
        // region,
      });
    }
  },

  /**
   * 保存
   */
  handleSubmit() {
    const { submitActive } = this.data;
    if (!submitActive) {
      Toast({
        message: this.data.verifyTips,
        position: 'top',
      });
      return;
    }
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
    const res = await userAddressSave(this.data.locationState);
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
    const params = {
      id: this.data.id,
      ...this.data.locationState,
    };
    const res = await userAddressUpdate(params);
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
    this.setData({ 'locationState.isDefault': detail.value ? 1 : 0 });
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
