**type**

步骤条类型，Number类型

1代表横条形态，2代表竖条形态



**active**

步骤条当前状态，Number类型

可选值-1 / 0 1 2 3 4 ……



**steps**

步骤条数据，Array<Object>类型

常用属性 badgeNum name type，分别表示标记值、名称、完成类型



需要注意的是，可选值为-1时，active状态默认不生效，以步骤条数据中的type状态为准，仅横条时有效。

竖条形态下，步骤条数据中的type不生效，以active的值为准。



示例：

```vue
<template>
  <oy-steps
      :type="type"
      :active="active"
      :steps="steps"
  />
</template>

<script>
export default {
  name: "Steps",
  data() {
    return {
      type: 1,
      active: -1,
      steps: [
        {"type": 1, "name": "自提单", "badgeNum": 12},
        {"type": 1, "name": "全部资源", "badgeNum": 13},
        {"type": 1, "name": "管材类", "badgeNum": 14},
        {"type": 2, "name": "线材类", "badgeNum": 15},
        {"type": 0, "name": "加工提单", "badgeNum": 16}
      ]
    }
  }
}
</script>

<style scoped>

</style>
```
