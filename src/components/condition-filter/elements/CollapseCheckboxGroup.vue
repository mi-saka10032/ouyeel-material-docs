<template>
  <div class="collapse_checkbox_group" :style="wrapperStyles">
    <filter-checkbox-group
      ref="checkboxGroup"
      v-model="innerValue"
      class="collapse_checkbox_group_com"
      :style="checkboxStyles"
      multiple
      :options="options"
      :hidden-checkbox="!multiple"
    />
    <div v-show="!multiple" class="operate_wrapper">
      <span class="operate_item" @click="onClickMultiple">
        多选
        <em class="ouyeelfont oyicon-plus" />
      </span>
      <span v-if="renderExpandButton" class="operate_item" @click="onClickExpand">
        {{ expandButtonText }}
        <em class="ouyeelfont" :class="expandButtonArrow" />
      </span>
    </div>
    <div v-show="multiple">
      <div class="collapse_checkbox_group_line"></div>
      <selected-list
        v-if="renderSelectedList"
        :list="selectedList"
        @on-click-item="onClickSelectedListItem"
      />
      <div class="button_wrapper">
        <filter-button @click="onConfirm">确定</filter-button>
        <filter-button @click="onCancel">取消</filter-button>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 复杂模式下的多选框组件
 */
import FilterCheckboxGroup from './FilterCheckboxGroup.vue'
import SelectedList from './SelectedList.vue'
import FilterButton from './FilterButton.vue'

export default {
  name: 'CollapseCheckboxGroup',
  components: {
    FilterCheckboxGroup,
    SelectedList,
    FilterButton,
  },
  props: {
    /**
     * 绑定值
     */
    value: { type: Array, default: () => [] },
    /**
     * 折叠高度
     */
    collapseHeight: { type: Number, default: 24 },
    /**
     * 展开高度
     */
    expandedHeight: { type: Number, default: 110 },
    /**
     * 是否渲染已选列表
     */
    renderSelectedList: { type: Boolean, default: true },
    /**
     * checkbox 元素列表
     */
    options: { type: Array, default: () => [] },
  },
  data() {
    return {
      multiple: false,
      multipleValue: [],
      renderExpandButton: true,
      expanded: false,
    }
  },
  computed: {
    /**
     * 由于多选模式下需要确认操作，因此无法简单的绑定父级 v-model
     * 通过状态隔离（组件内部缓存值）的方式，实现该功能
     */
    innerValue: {
      get() {
        const { multiple, value, multipleValue } = this
        return multiple ? multipleValue : value
      },
      set(value) {
        const { multiple } = this

        if (multiple) {
          this.multipleValue = value
          return
        }

        // 选中当前未选中的选项值，重置绑定值
        const { value: current } = this
        for (const element of value) {
          const item = element
          if (!~current.indexOf(item)) {
            this.$emit('input', [item])
            this.$emit('on-change')
            return
          }
        }

        this.$emit('input', value)
        this.$emit('on-change')
      },
    },
    wrapperStyles() {
      const style = {}
      const { multiple, expanded, collapseHeight: height } = this
      !multiple && !expanded && height && (style.maxHeight = `${height}px`)
      return style
    },
    checkboxStyles() {
      const style = {}
      const { expandedHeight: height } = this
      height && (style.maxHeight = `${height}px`)
      return style
    },
    expandButtonText() {
      return this.expanded ? '收起' : '更多'
    },
    expandButtonArrow() {
      return this.expanded ? 'oyicon-arrow-top' : 'oyicon-arrow-down'
    },
    selectedList() {
      const { multipleValue, options } = this
      return Object.freeze(options.filter(item => ~multipleValue.indexOf(item.value)))
    },
  },
  mounted() {
    this.judgeExpandButtonStatus()
  },
  methods: {
    judgeExpandButtonStatus() {
      const el = this.$refs.checkboxGroup.$el
      this.renderExpandButton = el?.offsetHeight > 30
    },
    onClickMultiple() {
      this.multiple = true
      this.multipleValue = this.value
    },
    onClickExpand() {
      this.expanded = !this.expanded
    },
    onClickSelectedListItem({ item }) {
      this.innerValue = this.innerValue.filter(el => el !== item.value)
    },
    onConfirm() {
      this.$emit('input', this.multipleValue)
      this.$emit('on-change')
      this.multiple = false
    },
    onCancel() {
      this.multiple = false
      this.multipleValue = []
    },
    update() {
      this.multiple = false
      this.multipleValue = []
      this.expanded = false

      this.$nextTick(() => this.judgeExpandButtonStatus())
    },
  },
}
</script>

<style lang="scss" scoped>
.collapse_checkbox_group {
  position: relative;
  padding-right: 16px;
  overflow: hidden;

  &_com {
    padding: 3px 140px 0 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &_line {
    margin: 10px 0;
    width: 100%;
    height: 1px;
    background-color: #eee;
  }
}

.operate {
  &_wrapper {
    position: absolute;
    top: 0;
    right: 16px;
    background-color: #fff;
  }

  &_item {
    display: inline-block;
    padding: 0 10px;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    color: #666;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 3px;
    user-select: none;
    cursor: pointer;

    &:hover {
      color: #d90910;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }

    .ouyeelfont {
      font-size: 12px;
    }

    .oyicon-plus {
      display: inline-block;
      transform: scale(0.8);
    }
  }
}

.button_wrapper {
  padding-top: 8px;
  text-align: center;
}
</style>
