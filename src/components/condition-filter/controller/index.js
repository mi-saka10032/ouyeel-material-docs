import {
  BIDDING_CODE,
  FIXED_CODE,
  AUCTION_CODE,
  BUYER_TYPE_MAPS,
  BSTEEL_STORE_PRODUCTS,
} from '@/pages/exchange/config'
import { find } from '@/pages/exchange/utils/tools'
import event from '@/pages/exchange/utils/event'

export class BaseController {
  constructor({ key, title, initialValue = [], initialOptions = [], ref = '' }) {
    this.key = key
    this.title = title
    this.initialValue = initialValue
    this.initialOptions = initialOptions
    this.ref = ref
  }

  initState() {
    const { key, title, initialValue, initialOptions } = this
    return {
      [key]: initialValue,
      [`${key}Title`]: title,
      [`${key}Options`]: Object.freeze(initialOptions),
    }
  }

  updateValue(ctx, value) {
    ctx[this.key] = value
    return this
  }

  resetValue(ctx) {
    const { key, initialValue } = this
    ctx[key] = initialValue
    return this
  }

  updateOptions(ctx, options) {
    ctx[`${this.key}Options`] = Object.freeze(options)

    console.log(this)
    const { ref } = this
    if (ref) {
      ctx.$nextTick(() => {
        const instance = ctx.$refs[ref]
        instance && instance.update && instance.update()
      })
    }

    return this
  }

  resetOptions(ctx) {
    const { key, initialOptions } = this
    ctx[`${key}Options`] = Object.freeze(initialOptions)
    return this
  }

  isRender(ctx) {
    const { key } = this
    return !!ctx[`${key}Options`].length
  }

  transformState2RouteQuery(ctx) {
    const { key } = this
    const state = ctx[key]
    return state.length ? { [key]: state.join(',') } : {}
  }

  transformRouteQuery2State(ctx) {
    if (preventSyncRouteQuery(this, ctx)) return
    try {
      const { key } = this
      const param = ctx.$route.query[key]
      param && (ctx[key] = param.split(','))
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }

  transformState2Param(ctx) {
    const { key } = this
    const state = ctx[key]
    return state.length ? { [key]: state.join(',') } : {}
  }

  resolveSelectedList(ctx) {
    const { key, title } = this
    const values = ctx[key]
    const options = ctx[`${key}Options`]
    const result = []
    console.log(options)
    for (let i = 0; i < options.length; i++) {
      const { value, label } = options[i]
      if (~values.indexOf(value)) {
        result.push({
          value: `${key}@${value}`,
          label: `${title}：${label}`,
        })
      }
    }
    return result
  }

  removeSelectedItem(ctx, value) {
    const { key } = this
    ctx[key] = ctx[key].filter(item => item !== value)
  }
}

export class KeywordController extends BaseController {
  constructor() {
    super({ key: 'keyword', initialValue: '' })
    this.remianTextKey = 'DefineRemianTextKey'
  }

  initState() {
    const { key, initialValue } = this
    return {
      [key]: initialValue,
      [`${key}Analysis`]: initialValue,
    }
  }

  resetValue(ctx) {
    const { key, initialValue } = this
    ctx[key] = initialValue
    ctx[`${key}Analysis`] = initialValue
    return this
  }

  updateOptions(ctx, value) {
    ctx[`${this.key}Analysis`] = value
    return this
  }

  resetOptions(ctx) {
    const { key, initialValue } = this
    ctx[`${key}Analysis`] = initialValue
    return this
  }

  isRender() {
    return false
  }

  transformState2RouteQuery(ctx) {
    const { key } = this
    const state = ctx[key]
    return state ? { [key]: state } : {}
  }

