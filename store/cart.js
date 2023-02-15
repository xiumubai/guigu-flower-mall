/*
 * @Author: 朽木白
 * @Date: 2023-02-15 16:13:39
 * @LastEditors: 1547702880@@qq.com
 * @LastEditTime: 2023-02-15 16:57:55
 * @Description: 获取购物车数量
 */

import { findCartList } from '../utils/api';

/**
 * @description: 获取购物车列表
 * @returns {*}
 */
export async function getCartList() {
  const res = await findCartList();
  if (res.code === 200 && res.data.length > 0) {
    return getCartTotalCount(res.data);
  }
}

/**
 * @description: 获取购物车被选中商品数量
 * @param {*} list 购物车列表数据
 * @returns {*}
 */
export function getCartTotalCount(list) {
  let s = 0;
  list.map((item) => {
    return item.isChecked && (s += item.count);
  });
  return s;
}
