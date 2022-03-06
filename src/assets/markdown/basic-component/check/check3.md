### 3.带标签的单选样式

示例：

```vue
<template>
  <oy-icon-radio
      :iconradio-list="iconradioList"
  ></oy-icon-radio>
</template>

<script>
export default {
  name: "RadioCheckBoxTag",
  data() {
    return {
      iconradioList: [
        {"label": "按订单收取", "isChecked": true},
        {"label": "按订单收取2", "isChecked": false}
      ]
    }
  }
}
</script>
```



属性

| 参数           | 说明           | 类型  | 默认值 |
| :------------- | :------------- | :---- | :----- |
| iconradio-list | 单选框多个数据 | Array | -      |