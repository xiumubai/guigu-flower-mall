Component({
  properties: {
    category: {
      type: Array,
      value: [],
    },
    initActive: {
      type: Array,
      value: [],
      observer(newVal, oldVal) {
        if (newVal[0] !== oldVal[0]) {
          this.setActiveKey(newVal[0], 0);
        }
      },
    },
  },
  data: {
    activeKey: 0,
    defaultImg:
      'https://img02.hua.com/m/category/Classification/m_category_flowers_use_1-2Girlfriend.png',
  },
  methods: {
    onParentChange(event) {
      this.setActiveKey(event.detail.index, 0).then(() => {
        this.triggerEvent('change', [this.data.activeKey]);
      });
    },
  },
});
