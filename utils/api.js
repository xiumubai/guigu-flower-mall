import { request } from './request';

/**
 * 登陆
 */
export const login = (code) => {
  return request({
    url: `/mall-api/weixin/wxLogin/${code}`,
    method: 'GET',
  });
};

/**
 * 获取轮播图
 */

export const findBanner = () => {
  return request({
    url: `/mall-api/index/findBanner`,
    method: 'GET',
  });
};

/**
 * 获取一级分类
 */
export const findCategoryFirstLevel = () => {
  return request({
    url: `/mall-api/index/findCategory1`,
    method: 'GET',
  });
};

/**
 * 猜你喜欢
 */
export const findListGoods = () => {
  return request({
    url: `/mall-api/index/findListGoods`,
    method: 'GET',
  });
};

/**
 * 人气推荐
 */
export const findRecommendGoods = () => {
  return request({
    url: `/mall-api/index/findRecommendGoods`,
    method: 'GET',
  });
};

/**
 * 分类层级
 */
export const findCategoryTree = () => {
  return request({
    url: `/mall-api/index/findCategoryTree`,
    method: 'GET',
  });
};

/**
 * 商品列表
 */
export const findGoodsList = (params) => {
  return request({
    url: `/mall-api/index/findCategoryTree`,
    method: 'GET',
  });
};
