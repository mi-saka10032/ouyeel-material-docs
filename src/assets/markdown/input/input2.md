## 带搜索输入框

**示例：**

```vue
<template>
  <oy-search-input
      width="300"
      v-model="value"
  ></oy-search-input>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      value: ''
    }
  }
}
</script>
```



属性

| 参数  | 说明                   | 类型          | 默认值 |
| :---- | :--------------------- | :------------ | :----- |
| width | 整个input+icon搜索宽度 | Number/String | -      |



事件

| 事件         | 说明         | 回调参数       |
| :----------- | :----------- | :------------- |
| submit-click | 点击icon搜索 | (event: Event) |
