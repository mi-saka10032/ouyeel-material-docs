<template>
  <div
    v-loading="loading"
    element-loading-text="加载中..."
    element-loading-spinner="mt-master-loading"
    element-loading-background="#fff"
    class="condition_filter"
    :class="{ condition_filter_loading: loading }"
  >
    <filter-container :title-width="0">
      <selected-list :list="selectedList" @on-click-item="onClickSelectedItem">
        <template v-slot:prefix>筛选条件：</template>
        <template v-slot:suffix>
          <span v-show="selectedList.length" @click="onClickReset">重置</span>
        </template>
        <template v-slot:info>
          <span v-show="totalCount">
            共<span style="color: #d90910">{{ totalCount }}</span
            >条
          </span>
          <slot name="export" />
        </template>
      </selected-list>
    </filter-container>
    <filter-container v-if="isRenderField('biddingType')" :title="biddingTypeTitle">
      <filter-checkbox-group
        v-model="biddingType"
        :options="biddingTypeOptions"
        @on-change="onConditionChange"
      />
    </filter-container>
    <filter-container v-if="isRenderField('category')" :title="categoryTitle">
      <collapse-checkbox-group
        ref="categoryFilter"
        v-model="category"
        :options="categoryOptions"
        @on-change="onConditionChange"
      />
    </filter-container>
    <filter-container v-if="isRenderField('product')" :title="productTitle">
      <collapse-checkbox-group
        ref="productFilter"
        v-model="product"
        :options="productOptions"
        @on-change="onConditionChange"
      />
    </filter-container>
    <filter-container v-if="isRenderField('seller')" :title="sellerTitle">
      <collapse-checkbox-group
        ref="sellerFilter"
        v-model="seller"
        :options="sellerOptions"
        @on-change="onConditionChange"
      />
    </filter-container>
    <filter-container v-if="isRenderField('address')" :title="addressTitle">
      <filter-input
        v-model="address"
        placeholder="请输入存放地名称"
        @on-change="onConditionChange"
      />
    </filter-container>
    <filter-container v-if="isRenderField('warehouse')" :title="warehouseTitle">
      <filter-input
        v-model="warehouse"
        placeholder="请输入仓库名称"
        @on-change="onConditionChange"
      />
    </filter-container>
    <filter-container v-if="isRenderField('shopSignLike')" :title="shopSignLikeTitle">
      <filter-input
        v-model="shopSignLike"
        placeholder="请输入牌号"
        @on-change="onConditionChange"
      />
    </filter-container>
    <filter-container v-if="isRenderField('spec')" title="规格">
      <spec-filter :thickness.sync="thickness" :width.sync="width" @on-change="onConditionChange" />
    </filter-container>
    <filter-container v-if="isRenderField('balanceWeight')" title="件重">
      <balance-weight-filter
        v-model="balanceWeight"
        :options="balanceWeightOptions"
        @on-change="onConditionChange"
      />
    </filter-container>
    <filter-container v-if="isRenderField('status')" :title="statusTitle">
      <status-filter
        v-model="status"
        :type="biddingType[0]"
        :options="statusOptions"
        @on-change="onConditionChange"
      />
    </filter-container>
    <filter-container v-if="isRenderField('other')" title="其他">
      <other-filter
        :limit.sync="limit"
        :start-date.sync="startDate"
        :end-date.sync="endDate"
        :limit-options="limitOptions"
        @on-change="onConditionChange"
      />
    </filter-container>
  </div>
</template>

<script>
import FilterContainer from './elements/FilterContainer.vue'
import SelectedList from './elements/SelectedList.vue'
import FilterCheckboxGroup from './elements/FilterCheckboxGroup.vue'
import CollapseCheckboxGroup from './elements/CollapseCheckboxGroup.vue'
import SpecFilter from './fields/SpecFilter.vue'
import BalanceWeightFilter from './fields/BalanceWeightFilter.vue'
import StatusFilter from './fields/StatusFilter.vue'
import OtherFilter from './fields/OtherFilter.vue'
import FilterInput from './elements/FilterInput.vue'
import { getSearchConditions } from '@/pages/exchange/api/search'
import event from '@/pages/exchange/utils/event'
import {
  KeywordController,
  BiddingTypeController,
  CategoryController,
  SellerController,
  ThicknessController,
  WidthController,
  BalanceWeightController,
  StatusController,
  LimitController,
  DateController,
  PriceController,
  ProductController,
  InputController,
} from './controller'

const controllers = {
  keyword: new KeywordController(),
  biddingType: new BiddingTypeController(),
  category: new CategoryController(),
  seller: new SellerController(),
  address: new InputController({ key: 'address', title: '存放地' }),
  warehouse: new InputController({ key: 'warehouse', title: '仓库' }),
  shopSignLike: new InputController({ key: 'shopSignLike', title: '牌号' }),
  thickness: new ThicknessController(),
  width: new WidthController(),
  balanceWeight: new BalanceWeightController(),
  status: new StatusController(),
  limit: new LimitController(),
  date: new DateController(),
  price: new PriceController(),
  product: new ProductController(),
}

