<template>
  <div class="selected_list_wrapper">
    <div class="selected_list">
      <div class="selected_list_prefix">
        <slot name="prefix">已选：</slot>
      </div>
      <div class="selected_content">
        <span
          v-for="(item, index) in list"
          :key="index"
          class="selected_item"
          @click="onClickItem(item, index)"
        >
          {{ item.label }}
          <i class="ouyeelfont oyicon-close" />
        </span>
      </div>
      <div class="selected_list_suffix">
        <slot name="suffix" />
      </div>
    </div>
    <div v-if="$slots.info" class="selected_list_info">
      <slot name="info" />
    </div>
  </div>
</template>

<script>
/**
 * 已选列表组件，仅用作数据展示
 */
export default {
  name: 'SelectedList',
  props: {
    /**
     * 数据列表
     * 默认展示数据项的 label 值
     * 未包含 label 字段时可通过作用域插槽自定义展示内容
     */
    list: { type: Array, default: () => [] },
  },
  methods: {
    onClickItem(item, index) {
      this.$emit('on-click-item', { item, index })
    },
  },
}
</script>

<style lang="scss" scoped>
.selected {
  &_list {
    &_wrapper {
      display: flex;
      font-size: 12px;
      color: #333;
    }

    flex: 1;
    display: flex;
    align-items: flex-start;

    &_prefix,
    &_suffix {
      flex-grow: 0;
      flex-shrink: 0;
      height: 22px;
      line-height: 22px;
    }

    &_suffix {
      margin-left: 8px;
      color: #999;
      cursor: pointer;
    }

    &_info {
      margin-left: 8px;
      height: 22px;
      line-height: 22px;
    }
  }

  &_content {
    padding: 0 6px;
  }

  &_item {
    position: relative;
    display: inline-block;
    margin-bottom: 8px;
    padding: 0 18px 0 8px;
    border: 1px solid #ccc;
    border-radius: 2px;
    transition: all 0.2s;
    user-select: none;
    vertical-align: middle;

    &:not(:last-child) {
      margin-right: 8px;
    }

    .oyicon-close {
      position: absolute;
      right: 4px;
      top: 50%;
      transform: translateY(-50%) scale(0.8);
      color: #333;
      font-size: 12px;
      transition: all 0.2s;
    }

    &:hover {
      color: #d90910;
      border-color: #d90910;
      cursor: pointer;

      .oyicon-close {
        color: #d90910;
      }
    }
  }
}
</style>
