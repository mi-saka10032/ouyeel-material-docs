<template>
  <div class="balance_weight_filter">
    <filter-checkbox-group
      v-model="checkboxModel"
      :options="options"
      hidden-checkbox
      style="height: 20px; overflow: hidden"
    />
    <div class="balance_weight_filter_input">
      <input-number v-model="prefix" />
      <span class="balance_weight_filter_line" />
      <input-number v-model="suffix" />
      <filter-button @click="onConfirm">确定</filter-button>
    </div>
  </div>
</template>

<script>
/**
 * 件重筛选器
 */
import FilterCheckboxGroup from '../elements/FilterCheckboxGroup.vue'
import InputNumber from '@/pages/exchange/components/InputNumber.vue'
import FilterButton from '../elements/FilterButton.vue'

export default {
  name: 'BalanceWeightFilter',
  components: {
    FilterCheckboxGroup,
    InputNumber,
    FilterButton,
  },
  props: {
    /**
     * 绑定值，支持 v-model
     * 标准格式应为 "[prefix]/[suffix]"
     */
    value: { type: Array, default: () => [] },
    /**
     * 预设选项列表
     */
    options: { type: Array, default: () => [] },
  },
  data() {
    return {
      prefix: undefined,
      suffix: undefined,
    }
  },
  computed: {
    checkboxModel: {
      get() {
        const { value, options } = this
        for (let i = 0; i < options.length; i++) {
          if (~value.indexOf(options[i].value)) {
            return value
          }
        }
        return []
      },
      set(value) {
        this.$emit('input', value)
        this.$emit('on-change')
      },
    },
  },
  watch: {
    // 是否需要自动填充输入框、取消预设值选中
    value: {
      handler(value) {
        if (!value.length) {
          this.prefix = undefined
          this.suffix = undefined
          return
        }

        const { options } = this
        for (let i = 0; i < options.length; i++) {
          if (~value.indexOf(options[i].value)) {
            this.prefix = undefined
            this.suffix = undefined
            return
          }
        }

        const [prefix, suffix] = value[0].split('/')
        prefix && (this.prefix = Number(prefix))
        suffix && (this.suffix = Number(suffix))
      },
      immediate: true,
    },
  },
  methods: {
    onConfirm() {
      this.reviseInputValue('prefix')
      this.reviseInputValue('suffix')

      const nextValue = this.resolveValue()
      if (nextValue === this.value[0]) return

      this.$emit('input', nextValue ? [nextValue] : [])
      this.$emit('on-change')
    },
    reviseInputValue(key) {
      if (this[key] === 0) this[key] = undefined
    },
    resolveValue() {
      const { prefix, suffix } = this
      const value = [prefix, suffix].join('/')

      if (value === '/') return undefined
      if (value.indexOf('/') === 0) return `0${value}`
      if (value.indexOf('/') === value.length - 1) return value.substr(0, value.length - 1)
      return value
    },
  },
}
</script>

<style lang="scss" scoped>
.balance_weight_filter {
  display: flex;
  align-items: center;

  &_input {
    display: flex;
    align-items: center;
    margin-left: 60px;
  }

  &_line {
    margin: 0 6px;
    width: 10px;
    height: 1px;
    background-color: #979797;
  }
}
</style>
