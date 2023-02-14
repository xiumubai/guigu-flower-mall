const app = getApp();
const cartCount = app.globalData.cartCount;
Component({
  data: {
    selected: 0,
    color: '#252933',
    selectedColor: '#FF734C',
    count: cartCount,
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
        hasCount: true,
      },
      {
        pagePath: '/pages/info/info',
        text: '我的',
        iconPath: '/static/tabbar/home-icon4.png',
        selectedIconPath: '/static/tabbar/home-icon4-4.png',
      },
    ],
    tabbarHeight: 0,
  },

  lifetimes: {
    attached() {
      let self = this;
      app.watch(self.watchBack.bind(self));
    },
    ready() {
      // 缓存tabber的高度
      const that = this;
      const query = wx.createSelectorQuery().in(this);
      query
        .select('.tab-bar')
        .boundingClientRect((rect) => {
          that.setData({ tabbarHeight: rect.height });
        })
        .exec();
    },
  },
  methods: {
    watchBack(hasToken) {
      if (!hasToken) return;
      this.setData({ count: app.globalData.cartCount });
    },
    switchTab(e) {
      const { path, index } = e.currentTarget.dataset;
      wx.switchTab({ url: path });
      this.setData({
        selected: index,
      });
    },
  },
});
