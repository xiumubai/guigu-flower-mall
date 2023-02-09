// pages/category/components/c-siderbar/index.js
Component({
  properties: {
    list: {
      type: Array,
      value: [],
    },
  },
  data: {
    activeKey: 0,
  },
  methods: {
    setActive(activeKey) {
      return this.setData({ activeKey });
    },
    onClick(e) {
      this.setActive(e.currentTarget.dataset.index);
    },
  },
});
