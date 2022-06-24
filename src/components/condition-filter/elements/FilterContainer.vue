<template>
  <div class="filter_container_com">
    <div v-if="showTitle" class="filter_container_com_title" :style="titleStyles">
      {{ title }}
    </div>
    <div class="filter_container_com_content">
      <slot />
    </div>
  </div>
</template>

<script>
/**
 * 筛选项容器组件
 */
export default {
  name: 'FilterContainer',
  props: {
    /**
     * 左侧标题
     */
    title: { type: String, default: '' },
    /**
     * 是否显示标题
     */
    showTitle: { type: Boolean, default: true },
    /**
     * 自定义标题容器宽度
     */
    titleWidth: { type: Number, default: 90 },
  },
  computed: {
    titleStyles() {
      const { titleWidth } = this
      return { width: `${titleWidth}px` }
    },
  },
}
</script>

<style lang="scss" scoped>
.filter_container_com {
  display: flex;
  align-items: center;
  padding: 10px 0;

  &:not(:last-child) {
    border-bottom: 1px dashed #dbdbdb;
  }

  &_title {
    font-size: 14px;
    font-weight: 600;
    color: #333333;
  }

  &_content {
    flex: 1;
  }
}
</style>
