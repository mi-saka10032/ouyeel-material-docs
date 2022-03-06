### 1.tooltip

content

content属性传递有两种方式，一种是props传递，另一种是插槽传递

示例：

```vue
<template>
  <div>
    <div>
      <oy-tooltip
        class="tooltip"
        :maintext="mainText"
        :content="'tooltip悬浮内容'"
      />
    </div>
    <br><br>
    <div>
      <oy-tooltip
        class="tooltip"
        :maintext="mainText"
      >
        <template #content >
          <div>tooltip插槽内容</div>
          <div>test</div>
        </template>
      </oy-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  data() {
    return {
      mainText: `<el-button><a href="https://www.baidu.com"> tooltip文本</a></el-button>`
    }
  }
}
</script>

<style scoped>
.tooltip {
  width: 100px;
  border: 1px solid #333;
  border-radius: 5px;
  text-align: center;
}
</style>
```



属性

| 参数                    | 说明                                       | 类型   | 默认值 | 可选值 |
| :---------------------- | :----------------------------------------- | :----- | :----- | :----- |
| maintext                | 触发 Popover 显示的 HTML 元素              | String | -      |        |
| tooltipText（无效属性） | 悬浮的内容，通过 slot#tooltipText 传入 DOM | -      | -      |        |
| content                 | 显示的内容，通过 slot#content 传入 DOM     | -      | -      |        |