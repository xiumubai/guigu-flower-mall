import { request } from './request';

/**
 * @description: 登陆
 * @param {*} code
 * @returns {*}
 */
export const login = (code) => {
  return request({
    url: `/mall-api/weixin/wxLogin/${code}`,
    method: 'GET',
  });
};

/**
 * @description: 获取轮播图
 * @returns {*}
 */

export const findBanner = () => {
  return request({
    url: `/mall-api/index/findBanner`,
    method: 'GET',
  });
};
