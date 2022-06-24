<template>
  <div class="other_filter">
    <filter-select
      v-model="innerLimit"
      style="margin-right: 12px"
      placeholder="买方资格"
      :options="limitOptions"
    />
    <filter-date-picker
      v-model="innerStartDate"
      style="margin-right: 12px"
      placeholder="竞价时间起"
    />
    <filter-date-picker v-model="innerEndDate" style="margin-right: 2px" placeholder="竞价时间止" />
    <filter-button @click="onConfirm">确定</filter-button>
  </div>
</template>

<script>
import FilterSelect from '../elements/FilterSelect.vue'
import FilterDatePicker from '../elements/FilterDatePicker.vue'
import FilterButton from '../elements/FilterButton.vue'
import { formatDate } from '@/pages/exchange/utils/tools'

export default {
  name: 'OtherFilter',
  components: {
    FilterSelect,
    FilterDatePicker,
    FilterButton,
  },
  props: {
    limit: { type: Array, default: () => [] },
    limitOptions: { type: Array, default: () => [] },
    startDate: { type: String, default: '' },
    endDate: { type: String, default: '' },
  },
  data() {
    return {
      innerLimit: '',
      innerStartDate: undefined,
      innerEndDate: undefined,
    }
  },
  watch: {
    limit: {
      handler(value) {
        this.innerLimit = value[0]
      },
      immediate: true,
    },
    startDate: {
      handler(value) {
        this.innerStartDate = value ? new Date(value) : undefined
      },
      immediate: true,
    },
    endDate: {
      handler(value) {
        this.innerEndDate = value ? new Date(value) : undefined
      },
      immediate: true,
    },
  },
  methods: {
    onConfirm() {
      const { innerLimit, limit, innerStartDate, startDate, innerEndDate, endDate } = this
      const newLimit = [innerLimit]
      const newStartDate = formatDate(innerStartDate)
      const newEndDate = formatDate(innerEndDate)

      this.$emit('update:limit', newLimit)
      this.$emit('update:startDate', newStartDate)
      this.$emit('update:endDate', newEndDate)

      if (innerLimit === limit[0] && newStartDate === startDate && newEndDate === endDate) {
        return
      }

      this.$emit('on-change')
    },
  },
}
</script>

<style lang="scss" scoped>
.other_filter {
  display: flex;
  align-items: center;
}
</style>
