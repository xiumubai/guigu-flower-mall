// components/filter-group/index.js
Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    show: {
      type: Boolean,
      observer(newVal, oldVal) {
        console.log('show', newVal, oldVal);
        this.setData({ visible: newVal });
      },
    },
    closeBtn: {
      type: Boolean,
      value: false,
    },
  },

  data: { visible: false },

  methods: {
    reset() {
      this.triggerEvent('reset');
    },
    confirm() {
      this.triggerEvent('confirm');
    },
    close() {
      this.triggerEvent('showFilterPopupClose');
      this.setData({ visible: false });
    },
  },
});
