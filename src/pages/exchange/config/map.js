import { BIDDING_CODE, FIXED_CODE, AUCTION_CODE } from './biddingType'

/**
 * 值集：竞价模式
 */
export const BIDDING_MODE_MAPS = [
  { value: '11', name: '公开增价' },
  { value: '12', name: '自由报价' },
  { value: '41', name: '公开增价（加权）' },
  { value: '42', name: '自由报价（加权）' },
  { value: '101', name: '反向竞价（公开）' },
  { value: '102', name: '反向竞价（自由）' },
  { value: '111', name: '公开增价' },
  { value: '112', name: '自由报价' },
]

/**
 * 值集：计价方式
 */
export const WEIGHT_METHOD_MAPS = [
  { value: '1', name: '数量计价', valueKey: 'boundleTotalQty', unitKey: 'quantityUnit' },
  { value: '0', name: '重量计价', valueKey: 'boundleTotalWeight', unitKey: 'weightUnit' },
]

/**
 * 值集：资源状态
 */
export const MATERIAL_STATUS_MAPS = {
  [BIDDING_CODE]: [
    { value: '31', name: '竞价中', pricePrefix: '当前价' },
    { value: '30', name: '待竞价', pricePrefix: '起拍价' },
    { value: '50', name: '成交', pricePrefix: '成交价' },
    { value: '33', name: '已结束', pricePrefix: '当前价' },
    { value: '40', name: '流标', pricePrefix: '起拍价' },
  ],
  [FIXED_CODE]: [
    { value: '32', name: '挂牌中', color: '#007DBE', pricePrefix: '一口价' },
    { value: '51', name: '成交', color: '#DB3731', pricePrefix: '成交价' },
    { value: '34', name: '挂牌结束', color: '#999999', pricePrefix: '起拍价' },
    { value: '40', name: '流标', color: '#999999', pricePrefix: '起拍价' },
  ],
  // TODO: 拍卖资源状态（现阶段暂无拍卖数据）
  [AUCTION_CODE]: [
    { value: '31', name: '拍卖中', pricePrefix: '当前价' },
    { value: '50', name: '成交', pricePrefix: '成交价' },
    { value: '33', name: '已结束', pricePrefix: '当前价' },
  ],
}

/**
 * 值集：报盘方式
 */
export const OFFER_MODE_MAPS = [
  { value: '1', name: '单价' },
  { value: '2', name: '总价' },
]

/**
 * 值集：买方资质
 */
export const BUYER_TYPE_MAPS = [
  { value: '1', label: '仅限企业' },
  { value: '0', label: '企业个人' },
]

/**
 * 接口响应码
 */
export const RES_CODE = {
  SUCCESS: 1,
  ERROR: 0,
  OUT_LOGIN: 2,
}
