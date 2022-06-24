// import { createWithSignInUrlHandler } from './url'

/**
 * 固定跳转到生产环境地址
 */
const URL = 'http://www.bsteel.com.cn/newexchange/steelTrade/doQueryMakeNoticeDetail.do'

const resolveUrl = (url, id) => `${url}?ggid=${id}&isdj=1`

/**
 * 宝钢股份店铺公告数据
 */
// export const BSTEEL_STORE_NOTICES = [
//   {
//     title: '《单卷交易规则》',
//     datetime: '2020-06-11',
//     top: true,
//     navigator: createWithSignInUrlHandler(() => resolveUrl(URL, '135174')),
//   },
//   {
//     title: '关于欧冶云仓作业版WMS系统数据库升级的通知',
//     datetime: '2020-09-24',
//     navigator: createWithSignInUrlHandler(() => resolveUrl(URL, '177361')),
//   },
//   {
//     title: '合同批量配款、批量签署的操作说明',
//     datetime: '2020-08-07',
//     navigator: createWithSignInUrlHandler(() => resolveUrl(URL, '165913')),
//   },
//   {
//     title: '宝钢股份单卷资源批量出价操作指南',
//     datetime: '2020-07-16',
//     navigator: createWithSignInUrlHandler(() => resolveUrl(URL, '161299')),
//   },
//   {
//     title: '欧冶T代码用户购买宝钢股份单卷的操作指南',
//     datetime: '2020-06-29',
//     navigator: createWithSignInUrlHandler(() => resolveUrl(URL, '148280')),
//   },
//   {
//     title: '关于宝钢股份可利用材单卷销售的公告',
//     datetime: '2020-06-11',
//     navigator: createWithSignInUrlHandler(() => resolveUrl(URL, '135173')),
//   },
// ]

/**
 * 宝钢股份店铺 “关于宝钢” 导航链接
 */
export const BSTEEL_STORE_NAV_LINKS = [
  { name: '股份官网', link: 'http://www.baosteel.com/plc/' },
  { name: '生活.城市.钢铁', link: 'http://theme.baosteel.com/index.htm' },
  { name: '公司形象片', link: 'http://bg.baosteel.com/channels/3333.html' },
  { name: '产品形象片', link: 'http://bg.baosteel.com/channels/3334.html' },
  { name: '产品介绍', link: 'http://www.ibaosteel.com/ibaosteel/index' },
]

/**
 * 宝钢股份固定品名
 */
export const BSTEEL_STORE_PRODUCTS = [
  { label: '热轧钢带', value: '热轧钢带' },
  { label: '镀铝锌镁可利用卷', value: '镀铝锌镁可利用卷' },
  { label: '电镀锌可利用板', value: '电镀锌可利用板' },
  { label: '热镀锌可利用板', value: '热镀锌可利用板' },
  { label: '彩涂可利用材', value: '彩涂可利用材' },
  { label: '热轧尾板', value: '热轧尾板' },
  { label: '热轧尾卷', value: '热轧尾卷' },
  { label: '热轧中间坯', value: '热轧中间坯' },
  { label: '酸洗尾卷', value: '酸洗尾卷' },
  { label: '热轧可利用材', value: '热轧可利用材' },
  { label: '冷轧卷', value: '冷轧卷' },
  { label: '热轧高强钢可利用材', value: '热轧高强钢可利用材' },
  { label: '镀铝锌可利用卷', value: '镀铝锌可利用卷' },
  { label: '酸洗可利用卷', value: '酸洗可利用卷' },
  { label: '热镀铝硅可利用卷', value: '热镀铝硅可利用卷' },
  { label: '锌镁合金可利用材', value: '锌镁合金可利用材' },
  { label: '热镀锌可利用卷', value: '热镀锌可利用卷' },
  { label: '冷轧可利用卷', value: '冷轧可利用卷' },
  { label: '热镀锌铁可利用卷', value: '热镀锌铁可利用卷' },
  { label: '冷轧退料热轧卷', value: '冷轧退料热轧卷' },
  { label: '电镀锌可利用卷', value: '电镀锌可利用卷' },
  { label: '冷轧可利用板', value: '冷轧可利用板' },
]
