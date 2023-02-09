Component({
  properties: {
    category: {
      type: Array,
      value: [],
    },
  },
  data: {
    activeKey: 0,
    defaultImg:
      'https://img02.hua.com/m/category/Classification/m_category_flowers_use_1-2Girlfriend.png',
  },
  methods: {
    setActive(activeKey) {
      this.setData({ activeKey });
    },
    onClick(e) {
      this.setActive(e.currentTarget.dataset.index);
    },
  },
});
