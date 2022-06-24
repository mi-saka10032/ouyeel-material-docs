<template>
  <div class="input_number" :class="{ has_prefix: prefix }">
    <span v-if="prefix" class="input_number_prefix">{{ prefix }}</span>
    <el-input-number
      v-model="innerValue"
      :style="styles"
      :min="min"
      :max="max"
      :precision="precision"
      :placeholder="placeholder"
      :controls="false"
    />
  </div>
</template>

<script>
/**
 * 简单的自定义样式数字输入框组件
 */
import { InputNumber } from 'element-ui'

export default {
  name: 'FilterInputNumber',
  components: {
    [InputNumber.name]: InputNumber,
  },
  props: {
    /**
     * 绑定值，支持 v-model
     * 如需不显示默认填充的零值，绑定 undefined
     */
    value: { type: Number, default: undefined },
    /**
     * 允许输入的最小值
     */
    min: { type: Number, default: 0 },
    /**
     * 允许输入的最大值
     */
    max: { type: Number, default: Infinity },
    /**
     * 精度
     */
    precision: { type: Number, default: 3 },
    /**
     * 是否禁用
     */
    disabled: { type: Boolean, default: false },
    /**
     * 占位符
     */
    placeholder: { type: String, default: '' },
    /**
     * 自定义宽度
     */
    width: { type: Number, default: 80 },
    /**
     * 自定义前缀
     */
    prefix: { type: String, default: '' },
  },
  computed: {
    innerValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    styles() {
      const { width } = this
      return { width: `${width}px` }
    },
  },
}
</script>

<style lang="scss" scoped>
.input_number {
  position: relative;
  display: inline-block;

  &_prefix {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 12px;
    color: #999;
    z-index: 10;
  }

  ::v-deep .el-input {
    &-number {
      line-height: unset;
    }

    &__inner {
      height: 24px !important;
      line-height: 24px !important;
      font-size: 12px !important;
      text-align: left;
    }
  }

  &.has_prefix {
    ::v-deep .el-input {
      &__inner {
        padding-left: 14px !important;
      }
    }
  }
}
</style>
