import { observable, action, runInAction } from 'mobx-miniprogram';
import { getCartList } from './cart';
// 获取购物车数量

export const store = observable({
  /** 数据字段 */
  count: 0,

  /** 异步方法 */
  getCartListCount: async function () {
    const num = await getCartList();
    runInAction(() => {
      this.count = num;
    });
  },

  /** 更新购物车的数量 */
  updateCount: action(function (num) {
    this.count = num;
  }),
});
