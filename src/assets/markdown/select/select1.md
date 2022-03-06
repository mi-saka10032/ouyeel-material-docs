## 基本类型

**示例：**

```vue
<template>
  <oy-select
      placeholder="请选择"
      v-model="value"
      :align="left"
      :hover="false"
      :options="options"
      :show3="false"
      :show5="false"
      type="def"
  ></oy-select>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      value: '',
      options: [
        {"value": "1", "label": " 11111", "disabled": true},
        {"value": "浦发银行", "label": "蚵仔煎"},
        {"value": "2", "label": "蚵仔煎"},
        {"value": "3", "label": "蚵仔煎"},
        {"value": "4", "label": "龙须面"},
        {"value": "5", "label": "北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭"},
        {"value": "6", "label": ["北京烤鸭", "南京烤鸡", "东京烤地瓜", "西京烤肠"]},
        {"value": "7", "label": "北京烤鸭1"},
        {"value": "8", "label": "北京烤鸭2"},
        {"value": "9", "label": "北京烤鸭3"}
      ]
    }
  }
}
</script>
```



由于三行、五行显示都基于同一个组件属性，故不再展示其他组件效果

属性

| 参数    | 说明                   | 类型    | 默认值                                                       |
| :------ | :--------------------- | :------ | :----------------------------------------------------------- |
| options | 下拉框的选项           | Array   | [ {value: "1",label: "蚵仔煎"},{value:'1,2,3', label: ['多行选择','传入数组', '蚵仔煎']}] |
| align   | 下拉框文字对齐方式     | String  | center                                                       |
| show3   | 最多显示三行           | Boolean | false                                                        |
| show5   | 最多显示五行           | Boolean | false                                                        |
| hover   | 是否鼠标移入显示下拉框 | Boolean | false                                                        |
| type    | 类型                   | String  | def 可选值 def/diy/checkedAll                                |



事件

| 事件               | 说明          | 回调   |
| :----------------- | :------------ | :----- |
| handleChangeSelete | 当前选择值    | String |
| handle-check-all   | 全选/取消全选 | Array  |
| handle-checked     | 全选确定      | null   |