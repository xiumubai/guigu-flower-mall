// pages/index/components/procate/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    category: {
      type: Array,
      value: [],
    },
  },
  data: {
    categoryList: [],
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {},
    hide: function () {},
    resize: function () {},
  },
});
