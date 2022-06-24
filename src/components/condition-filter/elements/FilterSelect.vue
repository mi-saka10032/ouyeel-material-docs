<template>
  <el-select
    v-model="innerValue"
    class="filter_select"
    :style="styles"
    popper-class="filter_select_popper"
    :placeholder="placeholder"
  >
    <el-option
      v-for="(item, index) in options"
      :key="index"
      :value="item.value"
      :label="item.label"
    />
  </el-select>
</template>

<script>
/**
 * 简单的自定义样式选择器组件
 */
import { Select, Option } from 'element-ui'

export default {
  name: 'FilterSelect',
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
  },
  props: {
    /**
     * 绑定值，支持 v-model
     */
    value: { type: String, default: '' },
    /**
     * 占位符
     */
    placeholder: { type: String, default: '请选择' },
    /**
     * 选择器宽度
     */
    width: { type: Number, default: 90 },
    /**
     * 下拉选项列表
     * 字段说明：
     * label: 选项字介绍
     * value: 选项选中状态的值
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
.filter_select {
  ::v-deep .el-input {
    &.is-focus .el-input__inner {
      border-color: #dbdbdb;
    }

    &__inner {
      height: 24px !important;
      line-height: 24px !important;
      font-size: 12px !important;

      &:focus {
        border-color: #dbdbdb;
        box-shadow: none !important;
      }
    }

    &__suffix-inner {
      .el-input__icon {
        line-height: 24px !important;
      }
    }
  }
}
</style>

<style lang="scss">
.filter_select_popper {
  margin-top: 0 !important;
  border-radius: 0;

  & > .popper__arrow {
    display: none;
  }

  .el-select-dropdown {
    &__list {
      padding: 0;
    }

    &__item {
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      color: #666;

      &.selected,
      &.hover,
      &:hover {
        color: #fff;
        background-color: #ed1b23;
      }
    }
  }
}
</style>