const loopControllers = handler => {
  const keys = Object.keys(controllers)
  for (let i = 0; i < keys.length; i++) {
    handler(controllers[keys[i]])
  }
}

const initStates = () => {
  const states = {}
  loopControllers(controller => Object.assign(states, controller.initState()))
  return states
}

const resetValues = ctx => {
  loopControllers(controller => controller.resetValue(ctx))
}

const transformStates2RouteQuery = ctx => {
  const query = {}
  loopControllers(controller => Object.assign(query, controller.transformState2RouteQuery(ctx)))
  return query
}

const transformRouteQuery2States = ctx => {
  loopControllers(controller => controller.transformRouteQuery2State(ctx))
}

const transformStates2Params = ctx => {
  const params = {}
  loopControllers(controller => Object.assign(params, controller.transformState2Param(ctx)))
  return params
}

const resolveSelectedList = ctx => {
  const list = []
  loopControllers(controller => list.push(...controller.resolveSelectedList(ctx)))
  return list
}

export default {
  name: 'ConditionFilter',
  components: {
    FilterContainer,
    SelectedList,
    FilterCheckboxGroup,
    CollapseCheckboxGroup,
    SpecFilter,
    BalanceWeightFilter,
    StatusFilter,
    OtherFilter,
    FilterInput,
  },
  props: {
    // 品名: product
    renderFields: {
      type: Array,
      default: () => [
        // 竞买方式
        'biddingType',
        // 品类
        'category',
        // 卖家
        'seller',
        // 存放地
        'address',
        // 仓库
        'warehouse',
        // 牌号
        'shopSignLike',
        // 规格
        'spec',
        // 件重
        'balanceWeight',
        // 状态
        'status',
        // 其他
        'other',
        // 价格
        'price',
      ],
    },
    totalCount: {
      type: String,
      default: '',
    },
    beforeFetch: { type: Function, default: () => {} },
  },
  data() {
    return {
      ...initStates(),
      selectedList: [],
      loading: false,
    }
  },
  watch: {
    // 当前页点击顶部导航栏链接
    '$route.name': 'onSearch',
  },
  mounted() {
    transformRouteQuery2States(this)
    this.getFilterParams()
    // 当前页点击品类树、顶部搜索
    event.on('search', this.onSearch)
    event.on('priceChange', this.onPriceChange)
  },
  beforeDestroy() {
    event.off('search', this.onSearch)
    event.off('priceChange', this.onPriceChange)
  },
  methods: {
    isRenderField(key) {
      const included = ~this.renderFields.indexOf(key)
      const controller = controllers[key]
      return controller ? included && controller.isRender(this) : included
    },
    onSearch() {
      resetValues(this)
      transformRouteQuery2States(this)
      this.getFilterParams()
    },
    onPriceChange(value) {
      controllers.price.updateValue(this, value)
      this.onConditionChange()
    },
    onConditionChange() {
      this.getFilterParams()

      this.$router.replace({
        name: this.$route.name,
        query: transformStates2RouteQuery(this),
      })
    },
    async getFilterParams() {
      try {
        // this.loading = true

        const params = transformStates2Params(this)
        this.beforeFetch(params)
        const res = await getSearchConditions(params)

        this.mergeConditions(res)
        this.createSelectedList()

        this.$emit('on-change', transformStates2Params(this))
        // eslint-disable-next-line no-empty
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
    mergeConditions(conditions) {
      const {
        keywordAnalysis,
        categoryOptions,
        sellerOptions,
        addressOptions,
        warehouseOptions,
        shopSignOptions,
        balanceWeightOptions,
        statusOptions,
      } = conditions

      console.log('111111111')
      console.log(categoryOptions)
      controllers.keyword.updateOptions(this, keywordAnalysis)
      controllers.category.updateOptions(this, categoryOptions)
      controllers.seller.updateOptions(this, sellerOptions)
      controllers.address.updateOptions(this, addressOptions)
      controllers.warehouse.updateOptions(this, warehouseOptions)
      controllers.shopSignLike.updateOptions(this, shopSignOptions)
      controllers.balanceWeight.updateOptions(this, balanceWeightOptions)
      controllers.status.updateOptions(this, statusOptions)
      controllers.product.updateOptions(this)
    },
    createSelectedList() {
      this.$nextTick(() => {
        this.selectedList = Object.freeze(resolveSelectedList(this))
      })
    },
    onClickSelectedItem({ item }) {
      const [key, value] = item.value.split('@')
      const controller = controllers[key]
      controller && controller.removeSelectedItem(this, value)
      this.onConditionChange()
    },
    onClickReset() {
      resetValues(this)
      this.onConditionChange()
    },
    getParams() {
      return transformStates2Params(this)
    },
  },
}
</script>

<style lang="scss" scoped>
.condition_filter {
  box-sizing: border-box;
  position: relative;
  padding: 20px;

  &_loading {
    min-height: 200px;
  }
}
</style>
