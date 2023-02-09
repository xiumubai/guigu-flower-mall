Page({
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2,
      });
    }
  },

  data: {
    checked: true,
    price: 0,
  },

  onChange(event) {
    this.setData({
      checked: event.detail,
    });
  },
  onChangePrice(event) {
    console.log(event.detail);
  },
});
