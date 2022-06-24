<template>
  <el-button class="filter_button" @click="onClick">
    <slot />
  </el-button>
</template>

<script>
/**
 * 简单的自定义样式按钮组件
 */
import { Button } from 'element-ui'

export default {
  name: 'FilterButton',
  components: {
    [Button.name]: Button,
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.filter_button {
  margin-left: 10px;
  padding: 0 8px;
  height: 24px;
  line-height: 22px;
  font-size: 12px;
}
</style>
