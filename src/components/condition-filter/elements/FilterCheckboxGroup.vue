<template>
  <div class="checkbox_group_com">
    <el-checkbox-group
      v-if="multiple"
      v-model="innerValue"
      :disabled="disabled"
      :class="hiddenCheckbox ? 'checkbox_group_com_hidden' : ''"
    >
      <el-checkbox
        v-for="(item, index) in options"
        :key="index"
        :label="item.value"
        :disabled="item.disabled"
        @change="onSingleCheckboxChange(index, item, $event)"
      >
        {{ item.label }}
      </el-checkbox>
    </el-checkbox-group>
    <div v-else>
      <el-checkbox
        v-for="(item, index) in options"
        v-show="!item.hidden"
        :key="index"
        :value="!!~innerValue.indexOf(item.value)"
        :disabled="disabled || item.disabled"
        @change="onCheckboxChange(index, item, $event)"
      >
        {{ item.label }}
      </el-checkbox>
    </div>
  </div>
</template>

<script>
/**
 * 支持单选模式的多选框组件
 */
import { Checkbox, CheckboxGroup } from 'element-ui'

export default {
  name: 'FilterCheckboxGroup',
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
  },
  props: {
    /**
     * 绑定值，支持 v-model
     * 默认单选模式下值必须为包含单个元素的数组
     */
    value: { type: Array, default: () => [] },
    /**
     * 是否禁用
     * 单个选项禁用可通过数据对象配置
     */
    disabled: { type: Boolean, default: false },
    /**
     * 是否允许多选
     */
    multiple: { type: Boolean, default: false },
    /**
     * 是否隐藏复选框
     */
    hiddenCheckbox: { type: Boolean, default: false },
    /**
     * 复选框单个元素数据对象数组
     * 字段说明：
     * label: checkbox 文字介绍
     * value: checkbox 选中状态的值
     * disabled: 是否禁用
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
  },
  methods: {
    onCheckboxChange(_, item, checked) {
      this.$emit('on-checkbox-change', item, checked)
      this.innerValue = checked ? [item.value] : []
    },
    onSingleCheckboxChange(_, item, checked) {
      if (this.hiddenCheckbox) {
        if (checked) {
          this.innerValue = [item.value];
        } else {
          if (this.value.length === 1) {
            this.innerValue = [];
          } else {
            this.innerValue = this.innerValue.filter(inner => inner !== item.value)
          }
        }
        this.$emit('update-singleCheckboxOptions', { option: item, checked });
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.checkbox_group_com {
  ::v-deep .el-checkbox {
    margin-bottom: 2px;

    &__inner {
      transition: all 0.2s;

      &:hover {
        border-color: #d90910;
      }
    }

    &__input.is-focus .el-checkbox__inner {
      border-color: #d90910;
    }

    &__input.is-checked .el-checkbox__inner {
      background-color: #d90910;
      border-color: #d90910;
    }

    &__label {
      margin: 0;
      color: #333;
      transition: all 0.2s;

      &:hover {
        color: #d90910;
      }
    }

    &__input.is-focus .el-checkbox__label {
      margin: 0;
    }

    &__input.is-checked .el-checkbox__label {
      margin: 0;
    }
  }

  &_hidden {
    ::v-deep .el-checkbox {
      &__input {
        display: none;
      }

      &__label {
        padding: 0;
      }

      &__input.is-checked + .el-checkbox__label {
        color: #d90910;
      }
    }
  }
}
</style>
