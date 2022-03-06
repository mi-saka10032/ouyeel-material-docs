<template>
  <oy-popover
    :oy-popover-parmas="popoverParams"
  >
    <template #reference>
      <el-button>popover</el-button>
    </template>
  </oy-popover>
</template>

<script>
export default {
  name: 'Popover',
  data() {
    return {
      popoverParams: {
        'placement': 'top',
        'width': 200,
        'trigger': 'hover',
        'popoverContent': '弹框内容直接显示1'
      }
    }
  }
}
</script>
