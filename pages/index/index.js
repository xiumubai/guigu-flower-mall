import { backgroundList, banner } from '../../modal/swiper';
import { categorylist } from '../../modal/category';
Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0,
        });
      }
    },
  },
  data: {
    background: backgroundList,
    category: categorylist,
    banner: banner,
  },
});
