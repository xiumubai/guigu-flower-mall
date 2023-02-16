import { storeBindingsBehavior } from 'mobx-miniprogram-bindings';
import { store } from '../store/index';

Component({
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      count: 'count',
    },
    actions: [],
  },
  observers: {
    count: function (val) {
      // 更新购物车的数量
      this.setData({ cartCount: val });
    },
  },
  data: {
    selected: 0,
    color: '#252933',
    selectedColor: '#FF734C',
    cartCount: 0,
    list: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
        iconPath: '/static/tabbar/home-icon1.png',
        selectedIconPath: '/static/tabbar/home-icon1-1.png',
      },
      {
        pagePath: '/pages/category/category',
        text: '分类',
        iconPath: '/static/tabbar/home-icon2.png',
        selectedIconPath: '/static/tabbar/home-icon2-2.png',
      },
      {
        pagePath: '/pages/cart/cart',
        text: '购物车',
        iconPath: '/static/tabbar/home-icon3.png',
        selectedIconPath: '/static/tabbar/home-icon3-3.png',
        info: true,
      },
      {
        pagePath: '/pages/info/info',
        text: '我的',
        iconPath: '/static/tabbar/home-icon4.png',
        selectedIconPath: '/static/tabbar/home-icon4-4.png',
      },
    ],
  },

  lifetimes: {},
  methods: {
    switchTab(e) {
      const { path, index } = e.currentTarget.dataset;
      wx.switchTab({ url: path });
      this.setData({
        selected: index,
      });
    },
  },
});
