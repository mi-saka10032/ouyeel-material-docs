示例：

```vue
<template>
  <div>
    <oy-button @click="visibility = true">测试弹窗</oy-button>
    <oy-dialog
        ref="dialog"
        :visible="visibility"
        title="测试弹框"
        width="400px"
        @confirm="visibility = false"
        @cancel="visibility = false"
        @close="visibility = false"
    >
      <div>Hello</div>
    </oy-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  data() {
    return {
      visibility: false
    }
  }
}
</script>
```
