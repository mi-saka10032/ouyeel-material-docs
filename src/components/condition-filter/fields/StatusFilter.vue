<template>
  <filter-checkbox-group
    v-model="innerValue"
    :options="options"
    hidden-checkbox
    style="height: 20px; overflow: hidden"
  />
</template>

<script>
/**
 * 状态筛选器
 */
import FilterCheckboxGroup from '../elements/FilterCheckboxGroup.vue'

export default {
  name: 'StatusFilter',
  components: {
    FilterCheckboxGroup,
  },
  props: {
    /**
     * 绑定值，支持 v-model
     */
    value: { type: Array, default: () => [] },
    /**
     * 竞买类型
     */
    type: { type: String, default: () => '' },
    /**
     * 状态配置选型，需指定与竞买类型的层级关系
     */
    options: { type: Array, default: () => [] },
  },
  computed: {
    innerValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
        this.$emit('on-change')
      },
    },
    statusOptions() {
      const { type, options } = this
      if (!type) return transformKeys(options.default)

      return transformKeys(options[type]) || []
    },
  },
}

function transformKeys(arr) {
  return arr.map(({ name, value }) => ({ label: name, value }))
}
</script>
