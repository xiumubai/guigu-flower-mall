Component({
  properties: {
    status: {
      type: Number,
      value: 0,
    },
    loadingText: {
      type: String,
      value: '加载中...',
    },
    noMoreText: {
      type: String,
      value: '没有更多了',
    },
    color: {
      type: String,
      value: '#BBBBBB',
    },
    size: {
      type: null,
      value: '20px',
    },
    loadingBackgroundColor: {
      type: String,
      value: '#F5F5F5',
    },
    listIsEmpty: {
      type: Boolean,
      value: false,
    },
  },
});
