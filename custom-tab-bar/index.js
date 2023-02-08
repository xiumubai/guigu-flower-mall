Component({
  data: {
    selected: 0,
    color: '#252933',
    selectedColor: '#FF734C',
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
        info: 100,
      },
      {
        pagePath: '/pages/info/info',
        text: '我的',
        iconPath: '/static/tabbar/home-icon4.png',
        selectedIconPath: '/static/tabbar/home-icon4-4.png',
      },
    ],
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({ url });
      this.setData({
        selected: data.index,
      });
    },
  },
});