  transformRouteQuery2State(ctx) {
    if (preventSyncRouteQuery(this, ctx)) return
    try {
      const { key } = this
      const param = ctx.$route.query[key]
      param && (ctx[key] = param)
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }

  transformState2Param(ctx) {
    const { key } = this
    const keyword = ctx[key]
    const keywordAnalysis = ctx[`${key}Analysis`]
    const params = {}
    keyword && (params[key] = keyword)
    keywordAnalysis && (params[`${key}Analysis`] = keywordAnalysis)
    return params
  }

  resolveSelectedList(ctx) {
    try {
      const { key, remianTextKey } = this
      const analysisString = ctx[`${key}Analysis`]

      if (!analysisString) return []

      const analysis = JSON.parse(analysisString)
      const result = []
      const { remianText, rsp } = analysis
      const analysisKeysMaps = [
        {
          value: 'providerName',
          name: '卖家',
        },
        {
          value: 'specComment',
          name: '品名',
        },
        {
          value: 'productType',
          name: '品类',
        },
      ]

      rsp.forEach(({ type, word }) => {
        const name = find(analysisKeysMaps, type)
        const item = name
          ? {
              label: `${name}：${word}`,
              value: `${key}@${type}::${word}`,
            }
          : {
              label: word,
              value: `${key}@empty::${word}`,
            }
        result.push(item)
      })
      remianText && result.push({ label: remianText, value: `${key}@${remianTextKey}` })

      return result
    } catch (error) {
      return []
    }
  }

  removeSelectedItem(ctx, value) {
    try {
      const { key, remianTextKey } = this
      const analysis = JSON.parse(ctx[`${key}Analysis`])

      if (value === remianTextKey) {
        delete analysis.remianText
      } else {
        let [type, word] = value.split('::')
        if (type === 'empty') type = ''
        const removeIndex = analysis.rsp.findIndex(item => item.type === type && item.word === word)
        analysis.rsp.splice(removeIndex, 1)

        // 移除对应品名状态值
        if (type === 'specComment') {
          ctx.product = ctx.product.filter(item => item !== word)
        }
      }

      ctx[`${key}Analysis`] = JSON.stringify(analysis)
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }
}

export class BiddingTypeController extends BaseController {
  constructor() {
    super({
      key: 'biddingType',
      title: '竞买方式',
      initialOptions: [
        { label: '竞价', value: BIDDING_CODE },
        { label: '一口价', value: FIXED_CODE },
        { label: '欧冶拍', value: AUCTION_CODE },
      ],
    })
  }

  transformRouteQuery2State(ctx) {
    if (preventSyncRouteQuery(this, ctx)) return
    try {
      const { key } = this
      const { meta, query } = ctx.$route

      let state = []
      meta[key] && (state = [meta[key]])
      query[key] && (state = [query[key]])

      ctx[key] = state
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }
}

export class CategoryController extends BaseController {
  constructor() {
    super({ key: 'category', title: '品类', ref: 'categoryFilter' })
  }

  transformState2RouteQuery(ctx) {
    const { key } = this
    const { values, summaryValues } = this.splitValues(ctx)
    const query = values.length ? { [key]: values.join(',') } : {}
    summaryValues.length && (query[`${key}Summary`] = summaryValues.join(','))
    return query
  }

  transformRouteQuery2State(ctx) {
    if (preventSyncRouteQuery(this, ctx)) return
    try {
      const { key } = this
      const summaryKey = `${key}Summary`

      const state = []
      const params = ctx.$route.query[key]
      params && state.push(...params.split(','))

      const summaryParams = ctx.$route.query[summaryKey]
      summaryParams && state.push(...summaryParams.split(',').map(item => `summary::${item}`))

      ctx[key] = state
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }

  transformState2Param(ctx) {
    const { key } = this
    const { values, summaryValues } = this.splitValues(ctx)
    const params = values.length ? { [key]: values.join(',') } : {}
    summaryValues.length && (params[`${key}Summary`] = summaryValues.join(','))
    return params
  }

  splitValues(ctx) {
    const { key } = this
    const state = ctx[key]
    const values = []
    const summaryValues = []
    state.forEach(item => {
      ~item.indexOf('::') ? summaryValues.push(item.split('::')[1]) : values.push(item)
    })
    return { values, summaryValues }
  }
}

export class ProductController extends BaseController {
  constructor() {
    super({
      key: 'product',
      title: '品名',
      initialOptions: BSTEEL_STORE_PRODUCTS,
      ref: 'productFilter',
    })
  }

  updateOptions(ctx) {
    const { ref } = this
    if (ref) {
      ctx.$nextTick(() => {
        const instance = ctx.$refs[ref]
        instance && instance.update && instance.update()
      })
    }

    return this
  }

  resolveSelectedList() {
    return []
  }
}

export class SellerController extends BaseController {
  constructor() {
    super({ key: 'seller', title: '卖家', ref: 'sellerFilter' })
  }
}

export class AddressController extends BaseController {
  constructor() {
    super({ key: 'address', title: '存放地', ref: 'addressFilter' })
  }
}

export class WarehouseController extends BaseController {
  constructor() {
    super({ key: 'warehouse', title: '仓库', ref: 'warehouseFilter' })
  }
}

export class ShopSignController extends BaseController {
  constructor() {
    super({ key: 'shopSign', title: '牌号', ref: 'shopSignFilter' })
    this.initialLikeValue = ''
    this.likeValueKey = 'DefineLikeValueKey'
  }

  initState() {
    const { key, title, initialValue, initialOptions, initialLikeValue } = this
    return {
      [key]: initialValue,
      [`${key}Title`]: title,
      [`${key}Options`]: Object.freeze(initialOptions),
      [`${key}Like`]: initialLikeValue,
    }
  }

  resetValue(ctx) {
    const { key, initialValue, initialLikeValue } = this
    ctx[key] = initialValue
    ctx[`${key}Like`] = initialLikeValue
    return this
  }

  updateOptions(ctx, options) {
    const { key, ref } = this
    ctx[`${key}Options`] = options.length ? [true] : []

    ctx.$nextTick(() => {
      const filterCom = ctx.$refs[ref]
      filterCom && filterCom.loadData(options)
    })
  }

  transformState2RouteQuery(ctx) {
    const { key } = this
    const state = ctx[key]
    const query = state.length ? { [key]: state.join(',') } : {}
    const likeValue = ctx[`${key}Like`]
    likeValue && (query[`${key}Like`] = likeValue)
    return query
  }

  transformRouteQuery2State(ctx) {
    if (preventSyncRouteQuery(this, ctx)) return
    try {
      const { key } = this
      const param = ctx.$route.query[key]
      param && (ctx[key] = param.split(','))

      const likeParam = ctx.$route.query[`${key}Like`]
      likeParam && (ctx[`${key}Like`] = likeParam.trim())
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }

  transformState2Param(ctx) {
    const { key } = this
    const state = ctx[key]
    const param = state.length ? { [key]: state.join(',') } : {}
    const likeValue = ctx[`${key}Like`]
    likeValue && (param[`${key}Like`] = likeValue)
    return param
  }

  resolveSelectedList(ctx) {
    const { key, ref, title, likeValueKey } = this
    const values = ctx[key]
    const filterCom = ctx.$refs[ref]
    const list = filterCom
      ? filterCom.resolveSelectedList(values).map(({ label, value }) => ({
          label: `${title}：${label}`,
          value: `${key}@${value}`,
        }))
      : []

    const likeValue = ctx[`${key}Like`]
    if (likeValue) {
      list.push({
        label: `${title}：${likeValue}`,
        value: `${key}@${likeValueKey}`,
      })
    }

    return list
  }

  removeSelectedItem(ctx, value) {
    const { key, likeValueKey } = this

    if (value === likeValueKey) {
      ctx[`${key}Like`] = ''
      return
    }

    ctx[key] = ctx[key].filter(item => item !== value)
  }
}

export class ThicknessController extends BaseController {
  constructor() {
    super({ key: 'thickness', title: '厚度', initialValue: [undefined, undefined] })
  }

  transformState2RouteQuery(ctx) {
    return transformRangeState2RouteQuery(this, ctx)
  }

  transformRouteQuery2State(ctx) {
    if (preventSyncRouteQuery(this, ctx)) return
    transformRangeRouteQuery2State(this, ctx)
  }

  transformState2Param(ctx) {
    return transformRangeState2Param(this, ctx)
  }

  resolveSelectedList(ctx) {
    const { key, title } = this
    const values = ctx[key]
    return resolveRangeSelectedList(key, title, values)
  }

  removeSelectedItem(ctx) {
    this.resetValue(ctx)
  }
}

export class WidthController extends BaseController {
  constructor() {
    super({ key: 'width', title: '宽度', initialValue: [undefined, undefined] })
  }

  transformState2RouteQuery(ctx) {
    return transformRangeState2RouteQuery(this, ctx)
  }

  transformRouteQuery2State(ctx) {
    if (preventSyncRouteQuery(this, ctx)) return
    transformRangeRouteQuery2State(this, ctx)
  }

  transformState2Param(ctx) {
    return transformRangeState2Param(this, ctx)
  }

  resolveSelectedList(ctx) {
    const { key, title } = this
    const values = ctx[key]
    return resolveRangeSelectedList(key, title, values)
  }

  removeSelectedItem(ctx) {
    this.resetValue(ctx)
  }
}

export class BalanceWeightController extends BaseController {
  constructor() {
    super({ key: 'balanceWeight', title: '件重', initialOptions: [{ label: '1', value: '1' }] })
  }

  resolveSelectedList(ctx) {
    const { key, title } = this
    const values = ctx[key]
    const _values = values.length ? values[0].split('/') : [undefined, undefined]
    return resolveRangeSelectedList(key, title, _values, '吨')
  }

  removeSelectedItem(ctx) {
    this.resetValue(ctx)
  }
}

export class StatusController extends BaseController {
  constructor() {
    super({ key: 'status', title: '状态' })
  }

  transformRouteQuery2State(ctx) {
    if (preventSyncRouteQuery(this, ctx)) return
    try {
      const { key } = this
      const param = ctx.$route.query[key]
      param && (ctx[key] = [param])
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }
}

export class LimitController extends BaseController {
  constructor() {
    super({
      key: 'limit',
      title: '买方资质',
      initialOptions: BUYER_TYPE_MAPS,
    })
  }
}

export class DateController extends BaseController {
  constructor() {
    super({ key: 'date', title: '竞价时间' })
    this.keys = ['startDate', 'endDate']
    this.initialValue = ''
  }

  initState() {
    const { keys, initialValue } = this
    return {
      [keys[0]]: initialValue,
      [keys[1]]: initialValue,
    }
  }

  updateValue(ctx, values) {
    const { keys } = this
    ctx[keys[0]] = values[0]
    ctx[keys[1]] = values[1]
    return this
  }

  resetValue(ctx) {
    const { keys, initialValue } = this
    ctx[keys[0]] = initialValue
    ctx[keys[1]] = initialValue
    return this
  }

  updateOptions() {
    return this
  }

  resetOptions() {
    return this
  }

  isRender() {
    return true
  }

  transformState2RouteQuery(ctx) {
    const { keys } = this
    const startDate = ctx[keys[0]]
    const endDate = ctx[keys[1]]
    const query = {}
    startDate && (query[keys[0]] = startDate)
    endDate && (query[keys[1]] = endDate)
    return query
  }

  transformRouteQuery2State(ctx) {
    if (preventSyncRouteQuery(this, ctx)) return
    try {
      const { keys } = this
      const startDate = ctx.$route.query[keys[0]]
      const endDate = ctx.$route.query[keys[1]]
      startDate && (ctx[keys[0]] = startDate)
      endDate && (ctx[keys[1]] = endDate)
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }

  transformState2Param(ctx) {
    const { keys } = this
    const startDate = ctx[keys[0]]
    const endDate = ctx[keys[1]]
    const params = {}
    startDate && (params[keys[0]] = startDate)
    endDate && (params[keys[1]] = endDate)
    return params
  }

  resolveSelectedList(ctx) {
    const { key, keys, title } = this
    return resolveDateSelectedList(key, title, ctx[keys[0]], ctx[keys[1]])
  }

  removeSelectedItem(ctx) {
    this.resetValue(ctx)
  }
}

export class PriceController extends BaseController {
  constructor() {
    super({ key: 'price', title: '价格', initialValue: [undefined, undefined] })
  }

  resetValue(ctx) {
    const { key, initialValue } = this
    ctx[key] = initialValue

    this.emitSyncEvent(ctx)

    return this
  }

  transformState2RouteQuery(ctx) {
    return transformRangeState2RouteQuery(this, ctx)
  }

  transformRouteQuery2State(ctx) {
    if (preventSyncRouteQuery(this, ctx)) return
    transformRangeRouteQuery2State(this, ctx)

    this.emitSyncEvent(ctx)
  }

  transformState2Param(ctx) {
    return transformRangeState2Param(this, ctx)
  }

  resolveSelectedList(ctx) {
    const { key, title } = this
    const values = ctx[key]
    return resolveRangeSelectedList(key, title, values, '元')
  }

  removeSelectedItem(ctx) {
    this.resetValue(ctx)
  }

  emitSyncEvent(ctx) {
    // 延迟触发保证排序组件已挂载
    setTimeout(() => event.emit('priceSync', ctx[this.key]), 30)
  }
}

export class InputController extends BaseController {
  constructor({ key, title }) {
    super({ key, title, initialValue: '' })
  }

  initState() {
    const { key, title, initialValue } = this
    return {
      [key]: initialValue,
      [`${key}Title`]: title,
    }
  }

  updateOptions() {}

  resetOptions() {}

  isRender() {
    return true
  }

  transformState2RouteQuery(ctx) {
    const { key } = this
    const value = ctx[key]
    return value ? { [key]: value } : {}
  }

  transformRouteQuery2State(ctx) {
    if (preventSyncRouteQuery(this, ctx)) return
    try {
      const { key } = this
      const value = ctx.$route.query[key]
      value && (ctx[key] = value)
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }

  transformState2Param(ctx) {
    const { key } = this
    const value = ctx[key]
    return value ? { [key]: value } : {}
  }

  resolveSelectedList(ctx) {
    const { key, title } = this
    const value = ctx[key]
    const result = []
    value &&
      result.push({
        value: `${key}@${value}`,
        label: `${title}：${value}`,
      })
    return result
  }

  removeSelectedItem(ctx) {
    this.resetValue(ctx)
  }
}

function transformRangeState2RouteQuery(self, ctx) {
  const { key } = self
  const value = resolveRangeValue(ctx[key].join(','))
  return value ? { [key]: value } : {}
}

function transformRangeRouteQuery2State(self, ctx) {
  try {
    const { key } = self
    const param = ctx.$route.query[key]
    if (param) {
      const [prefix, suffix] = param.split(',')
      ctx[key] = [toNumber(prefix), toNumber(suffix)]
    }
    // eslint-disable-next-line no-empty
  } catch (error) {}
}

function transformRangeState2Param(self, ctx) {
  const { key } = self
  const value = resolveRangeValue(ctx[key].join(','))
  return value ? { [key]: value } : {}
}

function resolveRangeValue(value) {
  if (value === ',') return undefined
  if (value.indexOf(',') === 0) return `0${value}`
  if (value.indexOf(',') === value.length - 1) return value.substr(0, value.length - 1)
  return value
}

function toNumber(value) {
  try {
    const _value = Number(value)
    return _value === 0 ? undefined : isNaN(_value) ? undefined : _value
  } catch (error) {
    return undefined
  }
}

function resolveRangeSelectedList(key, title, values, unit = 'mm') {
  const [prefix, suffix] = values

  if (!prefix && !suffix) return []

  let label = ''
  if (prefix && !suffix) {
    label = `大于${prefix}${unit}`
  } else if (!prefix && suffix) {
    label = `小于${suffix}${unit}`
  } else if (prefix && suffix) {
    label = `${prefix}-${suffix}${unit}`
  }

  return [
    {
      value: `${key}@${key}`,
      label: `${title}：${label}`,
    },
  ]
}

function resolveDateSelectedList(key, title, startDate, endDate) {
  if (!startDate && !endDate) return []

  let label = ''
  if (startDate && !endDate) {
    label = `${startDate}之后`
  } else if (!startDate && endDate) {
    label = `${endDate}之前`
  } else if (startDate && endDate) {
    label = `${startDate}~${endDate}`
  }

  return [
    {
      value: `${key}@${key}`,
      label: `${title}：${label}`,
    },
  ]
}

const syncRouteQueryRules = [
  { skip: true, keys: ['keyword'] },
  { channel: 'spec', keys: ['thickness', 'width'] },
  { channel: 'other', keys: ['limit', 'date'] },
]

function preventSyncRouteQuery(controller, ctx) {
  const { key } = controller
  const { renderFields } = ctx

  const rule = syncRouteQueryRules.find(item => ~item.keys.indexOf(key))
  if (rule) {
    if (rule.skip) return false
    return !~renderFields.indexOf(rule.channel)
  }

  return !~renderFields.indexOf(key)
}
