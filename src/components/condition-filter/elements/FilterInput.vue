<template>
  <div>
    <el-input v-model="innerValue" class="filter_input_com" :placeholder="placeholder" />
    <filter-button @click="onConfirm">确定</filter-button>
  </div>
</template>

<script>
/**
 * 待确认按钮的输入框搜索项
 */
import { Input } from 'element-ui'

import FilterButton from './FilterButton.vue'

export default {
  name: 'FilterInput',
  components: {
    [Input.name]: Input,
    FilterButton,
  },
  mixins: [],
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      innerValue: '',
    }
  },
  computed: {},
  watch: {
    value: {
      handler(value) {
        this.innerValue = value
      },
      immediate: true,
    },
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    onConfirm() {
      const { value, innerValue } = this
      const nextValue = innerValue.trim()
      if (value !== nextValue) {
        this.$emit('input', nextValue)
        this.$emit('on-change')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.filter_input {
  &_com {
    width: 140px;
    font-size: 12px;

    ::v-deep .el-input__inner {
      height: 24px !important;
      line-height: 24px !important;
    }
  }
}
</style>
