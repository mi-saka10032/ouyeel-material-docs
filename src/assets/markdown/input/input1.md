注意：组件库中的输入框目前实际上仅基础用法、带搜索输入两种用法，单个输入框暂无其他用法（官方文档的复式输入框、表单验证、动态增减输入框效果检查时发现实际是组件拼凑效果）

## 基础用法

**data**

Array<Object>类型，内含label和value属性

在select为true时有效，效果为提供下拉搜索列表，通过handle-select事件传值。



**del**

Boolean类型

默认为false，true时开启右侧X图标，通过handle-click事件触发删除响应。



**label、width、maxHeight、placeholder**

均为语义化属性



**suffix-icon**

为右侧添加的图标，一般为 'icon-check'，用于点击确认使光标失焦，触发blur事件



**示例：**

```vue
<template>
  <oy-input
      v-model="value"
      :data="data"
      :del="false"
      :select="true"
      label="Activity Name"
      width="100"
      maxHeight="200"
      placeholder="请输入内容"
      suffix-icon="icon_check"
      @handle-select="handleSelect"
      @handle-click="handleClick"
  ></oy-input>
</template>

<script>
export default {
  name: "BaseInput",
  data() {
    return {
      data: [
        {label: '11111', value: 'bottle'},
        {label: '22222', value: 'huahua'}
      ],
      value: ''
    }
  },
  methods: {
    handleSelect({label, value}) {
      this.value = value;
    },
    handleClick() {
      this.value = '';
    }
  },
}
</script>
```



属性

| 参数      | 说明                                                         | 类型          | 默认值 |
| :-------- | :----------------------------------------------------------- | :------------ | :----- |
| data      | 在select为true时有效，效果为提供下拉搜索列表，通过handle-select事件传值 | Array<Object> | []     |
| del       | true时开启右侧X图标，通过handle-click事件触发删除响应。      | Boolean       | false  |
| label     | 输入框的标签内容                                             | String        | ''     |
| maxHeight | 输入框最大高度                                               | String        | -      |
| select    | true时开启下拉搜索菜单                                       | Boolean       | false  |
| width     | 宽度                                                         | String        |        |



事件

| 事件          | 说明                 | 回调参数                 |      |
| :------------ | :------------------- | :----------------------- | :--- |
| handle-select | 点击下拉列表数据触发 | data数组中的对应数据对象 |      |
| handle-click  | 点击X符号触发        | '删除' 的字符串          |      |
