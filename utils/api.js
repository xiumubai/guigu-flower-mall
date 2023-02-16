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
 * 登陆
 */
export const getUserInfo = () => {
  return request({
    url: `/mall-api/weixin/getuserInfo`,
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
    url: `/mall-api/goods/list/${params.page}/${params.limit}`,
    method: 'GET',
    data: params,
  });
};

/**
 * 商品详情
 */
export const findGoodsDetail = (goodsId) => {
  return request({
    url: `/mall-api/goods/${goodsId}`,
    method: 'GET',
  });
};

/**
 * 立即购买
 */
export const buy = (params) => {
  return request({
    url: `/mall-api/order/buy/${params.goodsId}`,
    method: 'GET',
    data: params,
  });
};

/**
 * 确认下单
 */
export const trade = () => {
  return request({
    url: `/mall-api/order/trade`,
    method: 'GET',
  });
};

/**
 * 提交订单
 */
export const submitOrder = (params) => {
  return request({
    url: `/mall-api/order/submitOrder`,
    method: 'POST',
    data: params,
  });
};

/**
 * 微信下单
 */
export const createJsapi = (orderNo) => {
  return request({
    url: `/mall-api/webChat/createJsapi/${orderNo}`,
    method: 'GET',
  });
};

/**
 * 查询支付结果
 */
export const queryPayStatus = (orderNo) => {
  return request({
    url: `/mall-api/webChat/queryPayStatus/${orderNo}`,
    method: 'GET',
  });
};

/**
 * 订单列表
 */
export const orderList = (params) => {
  return request({
    url: `/mall-api/order/order/${params.page}/${params.limit}`,
    method: 'GET',
  });
};

/**
 * 订单详情
 */
export const orderDetail = (orderNo) => {
  return request({
    url: `/mall-api/order/order/${orderNo}`,
    method: 'GET',
  });
};

/**
 * 购物车列表
 */
export const findCartList = () => {
  return request({
    url: `/mall-api/cart/getCartList`,
    method: 'GET',
  });
};

/**
 * 加入购物车
 */
export const addToCart = (params) => {
  return request({
    url: `/mall-api/cart/addToCart/${params.goodsId}/${params.count}`,
    method: 'GET',
    data: params,
  });
};

/**
 * 删除购物车
 */

export const deleteCart = (goodsId) => {
  return request({
    url: `/mall-api/cart/delete/${goodsId}`,
    method: 'GET',
  });
};

/**
 * 选中与取消选中购物车
 */
export const checkCart = (params) => {
  return request({
    url: `/mall-api/cart/checkCart/${params.goodsId}/${params.isChecked}`,
    method: 'GET',
  });
};

/**
 * 全部选中与全部取消选中购物车商品
 */
export const checkAllCart = (isChecked) => {
  return request({
    url: `/mall-api/cart/checkAllCart/${isChecked}`,
    method: 'GET',
  });
};

/**
 * 获取地址省市区节点
 */
export const findRegionList = (parentCode) => {
  return request({
    url: `/mall-api/region/findRegionList/${parentCode}`,
    method: 'GET',
  });
};
/**
 * 添加地址
 */
export const userAddressSave = (params) => {
  return request({
    url: `/mall-api/userAddress/save`,
    method: 'POST',
    data: params,
  });
};

/**
 * 修改地址
 */
export const userAddressUpdate = (params) => {
  return request({
    url: `/mall-api/userAddress/update`,
    method: 'POST',
    data: params,
  });
};

/**
 * 删除地址
 */
export const userAddressDelete = (id) => {
  return request({
    url: `/mall-api/userAddress/delete/${id}`,
    method: 'GET',
  });
};

/**
 * 地址列表
 */
export const findUserAddress = () => {
  return request({
    url: `/mall-api/userAddress/findUserAddress`,
    method: 'GET',
  });
};

/**
 * 根据地址id获取单个地址详情
 */
export const findUserAddressById = (id) => {
  return request({
    url: `/mall-api/userAddress/${id}`,
    method: 'GET',
  });
};

/**
 * 选择收货地址
 */
export const selectAddressById = (id) => {
  return request({
    url: `/mall-api/userAddress/selectAddress/${id}`,
    method: 'GET',
  });
};

/**
 * 获取收货地址信息
 */
export const getOrderAddress = () => {
  return request({
    url: `/mall-api/userAddress/getOrderAddress`,
    method: 'GET',
  });
};
